/**
 * Financial calculation utilities for VyapaarSathi.
 * All calculations are deterministic with clearly stated assumptions.
 */

/**
 * Calculate EMI using the standard reducing balance formula.
 *
 * Formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1)
 * Where:
 *   P = Principal (loan amount)
 *   r = Monthly interest rate (annual rate / 12 / 100)
 *   n = Tenure in months
 *
 * @param {number} principal - Loan amount in ₹
 * @param {number} annualRate - Annual interest rate in %
 * @param {number} tenureMonths - Loan tenure in months
 * @returns {{ emi: number, totalRepayment: number, totalInterest: number }}
 */
export function calculateEMI(principal, annualRate, tenureMonths) {
  if (!principal || principal <= 0) return { emi: 0, totalRepayment: 0, totalInterest: 0 }
  if (!annualRate || annualRate <= 0) {
    // Zero interest: equal monthly payments
    const emi = principal / tenureMonths
    return { emi, totalRepayment: principal, totalInterest: 0 }
  }

  const r = annualRate / 12 / 100
  const n = tenureMonths
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  const totalRepayment = emi * n
  const totalInterest = totalRepayment - principal

  return {
    emi: Math.round(emi),
    totalRepayment: Math.round(totalRepayment),
    totalInterest: Math.round(totalInterest),
  }
}

/**
 * Calculate the funding gap between total project cost and available capital.
 */
export function calculateFundingGap(totalCost, availableCapital) {
  return Math.max(0, totalCost - availableCapital)
}

/**
 * Assess the financial feasibility of a loan scenario.
 *
 * Rules (simple heuristic — not financial advice):
 *  - Good: EMI < 40% of estimated monthly revenue
 *  - Warning: EMI is 40–60% of estimated monthly revenue
 *  - Risk: EMI > 60% of estimated monthly revenue
 *
 * @returns {{ status: 'good' | 'warning' | 'risk', message: string, emiRatio: number }}
 */
export function assessFeasibility(emi, estimatedMonthlyRevenue, lang = 'en') {
  if (!emi || !estimatedMonthlyRevenue) {
    return { status: 'unknown', message: '', emiRatio: 0 }
  }

  const emiRatio = (emi / estimatedMonthlyRevenue) * 100

  const messages = {
    good: {
      en: `EMI is ${emiRatio.toFixed(0)}% of estimated monthly revenue — looks manageable.`,
      hi: `EMI अनुमानित मासिक राजस्व का ${emiRatio.toFixed(0)}% है — प्रबंधनीय लगता है।`,
      mr: `EMI अंदाजे मासिक महसुलाच्या ${emiRatio.toFixed(0)}% आहे — व्यवस्थापनीय दिसते.`,
    },
    warning: {
      en: `EMI is ${emiRatio.toFixed(0)}% of estimated monthly revenue — tight but possible with careful management.`,
      hi: `EMI अनुमानित मासिक राजस्व का ${emiRatio.toFixed(0)}% है — कठिन लेकिन सावधान प्रबंधन से संभव।`,
      mr: `EMI अंदाजे मासिक महसुलाच्या ${emiRatio.toFixed(0)}% आहे — काळजीपूर्वक व्यवस्थापनासह शक्य.`,
    },
    risk: {
      en: `EMI is ${emiRatio.toFixed(0)}% of estimated monthly revenue — high risk. Consider reducing the loan amount or tenure.`,
      hi: `EMI अनुमानित मासिक राजस्व का ${emiRatio.toFixed(0)}% है — उच्च जोखिम। ऋण राशि या अवधि कम करने पर विचार करें।`,
      mr: `EMI अंदाजे मासिक महसुलाच्या ${emiRatio.toFixed(0)}% आहे — उच्च जोखीम. कर्जाची रक्कम किंवा कालावधी कमी करण्याचा विचार करा.`,
    },
  }

  if (emiRatio < 40) {
    return { status: 'good', message: messages.good[lang] || messages.good.en, emiRatio }
  } else if (emiRatio < 60) {
    return { status: 'warning', message: messages.warning[lang] || messages.warning.en, emiRatio }
  } else {
    return { status: 'risk', message: messages.risk[lang] || messages.risk.en, emiRatio }
  }
}

