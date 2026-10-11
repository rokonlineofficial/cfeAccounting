import Reveal from './Reveal.jsx'

export default function SectionHeader({ eyebrow, title, intro, as: H = 'h2', children }) {
  return (
    <Reveal className="section-header grid">
      <p className="label label--red col-3">{eyebrow}</p>
      <div className="col-9">
        <H className="h-section">{title}</H>
        {intro && <p className="lead">{intro}</p>}
        {children}
      </div>
    </Reveal>
  )
}
