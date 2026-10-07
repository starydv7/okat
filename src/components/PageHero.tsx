export function PageHero({
  image,
  eyebrow,
  title,
  text,
}: {
  image: string
  eyebrow: string
  title: string
  text?: string
}) {
  return (
    <section className="page-hero">
      <img className="bg" src={image} alt="" />
      <div className="page-hero-shade" />
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p className="page-hero-text">{text}</p>}
      </div>
    </section>
  )
}
