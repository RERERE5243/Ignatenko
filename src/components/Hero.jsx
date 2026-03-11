import Container from './Container'

export default function Hero({ badge, title, description, primaryCta, secondaryCta, metrics, theme, primaryHref = '#form', secondaryHref = '#contacts' }) {
  return (
    <section className="hero-section">
      <Container>
        <div className={`hero-card ${theme}`}>
          <div className="hero-copy">
            <div className={`section-badge ${theme}`}>{badge}</div>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="hero-actions">
              <a href={primaryHref} className={`btn btn-accent ${theme}`}>
                {primaryCta}
              </a>
              <a href={secondaryHref} className="btn btn-ghost">
                {secondaryCta}
              </a>
            </div>
          </div>

          <div className="hero-panel">
            {metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
