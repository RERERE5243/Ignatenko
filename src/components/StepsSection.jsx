import Container from './Container'
import SectionHeading from './SectionHeading'

export default function StepsSection({ badge, title, text, steps, theme }) {
  return (
    <section className="section">
      <Container>
        <SectionHeading badge={badge} title={title} text={text} theme={theme} />
        <div className="steps-grid">
          {steps.map((item) => (
            <article className="step-card" key={item.step}>
              <div className={`step-number ${theme}`}>{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
