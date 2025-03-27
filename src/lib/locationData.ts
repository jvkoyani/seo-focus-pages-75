interface Location {
  id: string;
  name: string;
  slug: string;
  state: string;
  county?: string;
  country: string;
  image: string;
  description?: string;
  metaDescription?: string;
  metaTitle?: string;
}

const australianCities: Location[] = [
  {
    id: "melbourne",
    name: "Melbourne",
    slug: "melbourne",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Melbourne is Victoria's capital and Australia's second-largest city, known for its cultural diversity and vibrant arts scene.",
    metaTitle: "SEO Services in Melbourne | Boost Your Local Business",
    metaDescription: "Improve your business visibility in Melbourne with our specialized SEO services. Get higher rankings, more customers, and grow your business online."
  },
  {
    id: "sydney",
    name: "Sydney",
    slug: "sydney",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Sydney is the capital of New South Wales and Australia's largest city, famous for its iconic Opera House and Harbour Bridge.",
    metaTitle: "Sydney SEO Services | Local Search Optimization",
    metaDescription: "Our Sydney SEO services help businesses improve their online visibility and attract more local customers through optimized search performance."
  },
  {
    id: "brisbane",
    name: "Brisbane",
    slug: "brisbane",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Brisbane is Queensland's capital and Australia's third-largest city, known for its subtropical climate and outdoor lifestyle.",
    metaTitle: "Brisbane SEO Services | Local Search Optimization",
    metaDescription: "Boost your Brisbane business with our tailored SEO strategies. Attract more local customers and outperform your competition online."
  },
  {
    id: "perth",
    name: "Perth",
    slug: "perth",
    state: "Western Australia",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Perth is Western Australia's capital, known for its stunning beaches, parks and sunny climate.",
    metaTitle: "Perth SEO Services | Local Search Optimization",
    metaDescription: "Our Perth SEO services help local businesses improve their online visibility and attract more qualified customers through search engines."
  },
  {
    id: "adelaide",
    name: "Adelaide",
    slug: "adelaide",
    state: "South Australia",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Adelaide is South Australia's capital, known for its festivals, food and wine culture, and planned city design.",
    metaTitle: "Adelaide SEO Services | Local Search Optimization",
    metaDescription: "Improve your Adelaide business visibility online with our specialized SEO services. Attract more local customers and grow your business."
  },
  {
    id: "gold-coast",
    name: "Gold Coast",
    slug: "gold-coast",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Gold Coast is a coastal city in Queensland known for its surf beaches, theme parks, and vibrant nightlife.",
    metaTitle: "Gold Coast SEO Services | Local Search Optimization",
    metaDescription: "Boost your Gold Coast business visibility with our specialized SEO services. Attract more tourists and local customers."
  },
  {
    id: "canberra",
    name: "Canberra",
    slug: "canberra",
    state: "Australian Capital Territory",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Canberra is Australia's capital city, known for its planned layout, national monuments and cultural institutions.",
    metaTitle: "Canberra SEO Services | Local Search Optimization",
    metaDescription: "Our Canberra SEO services help businesses improve their visibility in search engines and attract more qualified leads."
  },
  {
    id: "hobart",
    name: "Hobart",
    slug: "hobart",
    state: "Tasmania",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Hobart is Tasmania's capital, known for its historic buildings, beautiful harbor, and proximity to nature.",
    metaTitle: "Hobart SEO Services | Local Search Optimization",
    metaDescription: "Improve your Hobart business visibility online with our specialized SEO services. Attract more local customers and grow your business."
  },
  {
    id: "darwin",
    name: "Darwin",
    slug: "darwin",
    state: "Northern Territory",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Darwin is the Northern Territory's capital, known for its tropical climate, multicultural community and relaxed lifestyle.",
    metaTitle: "Darwin SEO Services | Local Search Optimization",
    metaDescription: "Our Darwin SEO services help local businesses improve their online visibility and attract more qualified customers."
  },
  {
    id: "wollongong",
    name: "Wollongong",
    slug: "wollongong",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Wollongong is a coastal city in New South Wales, known for its beautiful beaches, vibrant university scene, and industrial heritage.",
    metaTitle: "Wollongong SEO Services | Local Search Optimization",
    metaDescription: "Get specialized SEO services for your Wollongong business. Improve your search rankings and attract more local customers."
  },
  {
    id: "newcastle",
    name: "Newcastle",
    slug: "newcastle",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Newcastle is a vibrant harbor city in New South Wales with beautiful beaches, a rich industrial history, and a thriving arts scene.",
    metaTitle: "Newcastle SEO Services | Local Search Optimization",
    metaDescription: "Boost your online presence in Newcastle with our specialized SEO services. Attract more local customers and grow your business."
  },
  {
    id: "cairns",
    name: "Cairns",
    slug: "cairns",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Cairns is a tropical city in Queensland, famous as the gateway to the Great Barrier Reef and Daintree Rainforest.",
    metaTitle: "Cairns SEO Services | Local Search Optimization",
    metaDescription: "Our Cairns SEO services help local businesses increase their online visibility and attract more tourists and local customers."
  },
  {
    id: "geelong",
    name: "Geelong",
    slug: "geelong",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Geelong is Victoria's second-largest city, known for its beautiful waterfront, strong industrial heritage, and proximity to surf beaches.",
    metaTitle: "Geelong SEO Services | Local Search Optimization",
    metaDescription: "Improve your Geelong business visibility with our specialized SEO services. Attract more local customers and grow your business."
  },
  {
    id: "townsville",
    name: "Townsville",
    slug: "townsville",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg",
    description: "Townsville is a major city in Queensland with a sunny climate, beautiful beaches, and access to the Great Barrier Reef.",
    metaTitle: "Townsville SEO Services | Local Search Optimization",
    metaDescription: "Get tailored SEO solutions for your Townsville business. Improve your online visibility and attract more qualified leads."
  },
  {
    id: "sunshine-coast",
    name: "Sunshine Coast",
    slug: "sunshine-coast",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg",
    description: "The Sunshine Coast is a popular tourist destination in Queensland known for its beautiful beaches, hinterland, and relaxed lifestyle.",
    metaTitle: "Sunshine Coast SEO Services | Local Search Optimization",
    metaDescription: "Our Sunshine Coast SEO services help local businesses stand out online and attract more tourists and residents."
  }
];

