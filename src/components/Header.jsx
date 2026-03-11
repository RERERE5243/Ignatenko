import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import { contactData } from '../data/siteContent'

export default function Header({ theme }) {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link to="/" className="brand">
          <span className={`brand-mark ${theme}`}></span>
          <span>
            <strong>Premium Service</strong>
            <small>Плитка • Bobcat</small>
          </span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/paving">Плитка</NavLink>
          <NavLink to="/bobcat">Bobcat</NavLink>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={contactData.phoneHref}>
            {contactData.phone}
          </a>
          <a className={`btn btn-dark btn-sm ${theme}`} href={contactData.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </Container>
    </header>
  )
}
