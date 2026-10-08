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

export function gheeFamily(productId: string) {
  if (productId.startsWith('elite')) return 'elite'
  if (productId.startsWith('standard')) return 'standard'
  return productId
}

export function discountRate(productId: string, litres: number) {
  if (litres < 5) return 0
  if (productId.startsWith('elite')) return 0.1
  if (productId.startsWith('standard')) return 0.05
  return 0
}
