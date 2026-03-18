// Location data with all Australian cities organized by state

export interface Location {
  id: string;
  name: string;
  slug: string;
  state: string;
  country: string;
  description?: string;
  image?: string;
  population?: number;
  metaTitle?: string;
  metaDescription?: string;
  county?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Major Australian cities with full metadata
export const australianCities: Location[] = [
  { id: "sydney", name: "Sydney", slug: "sydney", state: "New South Wales", country: "Australia", description: "Australia's largest city and a global financial hub known for its iconic Opera House and Harbour Bridge.", image: "/images/cities/sydney.jpg", population: 5312000 },
  { id: "melbourne", name: "Melbourne", slug: "melbourne", state: "Victoria", country: "Australia", description: "Cultural capital of Australia, known for its vibrant arts scene, coffee culture, and sporting events.", image: "/images/cities/melbourne.jpg", population: 5078000 },
  { id: "brisbane", name: "Brisbane", slug: "brisbane", state: "Queensland", country: "Australia", description: "Subtropical capital city known for its outdoor lifestyle and proximity to the Gold and Sunshine Coasts.", image: "/images/cities/brisbane.jpg", population: 2514000 },
  { id: "perth", name: "Perth", slug: "perth", state: "Western Australia", country: "Australia", description: "Western Australia's capital, known for its beaches, parks, and as a gateway to the Outback.", image: "/images/cities/perth.jpg", population: 2085000 },
  { id: "adelaide", name: "Adelaide", slug: "adelaide", state: "South Australia", country: "Australia", description: "South Australia's coastal capital, known for its festivals, wine regions, and colonial architecture.", image: "/images/cities/adelaide.jpg", population: 1376000 },
];

// Additional major cities
export const additionalCities: Location[] = [];

// New South Wales cities
export const newSouthWalesCities: Location[] = [];

// Victoria cities
export const victoriaCities: Location[] = [];

// Queensland cities
export const queenslandCities: Location[] = [];

// South Australia cities
export const southAustraliaCities: Location[] = [];

// Western Australia cities
export const westernAustraliaCities: Location[] = [];

// Tasmania cities
export const tasmaniaCities: Location[] = [];

// Northern Territory cities
export const northernTerritoryCities: Location[] = [];

// Australian Capital Territory cities
export const australianCapitalTerritoryCities: Location[] = [];

// Export all cities as a single array
export const allAustralianCities = [
  ...australianCities,
  ...additionalCities,
  ...newSouthWalesCities,
  ...victoriaCities,
  ...queenslandCities,
  ...southAustraliaCities,
  ...westernAustraliaCities,
  ...tasmaniaCities,
  ...northernTerritoryCities,
  ...australianCapitalTerritoryCities,
];
