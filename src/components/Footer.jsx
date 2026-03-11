import Container from './Container'
import { contactData } from '../data/siteContent'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div>
          <div className="footer-brand">Premium Service</div>
          <p className="footer-text">
            Коммерческий сайт-визитка для услуг по укладке плитки и аренде Bobcat / мини-погрузчика.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/paving">Укладка плитки</Link>
          <Link to="/bobcat">Аренда Bobcat</Link>
          <a href={contactData.phoneHref}>{contactData.phone}</a>
          <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
        </div>
      </Container>
    </footer>
  )
}
