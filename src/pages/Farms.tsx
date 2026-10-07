import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { useTitle } from '../useTitle'

export function Farms() {
  useTitle('Our Farms · Okat')
  return (
    <>
      <PageHero
        image="/images/cows-pasture.jpg"
        eyebrow="Our farms"
        title="Open ground, then the jar."
        text="Indigenous cows graze outside. The milk that follows is what we churn."
      />
      <section className="container page split">
        <div>
          <h2>A pasture is the first ingredient</h2>
          <p>
            Okat works with farms around Anand where desi cows spend the day in the grass and under trees, not in a standing line. The morning milking is the start of the jar, not a number we stretch when the season turns thin.
          </p>
          <p>
            We would rather pack less on a dry week than pretend the pasture gave more than it did. That is the whole standard: the field decides the batch.
          </p>
          <Link to="/why-okat" className="btn btn-forest">
            How the ghee is made
          </Link>
        </div>
        <img src="/images/farm-morning.jpg" alt="Dairy pasture in the early light" />
      </section>
      <section className="container stat-row">
        <article>
          <strong>Open grazing</strong>
          <p>Cows walk, rest in shade, and eat what the field is growing.</p>
        </article>
        <article>
          <strong>Small batches</strong>
          <p>Curd is set in pots a person can still lift. Nothing is anonymous.</p>
        </article>
        <article>
          <strong>Same farms</strong>
          <p>The milk in the premium jar and the everyday jar starts in the same pastures.</p>
        </article>
      </section>
      <section className="container split reverse">
        <img src="/images/bilona-wood.jpg" alt="Wooden bilona churn and a pot of ghee" />
        <div>
          <h2>From milk to butter, in sight of the farm</h2>
          <p>
            Milk is cultured, churned with a wooden bilona, and the butter is clarified over a low flame until the grain settles. The work stays close to where the cows are.
          </p>
          <Link to="/blog/morning-on-the-pasture" className="text-link">
            Read a morning on the pasture
          </Link>
        </div>
      </section>
    </>
  )
}
