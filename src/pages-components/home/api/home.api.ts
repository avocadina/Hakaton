import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const { toEmail } = req.body;

  if (!toEmail || !toEmail.includes("@")) {
    return res.status(400).json({ message: "Неверный email" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Маршруты" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: "Ваш маршрут готов!",
      text: "Спасибо за использование сервиса маршрутов! Ваш маршрут сформирован.",
    });

    res.status(200).json({ message: "Письмо отправлено успешно!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при отправке письма" });
  }
}
