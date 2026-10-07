import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct, products } from '../data'
import { useCart } from '../cart'
import { inr } from '../lib'
import { useTitle } from '../useTitle'
import { Icon } from '../components/Icons'
import { ProductCard } from '../components/ProductCard'

export function ProductPage() {
  const { slug } = useParams()
  const product = slug ? getProduct(slug) : undefined
  useTitle(product ? `${product.name} · Okat` : 'Product · Okat')
  const { add } = useCart()
  const [sizeId, setSizeId] = useState(product?.sizes[0].id ?? '')
  const [photo, setPhoto] = useState(product?.gallery[0] ?? '')
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setSizeId(product?.sizes[0].id ?? '')
    setPhoto(product?.gallery[0] ?? '')
    setQty(1)
  }, [product])

  if (!product) {
    return (
      <div className="container page-miss">
        <h1>That jar isn’t on the shelf</h1>
        <Link to="/shop" className="btn btn-forest">
          Back to shop
        </Link>
      </div>
    )
  }

  const size = product.sizes.find((item) => item.id === sizeId) ?? product.sizes[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <div className="container product-page">
      <p className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        {product.name}
      </p>
      <div className="product-grid">
        <div className="gallery">
          <img src={photo || product.image} alt={product.name} />
          {product.gallery.length > 1 && (
            <div className="thumbs">
              {product.gallery.map((src) => (
                <button key={src} type="button" className={src === (photo || product.image) ? 'on' : ''} onClick={() => setPhoto(src)}>
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="buybox">
          {product.badge && <span className="mini-badge static">{product.badge}</span>}
          <h1>{product.name}</h1>
          <p className="rating">
            <span className="stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <Icon key={index} name="star" size={14} />
              ))}
            </span>
            {product.rating} · {product.reviewCount} reviews
          </p>
          <p className="price">
            {inr(size.price)} <span>/ {size.label}</span>
          </p>
          <p className="lede">{product.description}</p>
          <div className="size-pills" role="radiogroup" aria-label="Size">
            {product.sizes.map((item) => (
              <button key={item.id} type="button" className={item.id === size.id ? 'on' : ''} onClick={() => setSizeId(item.id)}>
                <strong>{item.label}</strong>
                <span>{inr(item.price)}</span>
              </button>
            ))}
          </div>
          <div className="buy-row">
            <div className="qty large">
              <button type="button" aria-label="Decrease quantity" onClick={() => setQty((value) => Math.max(1, value - 1))}>
                <Icon name="minus" size={16} />
              </button>
              <span>{qty}</span>
              <button type="button" aria-label="Increase quantity" onClick={() => setQty((value) => value + 1)}>
                <Icon name="plus" size={16} />
              </button>
            </div>
            <button className="btn btn-gold" type="button" onClick={() => add(product, size, qty)}>
              Add to Cart
            </button>
          </div>
          {product.category === 'ghee' && (
            <p className="note">
              {product.id === 'premium-a2' ? '10%' : '5%'} off when this ghee in your cart reaches 5 kg.
            </p>
          )}
          <ul className="ticks">
            {product.highlights.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                {item}
              </li>
            ))}
          </ul>
          <p className="shipping">
            <Icon name="truck" size={16} /> {product.shipping}
          </p>
          <dl className="facts">
            {product.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="section">
        <div className="section-head">
          <h2>Also from the dairy</h2>
        </div>
        <div className="essentials related">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
