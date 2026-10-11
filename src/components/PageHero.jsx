import Reveal from './Reveal.jsx'

export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal className="grid">
          <p className="label label--red col-3">{eyebrow}</p>
          <div className="col-9">
            <h1 className="h-page">{title}</h1>
            {intro && <p className="lead">{intro}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
