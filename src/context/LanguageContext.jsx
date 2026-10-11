import { createContext, useContext, useState, useEffect } from 'react'
import translations, { LANGUAGES } from '../i18n/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('vs_lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('vs_lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (path) => {
    const keys = path.split('.')
    let val = translations[lang]
    for (const key of keys) {
      val = val?.[key]
    }
    // Fallback to English
    if (val === undefined) {
      let enVal = translations.en
      for (const key of keys) {
        enVal = enVal?.[key]
      }
      return enVal || path
    }
    return val
  }

  // Get a localised string from an object like { en: '...', hi: '...', mr: '...' }
  const tObj = (obj) => {
    if (!obj) return ''
    return obj[lang] || obj.en || ''
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tObj, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
