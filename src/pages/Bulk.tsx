import { useMemo, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data'
import { useCart } from '../cart'
import { discountRate, inr } from '../lib'
import { PageHero } from '../components/PageHero'
import { useTitle } from '../useTitle'

export function Bulk() {
  useTitle('Bulk Orders · Okat')
  const [params] = useSearchParams()
  const initial = params.get('jar') === 'standard' ? 'standard-1l' : 'elite-1l'
  const [productId, setProductId] = useState(initial)
  const [kg, setKg] = useState(10)
  const [sent, setSent] = useState(false)
  const { add } = useCart()

  const product = products.find((item) => item.id === productId) ?? products[0]
  const size = product.sizes[0]
  const quote = useMemo(() => {
    const rate = discountRate(product.id, kg)
    const gross = size.price * kg
    const savings = Math.round(gross * rate)
    return { rate, gross, savings, total: gross - savings }
  }, [product.id, kg, size.price])

  function enquire(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        image="/images/milk-cans.jpg"
        eyebrow="Bulk orders"
        title="Better prices when the kitchen is bigger."
        text="Restaurants, sweet shops, retailers and homes that cook every day."
      />
      <section className="container page bulk-page">
        <div className="summary quote-card">
          <h2>Price a tin run</h2>
          <label>
            Jar
            <select value={product.id} onChange={(event) => setProductId(event.target.value)}>
              <option value="elite-1l">Elite · 10% from 5 L</option>
              <option value="standard-1l">Standard · 5% from 5 L</option>
            </select>
          </label>
          <label>
            Litres
            <input
              type="number"
              min={1}
              max={200}
              value={kg}
              onChange={(event) => setKg(Math.max(1, Number(event.target.value) || 1))}
            />
          </label>
          <p>
            <span>
              {kg} × {inr(size.price)}
            </span>
            <span>{inr(quote.gross)}</span>
          </p>
          <p>
            <span>Bulk rate {quote.rate ? `${quote.rate * 100}%` : 'starts at 5 L'}</span>
            <span>{quote.savings ? `− ${inr(quote.savings)}` : '—'}</span>
          </p>
          <p className="total-line">
            <span>Estimate</span>
            <strong>{inr(quote.total)}</strong>
          </p>
          <button className="btn btn-gold" type="button" onClick={() => add(product, size, kg)}>
            Add {kg} L to cart
          </button>
          <p className="note">Each litre is priced as the 1 L jar. The saving is applied in the cart from 5 litres of the same line.</p>
        </div>
        <form className="form-card" onSubmit={enquire}>
          <h2>Ask the dairy desk</h2>
          <p className="lede">For standing orders, mixed sizes, or a delivery window that matches your service.</p>
          {sent ? (
            <p className="note ok">Request noted. We’ll use the number you left when the desk calls back. Nothing has been charged.</p>
          ) : (
            <>
              <label>
                Name
                <input name="name" required />
              </label>
              <label>
                Kitchen or business
                <input name="business" required />
              </label>
              <label>
                Mobile
                <input name="phone" required inputMode="numeric" />
              </label>
              <label>
                What you need
                <textarea name="note" rows={4} placeholder="Premium, 20 kg, twice a month for a sweet shop in Jaipur." />
              </label>
              <button className="btn btn-forest" type="submit">
                Send enquiry
              </button>
            </>
          )}
        </form>
      </section>
    </>
  )
}
