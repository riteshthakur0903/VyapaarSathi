/**
 * Sample business ideas with hyper-local market data for rural India.
 * All data is SAMPLE / ESTIMATED — clearly labeled in the UI.
 * Sources: State agriculture dept reports, rural livelihood studies (2023–24 estimates).
 */

export const BUSINESS_CATEGORIES = [
  'Agriculture & Food',
  'Services',
  'Retail & Trade',
  'Manufacturing & Craft',
  'Digital & Tech',
  'Livestock & Dairy',
]

export const BUSINESS_IDEAS = [
  {
    id: 'dairy-milk-collection',
    name: { en: 'Dairy Milk Collection & Supply', hi: 'डेयरी दूध संग्रह और आपूर्ति', mr: 'डेअरी दूध संकलन व पुरवठा' },
    category: 'Livestock & Dairy',
    icon: '🥛',
    shortDesc: {
      en: 'Collect milk from local farmers and supply to cooperatives or direct buyers.',
      hi: 'स्थानीय किसानों से दूध इकट्ठा करके सहकारी संस्थाओं या सीधे खरीदारों को आपूर्ति करना।',
      mr: 'स्थानिक शेतकऱ्यांकडून दूध गोळा करून सहकारी संस्थांना किंवा थेट खरेदीदारांना पुरवठा करणे.',
    },
    market: {
      estimatedDemand: 'High',
      demandNote: 'Dairy demand grows 5–7% annually in rural Maharashtra (NABARD 2023, sample estimate)',
      potentialCustomers: [
        'Local cooperative dairy societies',
        'Town milk distributors',
        'Nearby households (direct sales)',
        'Sweet shops and tea stalls',
      ],
      competitorDensity: 'Medium',
      competitorNote: 'Typically 2–4 collection agents per 5 km radius in dairy-active regions',
      marketGap: 'Evening collection slot often underserved; hygiene-certified supply commands premium',
      localOpportunities: [
        'Partner with Amul / state dairy cooperative',
        'Value-add: sell paneer, butter locally',
        'Mobile chilling units reduce spoilage',
      ],
    },
    requirements: {
      skills: ['Basic animal husbandry knowledge', 'Driving (motorcycle/tempo)', 'Record-keeping'],
      resources: ['Stainless steel milk cans', 'Transportation', 'Basic testing kit'],
      minInvestment: 25000,
      typicalInvestment: 60000,
    },
    financials: {
      estimatedMonthlyRevenue: { min: 15000, max: 35000 },
      estimatedMonthlyProfit: { min: 8000, max: 20000 },
      breakEvenMonths: 4,
    },
    swot: {
      strengths: ['Low technology requirement', 'Stable daily demand', 'Government cooperative support'],
      weaknesses: ['Perishable product requires speed', 'Price controlled by cooperatives', 'Seasonal fluctuations'],
      opportunities: ['Value-added dairy products', 'Export to urban markets', 'NABARD dairy scheme funding'],
      threats: ['Organized dairy companies expanding', 'Fuel price increases', 'Drought affecting fodder'],
    },
    risks: [
      { risk: 'Milk spoilage', mitigation: 'Use insulated cans, complete rounds within 2 hours' },
      { risk: 'Price cuts by cooperative', mitigation: 'Diversify to direct household delivery' },
      { risk: 'Seasonal drop in production', mitigation: 'Maintain buffer stock of 5–7 reliable farmers' },
    ],
    suitableFor: {
      occupations: ['Farmer', 'Agricultural worker'],
      locationTypes: ['Rural', 'Agricultural'],
      investmentRange: [20000, 100000],
    },
    dataInfo: {
      source: 'Sample data based on NABARD Rural Livelihood Report 2023 estimates',
      confidence: 'Medium',
      isSample: true,
      lastUpdated: '2024-01',
    },
    relevantSchemes: ['pm-mudra-shishu', 'nabard-dairy', 'pm-kisan-credit'],
    pricing: {
      en: 'Collect at ₹25–32/litre; sell to cooperative at ₹35–40/litre. Margin: ₹3–8/litre. Target 100–200 litres/day.',
      hi: '₹25–32/लीटर पर खरीदें; सहकारी को ₹35–40/लीटर पर बेचें। मार्जिन: ₹3–8/लीटर। लक्ष्य: 100–200 लीटर/दिन।',
      mr: '₹25–32/लिटर मध्ये खरेदी; सहकारी संस्थेला ₹35–40/लिटर मध्ये विक्री. मार्जिन: ₹3–8/लिटर. लक्ष्य: 100–200 लिटर/दिवस.',
    },
  },
  {
    id: 'agri-input-shop',
    name: { en: 'Agricultural Input Shop', hi: 'कृषि इनपुट दुकान', mr: 'कृषी निविष्ठा दुकान' },
    category: 'Agriculture & Food',
    icon: '🌾',
    shortDesc: {
      en: 'Sell seeds, fertilizers, pesticides, and farming tools to local farmers.',
      hi: 'स्थानीय किसानों को बीज, उर्वरक, कीटनाशक और खेती उपकरण बेचना।',
      mr: 'स्थानिक शेतकऱ्यांना बियाणे, खते, कीटकनाशके आणि शेती साहित्य विकणे.',
    },
    market: {
      estimatedDemand: 'High',
      demandNote: 'India\'s agri-input market growing at 6% CAGR. High demand in seasonal peaks (June–July, Oct–Nov). Sample estimate.',
      potentialCustomers: [
        'Small and marginal farmers',
        'Large farm owners',
        'Tenant farmers',
        'Vegetable growers',
      ],
      competitorDensity: 'Medium-High',
      competitorNote: 'Average 1 agri-input shop per 3–5 km in agricultural areas',
      marketGap: 'Quality certified seeds and advisory services are underserved; certified organic inputs growing',
      localOpportunities: [
        'Get licensed as approved fertilizer dealer',
        'Tie up with seed companies for exclusive supply',
        'Offer soil testing service (small extra charge)',
      ],
    },
    requirements: {
      skills: ['Basic agronomy knowledge', 'Bookkeeping', 'Customer service'],
      resources: ['Shop space (150–300 sq ft)', 'Storage for fertilizer sacks', 'Weighing scale'],
      minInvestment: 50000,
      typicalInvestment: 150000,
    },
    financials: {
      estimatedMonthlyRevenue: { min: 30000, max: 80000 },
      estimatedMonthlyProfit: { min: 6000, max: 20000 },
      breakEvenMonths: 8,
    },
    swot: {
      strengths: ['Stable demand from farming community', 'Government licensed business', 'Good repeat customers'],
      weaknesses: ['High seasonal revenue swings', 'Large initial inventory needed', 'Credit risk from farmers'],
      opportunities: ['Growing demand for organic inputs', 'Drone spraying services add-on', 'Government scheme distribution point'],
      threats: ['Online agri-input platforms', 'Cooperative society competition', 'License revocation risk'],
    },
    risks: [
      { risk: 'Farmer credit defaults', mitigation: 'Set credit limit per farmer; require partial upfront payment' },
      { risk: 'Unsold seasonal stock', mitigation: 'Order based on advance booking; maintain only fast-moving items' },
      { risk: 'Regulatory compliance', mitigation: 'Get proper fertilizer/pesticide license; keep records' },
    ],
    suitableFor: {
      occupations: ['Farmer', 'Trader', 'Shop owner'],
      locationTypes: ['Rural', 'Agricultural', 'Semi-urban'],
      investmentRange: [50000, 300000],
    },
    dataInfo: {
      source: 'Sample data based on Agri Ministry reports and state district surveys (2023)',
      confidence: 'Medium',
      isSample: true,
      lastUpdated: '2024-01',
    },
    relevantSchemes: ['pm-mudra-kishore', 'pm-fme', 'state-agri-scheme'],
    pricing: {
      en: 'Mark-up 8–15% on seeds, 5–10% on fertilizers, 15–25% on pesticides. Soil testing: ₹100–200/sample.',
      hi: 'बीजों पर 8-15%, उर्वरक पर 5-10%, कीटनाशक पर 15-25% मार्कअप। मिट्टी परीक्षण: ₹100-200/नमूना।',
      mr: 'बियाण्यांवर 8-15%, खतांवर 5-10%, कीटकनाशकांवर 15-25% मार्कअप. माती परीक्षण: ₹100-200/नमुना.',
    },
  },
  {
    id: 'mobile-repair-shop',
    name: { en: 'Mobile Phone Repair Shop', hi: 'मोबाइल फोन मरम्मत की दुकान', mr: 'मोबाईल फोन दुरुस्ती दुकान' },
    category: 'Services',
    icon: '📱',
    shortDesc: {
      en: 'Repair smartphones, feature phones, and accessories for village and nearby town customers.',
      hi: 'गाँव और आस-पास के शहर के ग्राहकों के लिए स्मार्टफोन, फीचर फोन और एक्सेसरीज की मरम्मत।',
      mr: 'गाव आणि जवळपासच्या शहरातील ग्राहकांसाठी स्मार्टफोन, फीचर फोन आणि ॲक्सेसरीजची दुरुस्ती.',
    },
    market: {
      estimatedDemand: 'High',
      demandNote: 'India has 800M+ smartphone users. Rural penetration growing 15% YoY. Every village has mobile users who travel to towns for repair. Sample estimate.',
      potentialCustomers: [
        'Farmers and agricultural workers',
        'Students',
        'Local shopkeepers',
        'Women\'s SHG members',
      ],
      competitorDensity: 'Low-Medium',
      competitorNote: 'Often 0–1 repair shops in villages; nearest town may have 3–8. Great opportunity in underserved areas.',
      marketGap: 'Doorstep repair service, accessories retail, and mobile recharge point are underserved',
      localOpportunities: [
        'Combine with mobile recharge point and accessories retail',
        'PM-Gramin Digital Saksharta scheme – offer free digital literacy sessions',
        'Become a Common Service Centre (CSC) operator',
      ],
    },
    requirements: {
      skills: ['Mobile phone repair (course available online/ITI)', 'Basic electronics knowledge', 'Customer service'],
      resources: ['Repair tools kit', 'Spare parts stock', 'Small shop space (50–100 sq ft)'],
      minInvestment: 15000,
      typicalInvestment: 40000,
    },
    financials: {
      estimatedMonthlyRevenue: { min: 15000, max: 45000 },
      estimatedMonthlyProfit: { min: 8000, max: 25000 },
      breakEvenMonths: 3,
    },
    swot: {
      strengths: ['Growing rural mobile user base', 'Low competition in villages', 'Quick skill acquisition (3 month course)'],
      weaknesses: ['Requires continuous learning as phones evolve', 'Parts availability can be delayed', 'Low ticket size per repair'],
      opportunities: ['Add-on: mobile accessories retail', 'CSC operator for government services', 'Tablet and laptop repair'],
      threats: ['Phone manufacturers direct repair centers expanding', 'Disposable phone culture', 'Online accessories shopping'],
    },
    risks: [
      { risk: 'Expensive parts for premium phones', mitigation: 'Start with budget phone repairs; keep standard parts inventory' },
      { risk: 'Data privacy concerns from customers', mitigation: 'Never misuse customer data; build trust through referrals' },
      { risk: 'Rapid technology changes', mitigation: 'Invest ₹3–5k/year in updated training courses' },
    ],
    suitableFor: {
      occupations: ['Any', 'Youth', 'Technical'],
      locationTypes: ['Rural', 'Semi-urban', 'Village'],
      investmentRange: [10000, 60000],
    },
    dataInfo: {
      source: 'Sample data based on TRAI rural connectivity reports and ITI market surveys (2023)',
      confidence: 'Medium-High',
      isSample: true,
      lastUpdated: ''2024-01',
    },
    relevantSchemes: ['pm-mudra-shishu', 'pmkvy', 'startup-india'],
    pricing: {
      en: 'Screen replacement: ₹500–2500. Battery: ₹300–800. Software fix: ₹200–400. Accessories margin: 20–35%.',
      hi: 'स्क्रीन बदलना: ₹500-2500। बैटरी: ₹300-800। सॉफ्टवेयर: ₹200-400। एक्सेसरीज मार्जिन: 20-35%।',
      mr: 'स्क्रीन बदलणे: ₹500-2500. बॅटरी: ₹300-800. सॉफ्टवेअर: ₹200-400. ॲक्सेसरीज मार्जिन: 20-35%.',
    },
  },
  {
    id: 'tiffin-catering',
    name: { en: 'Tiffin & Catering Service', hi: 'टिफिन और कैटरिंग सेवा', mr: 'टिफिन आणि केटरिंग सेवा' },
    category: 'Agriculture & Food',
    icon: '🍱',
    shortDesc: {
      en: 'Provide home-cooked meals to workers, students, and office-goers; cater for local events.',
      hi: 'मजदूरों, छात्रों और दफ्तर जाने वालों को घर का खाना पहुँचाएं; स्थानीय कार्यक्रमों में कैटरिंग।',
      mr: 'कामगार, विद्यार्थी आणि ऑफिसला जाणाऱ्यांसाठी घरगुती जेवण पुरवणे; स्थानिक कार्यक्रमांसाठी केटरिंग.',
    },
    market: {
      estimatedDemand: 'Medium-High',
      demandNote: 'India\'s tiffin service market growing at 9% annually. Strong in areas with industrial workers, students, or migrant workers. Sample estimate.',
      potentialCustomers: [
        'Factory and construction workers',
        'Government office employees',
        'Students in hostels/PG',
        'Migrant workers',
        'Local events (weddings, functions)',
      ],
      competitorDensity: 'Low',
      competitorNote: 'Less than 1 organised tiffin service per 2–3 km in most rural areas',
      marketGap: 'Hygiene-certified home-cooked food with predictable delivery is valued by working population',
      localOpportunities: [
        'Partner with local factories or government offices',
        'Offer diet-specific meals (diabetic, vegetarian)',
        'Weekend catering for village functions',
      ],
    },
    requirements: {
      skills: ['Cooking', 'Food hygiene', 'Time management', 'Basic record-keeping'],
      resources: ['Commercial LPG connection', 'Large cooking vessels', 'Tiffin boxes', 'Bicycle/bike for delivery'],
      minInvestment: 20000,
      typicalInvestment: 50000,
    },
    financials: {
      estimatedMonthlyRevenue: { min: 18000, max: 55000 },
      estimatedMonthlyProfit: { min: 8000, max: 22000 },
      breakEvenMonths: 3,
    },
    swot: {
      strengths: ['Low startup cost', 'Daily recurring revenue', 'Can start from home kitchen', 'Manageable by women entrepreneur'],
      weaknesses: ['Physical effort high', 'Margin thin per meal', 'Labour-intensive scaling'],
      opportunities: ['Corporate catering contracts', 'Cloud kitchen model', 'Swiggy/Zomato partnership in town'],
      threats: ['Canteen competition in factories', 'Rising LPG prices', 'Food safety regulations'],
    },
    risks: [
      { risk: 'Food quality complaints', mitigation: 'Maintain hygiene standards; use fresh local produce daily' },
      { risk: 'Delivery delays', mitigation: 'Invest in insulated tiffin bags; establish fixed timing' },
      { risk: 'Customer churn during holidays', mitigation: 'Event catering supplements regular income' },
    ],
    suitableFor: {
      occupations: ['Homemaker', 'Cook', 'Any'],
      locationTypes: ['Rural', 'Semi-urban', 'Industrial area'],
      investmentRange: [15000, 80000],
    },
    dataInfo: {
      source: 'Sample data based on FSSAI reports and urban-rural food service surveys (2023)',
      confidence: 'Medium',
      isSample: true,
      lastUpdated: '2024-01',
    },
    relevantSchemes: ['pm-mudra-shishu', 'pm-fme', 'wcd-women-scheme'],
    pricing: {
      en: 'Monthly tiffin subscription: ₹1500–3000/person. Per-meal: ₹60–120. Catering: ₹150–300/plate.',
      hi: 'मासिक टिफिन: ₹1500-3000/व्यक्ति। प्रति भोजन: ₹60-120। कैटरिंग: ₹150-300/प्लेट।',
      mr: 'मासिक टिफिन: ₹1500-3000/व्यक्ती. प्रति जेवण: ₹60-120. केटरिंग: ₹150-300/ताट.',
    },
  },
  {
    id: 'general-store',
    name: { en: 'General Provisions Store', hi: 'सामान्य किराना दुकान', mr: 'सामान्य किराणा दुकान' },
    category: 'Retail & Trade',
    icon: '🏪',
    shortDesc: {
      en: 'Sell everyday essentials — groceries, pulses, oil, spices — to village households.',
      hi: 'गाँव के घरों को रोजमर्रा की जरूरतें — अनाज, दाल, तेल, मसाले — बेचना।',
      mr: 'गावातील कुटुंबांना रोजच्या गरजा — किराणा, डाळी, तेल, मसाले — विकणे.',
    },
    market: {
      estimatedDemand: 'Very High',
      demandNote: 'Essential FMCG demand is non-cyclical. Village stores serve 80–200 households within 1–2 km. Sample estimate.',
      potentialCustomers: [
        'Village households (primary)',
        'Small restaurants and dhabas',
        'Construction workers',
        'Seasonal farm workers',
      ],
      competitorDensity: 'Medium',
      competitorNote: 'Usually 1–3 general stores per village. First mover advantage in new villages.',
      marketGap: 'Branded FMCG products, hygiene products, and packaged food underserved in small villages',
      localOpportunities: [
        'Become PM Jan Aushadhi Kendra partner',
        'Add mobile recharge service',
        'Supply to local anganwadis and schools',
      ],
    },
    requirements: {
      skills: ['Basic math and bookkeeping', 'Customer relationship', 'Stock management'],
      resources: ['Shop space (200–400 sq ft)', 'Shelving and counter', 'Weighing balance', 'Initial stock'],
      minInvestment: 80000,
      typicalInvestment: 200000,
    },
    financials: {
      estimatedMonthlyRevenue: { min: 60000, max: 200000 },
      estimatedMonthlyProfit: { min: 8000, max: 25000 },
      breakEvenMonths: 10,
    },
    swot: {
      strengths: ['Stable year-round demand', 'Community trust as local shopkeeper', 'Credit relationship builds loyalty'],
      weaknesses: ['Low margins (5–15%)', 'High working capital tied in stock', 'Credit risk from customers'],
      opportunities: ['Add pharmacy products (non-scheduled)', 'Jan Aushadhi, PM Wani Wi-Fi point', 'Online delivery tie-up'],
      threats: ['FMCG companies expanding direct rural distribution', 'Government fair price shops', 'Online grocery apps'],
    },
    risks: [
      { risk: 'Customer credit (udhaar) defaults', mitigation: 'Set monthly credit limit; maintain ledger strictly' },
      { risk: 'Stock theft or damage', mitigation: 'Basic security grille; dry storage for perishables' },
      { risk: 'Competition from new entrants', mitigation: 'Build loyalty through home delivery and credit facility' },
    ],
    suitableFor: {
      occupations: ['Trader', 'Shop owner', 'Any'],
      locationTypes: ['Rural', 'Village', 'Semi-urban'],
      investmentRange: [60000, 400000],
    },
    dataInfo: {
      source: 'Sample data based on FMCG rural distribution reports and CRISIL rural market studies (2023)',
      confidence: 'Medium',
      isSample: true,
      lastUpdated: '2024-01',
    },
    relevantSchemes: ['pm-mudra-kishore', 'pm-svnidhi', 'pm-jan-aushadhi'],
    pricing: {
      en: 'Mark-up 8–15% on staples, 20–30% on FMCG brands, 15–25% on loose items. Offer credit to build loyalty.',
      hi: 'अनाज पर 8-15%, FMCG ब्रांड पर 20-30%, खुले सामान पर 15-25% मार्कअप। वफादारी के लिए उधार दें।',
      mr: 'अन्नधान्यावर 8-15%, FMCG ब्रँडवर 20-30%, सुटे सामानावर 15-25% मार्कअप. निष्ठा वाढवण्यासाठी उधारी द्या.',
    },
  },
  {
    id: 'tailoring-boutique',
    name: { en: 'Tailoring & Boutique', hi: 'दर्जी और बुटीक', mr: 'शिवणकाम आणि बुटीक' },
    category: 'Services',
    icon: '🧵',
    shortDesc: {
      en: 'Stitch and alter garments; offer local boutique services for festivals and occasions.',
      hi: 'कपड़े सिलना और बदलना; त्योहारों और अवसरों के लिए स्थानीय बुटीक सेवाएं।',
      mr: 'कपडे शिवणे आणि बदलणे; सण आणि प्रसंगांसाठी स्थानिक बुटीक सेवा.',
    },
    market: {
      estimatedDemand: 'Medium-High',
      demandNote: 'Textile stitching demand grows during Diwali, wedding season (Oct–Feb). Saree blouse, salwar suit stitching always in demand. Sample estimate.',
      potentialCustomers: [
        'Village women and families',
        'Students needing uniforms',
        'Wedding and festival customers',
        'MNREGA beneficiaries needing uniforms',
      ],
      competitorDensity: 'Low-Medium',
      competitorNote: 'Often 0–2 tailors per village. Village tailors are usually very busy during festival seasons.',
      marketGap: 'Ladies boutique with trendy designs and quick delivery in demand. Embroidery skills add premium.',
      localOpportunities: [
        'Ready-made alterations (blouse fits)',
        'Festival/wedding dress designing',
        'Uniform stitching for schools',
        'Expand to make and sell bags, quilts',
      ],
    },
    requirements: {
      skills: ['Stitching and tailoring', 'Pattern cutting', 'Knowledge of current fashion trends (optional)'],
      resources: ['Sewing machine (2–3)', 'Cutting table', 'Thread and accessories stock', 'Small shop or home space'],
      minInvestment: 15000,
      typicalInvestment: 35000,
    },
    financials: {
      estimatedMonthlyRevenue: { min: 12000, max: 40000 },
      estimatedMonthlyProfit: { min: 7000, max: 22000 },
      breakEvenMonths: 3,
    },
    swot: {
      strengths: ['Very low capital required', 'Home-based possible', 'Festival demand spike revenue', 'Skill can be learned quickly'],
      weaknesses: ['Highly seasonal', 'Physical strain for long hours', 'Slow income in off-season'],
      opportunities: ['Online stitch on demand (designs from phone)', 'Export-quality embroidery', 'Tie-up with fashion brand as vendor'],
      threats: ['Cheap ready-made garment shops', 'Online fashion platforms', 'Synthetic fabrics needing machine'],
    },
    risks: [
      { risk: 'Seasonal income dip', mitigation: 'Supplement with alterations, uniform orders in lean months' },
      { risk: 'Machine breakdown', mitigation: 'Have 2 machines; save ₹500/month for maintenance fund' },
      { risk: 'Customer dissatisfaction', mitigation: 'Take measurements twice; trial fitting before final delivery' },
    ],
    suitableFor: {
      occupations: ['Homemaker', 'Any', 'Women entrepreneur'],
      locationTypes: ['Rural', 'Village', 'Semi-urban'],
      investmentRange: [10000, 60000],
    },
    dataInfo: {
      source: 'Sample data based on KVIC textile surveys and state SHG reports (2023)',
      confidence: 'Medium',
      isSample: true,
      lastUpdated: '2024-01',
    },
    relevantSchemes: ['pm-mudra-shishu', 'wcd-women-scheme', 'pmkvy', 'kvic-scheme'],
    pricing: {
      en: 'Blouse stitching: ₹150–400. Salwar suit: ₹300–600. Alterations: ₹50–200. Embroidery work: ₹200–2000.',
      hi: 'ब्लाउज: ₹150-400। सलवार सूट: ₹300-600। बदलाव: ₹50-200। कढ़ाई: ₹200-2000।',
      mr: 'ब्लाऊज: ₹150-400. सलवार सूट: ₹300-600. बदल: ₹50-200. भरतकाम: ₹200-2000.',
    },
  },
  {
    id: 'poultry-farming',
    name: { en: 'Backyard Poultry Farming', hi: 'मुर्गी पालन', mr: 'कुक्कुट पालन' },
    category: 'Livestock & Dairy',
    icon: '🐔',
    shortDesc: {
      en: 'Raise country chickens or broilers and sell eggs and birds to local households and markets.',
      hi: 'देसी मुर्गी या ब्रॉयलर पालकर अंडे और पक्षी स्थानीय घरों और बाजारों में बेचना।',
      mr: 'देशी कोंबड्या किंवा ब्रॉयलर पाळून अंडी आणि पक्षी स्थानिक घरांना आणि बाजारात विकणे.',
    },
    market: {
      estimatedDemand: 'High',
      demandNote: 'Egg demand growing 8% annually in India. Desi/free-range eggs command 40–60% premium over commercial eggs. Sample estimate.',
      potentialCustomers: [
        'Local households (direct sale)',
        'Restaurants and dhabas',
        'Weekly bazaar vendors',
        'Egg distributors in nearby town',
      ],
      competitorDensity: 'Low',
      competitorNote: 'Organised backyard poultry is uncommon in most villages. Small-scale is very sustainable.',
      marketGap: 'Desi/country chicken eggs significantly underserved; free-range eggs sell at premium',
      localOpportunities: [
        'NABARD Poultry scheme covers 25% capital subsidy',
        'State veterinary department provides vaccinations',
        'Sell directly at weekly haat/bazaar for better margin',
      ],
    },
    requirements: {
      skills: ['Basic poultry care', 'Disease identification', 'Record-keeping'],
      resources: ['Land space for shed', 'Poultry shed construction', 'Starter chicks', 'Feed supply'],
      minInvestment: 30000,
      typicalInvestment: 80000,
    },
    financials: {
      estimatedMonthlyRevenue: { min: 12000, max: 35000 },
      estimatedMonthlyProfit: { min: 5000, max: 18000 },
      breakEvenMonths: 6,
    },
    swot: {
      strengths: ['NABARD and state subsidies available', 'Steady egg demand', 'Low competition in backyard model'],
      weaknesses: ['Disease risk can wipe out flock', 'Odour and management challenges', 'Feed cost fluctuates'],
      opportunities: ['Desi egg premium pricing', 'Processing (boiled egg vending)', 'Manure sale to farmers'],
      threats: ['Avian flu outbreaks', 'Large commercial farms price undercutting', 'Water shortage affecting poultry'],
    },
    risks: [
      { risk: 'Disease outbreak', mitigation: 'Vaccinate regularly; isolate new birds for 2 weeks' },
      { risk: 'Sudden price drop', mitigation: 'Maintain direct household customers; don\'t rely only on middlemen' },
      { risk: 'Feed cost spike', mitigation: 'Mix local grains (maize, soybean) to reduce commercial feed dependency' },
    ],
    suitableFor: {
      occupations: ['Farmer', 'Agricultural worker', 'Any'],
      locationTypes: ['Rural', 'Village', 'Agricultural'],
      investmentRange: [20000, 150000],
    },
    dataInfo: {
      source: 'Sample data based on DAHD annual report and NABARD poultry subsidy data (2023)',
      confidence: 'Medium',
      isSample: true,
      lastUpdated: '2024-01',
    },
    relevantSchemes: ['nabard-poultry', 'pm-mudra-shishu', 'rashtriya-pashudhan-mission'],
    pricing: {
      en: 'Country eggs: ₹8–12/piece. Broiler birds: ₹130–180/kg. Table birds for festivals: ₹200–300/kg (desi).',
      hi: 'देसी अंडे: ₹8-12/नग। ब्रॉयलर: ₹130-180/किग्रा। त्योहार के लिए पक्षी: ₹200-300/किग्रा (देसी)।',
      mr: 'देशी अंडी: ₹8-12/नग. ब्रॉयलर पक्षी: ₹130-180/किग्रा. सणासाठी पक्षी: ₹200-300/किग्रा (देशी).',
    },
  },
  {
    id: 'beauty-parlour',
    name: { en: 'Beauty Parlour & Salon', hi: 'ब्यूटी पार्लर और सैलून', mr: 'ब्युटी पार्लर आणि सलून' },
    category: 'Services',
    icon: '💄',
    shortDesc: {
      en: 'Offer beauty and grooming services to women and men in your village and surrounding area.',
      hi: 'अपने गाँव और आस-पास की महिलाओं और पुरुषों को सौंदर्य और सौंदर्यप्रसाधन सेवाएं।',
      mr: 'तुमच्या गाव आणि आजूबाजूच्या महिला आणि पुरुषांना सौंदर्य आणि ग्रूमिंग सेवा.',
    },
    market: {
      estimatedDemand: 'High',
      demandNote: 'Beauty service industry growing 15% annually in India. Rural demand rising significantly with smartphone and social media influence. Sample estimate.',
      potentialCustomers: [
        'Village women (bridal, festival prep)',
        'Young women for regular services',
        'Men\'s haircut and grooming',
        'School children haircuts',
      ],
      competitorDensity: 'Low',
      competitorNote: 'Most villages have 0–1 beauty parlour. Nearest parlour usually 5–15 km away in towns.',
      marketGap: 'Bridal package at affordable prices is highly demanded in villages where all travel to town',
      localOpportunities: [
        'PMKVY free skill training available for beauty courses',
        'Bridal packages (mehendi, makeup, saree draping)',
        'Home service visits for elderly',
        'Sell beauty products at margin',
      ],
    },
    requirements: {
      skills: ['Beauty training (3–6 month course)', 'Makeup, threading, waxing, haircut skills', 'Client communication'],
      resources: ['Parlour chair and mirror setup', 'Basic beauty equipment', 'Product inventory'],
      minInvestment: 25000,
      typicalInvestment: 60000,
    },
    financials: {
      estimatedMonthlyRevenue: { min: 15000, max: 50000 },
      estimatedMonthlyProfit: { min: 8000, max: 28000 },
      breakEvenMonths: 4,
    },
    swot: {
      strengths: ['Very low competition in villages', 'Bridal season creates strong peak revenue', 'Community trust once established'],
      weaknesses: ['Seasonal (wedding season peaks)', 'Upfront skill training cost', 'Product cost fluctuates'],
      opportunities: ['Bridal makeup packages', 'YouTube channel for local visibility', 'Selling beauty products retail'],
      threats: ['Cheaper low-quality competition', 'Women\'s preference for branded salons in town', 'Rising product costs'],
    },
    risks: [
      { risk: 'Skin reactions from products', mitigation: 'Use reputed brands; conduct patch test for first-time clients' },
      { risk: 'Seasonal income drops', mitigation: 'Offer haircuts, threading throughout the year for steady base income' },
      { risk: 'Customer attrition', mitigation: 'Maintain client book; SMS/WhatsApp reminders for appointments' },
    ],
    suitableFor: {
      occupations: ['Any', 'Women entrepreneur', 'Homemaker'],
      locationTypes: ['Rural', 'Village', 'Semi-urban'],
      investmentRange: [15000, 100000],
    },
    dataInfo: {
      source: 'Sample data based on NSSO service sector surveys and beauty industry CAGR data (2023)',
      confidence: 'Medium',
      isSample: true,
      lastUpdated: '2024-01',
    },
    relevantSchemes: ['pm-mudra-shishu', 'pmkvy', 'wcd-women-scheme', 'startup-india'],
    pricing: {
      en: 'Haircut: ₹50–150. Facial: ₹150–400. Threading: ₹15–30. Full bridal package: ₹3,000–10,000.',
      hi: 'बाल कटाई: ₹50-150। फेशियल: ₹150-400। थ्रेडिंग: ₹15-30। पूर्ण दुल्हन पैकेज: ₹3,000-10,000।',
      mr: 'केस कटाई: ₹50-150. फेशियल: ₹150-400. थ्रेडिंग: ₹15-30. संपूर्ण ब्रायडल पॅकेज: ₹3,000-10,000.',
    },
  },
]

