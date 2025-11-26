// /app/api/contact/route.ts
import type { NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  // ENV muutujad – loeme need dünaamiliselt buildi ajal probleeme tekitamata
  const RESEND_KEY = process.env.RESEND_API_KEY;
  const EMAIL_FROM = process.env.EMAIL_FROM;

  if (!RESEND_KEY || !EMAIL_FROM) {
    // Kui võtmed puuduvad, lõpetame viisakalt ja EI viska build errorit
    console.error("Missing RESEND_API_KEY or EMAIL_FROM");
    return Response.json(
      { ok: false, error: "Email service not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(RESEND_KEY);

  const { name, email, message } = await req.json();

  const TO = "hargel73@gmail.com"; // kuhu sina tahad kirja saada
  const firstName = safeFirstName(name);
  const subject = `Thanks for reaching out, ${firstName}!`;

  const text = [
    `Hi ${firstName},`,
    ``,
    `Thanks for reaching out — your message just landed in my inbox!`,
    ``,
    `Talk soon,`,
    `Gregor Hargel`,
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;">
      <p>Hi ${esc(firstName)},</p>
      <p>Thanks for reaching out — your message just arrived!</p>
      <p>Talk soon,<br/>Gregor Hargel</p>
      <hr/>
      <p><strong>Your message:</strong></p>
      <pre>${esc(message || "")}</pre>
    </div>
  `.trim();

  try {
    await resend.emails.send({
      from: `Gregor Hargel <${EMAIL_FROM}>`,
      to: [TO],
      subject,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { ok: false, error: String(error) },
      { status: 500 }
    );
  }
}

function safeFirstName(full: string | undefined): string {
  if (!full) return "there";
  const first = full.trim().split(/\s+/)[0] || "there";
  return first.length > 40 ? "there" : first;
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({ 
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[m]!));
}
