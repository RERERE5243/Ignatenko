import Container from './Container'
import SectionHeading from './SectionHeading'

export default function ServicesList({ badge, title, text, items, theme }) {
  return (
    <section className="section muted">
      <Container>
        <SectionHeading badge={badge} title={title} text={text} theme={theme} />
        <div className="service-list">
          {items.map((item) => (
            <div className="service-item" key={item}>
              <span className={`service-dot ${theme}`}></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
