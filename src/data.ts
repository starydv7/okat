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

export const products: Product[] = [
  {
    id: 'premium-a2',
    slug: 'premium-a2-desi-cow-ghee',
    name: 'Premium A2 Desi Cow Ghee',
    short: 'For those who want the very best.',
    description:
      'Our premium jar is bilona ghee from the morning milk of indigenous cows that graze in the open. The curd is set slowly, the butter is churned by hand, and the ghee is clarified until the colour turns deep gold and the aroma fills the kitchen.',
    category: 'ghee',
    badge: 'Premium',
    image: '/images/jar-premium.jpg',
    gallery: ['/images/jar-premium.jpg', '/images/ghee-pour.jpg', '/images/bilona-wood.jpg'],
    sizes: [
      { id: '1kg', label: '1 kg', price: 2499 },
      { id: '500g', label: '500 g', price: 1349 },
    ],
    highlights: [
      'A2 milk from indigenous cows',
      'Traditional bilona method',
      'Rich aroma, deep golden colour',
      'Slow-cultured in small batches',
    ],
    shipping: 'Ships across India in a sealed jar.',
    facts: [
      { label: 'Method', value: 'Bilona, small batch' },
      { label: 'Milk', value: 'Desi cow, open grazing' },
      { label: 'Additives', value: 'None' },
      { label: 'Best for', value: 'Everyday cooking and finishing' },
    ],
    rating: 4.9,
    reviewCount: 128,
  },
  {
    id: 'standard-ghee',
    slug: 'standard-desi-cow-ghee',
    name: 'Standard Desi Cow Ghee',
    short: 'Pure, fragrant, and perfect for everyday cooking.',
    description:
      'The everyday jar from the same farms: desi cow milk, cultured and cooked the slow way, without preservatives. It is the ghee we pack for families who want a clean, golden fat on the table every day.',
    category: 'ghee',
    badge: 'Standard',
    image: '/images/jar-standard.jpg',
    gallery: ['/images/jar-standard.jpg', '/images/ghee-pour.jpg', '/images/farm-morning.jpg'],
    sizes: [
      { id: '1kg', label: '1 kg', price: 1799 },
      { id: '500g', label: '500 g', price: 949 },
    ],
    highlights: [
      'Pure desi cow milk',
      'Traditional slow method',
      'Clean taste, golden grain',
      'A daily jar at a fair price',
    ],
    shipping: 'Ships across India in a sealed jar.',
    facts: [
      { label: 'Method', value: 'Slow cultured' },
      { label: 'Milk', value: 'Desi cow' },
      { label: 'Additives', value: 'None' },
      { label: 'Best for', value: 'Dal, rotis, tadka, sweets' },
    ],
    rating: 4.8,
    reviewCount: 96,
  },
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
    id: 'milk',
    slug: 'a2-cow-milk',
    name: 'A2 Cow Milk',
    short: 'Fresh milk from pasture-grazed desi cows.',
    description:
      'Whole milk from the morning milking, bottled for homes that still want milk to taste like milk. Gentle, creamy, and meant to be boiled the way your kitchen already does.',
    category: 'fresh',
    badge: 'Farm Fresh',
    image: '/images/milk.jpg',
    gallery: ['/images/milk.jpg'],
    sizes: [{ id: '1l', label: '1 L', price: 90 }],
    highlights: ['Morning milk', 'From open-grazing cows', 'No reconstitution', 'Bottled for the day'],
    shipping: 'City delivery. Packed cold the morning it leaves.',
    facts: [
      { label: 'Fat', value: 'Whole milk' },
      { label: 'Source', value: 'Desi cow' },
      { label: 'Packed', value: 'Same morning' },
      { label: 'Keep', value: 'Boil and refrigerate' },
    ],
    rating: 4.8,
    reviewCount: 73,
  },
  {
    id: 'curd',
    slug: 'natural-curd',
    name: 'Natural Curd',
    short: 'Set curd with a clean, mild tang.',
    description:
      'Dahi set from our own milk and a live culture we keep in the dairy. Thick enough to hold on a plate, mild enough for the afternoon meal.',
    category: 'fresh',
    badge: 'Farm Fresh',
    image: '/images/curd.jpg',
    gallery: ['/images/curd.jpg'],
    sizes: [{ id: '400g', label: '400 g', price: 80 }],
    highlights: ['Set, not stirred thin', 'Live culture', 'No thickeners', 'Mild and fresh'],
    shipping: 'City delivery. Packed cold the morning it leaves.',
    facts: [
      { label: 'Style', value: 'Set dahi' },
      { label: 'Culture', value: 'Dairy’s own' },
      { label: 'Packed', value: 'Same morning' },
      { label: 'Keep', value: 'Refrigerated' },
    ],
    rating: 4.7,
    reviewCount: 41,
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
