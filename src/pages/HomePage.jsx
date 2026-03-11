import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { contactData } from '../data/siteContent'

export default function HomePage() {
  return (
    <div className="page home-page">
      <Header theme="paving" />

      <main>
        <section className="hero-section">
          <Container>
            <div className="home-hero">
              <div className="home-copy">
                <div className="section-badge paving">Два направления • Один сильный коммерческий стиль</div>
                <h1>Выберите направление услуг и откройте готовую продающую страницу</h1>
                <p>
                  Проект собран как единый современный сайт-визитка: отдельная страница под укладку плитки и отдельная страница под аренду Bobcat / мини-погрузчика.
                </p>
              </div>

              <div className="home-grid">
                <Link to="/paving" className="choice-card paving">
                  <span className="choice-label">Укладка плитки</span>
                  <h2>/paving</h2>
                  <p>Акцент на геометрии, основании, долговечности и аккуратном результате.</p>
                  <span className="choice-link">Открыть страницу</span>
                </Link>

                <Link to="/bobcat" className="choice-card bobcat">
                  <span className="choice-label">Аренда Bobcat</span>
                  <h2>/bobcat</h2>
                  <p>Быстрая подача техники, понятные условия и коммерческий фокус на заявках.</p>
                  <span className="choice-link">Открыть страницу</span>
                </Link>
              </div>

              <div className="home-contacts">
                <a href={contactData.phoneHref}>{contactData.phone}</a>
                <a href={contactData.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
