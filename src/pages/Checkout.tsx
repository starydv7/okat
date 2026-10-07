import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../cart'
import { inr } from '../lib'
import { loadProfile, saveProfile, type Profile } from '../profile'
import { useTitle } from '../useTitle'

export type Order = {
  id: string
  placedAt: string
  payment: 'cod' | 'upi'
  total: number
  savings: number
  customer: Profile
  items: { name: string; size: string; qty: number; total: number }[]
}

export function Checkout() {
  useTitle('Checkout · Okat')
  const cart = useCart()
  const navigate = useNavigate()
  const [profile, setProfile] = useState<Profile>(() => loadProfile())
  const [payment, setPayment] = useState<'cod' | 'upi'>('cod')
  const [error, setError] = useState('')

  function update(key: keyof Profile, value: string) {
    setProfile((current) => ({ ...current, [key]: value }))
  }

  function place(event: FormEvent) {
    event.preventDefault()
    if (cart.lines.length === 0) {
      setError('Your cart is empty.')
      return
    }
    const phone = profile.phone.replace(/\s/g, '')
    if (profile.name.trim().length < 2) return setError('Add the name for the delivery.')
    if (!/^\d{10}$/.test(phone)) return setError('Enter a 10-digit mobile number.')
    if (profile.address.trim().length < 6) return setError('Add a street address.')
    if (profile.city.trim().length < 2) return setError('Add a city.')
    if (!/^\d{6}$/.test(profile.pin.trim())) return setError('Enter a 6-digit PIN code.')

    const order: Order = {
      id: `OK${Date.now().toString().slice(-8)}`,
      placedAt: new Date().toISOString(),
      payment,
      total: cart.total,
      savings: cart.savings,
      customer: { ...profile, phone },
      items: cart.lines.map((line) => ({
        name: line.product.name,
        size: line.size.label,
        qty: line.qty,
        total: line.total,
      })),
    }
    saveProfile({ ...profile, phone })
    sessionStorage.setItem('okat-last-order', JSON.stringify(order))
    cart.clear()
    navigate('/order-confirmed')
  }

  if (cart.lines.length === 0) {
    return (
      <div className="container page-miss">
        <h1>Nothing to check out</h1>
        <Link to="/shop" className="btn btn-forest">
          Return to the shop
        </Link>
      </div>
    )
  }

  return (
    <div className="container page">
      <p className="eyebrow dark">Checkout</p>
      <h1>Where should we send it?</h1>
      <form className="checkout" onSubmit={place}>
        <div className="form-grid">
          <label>
            Full name
            <input value={profile.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" />
          </label>
          <label>
            Mobile
            <input value={profile.phone} onChange={(event) => update('phone', event.target.value)} autoComplete="tel" inputMode="numeric" />
          </label>
          <label className="wide">
            Address
            <input value={profile.address} onChange={(event) => update('address', event.target.value)} autoComplete="street-address" />
          </label>
          <label>
            City
            <input value={profile.city} onChange={(event) => update('city', event.target.value)} autoComplete="address-level2" />
          </label>
          <label>
            PIN code
            <input value={profile.pin} onChange={(event) => update('pin', event.target.value)} autoComplete="postal-code" inputMode="numeric" />
          </label>
          <fieldset>
            <legend>Payment</legend>
            <label className="radio">
              <input type="radio" name="pay" checked={payment === 'cod'} onChange={() => setPayment('cod')} />
              Cash on delivery
            </label>
            <label className="radio">
              <input type="radio" name="pay" checked={payment === 'upi'} onChange={() => setPayment('upi')} />
              UPI when the order is confirmed
            </label>
            <p className="note">No payment is taken on this page. You pay the rider, or by UPI when the dairy confirms the order.</p>
          </fieldset>
        </div>
        <aside className="summary">
          <h2>Order</h2>
          <ul className="mini-lines">
            {cart.lines.map((line) => (
              <li key={line.key}>
                <span>
                  {line.product.name} · {line.size.label} × {line.qty}
                </span>
                <span>{inr(line.total)}</span>
              </li>
            ))}
          </ul>
          {cart.savings > 0 && (
            <p>
              <span>Bulk saving</span>
              <span>− {inr(cart.savings)}</span>
            </p>
          )}
          <p className="total-line">
            <span>To pay</span>
            <strong>{inr(cart.total)}</strong>
          </p>
          {error && <p className="error">{error}</p>}
          <button className="btn btn-gold" type="submit">
            Place order
          </button>
        </aside>
      </form>
    </div>
  )
}

export function OrderConfirmed() {
  useTitle('Order confirmed · Okat')
  const raw = sessionStorage.getItem('okat-last-order')
  const order = raw ? (JSON.parse(raw) as Order) : null

  if (!order) {
    return (
      <div className="container page-miss">
        <h1>No recent order</h1>
        <Link to="/shop" className="btn btn-forest">
          Shop Okat
        </Link>
      </div>
    )
  }

  return (
    <div className="container page narrow">
      <p className="eyebrow dark">Order {order.id}</p>
      <h1>We’ll pack this with care.</h1>
      <p className="lede">
        {order.customer.name}, a note is ready for {order.customer.city} {order.customer.pin}. Payment:{' '}
        {order.payment === 'cod' ? 'cash on delivery' : 'UPI when we confirm'}.
      </p>
      <ul className="mini-lines card">
        {order.items.map((item) => (
          <li key={`${item.name}-${item.size}`}>
            <span>
              {item.name} · {item.size} × {item.qty}
            </span>
            <span>{inr(item.total)}</span>
          </li>
        ))}
      </ul>
      <p className="total-line">
        <span>Total</span>
        <strong>{inr(order.total)}</strong>
      </p>
      <Link to="/shop" className="btn btn-forest">
        Continue browsing
      </Link>
    </div>
  )
}
