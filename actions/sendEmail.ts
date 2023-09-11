"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESENT_API_KEY);

export const sendEmail = async (formDate: FormData) => {
  const message = formDate.get("message");
  const email = formDate.get("sender");
  if (!message || typeof message !== "string")
    return {
      error: "Invalid message",
    };

  if (!email || typeof email !== "string")
    return {
      error: "Invalid email",
    };

  await resend.emails.send({
    from: "Portfolio Contact Form<onboarding@resend.dev>",
    to: "konik5629@gmail.com",
    subject: "Message form contact",
    reply_to: email,
    text: message,
  });
};
