export interface Product {
  slug: string
  number: number
  name: string
  nameWithTM: string
  tagline: string
  description: string
  fullDescription: string
  notes: {
    top: string[]
    heart: string[]
    base: string[]
  }
  longevity: string
  projection: string
  climateOptimized: boolean
  prices: { [size: string]: number }
  image: string
  packaging: string
  lifestyle: string
  tags: string[]
  energy: 'Power' | 'Desire' | 'Charm' | 'Presence'
  featured: boolean
  new: boolean
  bestSeller: boolean
  region: 'Global' | 'India Core'
  occasion: string[]
  gender: 'Male' | 'Female' | 'Unisex'
}

export const products: Product[] = [
  {
    slug: 'nefertum-no-8',
    number: 8,
    name: 'Nefertum No. 8',
    nameWithTM: 'Nefertum No. 8 — The Signature of Power',
    tagline: 'The authority of presence',
    description: 'A bold declaration of power and prestige',
    fullDescription: 'Nefertum No. 8 is engineered for those who command presence. Inspired by ancient Egypt\'s god of fragrance, this unisex luxury perfume blends premium spices, amber, and saffron into a composition that lasts 8-10 hours in heat and humidity. Designed by Power energy. Engineered for Indian climate.',
    notes: {
      top: ['Saffron', 'Bergamot', 'Black Pepper'],
      heart: ['Amber', 'Oud', 'Cinnamon'],
      base: ['Cedarwood', 'Musk', 'Vanilla']
    },
    longevity: '8–10 hours',
    projection: 'Strong',
    climateOptimized: true,
    prices: {
      '30ml': 3999,
      '50ml': 5999,
      '100ml': 8999
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-5_page-0001-5GnLDWjJRuMhELbEGsS41MMqgmnDt2.jpg',
    packaging: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-7_page-0001-wekGMaiyAYJIofsC5TlEqwoZk7X8MF.jpg',
    lifestyle: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-4_page-0001-Ti3HnAiwatPTLLl5RYl0rCOvTDifJZ.jpg',
    tags: ['Premium', 'Unisex', 'Global', 'Luxury'],
    energy: 'Power',
    featured: true,
    new: false,
    bestSeller: true,
    region: 'Global',
    occasion: ['Daily', 'Evening', 'Luxury'],
    gender: 'Unisex'
  },
  {
    slug: 'aphrodite-no-1',
    number: 1,
    name: 'Aphrodite No. 1',
    nameWithTM: 'Aphrodite No. 1 — The Power of Desire',
    tagline: 'Desire meets elegance',
    description: 'A sensual feminine fragrance for those who command the room',
    fullDescription: 'Inspired by Aphrodite, goddess of love and desire, this premium feminine perfume is crafted for evening moments and special occasions. With notes of rose, jasmine, and musk, Aphrodite No. 1 creates a lasting, confident presence. Better suited for passionate, powerful women.',
    notes: {
      top: ['Rose', 'Peony', 'Blackcurrant'],
      heart: ['Jasmine', 'Tuberose', 'Geranium'],
      base: ['Musk', 'Sandalwood', 'Ambroxan']
    },
    longevity: '7–9 hours',
    projection: 'Strong',
    climateOptimized: true,
    prices: {
      '30ml': 3999,
      '50ml': 5999,
      '100ml': 8999
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-5_page-0001-5GnLDWjJRuMhELbEGsS41MMqgmnDt2.jpg',
    packaging: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-7_page-0001-wekGMaiyAYJIofsC5TlEqwoZk7X8MF.jpg',
    lifestyle: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-4_page-0001-Ti3HnAiwatPTLLl5RYl0rCOvTDifJZ.jpg',
    tags: ['Premium', 'Feminine', 'Evening', 'Luxury'],
    energy: 'Desire',
    featured: true,
    new: false,
    bestSeller: true,
    region: 'Global',
    occasion: ['Evening', 'Special Occasions', 'Luxury'],
    gender: 'Female'
  },
  {
    slug: 'aphrodite-no-3',
    number: 3,
    name: 'Aphrodite No. 3',
    nameWithTM: 'Aphrodite No. 3 — Everyday Fresh Luxury',
    tagline: 'Freshness for your climate',
    description: 'Daily wear elegance, engineered for heat and humidity',
    fullDescription: 'Aphrodite No. 3 is crafted specifically for India\'s climate. This fresh, feminine daily wear fragrance delivers charm in every moment with top notes of citrus and white florals. Built for real conditions—heat, humidity, and lasting presence. Charm energy for everyday confidence.',
    notes: {
      top: ['Neroli', 'Lemon', 'Grapefruit'],
      heart: ['White Musk', 'Freesia', 'Lily of the Valley'],
      base: ['Cedarwood', 'Musk', 'Coconut']
    },
    longevity: '6–8 hours',
    projection: 'Moderate',
    climateOptimized: true,
    prices: {
      '30ml': 2499,
      '50ml': 3999
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-5_page-0001-5GnLDWjJRuMhELbEGsS41MMqgmnDt2.jpg',
    packaging: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-7_page-0001-wekGMaiyAYJIofsC5TlEqwoZk7X8MF.jpg',
    lifestyle: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-4_page-0001-Ti3HnAiwatPTLLl5RYl0rCOvTDifJZ.jpg',
    tags: ['Fresh', 'Feminine', 'Daily Wear', 'India Core'],
    energy: 'Charm',
    featured: false,
    new: false,
    bestSeller: true,
    region: 'India Core',
    occasion: ['Daily', 'Work', 'Casual'],
    gender: 'Female'
  },
  {
    slug: 'nefertum-no-6',
    number: 6,
    name: 'Nefertum No. 6',
    nameWithTM: 'Nefertum No. 6 — Confident Presence',
    tagline: 'Engineered for your day',
    description: 'Premium masculine daily wear for the Indian climate',
    fullDescription: 'Nefertum No. 6 is engineered specifically for men navigating India\'s heat and humidity. With a carefully balanced blend of fresh woods, spice, and clean musk, this daily wear fragrance projects confidence for 6-8 hours. Presence energy—lasting performance when it matters most.',
    notes: {
      top: ['Cardamom', 'Ginger', 'Apple'],
      heart: ['Vetiver', 'Lavender', 'Sage'],
      base: ['Cedarwood', 'Musk', 'Tonka Bean']
    },
    longevity: '6–8 hours',
    projection: 'Moderate',
    climateOptimized: true,
    prices: {
      '50ml': 3999,
      '100ml': 5999
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-5_page-0001-5GnLDWjJRuMhELbEGsS41MMqgmnDt2.jpg',
    packaging: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-7_page-0001-wekGMaiyAYJIofsC5TlEqwoZk7X8MF.jpg',
    lifestyle: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brand%20Guideline-4_page-0001-Ti3HnAiwatPTLLl5RYl0rCOvTDifJZ.jpg',
    tags: ['Fresh', 'Masculine', 'Daily Wear', 'India Core'],
    energy: 'Presence',
    featured: false,
    new: false,
    bestSeller: true,
    region: 'India Core',
    occasion: ['Daily', 'Work', 'Sports'],
    gender: 'Male'
  }
]

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug)
}

export const getProductsByRegion = (region: 'Global' | 'India Core'): Product[] => {
  return products.filter(p => p.region === region)
}

export const getProductsByEnergy = (energy: 'Power' | 'Desire' | 'Charm' | 'Presence'): Product[] => {
  return products.filter(p => p.energy === energy)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured)
}

export const getBestSellers = (): Product[] => {
  return products.filter(p => p.bestSeller)
}
