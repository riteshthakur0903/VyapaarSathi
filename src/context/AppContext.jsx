import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [compareList, setCompareList] = useState([])
  const [calculatorData, setCalculatorData] = useState(null)
  const [advisorAnswers, setAdvisorAnswers] = useState({})
  const [advisorSummary, setAdvisorSummary] = useState(null)

  function addToCompare(businessId) {
    setCompareList(prev => {
      if (prev.includes(businessId)) return prev
      if (prev.length >= 2) return [prev[1], businessId]
      return [...prev, businessId]
    })
  }

  function removeFromCompare(businessId) {
    setCompareList(prev => prev.filter(id => id !== businessId))
  }

  function clearCompare() {
    setCompareList([])
  }

  return (
    <AppContext.Provider value={{
      selectedBusiness,
      setSelectedBusiness,
      compareList,
      addToCompare,
      removeFromCompare,
      clearCompare,
      calculatorData,
      setCalculatorData,
      advisorAnswers,
      setAdvisorAnswers,
      advisorSummary,
      setAdvisorSummary,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
