// data/cityGuides.js

// This maps city names to their guide content
export const CITY_GUIDE_MAP = {
  // ========== UTTAR PRADESH ==========
  Varanasi: {
    overview:
      "Varanasi, the spiritual capital of India, is one of the world's oldest continuously inhabited cities.",
    detailedDescription:
      "Varanasi, also known as Kashi or Banaras, is a city that embodies the essence of Hindu spirituality. With its labyrinthine lanes, over 80 ghats, and thousands of temples, it attracts millions of pilgrims and tourists annually.",
    topAttractions: [
      "Kashi Vishwanath Temple - One of the 12 Jyotirlingas",
      "Dashashwamedh Ghat - Main ghat with spectacular Ganga Aarti",
      "Manikarnika Ghat - The most sacred cremation ghat",
      "Sarnath - Buddha's first sermon site",
      "Banaras Hindu University - One of Asia's largest universities",
    ],
    localFood: [
      "Kachori Sabzi",
      "Malaiyyo",
      "Banarasi Paan",
      "Thandai",
      "Tamatar Chaat",
    ],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Start your day early to experience the morning aarti at the ghats",
      "Dress modestly when visiting temples",
      "Take a boat ride on the Ganges at sunrise for spectacular views",
      "Book accommodation in advance during festival seasons",
      "Visit Sarnath for a peaceful half-day excursion",
    ],
  },

  Ayodhya: {
    overview:
      "Ayodhya, the birthplace of Lord Rama, is one of India's most sacred cities.",
    detailedDescription:
      "Ayodhya is an ancient city with deep roots in Hindu mythology. The newly constructed Ram Mandir at Lord Rama's birthplace attracts pilgrims from across the world.",
    topAttractions: [
      "Ram Mandir - Newly constructed grand temple at Lord Rama's birthplace",
      "Hanuman Garhi - Important Hanuman temple with city views",
      "Kanak Bhawan - Temple dedicated to Lord Rama and Sita",
      "Treta Ke Thakur - Ancient temple with unique architecture",
      "Sarayu River Ghats - Scenic riverfront with evening aarti",
    ],
    localFood: [
      "Bharwa Kachori",
      "Malaiyyo",
      "Thandai",
      "Ayodhya Peda",
      "Dal Chaat",
    ],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Book accommodation well in advance during festival seasons",
      "Carry modest clothing for temple visits",
      "Start temple visits early morning to avoid crowds",
      "Consider hiring a local guide for historical context",
    ],
  },

  Prayagraj: {
    overview:
      "Prayagraj, known as the 'Sangam City', is one of India's holiest cities.",
    detailedDescription:
      "Prayagraj holds immense religious significance as the site of the Triveni Sangam - the sacred confluence of the Ganges, Yamuna, and mythical Saraswati rivers. It hosts the Kumbh Mela, the world's largest religious gathering.",
    topAttractions: [
      "Triveni Sangam - Sacred confluence of three rivers",
      "Allahabad Fort - Mughal-era fort built by Akbar",
      "Anand Bhavan - Nehru family ancestral home",
      "Kumbh Mela Ground - Site of the world's largest religious festival",
    ],
    localFood: ["Allahabadi Guava", "Kachori", "Litti Chokha", "Paan"],
    bestTimeToVisit: "October to March (Kumbh Mela years are special)",
    travelTips: [
      "Visit the Sangam early morning for boat rides",
      "Check Kumbh Mela dates if traveling during festival years",
      "Carry water and sun protection during summer visits",
      "Combine with Varanasi and Ayodhya for a complete circuit",
    ],
  },

  Lucknow: {
    overview:
      "Lucknow, the 'City of Nawabs', is the capital of Uttar Pradesh known for its refined culture and exquisite cuisine.",
    detailedDescription:
      "Lucknow offers a unique blend of Mughal and British colonial architecture. The city is famous for its 'Tehzeeb' (etiquette), 'Nawabi' cuisine, and the iconic Chikankari embroidery.",
    topAttractions: [
      "Bara Imambara - Grand monument with Bhool Bhulaiya labyrinth",
      "Chota Imambara - Beautiful palace with chandeliers",
      "Rumi Darwaza - Magnificent gateway",
      "Residency - Historic ruins from the 1857 uprising",
      "Hazratganj - Famous shopping and dining district",
    ],
    localFood: [
      "Tunday Kabab",
      "Biryani",
      "Kakori Kabab",
      "Shahi Tukda",
      "Kulfi",
    ],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Visit the Imambaras early morning to avoid crowds",
      "Don't miss the evening light show at Bara Imambara",
      "Explore Hazratganj for shopping and street food",
    ],
  },

  Kanpur: {
    overview:
      "Kanpur, the 'Manchester of the East', is a major industrial city in Uttar Pradesh.",
    detailedDescription:
      "Kanpur grew as a major industrial center during the British era, with extensive textile and leather industries. The city played a significant role in India's independence movement.",
    topAttractions: [
      "JK Temple - Beautiful modern temple with intricate carvings",
      "Nana Rao Park - Historic park with colonial-era buildings",
      "Green Park - International cricket stadium",
      "Ganga Barrage - Scenic view of the Ganges River",
      "Kanpur Memorial Church - Gothic-style monument",
    ],
    localFood: ["Thaggu Ke Laddu", "Chaat", "Kulfi", "Biryani"],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Visit JK Temple for its beautiful architecture",
      "Explore the leather markets for shopping",
      "Take an evening walk at Ganga Barrage",
    ],
  },

  Agra: {
    overview:
      "Agra, home to the magnificent Taj Mahal, is one of India's most visited tourist cities.",
    detailedDescription:
      "Agra's rich Mughal heritage is reflected in its stunning monuments, most notably the Taj Mahal, a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",
    topAttractions: [
      "Taj Mahal - Iconic white marble mausoleum",
      "Agra Fort - Massive red sandstone fort",
      "Fatehpur Sikri - Abandoned Mughal capital city",
      "Itimad-ud-Daulah - 'Baby Taj' with intricate marble work",
      "Mehtab Bagh - Garden with perfect Taj Mahal views at sunset",
    ],
    localFood: ["Petha", "Mughlai Cuisine", "Dalmoth", "Jalebi", "Lassi"],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Visit Taj Mahal at sunrise for the best experience",
      "Book tickets online to avoid queues",
      "Carry water and wear comfortable shoes",
      "Visit Fatehpur Sikri for a half-day excursion",
    ],
  },

  Mathura: {
    overview:
      "Mathura, the birthplace of Lord Krishna, is one of India's holiest cities.",
    detailedDescription:
      "Mathura is a city steeped in mythology and devotion. Every corner is associated with Lord Krishna's childhood. The city comes alive during Janmashtami, attracting millions of devotees.",
    topAttractions: [
      "Krishna Janmabhoomi Temple - Temple at Lord Krishna's birthplace",
      "Dwarkadhish Temple - Beautiful temple with intricate architecture",
      "Vishram Ghat - Sacred ghat on Yamuna River",
      "Govardhan Hill - Sacred hill associated with Krishna",
      "Gokul - Village where Krishna was raised",
    ],
    localFood: ["Mathura Peda", "Kachori Sabzi", "Lassi", "Jalebi"],
    bestTimeToVisit: "October to March (Janmashtami is peak)",
    travelTips: [
      "Visit temples early morning to avoid crowds",
      "Dress modestly as it's a pilgrimage city",
      "Combine Mathura with Vrindavan for a complete Braj experience",
    ],
  },

  Vrindavan: {
    overview:
      "Vrindavan, the land of Lord Krishna's divine pastimes, is one of the most sacred cities in India.",
    detailedDescription:
      "Vrindavan's atmosphere is infused with divine energy. The city is dotted with hundreds of temples, each telling a story from Krishna's life.",
    topAttractions: [
      "Banke Bihari Temple - The most revered Krishna temple in Vrindavan",
      "Prem Mandir - Modern white marble temple with beautiful light shows",
      "ISKCON Temple - International society for Krishna consciousness",
      "Radha Raman Temple - Ancient temple with the original deity",
      "Keshi Ghat - Sacred ghat on the Yamuna River",
    ],
    localFood: ["Kachori Sabzi", "Pedas", "Lassi", "Chaat"],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Visit temples early morning for peaceful darshan",
      "Wear modest clothing as it's a pilgrimage city",
      "Explore the temples on foot for a spiritual experience",
    ],
  },

  // ========== UTTARAKHAND ==========
  Haridwar: {
    overview:
      "Haridwar, the 'Gateway to Gods', is one of India's seven holiest cities.",
    detailedDescription:
      "Haridwar's sacred ghats and temples have drawn pilgrims for centuries. The evening Ganga Aarti at Har Ki Pauri is a spectacular ceremony that attracts thousands of devotees. It serves as the gateway to the Char Dham Yatra.",
    topAttractions: [
      "Har Ki Pauri - The most sacred ghat with evening Ganga Aarti",
      "Mansa Devi Temple - Hilltop temple with cable car access",
      "Chandi Devi Temple - Sacred temple on a hilltop",
      "Daksha Mahadev Temple - Ancient Shiva temple",
      "Rajaji National Park - Wildlife sanctuary near the city",
    ],
    localFood: ["Aloo Poori", "Kachori", "Jalebi", "Ganga Jal Lassi"],
    bestTimeToVisit: "October to March (Kumbh Mela years are special)",
    travelTips: [
      "Experience the Ganga Aarti at Har Ki Pauri at sunset",
      "Book accommodation in advance during Kumbh Mela years",
      "Take a dip in the Ganges for spiritual cleansing",
      "Combine with Rishikesh and Dehradun for a complete Uttarakhand trip",
    ],
  },

  Rishikesh: {
    overview:
      "Rishikesh, the 'Yoga Capital of the World', is a beautiful spiritual town nestled in the Himalayan foothills.",
    detailedDescription:
      "Rishikesh offers a unique combination of spirituality and adventure. The city's numerous yoga centers and ashrams attract spiritual seekers from around the world, while the Ganges River offers excellent opportunities for river rafting.",
    topAttractions: [
      "Laxman Jhula - Iconic suspension bridge over the Ganges",
      "Ram Jhula - Another iconic suspension bridge",
      "Beatles Ashram - Where the Beatles stayed for meditation",
      "Triveni Ghat - Sacred ghat for evening aarti",
      "Parmarth Niketan - Largest ashram with peaceful gardens",
    ],
    localFood: [
      "Sattvik Food",
      "Organic Cafes",
      "Israeli Cuisine",
      "North Indian",
    ],
    bestTimeToVisit: "September to March (Avoid monsoon for rafting)",
    travelTips: [
      "Try river rafting for an adventure experience",
      "Attend a yoga class at one of the many ashrams",
      "Don't miss the evening aarti at Triveni Ghat",
      "Visit the Beatles Ashram for a trip down memory lane",
    ],
  },

  Dehradun: {
    overview:
      "Dehradun, the capital of Uttarakhand, is a picturesque city nestled between the Shivalik Hills and the Himalayas.",
    detailedDescription:
      "Dehradun offers a perfect blend of natural beauty and urban amenities. The city's colonial-era architecture, beautiful gardens, and proximity to hill stations make it a popular destination.",
    topAttractions: [
      "Robber's Cave - Natural cave formation with waterfall",
      "Sahastradhara - Cascading waterfalls with natural spa",
      "Forest Research Institute - Colonial-era building with museum",
      "Mindrolling Monastery - Beautiful Tibetan Buddhist monastery",
      "Malsi Deer Park - Zoo and deer park in a natural setting",
    ],
    localFood: [
      "Kumaoni Cuisine",
      "Garhwali Thali",
      "Tibetan Momo",
      "Street Chaat",
    ],
    bestTimeToVisit: "March to June and September to November",
    travelTips: [
      "Visit Robber's Cave in the morning for the best experience",
      "Explore Sahastradhara for its natural beauty",
      "Take a stroll through the historic Clock Tower area",
      "Use Dehradun as a base to explore Mussoorie",
    ],
  },

  Mussoorie: {
    overview:
      "Mussoorie, the 'Queen of Hills', is one of India's most popular hill stations.",
    detailedDescription:
      "Mussoorie's colonial-era charm, beautiful landscapes, and pleasant climate have made it a favorite hill station for generations. The Mall Road, Kempty Falls, and Gun Hill are iconic attractions.",
    topAttractions: [
      "Kempty Falls - Famous waterfall with natural pools",
      "Mall Road - The heart of Mussoorie with shops and cafes",
      "Gun Hill - Highest point with panoramic views",
      "Lal Tibba - Scenic viewpoint at the highest point",
      "Jharipani Falls - Beautiful cascading waterfall",
    ],
    localFood: ["Momos", "Maggi", "Pastries", "Garhwali Food"],
    bestTimeToVisit: "March to June and December to February",
    travelTips: [
      "Walk the Mall Road in the evening for the best experience",
      "Visit Kempty Falls early morning to avoid crowds",
      "Take the cable car to Gun Hill for panoramic views",
      "Bring warm clothing even in summer evenings",
    ],
  },

  Nainital: {
    overview:
      "Nainital, the 'Lake District of India', is a charming hill station centered around the beautiful Naini Lake.",
    detailedDescription:
      "Nainital's picturesque lake, surrounded by seven hills, creates a breathtaking setting. The city's colonial architecture, boating experiences, and nearby trekking trails offer diverse activities.",
    topAttractions: [
      "Naini Lake - Scenic lake at the heart of the city",
      "Naina Devi Temple - Sacred temple at the lake's edge",
      "Snow View Point - Panoramic views of the Himalayas",
      "Mall Road - Vibrant shopping and dining street",
      "Raj Bhawan - Governor's House with beautiful gardens",
    ],
    localFood: ["Maggi", "Momos", "Pahadi Food", "Sweets"],
    bestTimeToVisit: "March to June and September to November",
    travelTips: [
      "Take a boat ride on Naini Lake",
      "Walk the Mall Road for shopping",
      "Visit Snow View Point early for sunrise views",
      "Combine with nearby Bhimtal, Sattal, and Naukuchiatal",
    ],
  },

  // ========== RAJASTHAN ==========
  Jaipur: {
    overview: "Jaipur, the Pink City, is the vibrant capital of Rajasthan.",
    detailedDescription:
      "Jaipur's pink-hued buildings, magnificent forts, and grand palaces create a romantic setting. The city is a treasure trove of history, culture, and craftsmanship.",
    topAttractions: [
      "Amber Fort - Majestic fort with elephant rides",
      "Hawa Mahal - Iconic Palace of Winds",
      "City Palace - Royal residence with museums",
      "Jantar Mantar - Astronomical observatory",
      "Nahargarh Fort - Fort with city views",
    ],
    localFood: [
      "Dal Baati Churma",
      "Gatte ki Sabzi",
      "Laal Maas",
      "Pyaz Kachori",
      "Kulfi",
    ],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Visit Amber Fort early morning for the best experience",
      "Explore the bazaars for traditional Rajasthani handicrafts",
      "Don't miss the evening light show at Amber Fort",
    ],
  },

  Udaipur: {
    overview:
      "Udaipur, the City of Lakes, is one of India's most romantic cities.",
    detailedDescription:
      "Udaipur's stunning lakes, palaces, and gardens create a magical atmosphere. The City Palace complex, Lake Pichola, and Jag Mandir are iconic landmarks.",
    topAttractions: [
      "City Palace - Largest palace complex in Rajasthan",
      "Lake Pichola - Scenic lake with palace views",
      "Jag Mandir - Palace on an island in Lake Pichola",
      "Jagdish Temple - Beautiful Hindu temple",
      "Fateh Sagar Lake - Another beautiful lake",
    ],
    localFood: ["Dal Baati", "Gatte ki Sabzi", "Keri Kadhi", "Malai Kulfi"],
    bestTimeToVisit: "September to March",
    travelTips: [
      "Take a boat ride on Lake Pichola for the best palace views",
      "Visit City Palace in the morning to avoid crowds",
      "Watch the sunset from the Monsoon Palace",
    ],
  },

  Jodhpur: {
    overview:
      "Jodhpur, the Blue City, is dominated by the magnificent Mehrangarh Fort.",
    detailedDescription:
      "Jodhpur's blue-washed houses, seen best from the imposing Mehrangarh Fort, create a striking visual. The city's bustling markets, delicious street food, and grand palaces make it a cultural hub.",
    topAttractions: [
      "Mehrangarh Fort - One of India's largest and most impressive forts",
      "Umaid Bhawan Palace - The last great palace built in India",
      "Jaswant Thada - White marble cenotaph",
      "Clock Tower Market - Vibrant local market",
      "Sardar Market - Famous for handicrafts and textiles",
    ],
    localFood: ["Makhaniya Lassi", "Kadi Kachori", "Laal Maas", "Mirchi Vada"],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Visit Mehrangarh Fort early morning for the best light",
      "Explore the blue city lanes with a local guide",
      "Shop for textiles and handicrafts at Sardar Market",
    ],
  },

  Jaisalmer: {
    overview:
      "Jaisalmer, the Golden City, rises from the Thar Desert like a golden mirage.",
    detailedDescription:
      "Jaisalmer's golden sandstone architecture blends perfectly with the surrounding desert landscape. The city's living fort, stunning havelis, and vast sand dunes create an otherworldly experience.",
    topAttractions: [
      "Jaisalmer Fort - Living fort with shops and houses inside",
      "Patwon Ki Haveli - Most ornate haveli with intricate carvings",
      "Sam Sand Dunes - Vast sand dunes with sunset views",
      "Salim Singh Ki Haveli - Unique architecture",
      "Gadisar Lake - Scenic lake and temple complex",
    ],
    localFood: ["Dal Baati", "Ker Sangri", "Desert Special", "Mawa Kachori"],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Take a camel safari into the desert",
      "Spend a night in a desert camp for a unique experience",
      "Explore the narrow lanes of the fort",
      "Watch the sunset over the sand dunes",
    ],
  },

  Ajmer: {
    overview:
      "Ajmer, home to the revered Ajmer Sharif Dargah, is a city of religious harmony.",
    detailedDescription:
      "Ajmer's blend of Hindu and Islamic heritage is reflected in its architecture and culture. The Ajmer Sharif Dargah, one of India's most important Sufi shrines, attracts devotees of all faiths.",
    topAttractions: [
      "Ajmer Sharif Dargah - Sacred Sufi shrine",
      "Ana Sagar Lake - Scenic artificial lake with pavilions",
      "Adhai Din Ka Jhonpra - Historic mosque with unique architecture",
      "Taragarh Fort - Fort with panoramic city views",
    ],
    localFood: ["Kulhad Chai", "Kachori", "Mawa Kachori", "Dal Baati"],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Visit the Dargah early morning for a peaceful experience",
      "Explore Ana Sagar Lake in the evening",
      "Combine with a visit to Pushkar",
    ],
  },

  // ========== MADHYA PRADESH ==========
  Ujjain: {
    overview:
      "Ujjain, one of India's oldest cities, is the home of the Mahakaleshwar Jyotirlinga.",
    detailedDescription:
      "Ujjain's spiritual significance is unmatched, being home to the Mahakaleshwar Temple, one of the twelve Jyotirlingas. The city's location on the Shipra River and its association with the Kumbh Mela make it a unique pilgrimage destination.",
    topAttractions: [
      "Mahakaleshwar Temple - One of the 12 Jyotirlingas with Bhasma Aarti",
      "Kumbh Mela Ground - Host of the Simhastha Kumbh Mela",
      "Kaliadeh Palace - Ancient palace on the Shipra River",
      "Sandipani Ashram - Ancient ashram where Lord Krishna studied",
    ],
    localFood: ["Poha", "Bhutte Ka Kees", "Dal Baati", "Jalebi"],
    bestTimeToVisit: "October to March (Mahashivratri is peak)",
    travelTips: [
      "Witness the Bhasma Aarti at Mahakaleshwar Temple (early morning)",
      "Book accommodation in advance during Kumbh Mela years",
      "Dress modestly as it's a pilgrimage city",
      "Combine with Omkareshwar for a Jyotirlinga tour",
    ],
  },

  Indore: {
    overview:
      "Indore, the commercial capital of Madhya Pradesh, is a vibrant city known for its food and heritage.",
    detailedDescription:
      "Indore's transformation into India's cleanest city is remarkable. The city's rich food culture, especially its street food, is legendary. The Rajwada Palace and bustling Sarafa Bazaar offer glimpses into the city's royal past.",
    topAttractions: [
      "Rajwada Palace - Historic palace with Maratha and Mughal architecture",
      "Lal Bagh Palace - Beautiful palace with European-inspired design",
      "Sarafa Bazaar - Night street food market",
      "Khajrana Ganesh Temple - Famous Ganesh temple",
      "Patalpani Waterfall - Scenic waterfall near the city",
    ],
    localFood: ["Sarafa Bazaar", "Bhutte Ka Kees", "Khopra Patties", "Gajak"],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Explore Sarafa Bazaar at night for the best food experience",
      "Visit Rajwada Palace for a glimpse of Holkar history",
      "Don't miss the sunrise at Patalpani Waterfall",
    ],
  },

  // ========== KARNATAKA ==========
  Bangalore: {
    overview:
      "Bangalore, the 'Silicon Valley of India', is a vibrant metropolis that perfectly blends traditional charm with modern technology.",
    detailedDescription:
      "Bangalore's beautiful green spaces, historic buildings, and modern infrastructure coexist harmoniously. The city's cosmopolitan culture, world-class restaurants, and exciting nightlife make it a favorite destination for travelers.",
    topAttractions: [
      "Bangalore Palace - Tudor-style royal palace",
      "Lalbagh Botanical Garden - Famous for its flower shows",
      "Cubbon Park - Historic park with colonial-era buildings",
      "Vidhana Soudha - Iconic government building",
      "Commercial Street - Vibrant shopping district",
    ],
    localFood: ["Masala Dosa", "Bisi Bele Bath", "Idli, Vada", "Filter Coffee"],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Visit Lalbagh Garden for its beautiful flower shows",
      "Explore Commercial Street for shopping",
      "Try the famous filter coffee at a local café",
    ],
  },

  // ========== PUNJAB ==========
  Amritsar: {
    overview:
      "Amritsar, the 'Golden City', is home to the magnificent Golden Temple, the holiest shrine of Sikhism.",
    detailedDescription:
      "Amritsar is a city of deep spiritual significance. The Golden Temple's serene sarovar and the continuous recitation of the Guru Granth Sahib create a peaceful atmosphere. The Wagah Border ceremony is a unique patriotic experience.",
    topAttractions: [
      "Golden Temple - The holiest Sikh shrine with golden dome",
      "Jallianwala Bagh - Historic garden and memorial",
      "Wagah Border - Beating Retreat ceremony",
      "Durgiana Temple - Hindu temple resembling the Golden Temple",
      "Gobindgarh Fort - Historic fort with light show",
    ],
    localFood: ["Amritsari Kulcha", "Lassi", "Makki di Roti", "Sarson da Saag"],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Visit the Golden Temple early morning for a peaceful experience",
      "Don't miss the Wagah Border ceremony in the evening",
      "Try the langar (community meal) at the Golden Temple",
      "Explore the bustling markets for Punjabi handicrafts",
    ],
  },

  Chandigarh: {
    overview:
      "Chandigarh, the 'City Beautiful', is India's first planned city and the capital of both Punjab and Haryana.",
    detailedDescription:
      "Chandigarh's architecture, designed by Le Corbusier, is a masterpiece of urban planning. The city's beautiful gardens, serene lakes, and well-maintained infrastructure make it a pleasant destination.",
    topAttractions: [
      "Rock Garden - Unique garden made from industrial waste",
      "Sukhna Lake - Serene lake with boating",
      "Rose Garden - Asia's largest rose garden",
      "Capitol Complex - UNESCO World Heritage Site",
      "Elante Mall - Largest mall in North India",
    ],
    localFood: ["Chole Bhature", "Butter Chicken", "Street Chaat", "Lassi"],
    bestTimeToVisit: "October to March",
    travelTips: [
      "Visit the Rock Garden for its unique sculptures",
      "Take a walk around Sukhna Lake in the evening",
      "Explore the Sector 17 market for shopping",
    ],
  },
};

