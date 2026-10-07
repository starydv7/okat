import { Link, useParams } from 'react-router-dom'
import { getPost, posts } from '../data'
import { PageHero } from '../components/PageHero'
import { useTitle } from '../useTitle'

export function Blog() {
  useTitle('Journal · Okat')
  return (
    <>
      <PageHero
        image="/images/farm-morning.jpg"
        eyebrow="Journal"
        title="Notes from the dairy."
        text="Method, pasture, and how the jar behaves in a real kitchen."
      />
      <section className="container page journal">
        {posts.map((post) => (
          <article key={post.slug} className="post-card">
            <Link to={`/blog/${post.slug}`}>
              <img src={post.image} alt="" />
            </Link>
            <div>
              <p className="kicker">
                {post.date} · {post.minutes} min
              </p>
              <h2>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="text-link">
                Read
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

export function Article() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined
  useTitle(post ? `${post.title} · Okat` : 'Journal · Okat')

  if (!post) {
    return (
      <div className="container page-miss">
        <h1>That note has moved</h1>
        <Link to="/blog" className="btn btn-forest">
          Back to the journal
        </Link>
      </div>
    )
  }

  const others = posts.filter((item) => item.slug !== post.slug)

  return (
    <article className="container page narrow prose">
      <p className="crumbs">
        <Link to="/blog">Journal</Link>
        <span>/</span>
        {post.title}
      </p>
      <p className="kicker">
        {post.date} · {post.minutes} min read
      </p>
      <h1>{post.title}</h1>
      <img className="article-hero" src={post.image} alt="" />
      {post.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="more">
        {others.map((item) => (
          <Link key={item.slug} to={`/blog/${item.slug}`}>
            {item.title}
          </Link>
        ))}
      </div>
    </article>
  )
}
