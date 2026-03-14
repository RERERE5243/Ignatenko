import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'

export default function HomePage() {
  return (
    <div className="page home-page">
      <Header theme="paving" />

      <main>
        <section className="hero-section home-chooser-section">
          <Container>
            <div className="home-chooser-intro">
              <div className="section-badge paving">Выберите направление</div>
              <h1>Два направления услуг</h1>
              <p>
                Выберите нужную страницу и сразу перейдите к заявке, стоимости и описанию услуги.
              </p>
            </div>

            <div className="home-chooser-grid">
              <Link to="/paving" className="service-tile service-tile-paving">
                <div className="service-tile-top">
                  <span className="service-tile-tag">Укладка плитки</span>
                </div>

                <div className="service-tile-body">
                  <h2>Плитка</h2>
                  <p>Ровная геометрия, аккуратная укладка, понятная смета и долговечный результат.</p>
                </div>

                <div className="service-tile-bottom">
                  <span className="service-tile-action">Открыть страницу</span>
                </div>
              </Link>

              <Link to="/bobcat" className="service-tile service-tile-bobcat">
                <div className="service-tile-top">
                  <span className="service-tile-tag">Аренда техники</span>
                </div>

                <div className="service-tile-body">
                  <h2>Bobcat</h2>
                  <p>Быстрая подача техники, удобный формат аренды и понятные условия по задаче.</p>
                </div>

                <div className="service-tile-bottom">
                  <span className="service-tile-action">Открыть страницу</span>
                </div>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
