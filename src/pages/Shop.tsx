import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data'
import { useTitle } from '../useTitle'
import { ProductCard } from '../components/ProductCard'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ghee', label: 'Ghee' },
  { id: 'fresh', label: 'Fresh dairy' },
]

export function Shop() {
  useTitle('Shop · Okat')
  const [params, setParams] = useSearchParams()
  const q = (params.get('q') ?? '').trim().toLowerCase()
  const cat = params.get('cat') ?? 'all'
  const sort = params.get('sort') ?? 'featured'

  const list = useMemo(() => {
    const next = products.filter((product) => {
      const hay = `${product.name} ${product.short} ${product.category}`.toLowerCase()
      const matchesQuery = !q || hay.includes(q)
      const matchesCat = cat === 'all' || product.category === cat
      return matchesQuery && matchesCat
    })
    if (sort === 'price-asc') next.sort((a, b) => a.sizes[0].price - b.sizes[0].price)
    if (sort === 'price-desc') next.sort((a, b) => b.sizes[0].price - a.sizes[0].price)
    return next
  }, [q, cat, sort])

  function set(key: string, value: string) {
    const next = new URLSearchParams(params)
    if (!value || value === 'all' || value === 'featured') next.delete(key)
    else next.set(key, value)
    setParams(next)
  }

  return (
    <div className="page">
      <header className="shop-intro">
        <div className="container">
          <p className="eyebrow dark">The shelf</p>
          <h1>Dairy, packed the slow way</h1>
          <p className="lede">Ghee for the pantry. Milk, curd, paneer and lassi for the day.</p>
        </div>
      </header>
      <div className="container shop-bar">
        <div className="chips" role="tablist" aria-label="Filter products">
          {filters.map((filter) => (
            <button key={filter.id} type="button" className={cat === filter.id ? 'chip on' : 'chip'} onClick={() => set('cat', filter.id)}>
              {filter.label}
            </button>
          ))}
        </div>
        <label className="sort">
          Sort
          <select value={sort} onChange={(event) => set('sort', event.target.value)} aria-label="Sort products">
            <option value="featured">Featured</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
          </select>
        </label>
      </div>
      <div className="container section tight">
        {q && (
          <p className="lede">
            {list.length} result{list.length === 1 ? '' : 's'} for “{q}”
          </p>
        )}
        {list.length === 0 ? (
          <div className="empty block">
            <p>Nothing on the shelf matches that search.</p>
            <button className="btn btn-forest" type="button" onClick={() => setParams({})}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="essentials shop-grid">
            {list.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
