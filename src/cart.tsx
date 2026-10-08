import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { products, type Product, type Size } from './data'
import { discountRate, gheeFamily, sizeToKg } from './lib'

export type CartLine = {
  key: string
  productId: string
  sizeId: string
  qty: number
}

export type EnrichedLine = CartLine & {
  product: Product
  size: Size
  rate: number
  gross: number
  savings: number
  total: number
}

type CartContextValue = {
  lines: EnrichedLine[]
  count: number
  gross: number
  savings: number
  total: number
  toast: string | null
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
  add: (product: Product, size: Size, qty?: number) => void
  setQty: (key: string, qty: number) => void
  remove: (key: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const KEY = 'okat-cart'

function readLines(): CartLine[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartLine[]
    if (!Array.isArray(parsed)) return []
    return parsed.filter((line) => line && line.productId && line.sizeId && line.qty > 0)
  } catch {
    return []
  }
}

function enrich(lines: CartLine[]): EnrichedLine[] {
  const kgByProduct = new Map<string, number>()
  for (const line of lines) {
    const product = products.find((item) => item.id === line.productId)
    const size = product?.sizes.find((item) => item.id === line.sizeId)
    if (!product || !size) continue
    const family = gheeFamily(product.id)
    kgByProduct.set(family, (kgByProduct.get(family) ?? 0) + sizeToKg(size.label) * line.qty)
  }

  return lines.flatMap((line) => {
    const product = products.find((item) => item.id === line.productId)
    const size = product?.sizes.find((item) => item.id === line.sizeId)
    if (!product || !size) return []
    const rate = discountRate(product.id, kgByProduct.get(gheeFamily(product.id)) ?? 0)
    const gross = size.price * line.qty
    const savings = Math.round(gross * rate)
    return [{ ...line, product, size, rate, gross, savings, total: gross - savings }]
  })
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => readLines())
  const [toast, setToast] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpenState] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(lines))
  }, [lines])

  const value = useMemo<CartContextValue>(() => {
    const enriched = enrich(lines)
    const ping = (message: string) => {
      setToast(message)
      if (timer.current) window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setToast(null), 2600)
    }

    return {
      lines: enriched,
      count: enriched.reduce((sum, line) => sum + line.qty, 0),
      gross: enriched.reduce((sum, line) => sum + line.gross, 0),
      savings: enriched.reduce((sum, line) => sum + line.savings, 0),
      total: enriched.reduce((sum, line) => sum + line.total, 0),
      toast,
      drawerOpen,
      setDrawerOpen: (open: boolean) => {
        setDrawerOpenState(open)
        if (open) {
          setToast(null)
          if (timer.current) window.clearTimeout(timer.current)
        }
      },
      add: (product, size, qty = 1) => {
        const key = `${product.id}:${size.id}`
        setLines((current) => {
          const existing = current.find((line) => line.key === key)
          if (!existing) return [...current, { key, productId: product.id, sizeId: size.id, qty }]
          return current.map((line) => (line.key === key ? { ...line, qty: line.qty + qty } : line))
        })
        ping(`${product.name} added to cart`)
      },
      setQty: (key, qty) => {
        setLines((current) =>
          qty <= 0 ? current.filter((line) => line.key !== key) : current.map((line) => (line.key === key ? { ...line, qty } : line)),
        )
      },
      remove: (key) => setLines((current) => current.filter((line) => line.key !== key)),
      clear: () => setLines([]),
    }
  }, [lines, toast, drawerOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