/**
 * Default startup cost breakdown templates per business type.
 */
export const DEFAULT_COST_BREAKDOWNS = {
  'dairy-milk-collection': {
    equipment: 20000,
    setup: 5000,
    inventory: 0,
    rent: 0,
    licenses: 2000,
    workingCapital: 15000,
    other: 5000,
  },
  'agri-input-shop': {
    equipment: 10000,
    setup: 15000,
    inventory: 80000,
    rent: 10000,
    licenses: 8000,
    workingCapital: 20000,
    other: 5000,
  },
  'mobile-repair-shop': {
    equipment: 18000,
    setup: 5000,
    inventory: 8000,
    rent: 5000,
    licenses: 1000,
    workingCapital: 5000,
    other: 2000,
  },
  'tiffin-catering': {
    equipment: 15000,
    setup: 5000,
    inventory: 8000,
    rent: 3000,
    licenses: 3000,
    workingCapital: 8000,
    other: 3000,
  },
  'general-store': {
    equipment: 15000,
    setup: 20000,
    inventory: 120000,
    rent: 12000,
    licenses: 3000,
    workingCapital: 25000,
    other: 5000,
  },
  'tailoring-boutique': {
    equipment: 18000,
    setup: 5000,
    inventory: 5000,
    rent: 3000,
    licenses: 500,
    workingCapital: 5000,
    other: 2000,
  },
  'poultry-farming': {
    equipment: 15000,
    setup: 25000,
    inventory: 20000,
    rent: 0,
    licenses: 2000,
    workingCapital: 10000,
    other: 5000,
  },
  'beauty-parlour': {
    equipment: 20000,
    setup: 10000,
    inventory: 10000,
    rent: 5000,
    licenses: 2000,
    workingCapital: 8000,
    other: 3000,
  },
  default: {
    equipment: 20000,
    setup: 10000,
    inventory: 15000,
    rent: 5000,
    licenses: 2000,
    workingCapital: 10000,
    other: 3000,
  },
}

export function getTotalCost(breakdown) {
  return Object.values(breakdown).reduce((sum, val) => sum + (Number(val) || 0), 0)
}

/**
 * Format currency for Indian number system.
 */
export function formatINR(amount) {
  if (amount === null || amount === undefined) return '—'
  const num = Math.round(Number(amount))
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(1)}Cr`
  if (num >= 100000) return `₹${(num / 100000).toFixed(1)}L`
  if (num >= 1000) return `₹${(num / 1000).toFixed(1)}K`
  return `₹${num.toLocaleString('en-IN')}`
}

export function formatINRFull(amount) {
  const num = Math.round(Number(amount) || 0)
  return `₹${num.toLocaleString('en-IN')}`
}

/**
 * Generate an amortization schedule (first 6 months shown in UI).
 */
export function generateAmortization(principal, annualRate, tenureMonths) {
  const r = annualRate / 12 / 100
  const { emi } = calculateEMI(principal, annualRate, tenureMonths)
  const schedule = []
  let balance = principal

  for (let month = 1; month <= Math.min(tenureMonths, 12); month++) {
    const interest = Math.round(balance * r)
    const principalPayment = Math.round(emi - interest)
    balance = Math.max(0, balance - principalPayment)
    schedule.push({ month, emi, interest, principal: principalPayment, balance })
  }
  return schedule
}

/**
 * Calculate break-even point in months.
 * Simple: Total Cost / Monthly Net Profit
 */
export function calculateBreakEven(totalCost, monthlyProfit) {
  if (!monthlyProfit || monthlyProfit <= 0) return null
  return Math.ceil(totalCost / monthlyProfit)
}

/**
 * Suggested pricing strategy for a business type.
 */
export function getSuggestedPricing(businessId, lang = 'en') {
  // This is retrieved from the business idea data
  return null
}
