require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("api/send-email/", async (req, res) => {
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
      text: "Спасибо за использование! Вот ваш маршрут...",
    });

    res.status(200).json({ message: "Письмо успешно отправлено!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при отправке письма" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Сервер запущен на http://localhost:${PORT}`),
);
