export type PartnerProduct = {
  id: string
  name: string
  pricePerKg: number
  commissionRate: number
  image: string
}

export const partnerProgram = {
  products: [
    {
      id: 'premium-a2',
      name: 'Premium Ghee',
      pricePerKg: 2499,
      commissionRate: 0.05,
      image: '/images/jar-premium.jpg',
    },
    {
      id: 'standard-ghee',
      name: 'Standard Ghee',
      pricePerKg: 1799,
      commissionRate: 0.05,
      image: '/images/jar-standard.jpg',
    },
  ] satisfies PartnerProduct[],
  quantities: [1, 5, 10, 25, 50],
  milestones: [
    { kg: 5, title: '5 KG', reward: 'Milestone reward', note: 'First eligible 5 kg.' },
    { kg: 10, title: '10 KG', reward: 'Milestone reward', note: 'Passed at 10 kg.' },
    { kg: 25, title: '25 KG', reward: 'Milestone reward', note: 'Marked at 25 kg.' },
    { kg: 50, title: '50 KG', reward: 'Become an Elite Partner.', note: 'Elite for that month.' },
  ],
}

export function commissionPerKg(product: PartnerProduct) {
  return Math.round(product.pricePerKg * product.commissionRate * 100) / 100
}

export function inrPaise(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export const levels = [
  {
    id: 'starter',
    name: 'Starter',
    range: '0–9.99 kg / month',
    cta: 'Start Your Journey',
    to: '/partner/join',
    benefits: ['Referral link', 'Product sharing', 'Standard commission', 'Sales dashboard', 'WhatsApp templates'],
  },
  {
    id: 'pro',
    name: 'Pro',
    range: '10–49.99 kg / month',
    cta: 'Upgrade to Pro',
    to: '/partner#levels',
    benefits: ['Higher commission tier', 'Pro milestone rewards', 'Priority partner support', 'Special campaigns', 'Marketing kit access'],
  },
  {
    id: 'elite',
    name: 'Elite',
    range: '50–99.99 kg / month',
    cta: 'Become Elite',
    to: '/partner#levels',
    benefits: ['Higher commission tier', 'Business referral opportunities', 'Priority B2B leads', 'Exclusive campaigns', 'Dedicated support'],
  },
  {
    id: 'business',
    name: 'Business',
    range: '100+ kg / month',
    cta: 'Talk to Our Team',
    to: '/contact',
    benefits: ['Custom B2B opportunities', 'Negotiated business commissions', 'Dedicated account support', 'Bulk customer referrals', 'Distributor opportunities'],
  },
]

export const faqs = [
  {
    q: 'What is the Okat Partner Program?',
    a: 'It is a free way to recommend Okat. You receive a personal link. When someone buys through that link and the order stays valid, a commission is recorded for you.',
  },
  {
    q: 'Is joining free?',
    a: 'Yes. There is no joining fee, no kit to buy, and no minimum purchase to open an account.',
  },
  {
    q: 'Do I need to buy inventory?',
    a: 'No. You do not stock ghee, run a shop, or keep a warehouse. Okat packs and delivers the order.',
  },
  {
    q: 'How do I get my referral link?',
    a: 'Create your account with your name, mobile, email, and city. Your Partner ID, code, and link are ready on the dashboard immediately.',
  },
  {
    q: 'How do I earn commission?',
    a: 'Share your link. If a customer places an eligible order through it, the sale is attributed to you. Commission is a percentage of that sale, set in the current program terms.',
  },
  {
    q: 'When is commission approved?',
    a: 'After the order is delivered and the cancellation and return window has passed. Until then it stays pending.',
  },
  {
    q: 'What happens if an order is cancelled or returned?',
    a: 'Cancelled, refunded, or fraudulent orders do not become payable commission. A pending amount from that order is removed.',
  },
  {
    q: 'Can I share Okat on WhatsApp?',
    a: 'Yes. The dashboard has a WhatsApp share for your link, plus short templates you can edit.',
  },
  {
    q: 'Can I refer restaurants and businesses?',
    a: 'Yes. Sweet shops, restaurants, hotels, and retailers can be introduced with the business lead form. You earn on approved B2B referrals, under the current terms.',
  },
  {
    q: 'How do I receive my earnings?',
    a: 'Approved commission moves to payable. Payouts are recorded in your history once Okat releases them. Nothing is paid on pending sales.',
  },
  {
    q: 'How do I track my sales?',
    a: 'The dashboard shows orders, customers, kilograms sold, sales value, and commission split into pending, approved, and paid.',
  },
  {
    q: 'Can I become a partner from anywhere in India?',
    a: 'Yes. You only need a phone and a way to share your link. Ghee already ships across India.',
  },
  {
    q: 'Can I earn by recruiting other partners?',
    a: 'No. You do not earn for signing people up, and there is no downline. Earnings come from eligible Okat sales and approved business referrals.',
  },
]

export const sampleStories = [
  {
    name: 'Aarav Mehta',
    city: 'Ahmedabad',
    quote: 'I shared the link with family and a few sweet shops I already knew. The dashboard showed which orders were still pending.',
    kg: '18 kg sample',
    image: '/images/avatar-rahul.jpg',
  },
  {
    name: 'Priya Verma',
    city: 'Pune',
    quote: 'I did not keep stock. I sent the jar photos on WhatsApp and the customer ordered on the site.',
    kg: '9 kg sample',
    image: '/images/avatar-ananya.jpg',
  },
  {
    name: 'Chef Neha',
    city: 'Jaipur',
    quote: 'The useful part was introducing a kitchen I cook with. The lead stayed visible while Okat spoke to them.',
    kg: 'B2B sample',
    image: '/images/avatar-vikram.jpg',
  },
]
