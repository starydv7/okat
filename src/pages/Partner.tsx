import { Link } from 'react-router-dom'
import { commissionPerKg, faqs, inrPaise, levels, partnerProgram, sampleStories } from '../partner/program'
import { inr } from '../lib'
import { useTitle } from '../useTitle'
import '../partner.css'

export function Partner() {
  useTitle('Okat Partner — Share & Earn')
  const [premium, standard] = partnerProgram.products

  return (
    <div className="partner">
      <section className="pn-hero">
        <div className="pn-hero-copy">
          <p className="pn-eyebrow">Okat Partner</p>
          <h1>
            Share Okat.
            <br />
            Earn with Every Sale.
          </h1>
          <p>
            Turn your network, recommendations and business connections into an additional income stream with Okat.
          </p>
          <ul className="pn-perks">
            <li>
              <span className="pn-dot" aria-hidden>
                <svg viewBox="0 0 24 24"><path d="M4 7h16v10H4z" /><path d="M4 10h16M8 14h3" /></svg>
              </span>
              No investment<br />required
            </li>
            <li>
              <span className="pn-dot" aria-hidden>
                <svg viewBox="0 0 24 24"><path d="M4 8l8-4 8 4v8l-8 4-8-4z" /><path d="M12 12V4M12 12l8-4M12 12L4 8" /></svg>
              </span>
              No inventory<br />required
            </li>
            <li>
              <span className="pn-dot" aria-hidden>
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" /><path d="M12 8v8M9.5 10.5c.6-.8 1.4-1.2 2.5-1.2 1.6 0 2.5.8 2.5 2s-.9 1.8-2.5 1.8-2.5.7-2.5 1.9.9 2 2.5 2c1.1 0 1.9-.4 2.5-1.1" /></svg>
              </span>
              Earn from<br />real sales
            </li>
            <li>
              <span className="pn-dot" aria-hidden>
                <svg viewBox="0 0 24 24"><path d="M5 19V10M10 19V6M15 19v-7M20 19V8" /></svg>
              </span>
              Track everything<br />online
            </li>
          </ul>
          <div className="pn-actions">
            <Link to="/partner/join" className="btn btn-forest">Become an Okat Partner →</Link>
            <Link to="/partner/dashboard" className="btn btn-line">Login to Dashboard</Link>
          </div>
        </div>
        <div className="pn-hero-media">
          <img src="/images/partner-hero.jpg" alt="An Okat partner on the farm, with a jar of ghee and a phone" />
          <p className="pn-quote">
            Good Food
            <br />
            Creates
            <br />
            Good Lives
            <small>— Okat</small>
          </p>
        </div>
      </section>
      <div className="pn-strip">
        <span>Earn from your first successful sale</span>
        <span>Transparent tracking</span>
        <span>Secure payouts</span>
        <span>A pure and honest brand</span>
      </div>

      <section className="pn-block" id="how">
        <div className="pn-head">
          <p className="pn-eyebrow">How it works</p>
          <h2>Three Simple Steps</h2>
          <p className="pn-sub">Join, share and earn. It’s that simple.</p>
          <p className="pn-lines">Your phone can become your Okat storefront. Your network can become your customer base. Every genuine sale can become an earning opportunity.</p>
        </div>
        <div className="pn-steps">
          <article className="pn-step">
            <div className="pn-step-visual">
              <div className="phone">
                <div className="phone-screen">
                  <strong>Join Okat</strong>
                  <div className="phone-row"><span>Name</span><span>Your name</span></div>
                  <div className="phone-row"><span>Mobile</span><span>10 digits</span></div>
                  <div className="phone-row"><span>City</span><span>India</span></div>
                  <p style={{ marginTop: 10 }}>Partner ID issued free.</p>
                </div>
              </div>
            </div>
            <div className="pn-step-body">
              <p className="pn-num">01</p>
              <h3>Join for Free</h3>
              <p>Create your Okat Partner account and get your Partner ID, referral link and dashboard.</p>
              <ul>
                <li>Create your account</li>
                <li>Receive your Partner ID</li>
                <li>Get your referral link</li>
                <li>Access your dashboard</li>
              </ul>
            </div>
          </article>
          <span className="pn-arrow" aria-hidden>→</span>
          <article className="pn-step">
            <div className="pn-step-visual">
              <img src="/images/partner-share.jpg" alt="Friends looking at a phone together" />
            </div>
            <div className="pn-step-body">
              <p className="pn-num">02</p>
              <h3>Share Okat</h3>
              <p>Share your personal link with friends, family, followers, local customers or businesses.</p>
              <div className="share-row" aria-label="Share channels">
                <span title="WhatsApp"><svg viewBox="0 0 24 24"><path d="M6 18.5 7.2 16A7 7 0 1 1 12 19a7 7 0 0 1-3.2-.8z" /><path d="M9.2 10.2c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4.2.6.6 1.5.6 1.6s0 .3-.2.5l-.3.4c-.1.1-.2.3 0 .5.3.5.9 1.1 1.6 1.4.2.1.4.1.5-.1l.4-.5c.1-.2.3-.1.5-.1h.6c.4 0 .6.2.7.5.1.4.4 1.3-.4 1.8-.7.4-1.6.4-2.6-.1-1.4-.7-2.5-2.2-2.8-2.7-.4-.6-.8-1.6-.6-2.3z" /></svg></span>
                <span title="Instagram"><svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" /><circle cx="12" cy="12" r="2.4" /><circle cx="15.4" cy="8.6" r="0.6" /></svg></span>
                <span title="Facebook"><svg viewBox="0 0 24 24"><path d="M13.2 18v-5h1.7l.3-2h-2v-1.2c0-.6.2-1 .9-1H15.3V6.8c-.3 0-.9-.1-1.6-.1-1.6 0-2.7 1-2.7 2.8V11H9.2v2h1.8v5z" /></svg></span>
                <span title="Copy link"><svg viewBox="0 0 24 24"><path d="M10 13a4 4 0 0 0 5.7.4l2-2a4 4 0 0 0-5.7-5.6l-1.1 1.1" /><path d="M14 11a4 4 0 0 0-5.7-.4l-2 2a4 4 0 0 0 5.7 5.6l1.1-1.1" /></svg></span>
              </div>
            </div>
          </article>
          <span className="pn-arrow" aria-hidden>→</span>
          <article className="pn-step">
            <div className="pn-step-visual">
              <img src="/images/jar-premium.jpg" alt="Okat premium ghee jar" style={{ objectFit: 'contain', background: '#f4eee6' }} />
            </div>
            <div className="pn-step-body">
              <p className="pn-num">03</p>
              <h3>Earn Commission</h3>
              <p>When someone purchases through your eligible referral, the sale is attributed to you and the commission is recorded.</p>
              <ul>
                <li>Track orders</li>
                <li>Track kg sold</li>
                <li>Track revenue</li>
                <li>Track commission</li>
                <li>Unlock milestones</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="pn-block pn-earn">
        <div className="pn-head">
          <p className="pn-eyebrow light">Your earnings</p>
          <h2>Real Sales. Real Rewards.</h2>
          <p className="pn-sub">Earn commission on eligible genuine sales. The more you sell, the more opportunities you unlock.</p>
        </div>
        <div className="pn-earn-grid">
          <div className="pn-jars">
            {partnerProgram.products.map((product) => (
              <article key={product.id} className="pn-jar">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="pn-price">{inr(product.pricePerKg)} <small>/ kg</small></p>
                <p className="pn-rate">
                  Partner commission
                  <b>{Math.round(product.commissionRate * 100)}%</b>
                  <em>{inrPaise(commissionPerKg(product))} / kg</em>
                </p>
              </article>
            ))}
          </div>
          <div className="pn-table">
            <h3>Example earnings</h3>
            <table>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>{premium.name}</th>
                  <th>{standard.name}</th>
                </tr>
              </thead>
              <tbody>
                {partnerProgram.quantities.map((kg) => (
                  <tr key={kg}>
                    <td>{kg} kg</td>
                    <td>{inrPaise(commissionPerKg(premium) * kg)}</td>
                    <td>{inrPaise(commissionPerKg(standard) * kg)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="pn-note">Illustrative example. Actual commission and bonus values follow the current Okat Partner Program terms. Cancelled or returned orders are excluded.</p>
          </div>
        </div>
      </section>

      <section className="pn-block">
        <div className="pn-head">
          <p className="pn-eyebrow">Partner milestones</p>
          <h2>Sell More. Unlock Bigger Rewards.</h2>
          <p className="pn-sub">Reach sales milestones and earn bonus rewards on top of your eligible commission.</p>
        </div>
        <div className="pn-miles">
          {partnerProgram.milestones.map((item) => (
            <article key={item.kg} className="pn-mile">
              <div className="pn-medal">{item.kg}</div>
              <h3>{item.title}</h3>
              <p>{item.reward}</p>
              <p className="pn-sub">{item.note}</p>
              <div className="pn-progress" aria-hidden><span style={{ width: `${Math.min(100, item.kg * 2)}%` }} /></div>
              <img src="/images/jar-premium.jpg" alt="" />
            </article>
          ))}
        </div>
      </section>

      <section className="pn-block" id="levels">
        <div className="pn-head">
          <p className="pn-eyebrow">Partner levels</p>
          <h2>Grow with Okat</h2>
          <p className="pn-sub">The more eligible kilograms you sell in a month, the more the account can unlock. Levels are not bought.</p>
        </div>
        <div className="pn-levels">
          {levels.map((level) => (
            <article key={level.id} className={`pn-level ${level.id}`}>
              <h3>{level.name}</h3>
              <p className="range">{level.range}</p>
              <ul>
                {level.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <Link to={level.to} className={level.id === 'elite' ? 'btn btn-gold' : 'btn btn-forest'}>{level.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pn-split">
        <div className="pn-split-copy">
          <p className="pn-eyebrow">Bring a business</p>
          <h2>Build a Bigger Opportunity.</h2>
          <p className="pn-sub">Know a sweet shop, restaurant, hotel, grocery store, caterer or retailer? Introduce them to Okat and earn from eligible B2B referrals.</p>
          <img className="pn-b2b" src="/images/partner-b2b.jpg" alt="A partner speaking with a chef in a kitchen" />
          <div className="pn-icons">
            <span>Sweet shops</span><span>Restaurants</span><span>Hotels</span><span>Retailers</span>
          </div>
          <Link to="/partner/dashboard#lead" className="btn btn-forest">Submit a business lead</Link>
        </div>
        <div className="pn-kit">
          <p className="pn-eyebrow light">Partner toolkit</p>
          <h2>Everything You Need to Succeed</h2>
          <div className="phone">
            <div className="phone-screen">
              <strong>Okat toolkit</strong>
              <div className="phone-row"><span>Referral link</span><span>Copy</span></div>
              <div className="phone-row"><span>WhatsApp templates</span><span>Ready</span></div>
              <div className="phone-row"><span>Marketing assets</span><span>Share</span></div>
              <div className="phone-row"><span>Product catalogue</span><span>Open</span></div>
              <div className="phone-row"><span>Business lead form</span><span>Track</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pn-block">
        <div className="pn-head">
          <p className="pn-eyebrow">Success stories</p>
          <h2>Real People. Real Earnings.</h2>
          <p className="pn-sub">Sample stories for this layout. They are not verified partners and not a promise of income. Replace them when real accounts are ready.</p>
        </div>
        <div className="pn-stories">
          {sampleStories.map((story) => (
            <article key={story.name} className="pn-story">
              <header>
                <img src={story.image} alt="" />
                <div>
                  <strong>{story.name}</strong>
                  <p>{story.city}</p>
                  <p className="pn-sample">Sample · {story.kg}</p>
                </div>
              </header>
              <p>★★★★★</p>
              <p>{story.quote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pn-block" style={{ paddingTop: 0 }}>
        <div className="pn-head">
          <p className="pn-eyebrow">Questions</p>
          <h2>Frequently Asked Questions</h2>
          <p className="pn-sub">Everything you need to know about the Okat Partner Program.</p>
        </div>
        <div className="pn-faq">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="pn-close">
        <img className="bg" src="/images/cows-pasture.jpg" alt="" />
        <div className="shade" />
        <img className="pn-jar-float" src="/images/jar-premium.jpg" alt="Okat premium ghee" />
        <div className="pn-close-copy">
          <h2>Your Network Has Value.</h2>
          <p>Recommend Okat. Build customers. Bring businesses. Earn from eligible Okat sales.</p>
          <div className="pn-actions" style={{ marginTop: 18 }}>
            <Link to="/partner/join" className="btn btn-gold">Become an Okat Partner →</Link>
            <Link to="/partner/dashboard" className="btn btn-hero-line">Login to Dashboard</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
