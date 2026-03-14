export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  try {
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({
        ok: false,
        message: 'Не настроены TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID',
      })
    }

    const { service, page, name, phone, location, comment } = req.body || {}

    if (!name || !phone) {
      return res.status(400).json({
        ok: false,
        message: 'Заполните обязательные поля',
      })
    }

    const text = [
      'Новая заявка с сайта',
      '',
      `Услуга: ${service || '-'}`,
      `Страница: ${page || '-'}`,
      `Имя: ${name || '-'}`,
      `Телефон: ${phone || '-'}`,
      `Адрес: ${location || '-'}`,
      `Комментарий: ${comment || '-'}`,
    ].join('\n')

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      }
    )

    const telegramData = await telegramResponse.json()

    if (!telegramResponse.ok || !telegramData.ok) {
      console.error('Telegram error:', telegramData)
      return res.status(500).json({
        ok: false,
        message: 'Telegram не принял сообщение',
      })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Lead API error:', error)
    return res.status(500).json({
      ok: false,
      message: 'Ошибка отправки',
    })
  }
}
