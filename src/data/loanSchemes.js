/**
 * Government Loan Schemes — Sample Data
 * All details are based on publicly available information.
 * Always verify with official sources before applying.
 * Eligibility is not guaranteed by VyapaarSathi.
 */

export const LOAN_SCHEMES = [
  {
    id: 'pm-mudra-shishu',
    name: 'PM Mudra Yojana — Shishu',
    shortName: 'MUDRA Shishu',
    ministry: 'Ministry of Finance',
    icon: '🏦',
    category: 'MSME / Micro Enterprise',
    maxLoan: 50000,
    interestRate: { min: 8.5, max: 12, note: 'Varies by bank/MFI. Sample rate.' },
    tenure: { min: 12, max: 60, unit: 'months' },
    subsidy: 'No direct subsidy; interest subvention in some states',
    guarantor: false,
    collateral: false,
    description: {
      en: 'For micro-businesses needing up to ₹50,000 to start or grow. Available at banks, MFIs, and NBFCs under MUDRA (Micro Units Development and Refinance Agency) scheme.',
      hi: 'सूक्ष्म व्यवसायों के लिए जिन्हें शुरुआत या विकास के लिए ₹50,000 तक की आवश्यकता है।',
      mr: 'सूक्ष्म व्यवसायांसाठी जे सुरू करण्यासाठी किंवा वाढवण्यासाठी ₹50,000 पर्यंत आवश्यक आहे.',
    },
    benefits: {
      en: ['No collateral required', 'No guarantor needed', 'Available at most banks and MFIs', 'Quick processing (7–15 days typically)', 'Mudra card for working capital use'],
      hi: ['कोई संपार्श्विक आवश्यक नहीं', 'कोई गारंटर नहीं', 'अधिकांश बैंकों पर उपलब्ध', 'त्वरित प्रसंस्करण', 'मुद्रा कार्ड'],
      mr: ['कोणतेही तारण नाही', 'गारंटर नाही', 'बहुतेक बँकांमध्ये उपलब्ध', 'त्वरित प्रक्रिया', 'मुद्रा कार्ड'],
    },
    eligibility: {
      en: ['Indian citizen, age 18–65', 'New or existing micro business', 'Not a defaulter on any existing loan', 'Business plan required', 'Any sector except agriculture (crop loans)'],
      hi: ['भारतीय नागरिक, उम्र 18-65', 'नया या मौजूदा सूक्ष्म व्यवसाय', 'किसी मौजूदा ऋण पर डिफॉल्टर नहीं'],
      mr: ['भारतीय नागरिक, वय 18-65', 'नवीन किंवा विद्यमान सूक्ष्म व्यवसाय', 'कोणत्याही विद्यमान कर्जावर डिफॉल्टर नाही'],
    },
    documents: {
      en: ['Aadhaar card (mandatory)', 'PAN card or Form 60', 'Passport photo (2)', 'Bank account statement (6 months)', 'Business proof / Udyam registration', 'Quotation for equipment/stock'],
      hi: ['आधार कार्ड', 'पैन कार्ड या फॉर्म 60', 'पासपोर्ट फोटो (2)', 'बैंक स्टेटमेंट (6 महीने)', 'व्यावसायिक प्रमाण'],
      mr: ['आधार कार्ड', 'पॅन कार्ड किंवा फॉर्म 60', 'पासपोर्ट फोटो (2)', 'बँक स्टेटमेंट (6 महिने)', 'व्यवसाय प्रमाण'],
    },
    howToApply: {
      en: ['Visit nearest bank branch or MFI', 'Or apply online at mudra.org.in', 'Submit application with documents', 'Bank evaluates and disburses within 7–30 days'],
      hi: ['नजदीकी बैंक शाखा या MFI में जाएं', 'या mudra.org.in पर ऑनलाइन आवेदन करें'],
      mr: ['जवळच्या बँक शाखा किंवा MFI ला भेट द्या', 'किंवा mudra.org.in वर ऑनलाइन अर्ज करा'],
    },
    officialUrl: 'https://mudra.org.in',
    isVerified: false,
    isPopular: true,
    suitableFor: ['dairy-milk-collection', 'mobile-repair-shop', 'tiffin-catering', 'tailoring-boutique', 'beauty-parlour', 'poultry-farming'],
    dataNote: 'Interest rates and terms are indicative sample figures. Actual rates vary by bank and applicant profile.',
  },
  {
    id: 'pm-mudra-kishore',
    name: 'PM Mudra Yojana — Kishor',
    shortName: 'MUDRA Kishor',
    ministry: 'Ministry of Finance',
    icon: '🏦',
    category: 'MSME / Small Enterprise',
    maxLoan: 500000,
    interestRate: { min: 9, max: 14, note: 'Varies by bank/MFI. Sample rate.' },
    tenure: { min: 12, max: 84, unit: 'months' },
    subsidy: 'No direct subsidy; check state-specific schemes',
    guarantor: false,
    collateral: 'Maybe required beyond ₹2L',
    description: {
      en: 'For established micro businesses that have grown and need ₹50,001 to ₹5 lakh to expand operations or upgrade equipment.',
      hi: 'स्थापित सूक्ष्म व्यवसायों के लिए जिन्हें विस्तार के लिए ₹50,001 से ₹5 लाख की आवश्यकता है।',
      mr: 'स्थापित सूक्ष्म व्यवसायांसाठी जे विस्तारासाठी ₹50,001 ते ₹5 लाख आवश्यक आहे.',
    },
    benefits: {
      en: ['No guarantor for most cases', 'Wide range of eligible activities', 'Working capital + term loan options', 'Available at all public and private banks'],
      hi: ['अधिकांश मामलों में कोई गारंटर नहीं', 'कार्यशील पूंजी + सावधि ऋण विकल्प'],
      mr: ['बहुतेक प्रकरणांमध्ये गारंटर नाही', 'कार्यशील भांडवल + मुदत कर्ज पर्याय'],
    },
    eligibility: {
      en: ['Indian citizen, age 18–65', 'Existing business with 2+ years of operation', 'Good repayment track record if existing loan', 'Income tax returns (if applicable)'],
      hi: ['भारतीय नागरिक', 'मौजूदा व्यवसाय 2+ वर्षों से'],
      mr: ['भारतीय नागरिक', 'विद्यमान व्यवसाय 2+ वर्षांपासून'],
    },
    documents: {
      en: ['Aadhaar + PAN', 'Business registration proof', 'Bank statements (12 months)', '2 years ITR (if applicable)', 'Business photos + GST certificate (if applicable)', 'Property documents (if collateral)'],
      hi: ['आधार + पैन', 'व्यापार पंजीकरण', 'बैंक स्टेटमेंट (12 महीने)'],
      mr: ['आधार + पॅन', 'व्यवसाय नोंदणी', 'बँक स्टेटमेंट (12 महिने)'],
    },
    howToApply: {
      en: ['Visit nearest bank branch with documents', 'Apply online at mudra.org.in or bank portal', 'Processing takes 15–30 days typically'],
      hi: ['नजदीकी बैंक शाखा में जाएं', 'mudra.org.in पर ऑनलाइन आवेदन'],
      mr: ['जवळच्या बँक शाखेला भेट द्या', 'mudra.org.in वर ऑनलाइन अर्ज करा'],
    },
    officialUrl: 'https://mudra.org.in',
    isVerified: false,
    isPopular: true,
    suitableFor: ['agri-input-shop', 'general-store', 'dairy-milk-collection', 'poultry-farming'],
    dataNote: 'Interest rates and terms are indicative sample figures. Actual rates vary by bank and applicant profile.',
  },
  {
    id: 'nabard-dairy',
    name: 'NABARD Dairy Entrepreneurship Development Scheme',
    shortName: 'NABARD Dairy Scheme',
    ministry: 'Ministry of Agriculture (NABARD)',
    icon: '🐄',
    category: 'Agriculture / Dairy',
    maxLoan: 700000,
    interestRate: { min: 8, max: 11, note: 'Linked to bank MCLR. Sample rate.' },
    tenure: { min: 36, max: 84, unit: 'months' },
    subsidy: '25% capital subsidy (33.33% for SC/ST); back-ended subsidy',
    guarantor: false,
    collateral: 'Usually required',
    description: {
      en: 'Promotes dairy farming and infrastructure development. Covers purchase of milch animals, mini dairy plants, cold chain equipment, milk processing, and chilling units.',
      hi: 'डेयरी खेती और बुनियादी ढांचे के विकास को बढ़ावा देता है। दुधारू पशु, मिनी डेयरी प्लांट, कोल्ड चेन उपकरण शामिल हैं।',
      mr: 'डेअरी शेती आणि पायाभूत सुविधांच्या विकासाला प्रोत्साहन देते. दुधाळ जनावरे, मिनी डेअरी प्लांट समाविष्ट आहे.',
    },
    benefits: {
      en: ['25% capital subsidy (back-ended)', '33.33% subsidy for SC/ST entrepreneurs', 'Covers wide range of dairy activities', 'Available through commercial banks and RRBs'],
      hi: ['25% पूंजी सब्सिडी', 'SC/ST के लिए 33.33%', 'व्यापक डेयरी गतिविधियां शामिल हैं'],
      mr: ['25% भांडवल अनुदान', 'SC/ST साठी 33.33%', 'विस्तृत डेअरी उपक्रम समाविष्ट'],
    },
    eligibility: {
      en: ['Individual farmers, entrepreneurs, SHGs, cooperatives', 'Minimum 2 years farming/dairy experience preferred', 'Land ownership or lease proof required', 'New or expansion projects eligible'],
      hi: ['किसान, उद्यमी, SHG, सहकारी समितियां', 'भूमि स्वामित्व या पट्टे का प्रमाण'],
      mr: ['शेतकरी, उद्योजक, SHG, सहकारी', 'जमीन मालकी किंवा भाडेपट्टा पुरावा'],
    },
    documents: {
      en: ['Aadhaar and PAN', 'Land document (Patta, 7/12 extract)', 'Project report / DPR', 'Caste certificate (if SC/ST)', 'Veterinary certificate for animals', 'Bank account statement'],
      hi: ['आधार और पैन', 'भूमि दस्तावेज (7/12)', 'परियोजना रिपोर्ट (DPR)', 'जाति प्रमाण पत्र (SC/ST के लिए)'],
      mr: ['आधार आणि पॅन', 'जमीन दस्तावेज (7/12)', 'प्रकल्प अहवाल (DPR)', 'जात प्रमाणपत्र (SC/ST साठी)'],
    },
    howToApply: {
      en: ['Visit nearest commercial bank or Regional Rural Bank', 'Get application from NABARD district office', 'Submit DPR and supporting documents', 'Bank evaluates and forwards to NABARD for subsidy claim'],
      hi: ['नजदीकी वाणिज्यिक बैंक या क्षेत्रीय ग्रामीण बैंक में जाएं', 'NABARD जिला कार्यालय से आवेदन प्राप्त करें'],
      mr: ['जवळच्या वाणिज्यिक बँक किंवा प्रादेशिक ग्रामीण बँकेत जा', 'NABARD जिल्हा कार्यालयातून अर्ज मिळवा'],
    },
    officialUrl: 'https://www.nabard.org',
    isVerified: false,
    isPopular: false,
    suitableFor: ['dairy-milk-collection'],
    dataNote: 'Scheme details based on publicly available NABARD information (2023). Verify current terms with NABARD district office.',
  },
  {
    id: 'pmkvy',
    name: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)',
    shortName: 'PMKVY',
    ministry: 'Ministry of Skill Development',
    icon: '🎓',
    category: 'Skill Training',
    maxLoan: null,
    interestRate: null,
    tenure: null,
    subsidy: 'Free skill training + certification + ₹8,000 reward on completion',
    guarantor: null,
    collateral: null,
    description: {
      en: 'Free skill training program for 10th/12th dropout or unemployed youth. Covers 300+ job roles including mobile repair, beauty, tailoring, hospitality, agriculture, and more.',
      hi: '10वीं/12वीं ड्रॉपआउट या बेरोजगार युवाओं के लिए मुफ्त कौशल प्रशिक्षण। मोबाइल मरम्मत, सौंदर्य, दर्जी सहित 300+ नौकरी भूमिकाएं।',
      mr: '10वी/12वी सोडलेले किंवा बेरोजगार तरुणांसाठी मोफत कौशल्य प्रशिक्षण. मोबाईल दुरुस्ती, सौंदर्य, शिवणकाम सह 300+ जॉब भूमिका.',
    },
    benefits: {
      en: ['Completely free training', '₹8,000 cash reward on certification', 'Industry-recognized certificate', 'Placement assistance', 'Available in rural areas through PMKVY centres'],
      hi: ['पूरी तरह मुफ्त प्रशिक्षण', 'प्रमाणीकरण पर ₹8,000 नकद पुरस्कार', 'उद्योग मान्यता प्राप्त प्रमाणपत्र'],
      mr: ['पूर्णपणे मोफत प्रशिक्षण', 'प्रमाणन पर ₹8,000 रोख पुरस्कार', 'उद्योग मान्यताप्राप्त प्रमाणपत्र'],
    },
    eligibility: {
      en: ['Indian citizen, 15–45 years', '10th class or above preferred (some courses 8th class)', 'Unemployed or seeking skill upgrade', 'Aadhaar card mandatory'],
      hi: ['भारतीय नागरिक, 15-45 वर्ष', '10वीं कक्षा या उससे ऊपर'],
      mr: ['भारतीय नागरिक, 15-45 वर्षे', '10वी किंवा त्यावरील'],
    },
    documents: {
      en: ['Aadhaar card', 'Educational certificates', 'Passport photo', 'Bank account (for reward payment)'],
      hi: ['आधार कार्ड', 'शैक्षिक प्रमाण पत्र', 'पासपोर्ट फोटो'],
      mr: ['आधार कार्ड', 'शैक्षणिक प्रमाणपत्रे', 'पासपोर्ट फोटो'],
    },
    howToApply: {
      en: ['Visit nearest PMKVY Training Centre or Skill India portal', 'Apply at skillindia.gov.in', 'Or contact local Krishi Vigyan Kendra / District Industries Centre'],
      hi: ['नजदीकी PMKVY प्रशिक्षण केंद्र जाएं', 'skillindia.gov.in पर आवेदन करें'],
      mr: ['जवळच्या PMKVY प्रशिक्षण केंद्रात जा', 'skillindia.gov.in वर अर्ज करा'],
    },
    officialUrl: 'https://www.skillindia.gov.in',
    isVerified: false,
    isPopular: true,
    suitableFor: ['mobile-repair-shop', 'beauty-parlour', 'tailoring-boutique', 'tiffin-catering'],
    dataNote: 'Scheme details based on official PMKVY 4.0 information. Verify current batches and availability in your district.',
  },
  {
    id: 'pm-svnidhi',
    name: 'PM SVANidhi — Street Vendor Loan',
    shortName: 'PM SVANidhi',
    ministry: 'Ministry of Housing and Urban Affairs',
    icon: '🛒',
    category: 'Street Vendor / Urban',
    maxLoan: 50000,
    interestRate: { min: 7, max: 10, note: 'Interest subsidy available. Sample rate.' },
    tenure: { min: 12, max: 12, unit: 'months per cycle' },
    subsidy: '7% interest subsidy on timely repayment; increased limit each cycle',
    guarantor: false,
    collateral: false,
    description: {
      en: 'For street vendors and small mobile traders. Start with ₹10,000 (Tier 1), scale to ₹20,000 (Tier 2) and ₹50,000 (Tier 3) on timely repayment.',
      hi: 'सड़क विक्रेताओं और छोटे मोबाइल व्यापारियों के लिए। ₹10,000 से शुरू, समय पर भुगतान पर ₹20,000 और ₹50,000 तक।',
      mr: 'रस्त्यावरील विक्रेते आणि छोट्या मोबाईल व्यापाऱ्यांसाठी. ₹10,000 पासून सुरुवात, वेळेवर परतफेडीवर ₹20,000 आणि ₹50,000 पर्यंत.',
    },
    benefits: {
      en: ['No collateral or guarantor', '7% interest subsidy credited back', 'Cashback on digital payments', 'Formal credit history built', 'Quick 7-day disbursal'],
      hi: ['कोई संपार्श्विक नहीं', '7% ब्याज सब्सिडी वापस', 'डिजिटल भुगतान पर कैशबैक'],
      mr: ['तारण नाही', '7% व्याज अनुदान परत', 'डिजिटल पेमेंटवर कॅशबॅक'],
    },
    eligibility: {
      en: ['Urban street vendor with vending certificate OR Letter of Recommendation from ULB', 'Aadhaar-linked mobile number', 'Must operate in urban/semi-urban area'],
      hi: ['शहरी सड़क विक्रेता', 'वेंडिंग प्रमाणपत्र या ULB से पत्र'],
      mr: ['शहरी रस्त्यावरील विक्रेता', 'वेंडिंग प्रमाणपत्र किंवा ULB कडून पत्र'],
    },
    documents: {
      en: ['Aadhaar card', 'Vending certificate / ULB letter', 'Mobile number linked to Aadhaar', 'Bank account'],
      hi: ['आधार कार्ड', 'वेंडिंग प्रमाणपत्र', 'बैंक खाता'],
      mr: ['आधार कार्ड', 'वेंडिंग प्रमाणपत्र', 'बँक खाते'],
    },
    howToApply: {
      en: ['Apply online at pmsvanidhi.mohua.gov.in', 'Or visit nearest bank branch / Common Service Centre', 'Or through ULB / Town Panchayat'],
      hi: ['pmsvanidhi.mohua.gov.in पर ऑनलाइन आवेदन करें', 'या नजदीकी बैंक / CSC जाएं'],
      mr: ['pmsvanidhi.mohua.gov.in वर ऑनलाइन अर्ज करा', 'किंवा जवळच्या बँक / CSC ला भेट द्या'],
    },
    officialUrl: 'https://pmsvanidhi.mohua.gov.in',
    isVerified: false,
    isPopular: false,
    suitableFor: ['general-store', 'tiffin-catering'],
    dataNote: 'Scheme primarily for urban/semi-urban street vendors. Verify eligibility with your local ULB.',
  },
  {
    id: 'wcd-women-scheme',
    name: 'Mahila Udyam Nidhi Scheme',
    shortName: 'Mahila Udyam Nidhi',
    ministry: 'Ministry of WCD / SIDBI',
    icon: '👩‍💼',
    category: 'Women Entrepreneur',
    maxLoan: 1000000,
    interestRate: { min: 8.5, max: 11, note: 'SIDBI linked rate. Sample rate.' },
    tenure: { min: 36, max: 120, unit: 'months' },
    subsidy: 'Soft loan (lower interest); 5-year moratorium period available',
    guarantor: false,
    collateral: 'Required above ₹5L',
    description: {
      en: 'Supports women entrepreneurs to set up or upgrade small enterprises. Available through SIDBI and partner banks. Preferential rates for women-led ventures.',
      hi: 'महिला उद्यमियों को लघु उद्यम स्थापित करने या उन्नत करने में सहायता। SIDBI और भागीदार बैंकों के माध्यम से उपलब्ध।',
      mr: 'महिला उद्योजकांना लघु उद्योग स्थापन किंवा उन्नत करण्यास मदत. SIDBI आणि भागीदार बँकांमार्फत उपलब्ध.',
    },
    benefits: {
      en: ['Lower interest rates for women', '5-year moratorium (no repayment) period', 'No guarantor in many cases', 'Technical assistance available', 'Priority processing'],
      hi: ['महिलाओं के लिए कम ब्याज दर', '5 साल की मोरेटोरियम अवधि', 'तकनीकी सहायता उपलब्ध'],
      mr: ['महिलांसाठी कमी व्याजदर', '5 वर्षांचा मोरेटोरियम कालावधी', 'तांत्रिक सहाय्य उपलब्ध'],
    },
    eligibility: {
      en: ['Women entrepreneur (sole proprietor or majority partner)', 'Age 18–60 years', 'Business plan/project report required', 'New or existing business'],
      hi: ['महिला उद्यमी', 'आयु 18-60 वर्ष', 'व्यापार योजना आवश्यक'],
      mr: ['महिला उद्योजक', 'वय 18-60 वर्षे', 'व्यवसाय योजना आवश्यक'],
    },
    documents: {
      en: ['Aadhaar and PAN', 'Business registration', 'Project report', 'Bank statements', 'Property/lease documents'],
      hi: ['आधार और पैन', 'व्यापार पंजीकरण', 'परियोजना रिपोर्ट'],
      mr: ['आधार आणि पॅन', 'व्यवसाय नोंदणी', 'प्रकल्प अहवाल'],
    },
    howToApply: {
      en: ['Visit SIDBI regional office or partner bank', 'Contact Women Development Corporation in your state', 'Apply through DIC (District Industries Centre)'],
      hi: ['SIDBI क्षेत्रीय कार्यालय या भागीदार बैंक जाएं', 'राज्य महिला विकास निगम से संपर्क करें'],
      mr: ['SIDBI प्रादेशिक कार्यालय किंवा भागीदार बँकेत जा', 'राज्य महिला विकास महामंडळाशी संपर्क साधा'],
    },
    officialUrl: 'https://www.sidbi.in',
    isVerified: false,
    isPopular: false,
    suitableFor: ['beauty-parlour', 'tailoring-boutique', 'tiffin-catering'],
    dataNote: 'Scheme details based on SIDBI public information. Availability and terms vary by state and scheme cycle.',
  },
  {
    id: 'pm-fme',
    name: 'PM Formalisation of Micro Food Enterprises (PM FME)',
    shortName: 'PM FME',
    ministry: 'Ministry of Food Processing Industries',
    icon: '🥘',
    category: 'Food Processing',
    maxLoan: 1000000,
    interestRate: { min: 9, max: 12, note: 'Through banks. Sample rate.' },
    tenure: { min: 36, max: 84, unit: 'months' },
    subsidy: '35% capital subsidy (max ₹10 lakh) for eligible upgrades',
    guarantor: false,
    collateral: 'Required for loan portion',
    description: {
      en: 'Helps existing food micro-enterprises formalise, upgrade technology, and access credit. 35% subsidy on project cost (max ₹10L). Includes FSSAI registration support.',
      hi: 'मौजूदा खाद्य सूक्ष्म उद्यमों को औपचारिक बनाने और तकनीक उन्नयन में सहायता। 35% सब्सिडी (अधिकतम ₹10L)। FSSAI पंजीकरण सहायता शामिल।',
      mr: 'विद्यमान खाद्य सूक्ष्म उद्योगांना औपचारिकता आणि तंत्रज्ञान उन्नतीसाठी मदत. 35% अनुदान (कमाल ₹10L). FSSAI नोंदणी सहाय्य समाविष्ट.',
    },
    benefits: {
      en: ['35% capital subsidy (max ₹10 lakh)', 'Capacity building and training', 'FSSAI license support', 'Branding and marketing assistance', 'Udyam registration support'],
      hi: ['35% पूंजी सब्सिडी (अधिकतम ₹10 लाख)', 'FSSAI लाइसेंस सहायता', 'ब्रांडिंग और मार्केटिंग सहायता'],
      mr: ['35% भांडवल अनुदान (कमाल ₹10 लाख)', 'FSSAI परवाना सहाय्य', 'ब्रँडिंग आणि मार्केटिंग सहाय्य'],
    },
    eligibility: {
      en: ['Existing unorganised/informal food micro enterprise', 'Individual, SHG, FPC, or cooperative', 'Annual turnover under ₹1 crore', 'Willingness to formalise with FSSAI/Udyam'],
      hi: ['मौजूदा अनौपचारिक खाद्य सूक्ष्म उद्यम', 'SHG, FPC या व्यक्तिगत', 'वार्षिक कारोबार ₹1 करोड़ से कम'],
      mr: ['विद्यमान अनौपचारिक खाद्य सूक्ष्म उद्योग', 'SHG, FPC किंवा वैयक्तिक', 'वार्षिक उलाढाल ₹1 कोटीपेक्षा कम'],
    },
    documents: {
      en: ['Aadhaar and PAN', 'Udyam registration (or apply simultaneously)', 'FSSAI certificate or application', 'Business proof (photos, receipts)', 'Bank account', 'Project report'],
      hi: ['आधार और पैन', 'उद्यम पंजीकरण', 'FSSAI प्रमाणपत्र', 'परियोजना रिपोर्ट'],
      mr: ['आधार आणि पॅन', 'उद्यम नोंदणी', 'FSSAI प्रमाणपत्र', 'प्रकल्प अहवाल'],
    },
    howToApply: {
      en: ['Apply online at pmfme.mofpi.gov.in', 'Or through your state Nodal Agency', 'Or District Industries Centre (DIC)'],
      hi: ['pmfme.mofpi.gov.in पर ऑनलाइन आवेदन करें', 'या राज्य नोडल एजेंसी के माध्यम से'],
      mr: ['pmfme.mofpi.gov.in वर ऑनलाइन अर्ज करा', 'किंवा राज्य नोडल एजन्सीमार्फत'],
    },
    officialUrl: 'https://pmfme.mofpi.gov.in',
    isVerified: false,
    isPopular: false,
    suitableFor: ['tiffin-catering', 'agri-input-shop'],
    dataNote: 'Scheme details based on MOFPI public information. Available for existing food businesses looking to formalise.',
  },
]

/**
 * Get schemes relevant to a specific business and user profile.
 */
export function getRelevantSchemes(businessId, profile) {
  return LOAN_SCHEMES.filter(scheme => {
    // Check if scheme is suitable for this business
    const suitableForBusiness = !scheme.suitableFor || scheme.suitableFor.includes(businessId)

    // Check max loan against needed investment
    const neededLoan = profile?.available_investment
      ? Math.max(0, (profile.typical_investment || 100000) - profile.available_investment)
      : 50000

    const loanFits = !scheme.maxLoan || scheme.maxLoan >= neededLoan * 0.5

    return suitableForBusiness && loanFits
  })
}

export function getAllSchemes() {
  return LOAN_SCHEMES
}

export function getSchemeById(id) {
  return LOAN_SCHEMES.find(s => s.id === id)
}
