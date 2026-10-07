import { Link } from 'react-router-dom'
import { useCart } from '../cart'
import { inr } from '../lib'
import { useTitle } from '../useTitle'
import { Icon } from '../components/Icons'

export function CartPage() {
  useTitle('Cart · Okat')
  const cart = useCart()
  const fresh = cart.lines.some((line) => line.product.category === 'fresh')

  return (
    <div className="container page cart-page">
      <p className="eyebrow dark">Cart</p>
      <h1>Your basket</h1>
      {cart.lines.length === 0 ? (
        <div className="empty block">
          <p>Nothing here yet. The premium jar is a good place to start.</p>
          <Link to="/shop" className="btn btn-forest">
            Shop the dairy
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <ul className="cart-list">
            {cart.lines.map((line) => (
              <li key={line.key}>
                <img src={line.product.image} alt="" />
                <div>
                  <h2>
                    <Link to={`/product/${line.product.slug}`}>{line.product.name}</Link>
                  </h2>
                  <p>{line.size.label}</p>
                  <div className="qty">
                    <button type="button" aria-label="Decrease quantity" onClick={() => cart.setQty(line.key, line.qty - 1)}>
                      <Icon name="minus" size={14} />
                    </button>
                    <span>{line.qty}</span>
                    <button type="button" aria-label="Increase quantity" onClick={() => cart.setQty(line.key, line.qty + 1)}>
                      <Icon name="plus" size={14} />
                    </button>
                  </div>
                </div>
                <div className="line-end">
                  <strong>{inr(line.total)}</strong>
                  {line.savings > 0 && <span className="save-line">Saved {inr(line.savings)}</span>}
                  <button type="button" className="text-btn" onClick={() => cart.remove(line.key)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <aside className="summary">
            <h2>Summary</h2>
            <p>
              <span>Items</span>
              <span>{inr(cart.gross)}</span>
            </p>
            <p>
              <span>Bulk saving</span>
              <span>{cart.savings ? `− ${inr(cart.savings)}` : '—'}</span>
            </p>
            <p>
              <span>Delivery</span>
              <span>Calculated with the order</span>
            </p>
            <p className="total-line">
              <span>To pay</span>
              <strong>{inr(cart.total)}</strong>
            </p>
            {fresh && <p className="note">Fresh paneer, milk, curd and lassi are packed for city delivery. Ghee ships across India.</p>}
            <Link to="/checkout" className="btn btn-gold">
              Checkout
            </Link>
          </aside>
        </div>
      )}
    </div>
  )
}
