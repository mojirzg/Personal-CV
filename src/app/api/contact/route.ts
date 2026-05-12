export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const text = `
📩 New Contact Form

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}
`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text,
        }),
      },
    );

    if (!telegramRes.ok) {
      throw new Error('Telegram API failed');
    }

    return Response.json({
      success: true,
    });
  } catch (err) {
    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
