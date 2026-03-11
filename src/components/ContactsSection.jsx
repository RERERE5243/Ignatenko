import Container from './Container'
import SectionHeading from './SectionHeading'
import { contactData } from '../data/siteContent'

export default function ContactsSection({ theme }) {
  return (
    <section className="section muted" id="contacts">
      <Container>
        <SectionHeading
          badge="Контакты"
          title="Связаться удобно и быстро"
          text="Позвоните, напишите в WhatsApp или оставьте заявку через форму — ответим и сориентируем по следующим шагам."
          theme={theme}
        />

        <div className="contacts-grid">
          <article className="contact-card">
            <span>Телефон</span>
            <a href={contactData.phoneHref}>{contactData.phone}</a>
          </article>

          <article className="contact-card">
            <span>Email</span>
            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
          </article>

          <article className="contact-card">
            <span>География работ</span>
            <strong>{contactData.address}</strong>
          </article>

          <article className="contact-card">
            <span>Режим работы</span>
            <strong>{contactData.workTime}</strong>
          </article>
        </div>
      </Container>
    </section>
  )
}
