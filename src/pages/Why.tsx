import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { useTitle } from '../useTitle'

const steps = [
  { n: '01', title: 'Milk', text: 'Morning milk from indigenous cows that have been out on the grass.' },
  { n: '02', title: 'Curd', text: 'Set slowly in small pots, with a culture the dairy keeps itself.' },
  { n: '03', title: 'Churn', text: 'Bilona churning until butter separates from the buttermilk.' },
  { n: '04', title: 'Clarify', text: 'Butter cooked low until the ghee is deep gold and the grain settles.' },
]

export function Why() {
  useTitle('Why Okat · Okat')
  return (
    <>
      <PageHero
        image="/images/ghee-pour.jpg"
        eyebrow="Why Okat"
        title="Slow milk. Slower ghee."
        text="The jar is only as good as the pasture and the patience of the churn."
      />
      <section className="container page">
        <div className="steps">
          {steps.map((step) => (
            <article key={step.n}>
              <span>{step.n}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container split">
        <div>
          <h2>Two jars, one standard</h2>
          <p>
            Premium is the bilona jar: deeper colour, the batch we are proudest of. Standard is the everyday jar from the same farms, cultured and cooked clean, priced for the pot of dal you make tonight.
          </p>
          <p>Neither jar has preservatives. If a batch does not smell right on the flame, it does not get a label.</p>
          <div className="hero-actions">
            <Link to="/product/premium-a2-desi-cow-ghee" className="btn btn-gold">
              Shop premium
            </Link>
            <Link to="/product/standard-desi-cow-ghee" className="btn btn-line">
              Shop standard
            </Link>
          </div>
        </div>
        <img src="/images/jar-premium.jpg" alt="Jar of premium Okat ghee" />
      </section>
    </>
  )
}