// Fallback city guide for cities without specific guides
export const FALLBACK_GUIDE = {
  overview: "Discover the rich heritage and culture of this amazing city.",
  detailedDescription:
    "This city offers a unique blend of history, culture, and modern amenities. Whether you're visiting for pilgrimage, tourism, or business, you'll find plenty to explore and experience.",
  topAttractions: [
    "Historic temples and monuments",
    "Local markets and bazaars",
    "Cultural heritage sites",
    "Scenic viewpoints and gardens",
    "Delicious local cuisine",
  ],
  localFood: ["Local specialties", "Street food", "Traditional dishes"],
  bestTimeToVisit: "October to March",
  travelTips: [
    "Plan your visit during pleasant weather months",
    "Explore local attractions with a guide",
    "Try the local cuisine",
    "Book accommodation in advance",
  ],
};

// Function to get city guide by city name
export function getCityGuide(cityName) {
  // Try exact match
  if (CITY_GUIDE_MAP[cityName]) {
    return CITY_GUIDE_MAP[cityName];
  }

  // Try case-insensitive match
  const lowerCityName = cityName.toLowerCase();
  for (const key of Object.keys(CITY_GUIDE_MAP)) {
    if (key.toLowerCase() === lowerCityName) {
      return CITY_GUIDE_MAP[key];
    }
  }

  // Try partial match
  for (const key of Object.keys(CITY_GUIDE_MAP)) {
    if (
      lowerCityName.includes(key.toLowerCase()) ||
      key.toLowerCase().includes(lowerCityName)
    ) {
      return CITY_GUIDE_MAP[key];
    }
  }

  // Return fallback guide
  return FALLBACK_GUIDE;
}

// Get all unique destination cities
export function getUniqueDestinations(routes) {
  const cities = new Set();
  routes.forEach((route) => {
    if (route.destination) {
      cities.add(route.destination);
    }
  });
  return Array.from(cities);
}
