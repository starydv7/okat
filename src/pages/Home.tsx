import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, stories } from '../data'
import { useTitle } from '../useTitle'
import { Icon } from '../components/Icons'
import { ProductCard } from '../components/ProductCard'
import { inr } from '../lib'

const trust = [
  { icon: 'farm' as const, label: 'Direct from our farms' },
  { icon: 'cow' as const, label: 'Ethically raised cows' },
  { icon: 'churn' as const, label: 'Traditional bilona method' },
  { icon: 'drop' as const, label: '100% natural, no preservatives' },
  { icon: 'package' as const, label: 'Secure & hygienic packing' },
  { icon: 'truck' as const, label: 'Pan-India delivery' },
]

const points = ['Cruelty free cows', 'Open grazing farms', 'No preservatives, no chemicals', 'Lab tested & certified']

export function Home() {
  useTitle('Okat — India’s Finest Desi Cow Ghee')
  const [storyOpen, setStoryOpen] = useState(false)
  const elite = products.find((item) => item.id === 'elite-1l')!

  return (
    <>
      <section className="hero">
        <img className="hero-bg" src="/images/hero-scene.jpg" alt="A jar of golden ghee standing in wildflowers, with cows grazing behind it" fetchPriority="high" decoding="async" />
        <div className="hero-shade" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Pure · Natural · Ethical</p>
            <h1>
              India’s Finest
              <br />
              Desi Cow Ghee
            </h1>
            <p className="hero-lede">
              From happy cows, open grazing fields and traditional methods — pure nutrition for you and your family.
            </p>
            <ul className="hero-points">
              {points.map((point) => (
                <li key={point}>
                  <Icon name="check" size={18} />
                  {point}
                </li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link to={`/product/${elite.slug}`} className="btn btn-forest">
                Shop Elite Ghee
              </Link>
              <a href="#essentials" className="btn btn-hero-line">
                Explore Products
              </a>
            </div>
          </div>
        </div>
        <div className="seal">
          <span>Traditional</span>
          <strong>
            100% Pure
            <br />
            A2 Ghee
          </strong>
          <span>Bilona Method</span>
        </div>
      </section>

      <div className="container trust">
        <ul className="trust-bar">
          {trust.map((item) => (
            <li key={item.label} className="trust-item">
              <span className="trust-ico">
                <Icon name={item.icon} size={18} />
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <section className="section">
        <div className="container feature-grid">
          <Feature productId="elite-1l" tone="premium" />
          <Feature productId="standard-1l" tone="standard" />
        </div>
      </section>

      <section className="section" id="essentials">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Our Dairy Essentials</h2>
              <p className="lede">Elite and Standard ghee in every size, with paneer, lassi and chaach.</p>
            </div>
            <Link to="/shop" className="text-link">
              View all products <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div className="essentials">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bulk">
            <div className="bulk-copy">
              <p className="eyebrow">For kitchens that cook in volume</p>
              <h2>Bulk orders — better prices, bigger value</h2>
              <p className="lede light">For restaurants, hotels, sweet shops, retailers and institutions.</p>
              <div className="bulk-offers">
                <article className="bulk-card">
                  <span className="off">10% off</span>
                  <h3>Elite Ghee bulk orders</h3>
                  <ul>
                    <li>5 L, 10 L, 50 L</li>
                    <li>Farm-grade, slow cultured</li>
                    <li>Pan-India delivery</li>
                  </ul>
                  <Link to="/bulk?jar=premium" className="text-link light">
                    Get premium bulk quote <Icon name="arrow" size={16} />
                  </Link>
                </article>
                <article className="bulk-card">
                  <span className="off">5% off</span>
                  <h3>Standard Ghee bulk orders</h3>
                  <ul>
                    <li>5 L, 10 L, 50 L</li>
                    <li>Packed for daily service</li>
                    <li>Steady supply for long orders</li>
                  </ul>
                  <Link to="/bulk?jar=standard" className="text-link light">
                    Get standard bulk quote <Icon name="arrow" size={16} />
                  </Link>
                </article>
              </div>
              <ul className="bulk-points">
                <li>
                  <Icon name="package" size={16} /> Food-grade packing
                </li>
                <li>
                  <Icon name="churn" size={16} /> Custom quantity
                </li>
                <li>
                  <Icon name="shield" size={16} /> GST invoice
                </li>
                <li>
                  <Icon name="truck" size={16} /> Timely delivery
                </li>
                <li>
                  <Icon name="user" size={16} /> Business support
                </li>
              </ul>
            </div>
            <div className="bulk-photo">
              <img src="/images/milk-cans.jpg" alt="Stainless steel milk cans in a meadow at sunset" loading="lazy" decoding="async" />
              <div className="kg-pills">
                <span>5 kg</span>
                <span>10 kg</span>
                <span>20 kg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container farm">
          <div>
            <p className="eyebrow dark">The land before the jar</p>
            <h2>From our farms to your home</h2>
            <p className="lede">
              Our cows graze freely in open fields, live a healthy and natural life, and give pure A2 milk. With traditional methods we bring you the finest ghee.
            </p>
            <ul className="farm-points">
              <li>
                <Icon name="cow" size={18} />
                <span>
                  <strong>Happy cows</strong>
                  Open grazing fields
                </span>
              </li>
              <li>
                <Icon name="leaf" size={18} />
                <span>
                  <strong>Natural & spacious</strong>
                  Shade, grass, and room to walk
                </span>
              </li>
              <li>
                <Icon name="shield" size={18} />
                <span>
                  <strong>Ethical & chemical free</strong>
                  Nothing added in the jar
                </span>
              </li>
              <li>
                <Icon name="churn" size={18} />
                <span>
                  <strong>Traditional bilona</strong>
                  Churned, then clarified slowly
                </span>
              </li>
            </ul>
            <button className="btn btn-gold" type="button" onClick={() => setStoryOpen(true)}>
              <Icon name="play" size={14} />
              Watch our story
            </button>
          </div>
          <div className="farm-media">
            <img src="/images/cows-pasture.jpg" alt="Desi cows grazing in a green pasture" loading="lazy" decoding="async" />
            <button className="play" type="button" aria-label="Play the farm story" onClick={() => setStoryOpen(true)}>
              <Icon name="play" size={28} />
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container partner-teaser">
          <div>
            <p className="eyebrow dark">Okat Partner</p>
            <h2>Share Okat. Earn with every sale.</h2>
            <p className="lede">Recommend Okat with your own link. No inventory and no joining fee. You earn when an eligible sale is approved.</p>
          </div>
          <div className="hero-actions">
            <Link to="/partner/join" className="btn btn-forest">Start earning</Link>
            <Link to="/partner" className="btn btn-line">See how it works</Link>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="t-head">
            <h2>What our customers say</h2>
            <p className="lede">Real families. Real experience. Real purity.</p>
          </div>
          <div className="t-grid">
            {stories.map((story) => (
              <figure key={story.name} className="quote">
                <div className="stars" aria-label="5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Icon key={index} name="star" size={14} />
                  ))}
                </div>
                <blockquote>{story.quote}</blockquote>
                <figcaption className="who">
                  <img src={story.image} alt="" loading="lazy" decoding="async" />
                  <span>
                    <strong>{story.name}</strong>
                    {story.place}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {storyOpen && (
        <div className="modal-back" onClick={() => setStoryOpen(false)}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="story-title" onClick={(event) => event.stopPropagation()}>
            <div className="modal-media kenburns">
              <img src="/images/cows-pasture.jpg" alt="Cows grazing under shade trees" />
            </div>
            <div className="modal-copy">
              <p className="eyebrow dark">From our farms</p>
              <h2 id="story-title">The day starts in the grass</h2>
              <p>
                Indigenous cows graze in the open, the morning milk is set into curd, and the butter is churned the bilona way before it ever sees a jar.
              </p>
              <p>This is a short farm story, told in pictures from the pasture — not a filmed reel.</p>
              <div className="hero-actions">
                <Link to="/farms" className="btn btn-forest" onClick={() => setStoryOpen(false)}>
                  Visit the farms
                </Link>
                <button className="btn btn-line" type="button" onClick={() => setStoryOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Feature({ productId, tone }: { productId: string; tone: 'premium' | 'standard' }) {
  const product = products.find((item) => item.id === productId)!
  const size = product.sizes[0]
  const smaller = product.sizes[1]
  return (
    <article className={tone === 'premium' ? 'feature' : 'feature alt'}>
      <div className={`jar-art ${tone}`}>
        <img
          src={product.image}
          alt={product.name}
          decoding="async"
        />
        <span className={tone === 'premium' ? 'badge gold' : 'badge'}>{product.badge}</span>
      </div>
      <div className="feature-copy">
        <p className="kicker">Okat {product.badge}</p>
        <h2>{product.name.replace('Okat ', '')}</h2>
        <p className="italic">{product.short}</p>
        <ul className="ticks">
          {product.highlights.map((item) => (
            <li key={item}>
              <Icon name="check" size={16} />
              {item}
            </li>
          ))}
        </ul>
        <p className="price">
          {inr(size.price)} <span>/ {size.label}</span>
        </p>
        {smaller && (
          <p className="smaller">
            Also {smaller.label} · {inr(smaller.price)}
          </p>
        )}
        <Link to={`/product/${product.slug}`} className="btn btn-gold">
          {tone === 'premium' ? 'Shop Elite' : 'Shop Standard'}
          <Icon name="arrow" size={16} />
        </Link>
      </div>
    </article>
  )
}
