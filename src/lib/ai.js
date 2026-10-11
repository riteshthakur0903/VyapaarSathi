/**
 * AI Service Abstraction Layer
 *
 * In this prototype, all responses are generated from deterministic mock data.
 * To connect a real AI service:
 *   1. Set up a backend proxy endpoint (e.g. Supabase Edge Function or Node.js API)
 *   2. Replace the mock functions below with fetch() calls to your proxy
 *   3. Never expose API keys in the browser — all AI calls MUST go through your proxy
 *
 * The function signatures and return types will remain stable.
 */

// ─── Mock advisor conversation ────────────────────────────────────────────────

const ADVISOR_QUESTIONS = [
  {
    id: 'area_type',
    question: {
      en: "Great! To start, can you tell me a bit about your area? Is it mostly agricultural, near a town, or industrial?",
      hi: "बढ़िया! शुरुआत के लिए, क्या आप अपने क्षेत्र के बारे में बता सकते हैं? क्या यह मुख्यतः कृषि, शहर के पास, या औद्योगिक क्षेत्र है?",
      mr: "छान! सुरुवातीसाठी, तुमच्या परिसराबद्दल सांगाल का? हे मुख्यतः शेतीप्रधान, शहराजवळ, किंवा औद्योगिक क्षेत्र आहे का?"
    }
  },
  {
    id: 'daily_commute',
    question: {
      en: "Do people in your area travel regularly to a nearby town or city for shopping or work? How far is the nearest town?",
      hi: "क्या आपके क्षेत्र के लोग खरीदारी या काम के लिए नजदीकी शहर जाते हैं? निकटतम शहर कितना दूर है?",
      mr: "तुमच्या परिसरातील लोक खरेदी किंवा कामासाठी जवळच्या शहरात जातात का? जवळचे शहर किती दूर आहे?"
    }
  },
  {
    id: 'existing_businesses',
    question: {
      en: "What kinds of businesses or shops already exist in your village or nearby? What do people buy or need most?",
      hi: "आपके गाँव या आस-पास पहले से कौन से व्यवसाय या दुकानें हैं? लोगों को सबसे ज्यादा क्या चाहिए?",
      mr: "तुमच्या गावात किंवा जवळपास आधीच कोणते व्यवसाय किंवा दुकाने आहेत? लोकांना सर्वात जास्त काय हवे आहे?"
    }
  },
  {
    id: 'interests',
    question: {
      en: "What kind of work do you enjoy or feel most comfortable with? For example — working with your hands, dealing with customers, farming, cooking, or something else?",
      hi: "आप किस तरह का काम पसंद करते हैं या जिसमें आप सबसे सहज महसूस करते हैं? जैसे - हाथ से काम, ग्राहकों से मिलना, खेती, खाना बनाना, या कुछ और?",
      mr: "तुम्हाला कोणत्या प्रकारचे काम आवडते किंवा ज्यात तुम्ही सर्वात सहज वाटता? जसे - हाताने काम, ग्राहकांशी व्यवहार, शेती, स्वयंपाक, किंवा इतर काही?"
    }
  },
  {
    id: 'time_availability',
    question: {
      en: "How much time can you dedicate to this business each day? Would this be your main work or something you run alongside other activities?",
      hi: "आप प्रतिदिन इस व्यापार के लिए कितना समय दे सकते हैं? क्या यह आपका मुख्य काम होगा या कुछ और काम के साथ?",
      mr: "तुम्ही या व्यवसायासाठी दररोज किती वेळ देऊ शकता? हे तुमचे मुख्य काम असेल का किंवा इतर कामांसोबत?"
    }
  },
]

const MOCK_SUMMARY_TEMPLATE = {
  en: (profile, answers) => `
Based on our conversation, here's what I understood about you:

**Location:** ${profile?.village || 'Your village'}, ${profile?.district || 'your district'}
**Area type:** ${answers?.area_type || 'Semi-rural / agricultural'}
**Nearest town:** ${answers?.daily_commute || 'Approximately 10–15 km away'}
**Existing businesses:** ${answers?.existing_businesses || 'Basic grocery, some agricultural input shops'}
**Your interests:** ${answers?.interests || 'Working with hands, customer-facing work'}
**Time available:** ${answers?.time_availability || 'Full time (6–8 hours per day)'}
**Investment available:** ₹${profile?.available_investment?.toLocaleString('en-IN') || '50,000'}
**Open to loan:** ${profile?.is_open_to_loan ? 'Yes' : 'No'}
  `.trim(),
  hi: (profile, answers) => `
हमारी बातचीत के आधार पर, मैंने आपके बारे में यह समझा:

**स्थान:** ${profile?.village || 'आपका गाँव'}, ${profile?.district || 'आपका जिला'}
**क्षेत्र प्रकार:** ${answers?.area_type || 'अर्ध-ग्रामीण / कृषि'}
**निकटतम शहर:** ${answers?.daily_commute || 'लगभग 10-15 किमी दूर'}
**मौजूदा व्यापार:** ${answers?.existing_businesses || 'बुनियादी किराना, कुछ कृषि दुकानें'}
**आपकी रुचियाँ:** ${answers?.interests || 'हाथ से काम, ग्राहक-मुखी काम'}
**उपलब्ध समय:** ${answers?.time_availability || 'पूर्णकालिक (6-8 घंटे प्रतिदिन)'}
**उपलब्ध निवेश:** ₹${profile?.available_investment?.toLocaleString('en-IN') || '50,000'}
**ऋण के लिए तैयार:** ${profile?.is_open_to_loan ? 'हाँ' : 'नहीं'}
  `.trim(),
  mr: (profile, answers) => `
आपल्या संभाषणावर आधारित, मला तुमच्याबद्दल हे समजले:

**ठिकाण:** ${profile?.village || 'तुमचे गाव'}, ${profile?.district || 'तुमचा जिल्हा'}
**परिसर प्रकार:** ${answers?.area_type || 'अर्ध-ग्रामीण / शेती'}
**जवळचे शहर:** ${answers?.daily_commute || 'अंदाजे 10-15 किमी दूर'}
**विद्यमान व्यवसाय:** ${answers?.existing_businesses || 'मूलभूत किराणा, काही कृषी दुकाने'}
**तुमच्या आवडी:** ${answers?.interests || 'हाताने काम, ग्राहक-मुखी काम'}
**उपलब्ध वेळ:** ${answers?.time_availability || 'पूर्णवेळ (दररोज 6-8 तास)'}
**उपलब्ध गुंतवणूक:** ₹${profile?.available_investment?.toLocaleString('en-IN') || '50,000'}
**कर्जासाठी तयार:** ${profile?.is_open_to_loan ? 'हो' : 'नाही'}
  `.trim(),
}

