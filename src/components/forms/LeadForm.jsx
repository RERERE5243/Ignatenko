import { useMemo, useState } from 'react'
import Container from '../Container'

const initialFromFields = (fields) =>
  fields.reduce((acc, field) => {
    acc[field.name] = ''
    return acc
  }, {})

export default function LeadForm({
  title,
  description,
  fields,
  requiredFields = [],
  successMessage,
  theme,
}) {
  const [formData, setFormData] = useState(() => initialFromFields(fields))
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const requiredSet = useMemo(() => new Set(requiredFields), [requiredFields])

  const validate = () => {
    const nextErrors = {}

    fields.forEach((field) => {
      const value = formData[field.name].trim()

      if (requiredSet.has(field.name) && !value) {
        nextErrors[field.name] = 'Заполните поле'
      }

      if (field.name === 'phone' && value) {
        const digits = value.replace(/\D/g, '')
        if (digits.length < 10) {
          nextErrors[field.name] = 'Укажите корректный телефон'
        }
      }
    })

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSubmitError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validate()

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: theme,
          page: window.location.pathname,
          ...formData,
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'Не удалось отправить заявку')
      }

      setIsSuccess(true)
      setFormData(initialFromFields(fields))
      setErrors({})
    } catch (error) {
      setSubmitError(error.message || 'Ошибка отправки')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section" id="form">
      <Container>
        <div className="form-layout">
          <div className="form-copy">
            <div className={`section-badge ${theme}`}>Заявка</div>
            <h2>{title}</h2>
            <p>{description}</p>

            <ul className="form-points">
              <li>Быстрая обратная связь</li>
              <li>Понятное уточнение задачи</li>
              <li>Без лишней бюрократии</li>
            </ul>
          </div>

          <div className="form-card">
            {isSuccess ? (
              <div className="success-box">
                <strong>{successMessage}</strong>
                <p>Мы получили вашу заявку и скоро свяжемся для уточнения деталей.</p>
                <button className={`btn btn-accent ${theme}`} onClick={() => setIsSuccess(false)}>
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {fields.map((field) => {
                  const isTextarea = field.type === 'textarea'
                  const hasError = Boolean(errors[field.name])

                  return (
                    <div className="field" key={field.name}>
                      <label htmlFor={field.name}>
                        {field.label}
                        {requiredSet.has(field.name) ? <span> *</span> : null}
                      </label>

                      {isTextarea ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={hasError ? 'input error' : 'input'}
                          rows="5"
                        />
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={hasError ? 'input error' : 'input'}
                        />
                      )}

                      {hasError ? <small className="error-text">{errors[field.name]}</small> : null}
                    </div>
                  )
                })}

                {submitError ? <small className="error-text">{submitError}</small> : null}

                <button className={`btn btn-accent full ${theme}`} type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Оставить заявку'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
