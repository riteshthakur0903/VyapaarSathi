import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'

export function Logo({ size = 'md' }) {
  const sizes = { sm: 'text-lg', md: 'text-xl', lg: 'text-3xl' }
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
        <span className="text-white text-sm font-bold">VS</span>
      </div>
      <span className={`font-bold text-gray-900 group-hover:text-teal-700 transition-colors ${sizes[size]}`}>
        VyapaarSathi
      </span>
    </Link>
  )
}

const NAV_ITEMS = [
  { to: '/dashboard', icon: '🏠', key: 'dashboard' },
  { to: '/advisor', icon: '🤖', key: 'advisor' },
  { to: '/recommendations', icon: '💡', key: 'recommendations' },
  { to: '/calculator', icon: '🧮', key: 'calculator' },
  { to: '/loan-schemes', icon: '🏦', key: 'loanSchemes' },
  { to: '/report', icon: '📋', key: 'report' },
]

export function LanguageSwitcher() {
  const { lang, setLang, languages } = useLanguage()
  return (
    <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
      {languages.map(l => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            lang === l.code
              ? 'bg-white text-teal-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          aria-label={`Switch to ${l.name}`}
        >
          {l.nativeName}
        </button>
      ))}
    </div>
  )
}

export function Navbar() {
  const { t } = useLanguage()
  const { user, profile, isDemoMode } = useAuth()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (to) => location.pathname === to || location.pathname.startsWith(to + '/')

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 no-print">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {user && NAV_ITEMS.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                isActive(item.to)
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          {user && (
            <Link to="/profile" className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center">
                <span className="text-teal-700 font-semibold text-sm">
                  {(profile?.name || user?.user_metadata?.name || 'U')[0]?.toUpperCase()}
                </span>
              </div>
            </Link>
          )}
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-gray-100"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {user && NAV_ITEMS.map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive(item.to)
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{item.icon}</span>
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <Link
              to="/profile"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span>👤</span>
              {t('nav.profile')}
            </Link>
          </div>
        </div>
      )}

      {/* Demo mode indicator */}
      {isDemoMode && user && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-1.5 text-center">
          <p className="text-xs text-amber-700">
            🔧 Demo Mode — Connect Supabase for full functionality
          </p>
        </div>
      )}
    </nav>
  )
}

export function BottomNav() {
  const { t } = useLanguage()
  const { user } = useAuth()
  const location = useLocation()

  if (!user) return null

  const isActive = (to) => location.pathname === to

  const items = [
    { to: '/dashboard', icon: '🏠', key: 'dashboard' },
    { to: '/advisor', icon: '🤖', key: 'advisor' },
    { to: '/recommendations', icon: '💡', key: 'recommendations' },
    { to: '/calculator', icon: '🧮', key: 'calculator' },
    { to: '/profile', icon: '👤', key: 'profile' },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 no-print">
      <div className="flex">
        {items.map(item => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2 px-1 transition-colors ${
              isActive(item.to) ? 'text-teal-600' : 'text-gray-400'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-[10px] font-medium truncate w-full text-center">
              {t(`nav.${item.key}`)}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
