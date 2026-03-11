import Container from './Container'

export default function CTASection({ title, text, theme, primaryText = 'Оставить заявку', secondaryText = 'Связаться', primaryHref = '#form', secondaryHref = '#contacts' }) {
  return (
    <section className="section">
      <Container>
        <div className={`cta-banner ${theme}`}>
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>

          <div className="cta-actions">
            <a href={primaryHref} className={`btn btn-accent ${theme}`}>
              {primaryText}
            </a>
            <a href={secondaryHref} className="btn btn-ghost light">
              {secondaryText}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
