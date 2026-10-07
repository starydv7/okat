export function inr(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function sizeToKg(label: string) {
  const kg = label.match(/([\d.]+)\s*kg/i)
  if (kg) return Number(kg[1])
  const g = label.match(/([\d.]+)\s*g/i)
  if (g) return Number(g[1]) / 1000
  const l = label.match(/([\d.]+)\s*l/i)
  if (l) return Number(l[1])
  const ml = label.match(/([\d.]+)\s*ml/i)
  if (ml) return Number(ml[1]) / 1000
  return 0
}

export function discountRate(productId: string, kg: number) {
  if (kg < 5) return 0
  if (productId === 'premium-a2') return 0.1
  if (productId === 'standard-ghee') return 0.05
  return 0
}