/**
 * Get the next advisor question for the conversation flow.
 * Returns null when all questions have been asked.
 */
export function getNextAdvisorQuestion(askedIds, lang = 'en') {
  const next = ADVISOR_QUESTIONS.find(q => !askedIds.includes(q.id))
  if (!next) return null
  return {
    id: next.id,
    text: next.question[lang] || next.question.en,
    isMock: true,
  }
}

/**
 * Generate a summary of advisor answers.
 * In production, this would be a structured AI extraction call.
 */
export function generateAdvisorSummary(profile, answers, lang = 'en') {
  const template = MOCK_SUMMARY_TEMPLATE[lang] || MOCK_SUMMARY_TEMPLATE.en
  return {
    text: template(profile, answers),
    isMock: true,
  }
}

/**
 * Generate an AI opening message for the advisor chat.
 */
export function getAdvisorGreeting(profile, lang = 'en') {
  const name = profile?.name?.split(' ')[0] || ''
  const greetings = {
    en: `Namaste${name ? `, ${name}` : ''}! 🙏 I'm your VyapaarSathi business advisor. I'll ask you a few questions to understand your area, skills, and goals — then suggest the most suitable business ideas for you. Let's begin!`,
    hi: `नमस्ते${name ? `, ${name}` : ''}! 🙏 मैं आपका व्यापारसाथी व्यापार सलाहकार हूँ। मैं आपके क्षेत्र, कौशल और लक्ष्यों को समझने के लिए कुछ प्रश्न पूछूँगा — फिर आपके लिए सबसे उपयुक्त व्यापार विचार सुझाऊँगा। शुरू करते हैं!`,
    mr: `नमस्ते${name ? `, ${name}` : ''}! 🙏 मी तुमचा व्यापारसाथी व्यवसाय सल्लागार आहे. मी तुमचा परिसर, कौशल्ये आणि उद्दिष्टे समजून घेण्यासाठी काही प्रश्न विचारेन — मग तुमच्यासाठी सर्वात योग्य व्यवसायाच्या कल्पना सुचवेन. सुरू करूया!`,
  }
  return {
    text: greetings[lang] || greetings.en,
    isMock: true,
  }
}

/**
 * Process a user message in the advisor chat.
 * In production: call your backend proxy → Gemini API → return response.
 * Here: echo acknowledgment and return next question.
 */
export function processAdvisorMessage(userMessage, currentQuestionId, lang = 'en') {
  const acknowledgments = {
    en: [
      "Thank you for sharing that!",
      "Got it, that's helpful.",
      "Understood, good to know!",
      "That's useful information.",
      "Perfect, I've noted that.",
    ],
    hi: [
      "यह बताने के लिए धन्यवाद!",
      "समझ गया, यह सहायक है।",
      "ठीक है, जानकर अच्छा लगा!",
      "यह उपयोगी जानकारी है।",
      "बढ़िया, मैंने नोट कर लिया।",
    ],
    mr: [
      "सांगितल्याबद्दल धन्यवाद!",
      "समजले, हे उपयुक्त आहे.",
      "बरोबर, हे जाणून बरे वाटले!",
      "ही उपयुक्त माहिती आहे.",
      "छान, मी नोंद केली.",
    ],
  }
  const acks = acknowledgments[lang] || acknowledgments.en
  const ack = acks[Math.floor(Math.random() * acks.length)]
  return { acknowledgment: ack, isMock: true }
}

// ─── Voice helpers (browser Speech API wrappers) ─────────────────────────────

let recognition = null

export function startVoiceInput(lang = 'en', onResult, onError) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  if (!SpeechRecognition) {
    onError?.('Voice input not supported in this browser')
    return false
  }

  recognition = new SpeechRecognition()
  const langMap = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' }
  recognition.lang = langMap[lang] || 'en-IN'
  recognition.interimResults = false
  recognition.maxAlternatives = 1

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript
    onResult?.(transcript)
  }
  recognition.onerror = (event) => onError?.(event.error)
  recognition.start()
  return true
}

export function stopVoiceInput() {
  recognition?.stop()
}

export function speakText(text, lang = 'en') {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  const langMap = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' }
  utterance.lang = langMap[lang] || 'en-IN'
  utterance.rate = 0.9
  window.speechSynthesis.speak(utterance)
}
