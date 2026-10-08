import { useEffect, useState, type FormEvent } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useCart } from '../cart'
import { inr } from '../lib'
import { Icon, Logo } from './Icons'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/farms', label: 'Our Farms' },
  { to: '/why-okat', label: 'Why Okat' },
  { to: '/partner', label: 'Okat Partner' },
  { to: '/bulk', label: 'Bulk Orders' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const cart = useCart()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [params] = useSearchParams()
  const urlQuery = params.get('q') ?? ''
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState(urlQuery)

  useEffect(() => {
    setQuery(urlQuery)
  }, [urlQuery])

  useEffect(() => {
    setMenuOpen(false)
    cart.setDrawerOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen || cart.drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, cart.drawerOpen])

  function search(event: FormEvent) {
    event.preventDefault()
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
    setMenuOpen(false)
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="container header-inner">
          <button className="icon-btn menu-btn" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
          <Link to="/" className="logo-link" aria-label="Okat home">
            <Logo />
          </Link>
          <nav className="nav" aria-label="Primary">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <form className="search desktop-search" onSubmit={search} role="search">
            <Icon name="search" size={18} />
            <input
              name="q"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for ghee, paneer, lassi"
              aria-label="Search products"
            />
          </form>
          <Link to="/account" className="icon-btn" aria-label="Account">
            <Icon name="user" />
          </Link>
          <button className="icon-btn" type="button" aria-label={`Cart, ${cart.count} items`} onClick={() => cart.setDrawerOpen(true)}>
            <Icon name="bag" />
            {cart.count > 0 && <span className="cart-count">{cart.count}</span>}
          </button>
          <Link to="/partner/join" className="btn btn-forest header-cta">Become a Partner</Link>
        </div>
      </header>
      {menuOpen && (
        <div className="mobile-panel">
          <form className="search" onSubmit={search} role="search">
            <Icon name="search" size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the dairy" aria-label="Search products" />
          </form>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/partner/join" className="btn btn-forest">Become a Partner</Link>
        </div>
      )}

      <main id="main">
        <Outlet />
      </main>

      <section className="assure-wrap">
        <div className="container assure">
          <article>
            <span className="trust-ico">
              <Icon name="truck" size={18} />
            </span>
            <div>
              <strong>Delivery across India</strong>
              <p>Ghee travels from the dairy to your kitchen.</p>
            </div>
          </article>
          <article>
            <span className="trust-ico">
              <Icon name="leaf" size={18} />
            </span>
            <div>
              <strong>100% natural</strong>
              <p>No preservatives in the jar.</p>
            </div>
          </article>
          <article>
            <span className="trust-ico">
              <Icon name="shield" size={18} />
            </span>
            <div>
              <strong>Batch checked</strong>
              <p>Purity and moisture checked before packing.</p>
            </div>
          </article>
          <article>
            <span className="trust-ico">
              <Icon name="refresh" size={18} />
            </span>
            <div>
              <strong>Easy returns</strong>
              <p>If a jar arrives damaged, we replace it.</p>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>A2 desi cow ghee and fresh dairy from open grazing farms, packed the slow way.</p>
          </div>
          <div>
            <h2>Shop</h2>
            <Link to="/shop">All products</Link>
            <Link to="/product/elite-ghee-1l">Elite ghee</Link>
            <Link to="/product/standard-ghee-1l">Standard ghee</Link>
            <Link to="/bulk">Bulk orders</Link>
          </div>
          <div>
            <h2>The dairy</h2>
            <Link to="/farms">Our farms</Link>
            <Link to="/why-okat">Why Okat</Link>
            <Link to="/blog">Journal</Link>
            <Link to="/account">Your details</Link>
          </div>
          <div>
            <h2>Visit</h2>
            <p>Okat Dairy Collective</p>
            <p>Anand–Vidyanagar Road</p>
            <p>Anand, Gujarat 388001</p>
            <p>
              <a href="tel:+919825011024">+91 98250 11024</a>
            </p>
          </div>
        </div>
        <div className="container fineprint">
          <span>© {new Date().getFullYear()} Okat. Pure by nature.</span>
          <span>Ghee ships pan-India. Fresh dairy is packed for city delivery.</span>
        </div>
      </footer>

      {cart.drawerOpen && (
        <div className="drawer-back" onClick={() => cart.setDrawerOpen(false)}>
          <aside className="drawer" role="dialog" aria-label="Cart" onClick={(event) => event.stopPropagation()}>
            <div className="drawer-head">
              <h2>Your cart</h2>
              <button className="icon-btn" type="button" aria-label="Close cart" onClick={() => cart.setDrawerOpen(false)}>
                <Icon name="close" />
              </button>
            </div>
            {cart.lines.length === 0 ? (
              <div className="empty">
                <p>Your cart is waiting for a jar.</p>
                <Link to="/shop" className="btn btn-forest">
                  Browse the shelf
                </Link>
              </div>
            ) : (
              <>
                <ul className="drawer-items">
                  {cart.lines.map((line) => (
                    <li key={line.key} className="drawer-line">
                      <img src={line.product.image} alt="" />
                      <div>
                        <strong>{line.product.name}</strong>
                        <p>
                          {line.size.label} · {inr(line.size.price)}
                        </p>
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
                        <button type="button" className="text-btn" onClick={() => cart.remove(line.key)}>
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="drawer-foot">
                  {cart.savings > 0 && (
                    <p className="save-line">
                      Bulk saving <strong>{inr(cart.savings)}</strong>
                    </p>
                  )}
                  <p className="total-line">
                    <span>Subtotal</span>
                    <strong>{inr(cart.total)}</strong>
                  </p>
                  <Link to="/checkout" className="btn btn-gold">
                    Checkout
                  </Link>
                  <Link to="/cart" className="btn btn-line">
                    Review cart
                  </Link>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {cart.toast && (
        <div className="toast" role="status">
          <span>{cart.toast}</span>
          <button type="button" onClick={() => cart.setDrawerOpen(true)}>
            View
          </button>
        </div>
      )}
    </>
  )
}
