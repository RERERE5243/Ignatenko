import Container from './Container'
import SectionHeading from './SectionHeading'

export default function FeatureGrid({ badge, title, text, items, theme }) {
  return (
    <section className="section">
      <Container>
        <SectionHeading badge={badge} title={title} text={text} theme={theme} />
        <div className="card-grid three">
          {items.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
