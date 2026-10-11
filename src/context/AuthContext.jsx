import { createContext, useContext, useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured, getSession, getProfile } from '../lib/supabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In demo mode (no Supabase), use a mock user
    if (!isSupabaseConfigured) {
      const mockUser = JSON.parse(localStorage.getItem('vs_demo_user') || 'null')
      setUser(mockUser)
      setProfile(JSON.parse(localStorage.getItem('vs_demo_profile') || 'null'))
      setLoading(false)
      return
    }

    // Get initial session
    getSession().then(s => {
      setSession(s)
      setUser(s?.user || null)
      if (s?.user) {
        loadProfile(s.user.id)
      } else {
        setLoading(false)
      }
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s)
      setUser(s?.user || null)
      if (s?.user) {
        loadProfile(s.user.id)
      } else {
        setProfile(null)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  async function loadProfile(userId) {
    try {
      const data = await getProfile(userId)
      setProfile(data)
    } catch (err) {
      console.error('Error loading profile:', err)
    } finally {
      setLoading(false)
    }
  }

  // Demo mode: sign in with a mock user
  function demoSignIn(name = 'Demo User') {
    const mockUser = {
      id: 'demo-' + Date.now(),
      email: 'demo@vyapaarsathi.in',
      user_metadata: { name },
    }
    localStorage.setItem('vs_demo_user', JSON.stringify(mockUser))
    setUser(mockUser)
    setLoading(false)
  }

  function demoSignOut() {
    localStorage.removeItem('vs_demo_user')
    localStorage.removeItem('vs_demo_profile')
    setUser(null)
    setProfile(null)
  }

  function updateLocalProfile(newProfile) {
    setProfile(newProfile)
    if (!isSupabaseConfigured) {
      localStorage.setItem('vs_demo_profile', JSON.stringify(newProfile))
    }
  }

  const value = {
    user,
    session,
    profile,
    loading,
    isAuthenticated: !!user,
    isDemoMode: !isSupabaseConfigured,
    demoSignIn,
    demoSignOut,
    updateLocalProfile,
    refreshProfile: () => user && loadProfile(user.id),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