// Get ideas filtered by relevance for a profile
export function getRecommendedIdeas(profile, limit = 5) {
  if (!profile) return BUSINESS_IDEAS.slice(0, limit)

  const investment = profile.available_investment || 50000
  const isLoanOpen = profile.is_open_to_loan

  return BUSINESS_IDEAS
    .filter(idea => {
      const maxAffordable = isLoanOpen
        ? idea.requirements.typicalInvestment * 2
        : idea.requirements.typicalInvestment
      return investment >= idea.requirements.minInvestment * 0.5 &&
             investment <= maxAffordable
    })
    .slice(0, limit)
}

export function getIdeaById(id) {
  return BUSINESS_IDEAS.find(b => b.id === id)
}

// Comparison factors
export const COMPARISON_FACTORS = [
  { key: 'minInvestment', label: { en: 'Min. Investment', hi: 'न्यूनतम निवेश', mr: 'किमान गुंतवणूक' }, lowerIsBetter: true },
  { key: 'monthlyProfit', label: { en: 'Est. Monthly Profit', hi: 'अनु. मासिक लाभ', mr: 'अंदा. मासिक नफा' }, lowerIsBetter: false },
  { key: 'breakEvenMonths', label: { en: 'Break-even (months)', hi: 'ब्रेक-ईवन (महीने)', mr: 'ब्रेक-ईव्हन (महिने)' }, lowerIsBetter: true },
  { key: 'demand', label: { en: 'Market Demand', hi: 'बाज़ार माँग', mr: 'बाजार मागणी' }, lowerIsBetter: false },
  { key: 'competition', label: { en: 'Competition Level', hi: 'प्रतिस्पर्धा', mr: 'स्पर्धा' }, lowerIsBetter: true },
  { key: 'skills', label: { en: 'Skills Required', hi: 'आवश्यक कौशल', mr: 'आवश्यक कौशल्ये' }, lowerIsBetter: true },
]

const DEMAND_SCORE = { 'Very High': 5, 'High': 4, 'Medium-High': 3.5, 'Medium': 3, 'Low-Medium': 2, 'Low': 1 }
const COMPETITION_SCORE = { 'Very High': 5, 'High': 4, 'Medium-High': 3.5, 'Medium': 3, 'Low-Medium': 2, 'Low': 1 }

export function getComparisonData(idea) {
  return {
    id: idea.id,
    name: idea.name,
    minInvestment: idea.requirements.minInvestment,
    monthlyProfit: idea.financials.estimatedMonthlyProfit.max,
    breakEvenMonths: idea.financials.breakEvenMonths,
    demand: DEMAND_SCORE[idea.market.estimatedDemand] || 3,
    competition: COMPETITION_SCORE[idea.market.competitorDensity] || 3,
    skills: idea.requirements.skills.length,
  }
}
