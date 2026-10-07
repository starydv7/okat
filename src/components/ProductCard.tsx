import { Link } from 'react-router-dom'
import type { Product } from '../data'
import { useCart } from '../cart'
import { inr } from '../lib'

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const size = product.sizes[0]
  return (
    <article className="pcard">
      <Link to={`/product/${product.slug}`} className="pcard-media">
        {product.badge && <span className="mini-badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
      </Link>
      <div className="pcard-body">
        <h3>
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="pcard-price">
          {inr(size.price)} <span>/ {size.label}</span>
        </p>
        <button className="btn btn-line" type="button" onClick={() => add(product, size, 1)}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}
