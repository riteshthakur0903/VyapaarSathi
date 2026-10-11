import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'VyapaarSathi: Supabase environment variables not found. ' +
    'Copy .env.example to .env and fill in your Supabase credentials. ' +
    'The app will run in demo mode with local state only.'
  )
}

// Create client — if vars are missing, create a dummy-safe client
// so the app can still demo without a real Supabase project
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

// ─── Auth helpers ───────────────────────────────────────────────────────────

export async function signUp(email, password, name) {
  if (!supabase) throw new Error('Supabase not configured')
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  })
  if (error) throw error
  return data
}

export async function signIn(email, password) {
  if (!supabase) throw new Error('Supabase not configured')
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export async function signOut() {
  if (!supabase) return
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getSession() {
  if (!supabase) return null
  const { data } = await supabase.auth.getSession()
  return data?.session
}

// ─── Profile helpers ─────────────────────────────────────────────────────────

export async function upsertProfile(userId, profile) {
  if (!supabase) return { data: profile, error: null }
  const { data, error } = await supabase
    .from('user_profiles')
    .upsert({ user_id: userId, ...profile, updated_at: new Date().toISOString() })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function getProfile(userId) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', userId)
    .single()
  if (error && error.code !== 'PGRST116') throw error
  return data
}

// ─── Business analyses helpers ───────────────────────────────────────────────

export async function saveAnalysis(userId, analysis) {
  if (!supabase) return { id: Date.now().toString(), ...analysis }
  const { data, error } = await supabase
    .from('business_analyses')
    .insert({ user_id: userId, ...analysis })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function getAnalyses(userId) {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('business_analyses')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function deleteAnalysis(id) {
  if (!supabase) return
  const { error } = await supabase.from('business_analyses').delete().eq('id', id)
  if (error) throw error
}

// ─── Comparisons helpers ─────────────────────────────────────────────────────

export async function saveComparison(userId, comparison) {
  if (!supabase) return { id: Date.now().toString(), ...comparison }
  const { data, error } = await supabase
    .from('business_comparisons')
    .insert({ user_id: userId, ...comparison })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function getComparisons(userId) {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('business_comparisons')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

// ─── Financial calculations helpers ──────────────────────────────────────────

export async function saveCalculation(userId, calculation) {
  if (!supabase) return { id: Date.now().toString(), ...calculation }
  const { data, error } = await supabase
    .from('financial_calculations')
    .insert({ user_id: userId, ...calculation })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function getCalculations(userId) {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('financial_calculations')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(20)
  if (error) throw error
  return data || []
}

// ─── Reports helpers ──────────────────────────────────────────────────────────

export async function saveReport(userId, report) {
  if (!supabase) return { id: Date.now().toString(), ...report }
  const { data, error } = await supabase
    .from('generated_reports')
    .insert({ user_id: userId, ...report })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function getReports(userId) {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('generated_reports')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function deleteReport(id) {
  if (!supabase) return
  const { error } = await supabase.from('generated_reports').delete().eq('id', id)
  if (error) throw error
}
