import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT || 8787)
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

function clean(value) {
  return String(value ?? '').trim()
}

function serviceLabel(service) {
  if (service === 'paving') return 'Укладка плитки'
  if (service === 'bobcat') return 'Аренда Bobcat'
  return service || 'Не указано'
}

function formatMessage(payload) {
  const lines = [
    '🔔 Новая заявка',
    '',
    `Услуга: ${serviceLabel(payload.service)}`,
    `Имя: ${clean(payload.name) || '—'}`,
    `Телефон: ${clean(payload.phone) || '—'}`,
    `Адрес: ${clean(payload.location) || '—'}`,
    `Комментарий: ${clean(payload.comment) || '—'}`,
    `Страница: ${clean(payload.page) || '—'}`,
    `Время: ${new Date().toLocaleString('ru-RU')}`,
  ]

  return lines.join('\n')
}

app.post('/api/lead', async (req, res) => {
  try {
    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({
        ok: false,
        message: 'Не настроены TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID',
      })
    }

    const payload = req.body || {}
    const name = clean(payload.name)
    const phone = clean(payload.phone)
    const location = clean(payload.location)

    if (!name) {
      return res.status(400).json({ ok: false, message: 'Имя обязательно' })
    }

    if (!phone || phone.replace(/\D/g, '').length < 10) {
      return res.status(400).json({ ok: false, message: 'Телефон заполнен некорректно' })
    }

    if (payload.service === 'bobcat' && !location) {
      return res.status(400).json({ ok: false, message: 'Адрес / место работ обязательно' })
    }

    const telegramResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: formatMessage(payload),
      }),
    })

    const telegramData = await telegramResponse.json()

    if (!telegramResponse.ok || !telegramData.ok) {
      console.error('Telegram error:', telegramData)
      return res.status(500).json({
        ok: false,
        message: 'Telegram не принял сообщение',
      })
    }

    return res.json({ ok: true })
  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({
      ok: false,
      message: 'Ошибка сервера при отправке заявки',
    })
  }
})

if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, 'dist')

  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath))

    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'))
    })
  }
}

app.listen(PORT, () => {
  console.log(`API server started on http://localhost:${PORT}`)
})
