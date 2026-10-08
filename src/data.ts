export type Size = { id: string; label: string; price: number }

export type Product = {
  id: string
  slug: string
  name: string
  short: string
  description: string
  category: 'ghee' | 'fresh'
  badge?: string
  image: string
  gallery: string[]
  sizes: Size[]
  highlights: string[]
  shipping: string
  facts: { label: string; value: string }[]
  rating: number
  reviewCount: number
}

export type Story = {
  name: string
  place: string
  quote: string
  image: string
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  minutes: number
  paragraphs: string[]
}

const eliteSizes: Size[] = [
  { id: '500', label: '500 ml', price: 1349 },
  { id: '1l', label: '1 L', price: 2499 },
  { id: '2l', label: '2 L', price: 4799 },
  { id: '5l', label: '5 L', price: 12495 },
  { id: '10l', label: '10 L', price: 24990 },
  { id: '50l', label: '50 L', price: 124950 },
]

const standardSizes: Size[] = [
  { id: '500', label: '500 ml', price: 949 },
  { id: '1l', label: '1 L', price: 1799 },
  { id: '2l', label: '2 L', price: 3499 },
  { id: '5l', label: '5 L', price: 8995 },
  { id: '10l', label: '10 L', price: 17990 },
  { id: '50l', label: '50 L', price: 89950 },
]

function gheeJar(line: 'elite' | 'standard', size: Size): Product {
  const elite = line === 'elite'
  const tin = size.id === '50l'
  return {
    id: `${line}-${size.id}`,
    slug: `${line}-ghee-${size.id}`,
    name: `${elite ? 'Elite' : 'Standard'} Ghee · ${size.label}`,
    short: elite
      ? 'Bilona ghee in the dark green and gold jar, for the table you are proud of.'
      : 'The everyday jar: cream label, gold lid, same farms.',
    description: elite
      ? 'Elite ghee is bilona ghee from the morning milk of indigenous cows that graze in the open. The curd is set slowly, the butter is churned by hand, and the ghee is clarified until the colour turns deep gold. The pack is the dark green label with gold lettering.'
      : 'Standard ghee comes from the same farms: desi cow milk, cultured and cooked the slow way, without preservatives. The pack is the cream label with the gold lid.',
    category: 'ghee',
    badge: elite ? 'Elite' : 'Standard',
    image: `/images/${line}-${size.id}.jpg`,
    gallery: [`/images/${line}-${size.id}.jpg`, '/images/ghee-pour.jpg', elite ? '/images/bilona-wood.jpg' : '/images/farm-morning.jpg'],
    sizes: [size],
    highlights: elite
      ? ['A2 milk from indigenous cows', 'Traditional bilona method', 'Dark green label, gold lettering', 'Slow-cultured in small batches']
      : ['Pure desi cow milk', 'Traditional slow method', 'Cream label, gold lid', 'A daily jar at a fair price'],
    shipping: tin ? 'Ships across India as a sealed catering tin.' : 'Ships across India in a sealed jar.',
    facts: [
      { label: 'Pack', value: size.label },
      { label: 'Method', value: elite ? 'Bilona, small batch' : 'Slow cultured' },
      { label: 'Additives', value: 'None' },
      { label: 'Best for', value: tin ? 'Kitchens, sweet shops, hotels' : 'Everyday cooking and finishing' },
    ],
    rating: elite ? 4.9 : 4.8,
    reviewCount: elite ? 128 : 96,
  }
}

export const products: Product[] = [
  ...eliteSizes.map((size) => gheeJar('elite', size)),
  ...standardSizes.map((size) => gheeJar('standard', size)),
  {
    id: 'paneer',
    slug: 'fresh-paneer',
    name: 'Fresh Paneer',
    short: 'Soft, farm-set paneer from the morning milk.',
    description:
      'Set from fresh cow milk and pressed just enough to stay soft. It cubes cleanly for curries and holds its own on a hot tawa. Packed the morning it leaves the farm.',
    category: 'fresh',
    badge: 'Farm Fresh',
    image: '/images/paneer.jpg',
    gallery: ['/images/paneer.jpg'],
    sizes: [
      { id: '200g', label: '200 g', price: 220 },
      { id: '400g', label: '400 g', price: 400 },
    ],
    highlights: ['Set from fresh cow milk', 'Soft, clean cubes', 'No fillers', 'Packed the same morning'],
    shipping: 'City delivery. Packed cold the morning it leaves.',
    facts: [
      { label: 'Style', value: 'Soft malai paneer' },
      { label: 'Milk', value: 'Cow milk' },
      { label: 'Packed', value: 'Same morning' },
      { label: 'Keep', value: 'Refrigerated' },
    ],
    rating: 4.7,
    reviewCount: 54,
  },
  {
    id: 'chaach',
    slug: 'village-chaach',
    name: 'Village Chaach',
    short: 'Thin, salted buttermilk with roasted cumin.',
    description:
      'Chaach churned from the day’s curd, thinned with water, and finished with roasted cumin. It is the drink that follows a heavy lunch — cool, savoury, and lightly spiced.',
    category: 'fresh',
    badge: 'Farm Fresh',
    image: '/images/chaach.jpg',
    gallery: ['/images/chaach.jpg'],
    sizes: [{ id: '250ml', label: '250 ml', price: 40 }],
    highlights: ['Churned from fresh curd', 'Salted, with roasted cumin', 'No syrup', 'Best drunk cold'],
    shipping: 'City delivery. Packed cold the morning it leaves.',
    facts: [
      { label: 'Style', value: 'Salted chaach' },
      { label: 'Base', value: 'Fresh curd' },
      { label: 'Packed', value: 'Same morning' },
      { label: 'Keep', value: 'Refrigerated' },
    ],
    rating: 4.6,
    reviewCount: 28,
  },
  {
    id: 'lassi',
    slug: 'village-lassi',
    name: 'Village Lassi',
    short: 'Refreshing, naturally cultured, lightly salted.',
    description:
      'Churned from the day’s curd with a pinch of roasted cumin and salt. No syrups, no fizz, just a cold glass that belongs next to a heavy lunch.',
    category: 'fresh',
    badge: 'Farm Fresh',
    image: '/images/lassi.jpg',
    gallery: ['/images/lassi.jpg'],
    sizes: [{ id: '250ml', label: '250 ml', price: 50 }],
    highlights: ['Churned from fresh curd', 'Lightly salted', 'No syrup', 'Best drunk cold'],
    shipping: 'City delivery. Packed cold the morning it leaves.',
    facts: [
      { label: 'Style', value: 'Salted lassi' },
      { label: 'Base', value: 'Fresh curd' },
      { label: 'Packed', value: 'Same morning' },
      { label: 'Keep', value: 'Refrigerated' },
    ],
    rating: 4.6,
    reviewCount: 33,
  },
]