const additionalCities: Location[] = [
  {
    id: "central-coast",
    name: "Central Coast",
    slug: "central-coast",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "ipswich",
    name: "Ipswich",
    slug: "ipswich",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "ballarat",
    name: "Ballarat",
    slug: "ballarat",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "toowoomba",
    name: "Toowoomba",
    slug: "toowoomba",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "bendigo",
    name: "Bendigo",
    slug: "bendigo",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "mandurah",
    name: "Mandurah",
    slug: "mandurah",
    state: "Western Australia",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "launceston",
    name: "Launceston",
    slug: "launceston",
    state: "Tasmania",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "mackay",
    name: "Mackay",
    slug: "mackay",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "hervey-bay",
    name: "Hervey Bay",
    slug: "hervey-bay",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "bundaberg",
    name: "Bundaberg",
    slug: "bundaberg",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "wagga-wagga",
    name: "Wagga Wagga",
    slug: "wagga-wagga",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "coffs-harbour",
    name: "Coffs Harbour",
    slug: "coffs-harbour",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "gladstone",
    name: "Gladstone",
    slug: "gladstone",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "maitland",
    name: "Maitland",
    slug: "maitland",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "bathurst",
    name: "Bathurst",
    slug: "bathurst",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "palmerston",
    name: "Palmerston",
    slug: "palmerston",
    state: "Northern Territory",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "southport",
    name: "Southport",
    slug: "southport",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "dandenong",
    name: "Dandenong",
    slug: "dandenong",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "warrnambool",
    name: "Warrnambool",
    slug: "warrnambool",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "quakers-hill",
    name: "Quakers Hill",
    slug: "quakers-hill",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "mount-gambier",
    name: "Mount Gambier",
    slug: "mount-gambier",
    state: "South Australia",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "traralgon",
    name: "Traralgon",
    slug: "traralgon",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "whyalla",
    name: "Whyalla",
    slug: "whyalla",
    state: "South Australia",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "armidale",
    name: "Armidale",
    slug: "armidale",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "burnie",
    name: "Burnie",
    slug: "burnie",
    state: "Tasmania",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "griffith",
    name: "Griffith",
    slug: "griffith",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "maroochydore",
    name: "Maroochydore",
    slug: "maroochydore",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "bunbury",
    name: "Bunbury",
    slug: "bunbury",
    state: "Western Australia",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "rockhampton",
    name: "Rockhampton",
    slug: "rockhampton",
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "melton",
    name: "Melton",
    slug: "melton",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "port-macquarie",
    name: "Port Macquarie",
    slug: "port-macquarie",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "orange",
    name: "Orange",
    slug: "orange",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "sunbury",
    name: "Sunbury",
    slug: "sunbury",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "dubbo",
    name: "Dubbo",
    slug: "dubbo",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "tamworth",
    name: "Tamworth",
    slug: "tamworth",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "mildura",
    name: "Mildura",
    slug: "mildura",
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "geraldton",
    name: "Geraldton",
    slug: "geraldton",
    state: "Western Australia",
    country: "Australia",
    image: "/placeholder.svg"
  },
  {
    id: "nowra",
    name: "Nowra",
    slug: "nowra",
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  }
];

const newSouthWalesCities: Location[] = [
  "Sydney", "Newcastle", "Wollongong", "Central Coast", "Maitland", "Tweed Heads", "Port Macquarie", "Wagga Wagga", 
  "Coffs Harbour", "Tamworth", "Orange", "Dubbo", "Queanbeyan", "Bathurst", "Goulburn", "Nowra", "Cessnock", 
  "Lismore", "Albury", "Grafton", "Armidale", "Griffith", "Bowral", "Muswellbrook", "Broken Hill", "Batemans Bay",
  "Raymond Terrace", "Lithgow", "Taree", "Forster", "Ulladulla", "Singleton", "Nelson Bay", "Kiama", "Morisset",
  "Parkes", "Forbes", "Mudgee", "Young", "Scone", "Cowra", "Casino", "Deniliquin", "Moss Vale", "Leeton", 
  "Mittagong", "Cobar", "Yass", "Cootamundra", "Narrabri", "Moree", "Ballina", "Inverell", "Bega", "Wauchope",
  "Wingham", "Berry", "Aberdeen", "Camden", "Picton", "Richmond", "Windsor", "Katoomba", "Penrith", "Liverpool",
  "Parramatta", "Campbelltown", "Blacktown", "Hornsby", "Gosford", "Wyong", "Ryde", "Bankstown", "Hurstville",
  "Rockdale", "Kogarah", "Sutherland", "Manly", "Dee Why", "Mona Vale", "Bondi", "Randwick", "Maroubra"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "New South Wales",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const victoriaCities: Location[] = [
  "Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton", "Mildura", "Warrnambool", "Wodonga", "Traralgon",
  "Horsham", "Sale", "Ocean Grove", "Colac", "Echuca", "Swan Hill", "Wangaratta", "Bairnsdale", "Drouin", "Torquay",
  "Healesville", "Macedon", "Daylesford", "Lorne", "Apollo Bay", "Bright", "Marysville", "Mallacoota", "Ararat",
  "Bacchus Marsh", "Beaufort", "Beechworth", "Benalla", "Castlemaine", "Creswick", "Camperdown", "Coburg", "Dandenong",
  "Footscray", "Frankston", "Kyneton", "Mansfield", "Melton", "Mooroopna", "Morwell", "Moe", "Newborough", "Phillip Island",
  "Portland", "Port Fairy", "Queenscliff", "Rochester", "Romsey", "Seymour", "St Arnaud", "Stawell", "Sunbury", "Wallan",
  "Werribee", "Williamstown", "Yarra Glen", "Yarrawonga"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Victoria",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const queenslandCities: Location[] = [
  "Brisbane", "Gold Coast", "Sunshine Coast", "Townsville", "Cairns", "Toowoomba", "Mackay", "Rockhampton", "Bundaberg",
  "Hervey Bay", "Gladstone", "Mount Isa", "Maryborough", "Gympie", "Emerald", "Warwick", "Innisfail", "Kingaroy",
  "Ayr", "Roma", "Charters Towers", "Bowen", "Dalby", "Yeppoon", "Port Douglas", "Airlie Beach", "Proserpine",
  "Atherton", "Mareeba", "Ingham", "Home Hill", "Mission Beach", "Palm Cove", "Cooktown", "Barcaldine", "Longreach",
  "Cloncurry", "Winton", "Richmond", "Goondiwindi", "Stanthorpe", "Charleville", "Biloela", "Blackwater", "Moranbah",
  "Caloundra", "Noosa", "Redcliffe", "Burleigh Heads", "Surfers Paradise", "Southport", "Coolangatta", "Ipswich",
  "Logan", "Caboolture", "Beaudesert", "Cleveland", "Redland Bay", "North Lakes", "Bribie Island", "Beenleigh"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Queensland",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const westernAustraliaCities: Location[] = [
  "Perth", "Mandurah", "Bunbury", "Geraldton", "Kalgoorlie", "Albany", "Broome", "Port Hedland", "Karratha",
  "Busselton", "Esperance", "Margaret River", "Carnarvon", "Exmouth", "Derby", "Kununurra", "Newman", "Tom Price",
  "Dampier", "Paraburdoo", "Roebourne", "Wickham", "Onslow", "Pannawonica", "Northam", "Merredin", "Moora",
  "Narrogin", "Katanning", "Manjimup", "Collie", "Harvey", "Pinjarra", "Australind", "Dunsborough", "Yanchep",
  "Joondalup", "Fremantle", "Rockingham", "Armadale", "Midland", "Canning Vale", "Ellenbrook", "Butler", "Clarkson",
  "Two Rocks", "Augusta", "Denmark", "Coral Bay", "Cervantes", "Jurien Bay", "New Norcia", "York", "Dongara",
  "Kalbarri", "Fitzroy Crossing", "Halls Creek", "Wyndham", "Eucla", "Norseman", "Ravensthorpe", "Leonora"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Western Australia",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const northernTerritoryCities: Location[] = [
  "Darwin", "Alice Springs", "Katherine", "Tennant Creek", "Nhulunbuy", "Jabiru", "Yulara", "Alyangula", "Pine Creek",
  "Borroloola", "Timber Creek", "Elliott", "Ti Tree", "Yuendumu", "Papunya", "Hermannsburg", "Kaltukatjara", "Kintore",
  "Palmerston", "Humpty Doo", "Howard Springs", "Batchelor", "Adelaide River", "Mataranka", "Larrimah", "Daly Waters",
  "Wadeye", "Maningrida", "Gunbalanya", "Ramingining", "Galiwinku", "Milingimbi", "Ngukurr", "Yirrkala", "Numbulwar"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Northern Territory",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const actCities: Location[] = [
  "Canberra", "Belconnen", "Gungahlin", "Tuggeranong", "Woden Valley", "Weston Creek", "Molonglo Valley", "Queanbeyan",
  "Jerrabomberra", "Murrumbateman", "Hall", "Tharwa", "Royalla", "Williamsdale", "Gundaroo", "Bungendore"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Australian Capital Territory",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const tasmanianCities: Location[] = [
  "Hobart", "Launceston", "Devonport", "Burnie", "Ulverstone", "Kingston", "Sorell", "New Norfolk", "Wynyard",
  "George Town", "Bridgewater", "Smithton", "Huonville", "Deloraine", "Longford", "Perth", "Beaconsfield", "Scottsdale",
  "Penguin", "Sheffield", "Oatlands", "Bothwell", "Campbell Town", "Bicheno", "St Helens", "Swansea", "Triabunna",
  "Cygnet", "Dover", "Geeveston", "Rosebery", "Queenstown", "Strahan", "Zeehan", "Savage River", "Waratah"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "Tasmania",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const southAustralianCities: Location[] = [
// Original South Australian cities
  "Mintabie", "Mitchidy Moola", "Moana", "Mobilong", "Moculta", "Modbury", "Modbury Heights", "Modbury North", 
  "Kootaberra", "Koppamurra", "Koppio", "Korunye", "Kringin", "Krondorf", "Krongart", "Kudla", 
  "Laffer", "Lake Albert", "Lake Alexandrina", "Lake Carlet", "Lake Everard", "Lake Eyre", "Lake Frome", "Lake Gairdner",
  "Lake Gilles", "Lake Harris", "Lake Macfarlane", "Lake Plains", "Lake Torrens", "Lake Torrens Station", "Lake View", "Lameroo",
  "Langhorne Creek", "Langs Landing", "Largs Bay", "Largs North", "Laura", "Laura Bay", "Laurie Park", "Leabrook",
  "Leasingham", "Leawood Gardens", "Leigh Creek", "Leigh Creek Station", "Leighton", "Lenswood", "Lewiston", "Light Pass",
  "Lightsview", "Lincoln Gap", "Lincoln National Park", "Linden Park", "Lindley", "Lindon", "Linwood", "Lipson",
  "Little Douglas", "Littlehampton", "Lobethal", "Lochaber", "Lochiel", "Lock", "Lockes Claypan", "Lockleys",
  "Long Flat", "Long Plains", "Longwood", "Lonsdale", "Lonsdale Dc", "Louth Bay", "Loveday", "Lowan Vale",
  "Lowbank", "Lower Broughton", "Lower Hermitage", "Lower Inman Valley", "Lower Light", "Lower Mitcham", "Loxton", "Loxton North",
  "Lucindale", "Lucky Bay", "Lyndhurst", "Lyndoch", "Lynton", "Lyrup", "Maaoupe", "Mabel Creek",
  "Macclesfield", "Macdonald Park", "Macgillivray", "Macumba", "Magarey", "Magdala", "Maggea", "Magill",
  "Magill North", "Magill South", "Mahanewo", "Maitland", "Makin", "Malinong", "Mallala", "Malpas",
  "Maltee", "Malvern", "Mambray Creek", "Mangalo", "Manna Hill", "Mannanarie", "Manners Well", "Manningham",
  "Mannum", "Manoora", "Mansfield Park", "Mantung", "Manunda Station", "Marama", "Marananga", "Marble Hill",
  "Marcollat", "Marden", "Marino", "Marion", "Marion Bay", "Markaranka", "Marks Landing", "Marla",
  "Marleston", "Marleston Dc", "Marola", "Marrabel", "Marree", "Marree Station", "Marryatville", "Martins Well",
  "Maryvale", "Maslin Beach", "Matta Flat", "Maude", "Mawson Lakes", "Mayfield", "Maylands", "Mcbean Pound",
  "Mccallum", "Mccracken", "Mcdouall Peak", "Mcharg Creek", "Mclaren Flat", "Mclaren Vale", "Meadows", "Medindie",
  "Medindie Gardens", "Melrose", "Melrose Park", "Melrose Park Dc", "Melton", "Melton Station", "Meningie", "Meningie East",
  "Meningie West", "Menzies", "Mercunda", "Merghiny", "Meribah", "Merriton", "Merty Merty", "Middle Beach",
  "Middle River", "Middleback Range", "Middleton", "Midgee", "Mil Lel", "Milang", "Mile End", "Mile End South",
  "Milendella", "Millbrook", "Millers Creek", "Millicent", "Millswood", "Miltalie", "Minbrie", "Minburra",
  "Minburra Plain", "Minburra Station", "Mindarie", "Mingary", "Mingbool", "Minlaton", "Minnipa", "Mintabie",
  "Mintaro", "Minvalara", "Miranda", "Mitcham", "Mitcham Shopping Centre", "Mitchell", "Mitchell Park", "Mitchellville", 
  "Kuitpo", "Kuitpo Colony", "Kulpara", "Kurralta Park", "Kyancutta", "Kybunga", "Kybybolite", "Kyeema", 
  "Modbury North Dc", "Moerlong", "Monarto", "Monarto South", "Monash", "Monbulla", "Mongolata", 
  "Montacute", "Montarra", "Monteith", "Moockra", "Moody", "Moolawatana", "Mooleulooloo", "Moolooloo", 
  "Moonaree", "Moonta", "Moonta Bay", "Moonta Mines", "Moorak", "Moorillah", "Moorlands", "Moorook", 
  "Moorook South", "Moppa", "Morchard", "Morgan", "Morn Hill", "Morphett Vale", "Morphetts Flat", 
  "Morphettville", "Mortana", "Moseley", "Mosquito Hill", "Motpena", "Mount Arden", "Mount Barker", 
  "Mount Barker Junction", "Mount Barker Springs", "Mount Barker Summit", "Mount Barry", "Mount Benson", 
  "Mount Bryan", "Mount Bryan East", "Mount Burr", "Mount Charles", "Mount Clarence Station", "Mount Compass", 
  "Mount Cooper", "Mount Crawford", "Mount Damper", "Mount Drummond", "Mount Dutton Bay", "Mount Eba", 
  "Mount Falkland", "Mount Freeling", "Mount Gambier", "Mount Gambier East", 
  "Mount Gambier West", "Mount George", "Mount Havelock", "Mount Hope", "Mount Ive", "Mount Jagged", 
  "Mount Joy", "Mount Light", "Mount Lyndhurst", "Mount Magnificent", "Mount Mary", "Mount Mcintyre", 
  "Mount Mckenzie", "Mount Observation", "Mount Osmond", "Mount Pleasant", "Mount Sarah", "Mount Schank", 
  "Mount Serle", "Mount Templeton", "Mount Torrens", "Mount Victor Station", "Mount Vivian", "Mount Wedge", 
  "Mount Willoughby", "Moyhall", "Mudamuckla", "Mulga View", "Mulgaria", "Mulgathing", "Mulgundawa", "Mulka", 
  "Mullaquana", "Muloorina", "Mulyungarie", "Mundallio", "Mundi Mundi", "Mundic Creek", "Mundoo Island", 
  "Mundoora", "Mundowdna", "Mundulla", "Mundulla West", "Mungeranie", "Munno Para", "Munno Para Downs", 
  "Munno Para West", "Murbko", "Murdinga", "Murlong", "Murninnie Beach", "Murnpeowie", "Murrawong", 
  "Murray Bridge", "Murray Bridge East", "Murray Bridge North", "Murray Bridge South", 
  "Murray Town", "Murtho", "Muston", "Mutooroo", "Mylor", "Myola Station", "Mypolonga", "Myponga", 
  "Myponga Beach", "Myrtle Bank", "Myrtle Springs", "Nackara", "Nadia", "Naidia", "Nailsworth", "Nain", 
  "Nairne", "Nalpa", "Nalyappa", "Nanbona", "Nangkita", "Nangwarry", "Nantawarra", "Napperby", "Naracoorte", 
  "Narlaby", "Narridy", "Narrina", "Narrung", "Naturi", "Navan", "Neales Flat", "Nectar Brook", "Nelshaby", 
  "Nene Valley", "Nepabunna", "Nepean Bay", "Netherby", "Netherton", "Netley", "Netley Gap", "New Port", 
  "New Residence", "New Town", "New Well", "Newland", "Newton", "Ngapala", "Ngarkat", "Nildottie", "Nilpena", 
  "Nilpinna Station", "Ninnes", "Noarlunga Centre", "Noarlunga Downs", "Nonning", "Nora Creina", "Normanville", 
  "North Adelaide", "North Adelaide Melbourne St", "North Beach", "North Booborowie", "North Brighton", 
  "North Cape", "North Haven", "North Hills", "North Moolooloo", "North Moonta", "North Plympton", 
  "North Shields", "North West Bend", "North Yelta", "Northern Heights", "Northfield", "Northgate", 
  "Norton Summit", "Norwood", "Norwood South", "Notts Well", "Novar Gardens", "Nullarbor", "Nunjikompita", 
  "Nuriootpa", "Nurom", "O Halloran Hill", "O Sullivan Beach", "Oak Valley", "Oakbank", "Oakden", 
  "Oakden Hills", "Oaklands Park", "Oakvale Station", "Ob Flat", "Olary", "Old Calperum", "Old Noarlunga", 
  "Old Reynella", "Old Teal Flat", "Olympic Dam", "One Tree Hill", "Onkaparinga Hills", "Oodla Wirra", 
  "Oodnadatta", "Oratunga Station", "Orroroo", "Osborne", "Ottoway", "Oulnina", "Oulnina Park", "Outalpa", 
  "Outer Harbor", "Overland Corner", "Ovingham", "Owen", "Padthaway", "Paechtown", "Pages Flat", "Paisley", 
  "Palkagee", "Pallamana", "Palmer", "Pandie Pandie", "Pandurra", "Paney", "Panitya", "Panorama", "Para Hills", 
  "Para Hills West", "Para Vista", "Parachilna", "Paracombe", "Paradise", "Parafield", "Parafield Gardens", 
  "Parakylia", "Paralowie", "Paramatta", "Paratoo", "Parawa", "Parcoola", "Parham", "Parilla", "Paringa", 
  "Paris Creek", "Park Holme", "Parkside", "Parnaroo", "Parndana", "Parrakie", "Paruna", "Pasadena", 
  "Paskeville", "Pata", "Payneham", "Payneham South", "Peake", "Pearlah", "Peebinga", "Peep Hill", "Pekina", 
  "Pelican Lagoon", "Pelican Point", "Pellaring Flat", "Penfield", "Penfield Gardens", "Penneshaw", 
  "Pennington", "Penola", "Penong", "Penrice", "Penwortham", "Perlubie", "Pernatty", "Perponda", 
  "Peterborough", "Peterhead", "Petersville", "Petherick", "Petina", "Petwood", "Pewsey Vale", "Piccadilly", 
  "Piednippie", "Pike River", "Pimba", "Pimbaacla", "Pinda Springs", "Pine Creek", "Pine Creek Station", 
  "Pine Hill", "Pine Point", "Pine Valley Station", "Pinery", "Pinjarra Station", "Pinkawillinie", 
  "Pinkerton Plains", "Pinks Beach", "Pinnaroo", "Pirie East", "Pleasant Park", "Plumbago", "Plympton", 
  "Plympton Park", "Point Boston", "Point Lowly", "Point Lowly North", "Point Mcleay", "Point Pass", 
  "Point Pearce", "Point Souttar", "Point Sturt", "Point Turton", "Polda", "Polish Hill River", "Poltalloch", 
  "Pompoota", "Ponde", "Poochera", "Pooginagoric", "Pooginook", "Poonindie", "Pooraka", "Porky Flat", 
  "Port Adelaide", "Port Adelaide Dc", "Port Arthur", "Port Augusta", "Port Augusta North", 
  "Port Augusta West", "Port Bonython", "Port Broughton", "Port Davis", "Port Elliot", "Port Gawler", 
  "Port Germein", "Port Gibbon", "Port Giles", "Port Hughes", "Port Julia", "Port Kenny", "Port Lincoln", 
  "Port Lincoln South", "Port Macdonnell", "Port Mannum", "Port Moorowie", "Port Neill", "Port Noarlunga", 
  "Port Noarlunga South", "Port Paterson", "Port Pirie", "Port Pirie South", "Port Pirie West", 
  "Port Rickaby", "Port Victoria", "Port Vincent", "Port Wakefield", "Port Willunga", "Porter Lagoon", 
  "Prelinna", "Price", "Proof Range", "Prospect", "Prospect East", "Prospect Hill", "Pualco Range", "Puntabie", 
  "Punthari", "Punyelroo", "Pureba", "Purnong", "Purnong Landing", "Purple Downs", "Puttapa", "Pyap", 
  "Pyap West", "Pygery", "Qualco", "Queenstown", "Quinyambie", "Quondong", "Quorn", "Racecourse Bay", 
  "Ramco", "Ramco Heights", "Ramsay", "Rapid Bay", "Red Creek", "Redbanks", "Redhill", "Redwood Park", 
  "Reedy Creek", "Reeves Plains", "Regency Park", "Reid", "Rendelsham", "Renmark", "Renmark North", 
  "Renmark South", "Renmark West", "Renown Park", "Reynella", "Reynella East", "Rhynie", "Richmond", 
  "Ridgehaven", "Ridleyton", "Risdon Park", "Risdon Park South", "Riverglades", "Riverglen", "Riverton", 
  "Robe", "Robertstown", "Rochester", "Rockleigh", "Rocky Camp", "Rocky Gully", "Rocky Plain", "Rocky Point", 
  "Rogues Point", "Rose Park", "Rosedale", "Rosetown", "Rosewater", "Rosewater East", "Roseworthy", 
  "Rosslyn Park", "Rostrevor", "Rowland Flat", "Roxby Downs", "Roxby Downs Station", "Royal Park", 
  "Royston Park", "Rudall", "Rundle Mall", "Saddleworth", "Saints", "Salem", "Salisbury", "Salisbury Downs", 
  "Salisbury East", "Salisbury East Northbri Ave", "Salisbury Heights", "Salisbury North", 
  "Salisbury North Whites Road", "Salisbury Park", "Salisbury Plain", "Salisbury South", "Salisbury South Bc", 
  "Salisbury South Dc", "Salt Creek", "Salter Springs", "Saltia", "Sampson Flat", "Sandalwood", "Sandergrove", 
  "Sanderston", "Sandilands", "Sandleton", "Sandy Creek", "Sandy Grove", "Sapphiretown", "Sceale Bay", 
  "Schell Well", "Scott Creek", "Seacliff", "Seacliff Park", "Seacombe Gardens", "Seacombe Heights", 
  "Seaford", "Seaford Heights", "Seaford Meadows", "Seaford Rise", "Seal Bay", "Seaton", "Seaview Downs", 
  "Sebastopol", "Second Valley", "Secret Rocks", "Sedan", "Seddon", "Sefton Park", "Sellicks Beach", 
  "Sellicks Hill", "Semaphore", "Semaphore Park", "Semaphore South", "Senior", "Seppeltsfield", "Sevenhill", 
  "Shaggy Ridge", "Shaugh", "Shea Oak Log", "Sheaoak Flat", "Sheidow Park", "Sheringa", "Sherlock", 
  "Sherwood", "Short", "Siam", "Silverton", "Simpson Desert", "Skye", "Sleaford", "Smithfield", 
  "Smithfield Plains", "Smithfield West", "Smoky Bay", "Snowtown", "Solomon", "Solomontown", "Somerton Park", 
  "South Brighton", "South Gap", "South Hummocks", "South Kilkerran", "South Plympton", "Southend", 
  "Spalding", "Spectacle Lake", "Spence", "Spring Farm", "Spring Gully", "Springfield", "Springton", 
  "Square Mile", "St Agnes", "St Clair", "St Georges", "St Ives", "St Johns", "St Kilda", "St Marys", 
  "St Morris", "St Peters", "Stanley", "Stanley Flat", "Stansbury", "Station Arcade", "Steelton", "Steinfeld", 
  "Stenhouse Bay", "Stephenston", "Stepney", "Stewart Range", "Stirling", "Stirling North", "Stockport", 
  "Stockwell", "Stockyard Creek", "Stockyard Plain", "Stokes Bay", "Stone Hut", "Stone Well", "Stonefield", 
  "Stonyfell", "Stow", "Strathalbyn", "Streaky Bay", "Struan", "Strzelecki Desert", "Stuart", "Stuarts Creek", 
  "Stun Sail Boom", "Sturt", "Sturt Street", "Sturt Vale", "Sultana Point", "Summertown", "Sunlands", 
  "Sunnybrae", "Sunnydale", "Sunnyside", "Sunnyvale", "Surrey Downs", "Sutherlands", "Suttontown", 
  "Swan Reach", "Swanport", "Swede Flat", "Tailem Bend", "Taldra", "Talia", "Tantanoola", 
  "Tanunda", "Taperoo", "Taplan", "Taratap", "Tarcoola", "Tarcowie", "Tarlee", "Tarnma", "Tarpeena", 
  "Tatachilla", "Taunton", "Taylorville", "Taylorville Station", "Tea Tree Gully", "Teal Flat", "Telowie", 
  "Templers", "Tennyson", "Tepco Station", "Tepko", "Teringie", "Terowie", "The Gap", "The Pines", 
  "The Range", "Thebarton", "Thevenard", "Thomas Plain", "Thompson Beach", "Thorngate", "Thornlea", 
  "Three Creeks", "Thrington", "Thurlga", "Tiatukia", "Tickera", "Tiddy Widdy Beach", "Tikalina", 
  "Tilley Swamp", "Tintinara", "Todmorden", "Tolderol", "Tonsley", "Tooligie", "Tooperang", "Toora", 
  "Toorak Gardens", "Tootenilla", "Torrens Park", "Torrens Vale", "Torrensville", "Torrensville Plaza", 
  "Tothill Belt", "Tothill Creek", "Totness", "Towitta", "Tranmere", "Tranmere North", "Trinity Gardens", 
  "Trott Park", "Truro", "Tulka", "Tumby Bay", "Tungkillo", "Tunkalilla", "Tusmore", "Two Wells", "Tyringa", 
  "Ucolta", "Uley", "Uleybury", "Ulooloo", "Ulyerra", "Umberatana", "Undalya", "Underdale", "Ungarra", 
  "Unley", "Unley Bc", "Unley Dc", "Unley Park", "Uno", "Upalinna", "Upper Hermitage", "Upper Sturt", 
  "Uraidla", "Urania", "Urrbrae", "Uworra", "Vale Park", "Valley View", "Veitch", "Venus Bay", "Verdun", 
  "Verran", "Victor Harbor", "Victor Harbor Central", "Vine Vale", "Virginia", "Vista", "Vivonne Bay", 
  "Waddikee", "Wadnaminga", "Waikerie", "Waitpinga", "Walker Flat", "Walkerville", "Walkley Heights", 
  "Wall Flat", "Wallala", "Wallaroo", "Wallaroo Mines", "Wallaroo Plain", "Wallerberdina", "Walloway", 
  "Waltowa", "Wami Kata", "Wanbi", "Wandana", "Wandearah", "Wandearah East", "Wandearah West", "Wandilo", 
  "Wangary", "Wangolina", "Wanilla", "Wappilka", "Warburto", "Ward Belt", "Ward Hill", "Warnertown", 
  "Warnes", "Warooka", "Waroonee", "Warradale", "Warradale North", "Warramboo", "Warraweena", "Warrow", 
  "Wartaka", "Washpool", "Wasleys", "Watchman", "Waterfall Gully", "Waterloo", "Waterloo Corner", 
  "Watervale", "Watraba", "Wattle Flat", "Wattle Park", "Wattle Range", "Wattle Range East", "Waukaringa", 
  "Wauraltee", "Wayville", "Webb Beach", "Wedge Island", "Weekeroo", "Weeroona Island", "Weetulta", 
  "Welbourn Hill", "Welland", "Wellington", "Wellington East", "Wepar", "Wepowie", "Wertaloona", 
  "West Beach", "West Bundaleer", "West Croydon", "West Hindmarsh", "West Lakes", "West Lakes Shore", 
  "West Range", "West Richmond", "Westall", "Westbourne Park", "Western Flat", "Western River", 
  "Westons Flat", "Wharminda", "White Hill", "White Hut", "White Sands", "White Well Corner", "Whites Flat", 
  "Whites River", "Whites Valley", "Whitwarta", "Whyalla", "Whyalla Barson", "Whyalla Dc", "Whyalla Jenkins", 
  "Whyalla Norrie", "Whyalla Norrie East", "Whyalla Norrie North", "Whyalla Playford", "Whyalla Stuart", 
  "Whyte Yarcowie", "Wiawera", "Wigley Flat", "Wilcherry", "Wilcowie", "Wild Dog Valley", "Wild Horse Plains", 
  "Wilgena", "Wilkatana Station", "Wilkawatt", "Willalo", "Willalooka", "Willamulka", "Willaston", 
  "William Creek", "Williamstown", "Willippa", "Willochra", "Willoughby", "Willow Banks", "Willow Creek", 
  "Willow Springs", "Willowie", "Willson River", "Willunga", "Willunga Hill", "Willunga South", "Willyaroo", 
  "Wilmington", "Windsor", "Windsor Gardens", "Wingfield", "Winkie", "Winnininnie", "Winninowie", 
  "Wintabatinyana", "Wintinna", "Winulta", "Wirrabara", "Wirraminna", "Wirrealpa", "Wirrega", "Wirrina Cove", 
  "Wirrulla", "Wisanger", "Wistow", "Witchelina", "Witchitie", "Witera", "Witjira", "Wokurna", "Wolseley", 
  "Wombats Rest", "Wompinie", "Wongulla", "Wongyarra", "Wonna", "Wonuarra", "Woodchester", "Woodcroft", 
  "Woodforde", "Woodlane", "Woodleigh", "Woods Point", "Woodside", "Woodville", "Woodville Gardens", 
  "Woodville North", "Woodville Park", "Woodville South", "Woodville West", "Wool Bay", "Woolpunda", 
  "Woolshed Flat", "Woolsheds", "Wooltana", "Woolumbool", "Woolundunga", "Woomera", "Worlds End", 
  "Worrolong", "Worumba", "Wrattonbully", "Wudinna", "Wunkar", "Wye", "Wynarka", "Wynn Vale", "Wyomi", 
  "Yacka", "Yadlamalka", "Yahl", "Yalanda", "Yalata", "Yalpara Flat", "Yalpara", "Yalymboo", "Yamba", 
  "Yanerbie", "Yaninee", "Yankalilla", "Yankaninna", "Yantanabie", "Yanyarrie", "Yardea", "Yarramba", 
  "Yatala Vale", "Yatina", "Yattalunga", "Yeelanna", "Yellabinna", "Yelta", "Yeltana", "Yinkanie", 
  "Yongala", "Yorke Valley", "Yorketown", "Younghusband", "Younghusband Holdings", "Yudnapinna", 
  "Yumali", "Yumbarra", "Yundi", "Yunta", "Zadows Landing",
  // Adding the new cities
  "Aberfoyle Park", "Abminga Station", "Adelaide", "Adelaide Airport", "Adelaide Bc", "Agery", "Alawoona", 
  "Albert Park", "Alberton", "Aldgate", "Aldinga", "Aldinga Beach", "Alford", "Allandale Station", 
  "Allenby Gardens", "Allendale East", "Allendale North", "Alma", "Alpana", "Alton Downs Station", "Altona", 
  "American Beach", "American River", "Amyton", "Anama", "Andamooka", "Andamooka Station", "Andrews", 
  "Andrews Farm", "Angas Plains", "Angas Valley", "Angaston", "Angepena", "Angle Park", "Angle Vale", 
  "Angorigina", "Anna Creek", "Annadale", "Antechamber Bay", "Apamurra", "Apoinga", "Appila", "Arckaringa", 
  "Arcoona", "Ardrossan", "Arkaroola", "Arkaroola Village", "Armagh", "Arno Bay", "Arthurton", "Ascot Park", 
  "Ashbourne", "Ashford", "Ashton", "Ashville", "Athelstone", "Athol Park", "Auburn", "Auldana", 
  "Australia Plains", "Avenue Range", "Avoca Dell", "Avon", "Back Valley", "Backy Point", "Bagot Well", 
  "Baird Bay", "Bakara", "Bakara Well", "Balah", "Balaklava", "Bald Hills", "Baldina", "Balgowan", 
  "Balhannah", "Ballast Head", "Bangham", "Bangor", "Banksia Park", "Barabba", "Baratta", "Barinia", 
  "Barmera", "Barna", "Barndioota", "Baroota", "Barossa Goldfields", "Barunga Gap", "Basket Range", 
  "Baudin Beach", "Bay Of Shoals", "Beachport", "Beatty", "Beaufort", "Beaumont", "Beaumonts", "Bedford Park", 
  "Beetaloo Valley", "Belair", "Belalie East", "Belalie North", "Bellevue Heights", "Beltana", 
  "Beltana Station", "Belton", "Belvidere", "Benbournie", "Benda", "Berri", "Bethany", "Bethel", 
  "Beulah Park", "Beverley", "Bibaringa", "Bibliando", "Big Bend", "Biggs Flat", "Billa Kalina", "Billiatt", 
  "Bimbowrie", "Bindarrah", "Binnum", "Birchmore", "Birdwood", "Birkenhead", "Black Forest", "Black Hill", 
  "Black Hill Station", "Black Point", "Black Rock", "Black Springs", "Blackfellows Caves", 
  "Blackfellows Creek", "Blackford", "Blackwood", "Blair Athol", "Blakeview", "Blakiston", "Blanche Harbor", 
  "Blanchetown", "Bletchley", "Blewitt Springs", "Blinman", "Bluff Beach", "Blyth", "Boatswain Point", 
  "Bockelberg", "Boconnoc Park", "Bolivar", "Bollards Lagoon", "Bolto", "Bon Bon", "Booborowie", "Bookabie", 
  "Bookpurnong", "Bool Lagoon", "Boolcoomatta", "Booleroo Centre", "Boolgun", "Boonerdo", "Boors Plain", 
  "Bordertown", "Bordertown South", "Borrika", "Boston", "Bosworth", "Bowden", "Bower", "Bowhill", "Bowillia", 
  "Bowmans", "Bradbury", "Brady Creek", "Brahma Lodge", "Bramfield", "Bray", "Brenda Park", "Brentwood", 
  "Bridgewater", "Bright", "Brighton", "Brimbago", "Brinkley", "Brinkworth", "Broadview", "Brompton", 
  "Brooker", "Brooklyn Park", "Broughton River Valley", "Brown Beach", "Brown Hill Creek", "Brownlow", 
  "Brownlow Ki", "Bruce", "Brukunga", "Buchanan", "Buchfelde", "Buckingham", "Buckland Park", "Buckleboo", 
  "Bugle Hut", "Bugle Ranges", "Bulgunnia", "Bull Creek", "Bulloo Creek", "Bumbunga", "Bunbury", 
  "Bundaleer Gardens", "Bundaleer North", "Bundey", "Bungama", "Bungaree", "Bungeroo", "Bunyung", "Burdett", 
  "Burnsfield", "Burnside", "Burr Well", "Burra", "Burra Eastern Districts", "Burrungule", "Burton", "Bute", 
  "Butler", "Cadell", "Cadell Lagoon", "Cadgee", "Calca", "Caliph", "Callanna", "Callington", "Calomba", 
  "Caloote", "Calperum Station", "Caltowie", "Caltowie North", "Caltowie West", "Cambrai", "Camden Park", 
  "Campbelltown", "Campoona", "Canegrass", "Cannawigara", "Canowie", "Canowie Belt", "Canunda", "Cape Borda", 
  "Cape Douglas", "Cape Jaffa", "Cape Jervis", "Caralue", "Carawa", "Carcuma", "Carew", "Carey Gully", 
  "Caroline", "Carpenter Rocks", "Carrickalinga", "Carrieton", "Carriewerloo", "Cassini", "Castambul", 
  "Caurnamont", "Cavan", "Cavenagh", "Caveton", "Ceduna", "Chaffey", "Chain Of Ponds", "Chandada", 
  "Chandlers Hill", "Chapel Hill", "Chapman Bore", "Charleston", "Charlton Gully", "Charra", "Cheltenham", 
  "Cherry Gardens", "Cherryville", "Chilpenunda", "Chinaman Wells", "Chinbingina", "Chowilla", "Christie Downs", 
  "Christies Beach", "Christies Beach North", "Chundaria", "City West Campus", "Clapham", "Clare", 
  "Clarence Gardens", "Clarence Park", "Clarendon", "Clay Wells", "Claypans", "Clayton Bay", "Clayton Station", 
  "Clearview", "Cleland", "Clements Gap", "Cleve", "Clifton Hills Station", "Clinton", "Clinton Centre", 
  "Clovelly Park", "Cobdogla", "Cocata", "Cockaleechie", "Cockatoo Valley", "Cockburn", "Coffin Bay", 
  "Colebatch", "Coles", "College Park", "Colley", "Collinsfield", "Collinsville", "Collinswood", 
  "Colonel Light Gardens", "Colton", "Comaum", "Commissariat Point", "Commonwealth Hill", "Compton", 
  "Concordia", "Condowie", "Conmurra", "Coober Pedy", "Coobowie", "Cook", "Cooke Plains", "Coolillie", 
  "Cooltong", "Coomandook", "Coombe", "Coomooroo", "Coomunga", "Coonalpyn", "Coonamia", "Coonawarra", 
  "Coondambo", "Coopers Creek", "Coorabie", "Coorong", "Cootra", "Cooyerdoo", "Copeville", "Copley", 
  "Cordillo Downs", "Corny Point", "Coromandel East", "Coromandel Valley", "Cortlinye", "Corunna Station", 
  "Couch Beach", "Coulta", "Cowandilla", "Cowarie", "Cowell", "Cowirra", "Cowleds Landing", "Cradock", 
  "Crafers", "Crafers West", "Craigburn Farm", "Craigmore", "Crescent", "Cromer", "Cross Roads", "Crown Point", 
  "Croydon", "Croydon Park", "Crystal Brook", "Cudlee Creek", "Culburra", "Cultana", "Cumberland Park", 
  "Cummins", "Cungena", "Cunliffe", "Cunningham", "Cunyarie", "Curnamona", "Curramulka", "Currency Creek", 
  "Custon", "Cuttlefish Bay", "Cygnet River", "D Estrees Bay", "Dalkey", "Danggali", "Darke Peak", 
  "Darlington", "Davenport", "Daveyston", "Davoren Park", "Davoren Park South", "Daw Park", "Dawesley", 
  "Dawson", "De Mole River", "Deep Creek", "Deepwater", "Delamere", "Denial Bay", "Dernancourt", 
  "Devlins Pound", "Devon Park", "Devonborough Downs", "Dingabledinga", "Direk", "Dismal Swamp", "Donovans", 
  "Dorset Vale", "Douglas Point", "Douglas Point South", "Dover Gardens", "Dowlingville", "Dry Creek", 
  "Dublin", "Duck Ponds", "Dudley East", "Dudley Park", "Dudley West", "Dulkaninna", "Dulwich", "Duncan", 
  "Dutton", "Dutton East", "East Moonta", "Eastwood", "Eba", "Eba Anchorage", "Ebenezer", "Echunga", 
  "Eden Hills", "Eden Valley", "Ediacara", "Edillilie", "Edinburgh", "Edinburgh North", "Edinburgh Raaf", 
  "Edithburgh", "Edwardstown", "Eight Mile Creek", "Elizabeth", "Elizabeth Downs", "Elizabeth East", 
  "Elizabeth Grove", "Elizabeth North", "Elizabeth Park", "Elizabeth South", "Elizabeth Vale", 
  "Elizabeth West Dc", "Elliston", "Elwomple", "Emeroo", "Emu Bay", "Emu Downs", "Emu Flat", "Encounter Bay", 
  "Enfield", "Enfield Plaza", "Erindale", "Eringa", "Erith", "Erskine", "Erudina", "Etadunna", "Ethelton", 
  "Ettrick", "Eudunda", "Eurelia", "Euromina", "Evandale", "Evanston", "Evanston Gardens", "Evanston Park", 
  "Evanston South", "Evelyn Downs", "Everard Central", "Everard Park", "Exeter", "Export Park", 
  "Fairview Park", "False Bay", "Faraway Hill", "Farina", "Farina Station", "Farm Beach", "Farrell Flat", 
  "Felixstow", "Ferryden Park", "Field", "Findon", "Finniss", "Firle", "Fischer", "Fisher", "Fisherman Bay", 
  "Fitzgerald Bay", "Fitzroy", "Five Miles", "Flagstaff Hill", "Flaxley", "Flaxman Valley", "Flinders Chase", 
  "Flinders Park", "Flinders Ranges", "Flinders University", "Florina Station", "Fords", "Forest Range", 
  "Forestville", "Forreston", "Forster", "Foul Bay", "Fountain", "Fowlers Bay", "Fox", "Frahns", "Frances", 
  "Franklyn", "Frankton", "Frayville", "Freeling", "Frewville", "Frome Downs", "Fulham", "Fulham Gardens", 
  "Fullarton", "Furner", "Galga", "Gammon Ranges", "Gawler", "Gawler Belt", "Gawler East", "Gawler Ranges", 
  "Gawler River", "Gawler South", "Gawler West", "Gemmells", "Georgetown", "Gepps Cross", "Geranium", 
  "Geranium Plains", "Gerard", "German Creek", "German Flat", "Germein Bay", "Gidgealpa", "Gifford Hill", 
  "Gilberton", "Giles Corner", "Gillentown", "Gilles Downs", "Gilles Plains", "Gillman", "Gladstone", 
  "Glandore", "Glanville", "Glen Osmond", "Glenalta", "Glenburnie", "Glencoe", "Glencoe West", "Glendambo", 
  "Glenelg", "Glenelg East", "Glenelg Jetty Road", "Glenelg North", "Glenelg South", "Glengowrie", "Glenroy", 
  "Glenside", "Glenunga", "Globe Derby Park", "Glossop", "Gluepot", "Glynde", "Glynde Dc", "Glynde Plaza", 
  "Golden Grove", "Golden Grove Village", "Golden Heights", "Gomersal", "Good Hope Landing", "Goodwood", 
  "Goolwa", "Goolwa Beach", "Goolwa North", "Goolwa South", "Gosse", "Gould Creek", "Goyder", "Grace Plains", 
  "Grampus", "Grange", "Green Fields", "Green Hills Range", "Green Patch", "Greenacres", "Greenbanks", 
  "Greenhill", "Greenock", "Greenways", "Greenwith", "Gulfview Heights", "Gulnare", "Gum Creek", 
  "Gum Creek Station", "Gumeracha", "Gurra Gurra", "Hackham", "Hackham West", "Hacklins Corner", "Hackney", 
  "Hahndorf", "Haines", "Halbury", "Halidon", "Halifax Street", "Hallelujah Hills", "Hallett", "Hallett Cove", 
  "Hambidge", "Hamilton", "Hamley", "Hamley Bridge", "Hammond", "Hampden", "Hampstead Gardens", "Hansborough", 
  "Hanson", "Happy Valley", "Hardwicke Bay", "Hardy", "Harrogate", "Hart", "Hartley", "Haslam", "Hatherleigh", 
  "Hawker", "Hawks Nest Station", "Hawson", "Hawthorn", "Hawthorndene", "Hay Flat", "Hay Valley", "Hayborough", 
  "Hazelwood Park", "Heathfield", "Heathpool", "Hectorville", "Hendon", "Henley Beach", "Henley Beach South", 
  "Hewett", "Highbury", "Highgate", "Highland Valley", "Hill River", "Hillbank", "Hillcrest", "Hillier", 
  "Hilltown", "Hiltaba", "Hilton", "Hilton Plaza", "Hincks", "Hindmarsh", "Hindmarsh Island", "Hindmarsh Tiers", 
  "Hindmarsh Valley", "Holden Hill", "Holder", "Holder Siding", "Holowiliena", "Holowiliena South", "Honiton", 
  "Hope Forest", "Hope Gap", "Hope Valley", "Hornsdale", "Horsnell Gully", "Hoskin Corner", "Houghton", "Hove", 
  "Hoyleton", "Huddleston", "Humbug Scrub", "Huntfield Heights", "Hutt Street", "Hyde Park", "Hynam", "Illeroo", 
  "Ingle Farm", "Inglewood", "Ingomar", "Inkerman", "Inkster", "Inman Valley", "Innamincka", "Inneston", 
  "Inverbrackie", "Iron Baron", "Iron Knob", "Ironbank", "Ironstone", "Island Beach", "Island Lagoon", "Jabuk", 
  "James Well", "Jamestown", "Jamieson", "Jericho", "Jerusalem", "Jervois", "Joanna", "Johnburgh", "Joslin", 
  "Julanka Holdings", "Julia", "Jupiter Creek", "Kadina", "Kainton", "Kalabity", "Kalamurina", "Kalanbi", 
  "Kalangadoo", "Kalbeeba", "Kaldoonera", "Kalkaroo", "Kallora", "Kangarilla", "Kangaroo Flat", 
  "Kangaroo Head", "Kangaroo Inn", "Kanmantoo", "Kanni", "Kanyaka", "Kapinnie", "Kappawanta", "Kapunda", 
  "Karatta", "Karcultaby", "Karkoo", "Karoonda", "Karte", "Katarapko", "Katunga Station", "Keilira", "Keith", 
  "Kellidie Bay", "Kelly", "Kensington", "Kensington Gardens", "Kensington Park", "Kent Town", "Kenton Valley", 
  "Kepa", "Keppoch", "Kersbrook", "Keswick", "Keswick Terminal", "Keyneton", "Ki Ki", "Kiana", "Kidman Park", 
  "Kielpa", "Kilburn", "Kilburn North", "Kilkenny", "Kimba", "Kingoonya", "Kings Park", "Kingscote", 
  "Kingsford", "Kingston On Murray", "Kingston Park", "Kingston Se", "Kingswood", "Klemzig", "Kohinoor", 
  "Kokatha", "Kolendo", "Kondoolka", "Kongal", "Kongolia", "Kongorong", "Koolgera", "Koolunga", "Koolywurtie", 
  "Koonamore", "Koongawa", "Koonibba", "Koonoona", "Koonunga", "Koorine", "Kooroona"
].map((cityName) => {
  const slug = cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
  return {
    id: slug,
    name: cityName,
    slug: slug,
    state: "South Australia",
    country: "Australia",
    image: "/placeholder.svg"
  };
});

const allAustralianCities = [
  ...australianCities, 
  ...additionalCities, 
  ...newSouthWalesCities,
  ...victoriaCities,
  ...queenslandCities,
  ...westernAustraliaCities,
  ...northernTerritoryCities,
  ...actCities,
  ...tasmanianCities, 
  ...southAustralianCities
];

export { 
  allAustralianCities, 
  australianCities, 
  additionalCities, 
  newSouthWalesCities,
  victoriaCities,
  queenslandCities,
  westernAustraliaCities,
  northernTerritoryCities,
  actCities,
  tasmanianCities, 
  southAustralianCities 
};