export const stories: Story[] = [
  {
    name: 'Ananya S.',
    place: 'Mumbai',
    quote:
      'The premium jar smells like the ghee my grandmother kept. One spoon on hot rice and the whole kitchen changes.',
    image: '/images/avatar-ananya.jpg',
  },
  {
    name: 'Rahul Mehta',
    place: 'Pune',
    quote:
      'We switched the house to Okat after the first tin. The grain is clean, and it does not taste flat the way factory tins do.',
    image: '/images/avatar-rahul.jpg',
  },
  {
    name: 'Chef Vikram',
    place: 'Jaipur',
    quote:
      'I wanted a bulk ghee for the restaurant that still tasted like a home kitchen. Okat’s standard jar holds up in dal and in sweets.',
    image: '/images/avatar-vikram.jpg',
  },
]

export const posts: Post[] = [
  {
    slug: 'what-bilona-changes',
    title: 'What bilona changes in the jar',
    excerpt: 'A slow churn is not nostalgia. It is how the grain, the colour, and the smell get into the ghee.',
    image: '/images/bilona-wood.jpg',
    date: '12 March 2026',
    minutes: 4,
    paragraphs: [
      'Bilona is the wooden churn. Milk becomes curd, curd is churned until butter rises, and that butter is cooked down into ghee. The jar you open later still carries the pace of that work.',
      'We set the curd in small pots and churn in batches a kitchen can still watch. Large industrial separators are faster. They also strip the process of the moment when butter and buttermilk part company.',
      'When the butter meets a low flame, moisture leaves, the colour deepens, and the grain settles at the bottom of the pot. That grain is the quiet sign the ghee was cooked, not merely poured.',
      'None of this is a medical promise. It is a method. If you have cooked with both, you already know the difference on a hot phulka.',
    ],
  },
  {
    slug: 'morning-on-the-pasture',
    title: 'A morning on the pasture',
    excerpt: 'Before the jar, there is grass, shade, and cows that are not standing in a line.',
    image: '/images/cows-pasture.jpg',
    date: '2 February 2026',
    minutes: 3,
    paragraphs: [
      'The farms we work with keep indigenous cows on open ground. Mornings start with grazing, not with a trough pushed up to a stall.',
      'Shade trees matter as much as the grass. A hot afternoon under a neem or a banyan is part of the day, and the milk that follows is the milk of animals that walked.',
      'We do not pretend a pasture is a postcard. There is mud, there are seasons when the grass thins, and there are days the yield is simply less. Those are the days we pack less, rather than stretch the milk.',
      'If you visit, come early. The light on the field is the same light you see on this page, and the cows will be exactly where they want to be.',
    ],
  },
  {
    slug: 'cooking-with-a2-ghee',
    title: 'Cooking with a jar of Okat',
    excerpt: 'Dal, tadka, sweets, and the spoon you keep by the stove.',
    image: '/images/ghee-pour.jpg',
    date: '18 January 2026',
    minutes: 5,
    paragraphs: [
      'Keep the jar near the heat, lid on. Ghee wants to be liquid when you cook and set when the kitchen cools. Both states are the same jar doing its job.',
      'For dal, add it twice: once in the pot, and once as a tadka of cumin, garlic, and dried chilli poured over the top. The second spoon is where the aroma lives.',
      'For sweets, warm it just until it moves. A heavy hand makes burfi greasy; a thin, even gloss is enough. The premium jar’s deeper colour shows on milk sweets especially.',
      'On rice, do almost nothing. Hot rice, a pinch of salt, a spoon of ghee. If the ghee is good, you will not reach for anything else.',
    ],
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}
