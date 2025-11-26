// /app/api/contact/route.ts
import type { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // SAATJA: sinu verifitseeritud aadress Resendis
  const FROM = process.env.EMAIL_FROM!; // nt hello@gregorhargel.com

  const TO = "hargel73@gmail.com";

  const firstName = safeFirstName(name);

  const subject = `Thanks for reaching out, ${firstName}!`;

  const text = [
    `Hi ${firstName},`,
    ``,
    `First of all, thanks so much for reaching out — it just landed in my inbox!`,
    `Even though this is an automated email, I just wanted to say hi and let you know that I am a real person.`,
    `I try to reply within 24 hours, unless I’m arguing with DaVinci Resolve about who’s really in control of the playback.`,
    `Either way, your message is in safe hands.`,
    ``,
    `Talk soon,`,
    `Gregor Hargel`,
    `Bali-based Video Editor`,
  ].join("\n");

  const html = `
  <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;color:#111827;background:#ffffff;padding:0;margin:0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;padding:32px">
      <tr>
        <td>
          <h1 style="margin:0 0 16px 0;font-size:22px;font-weight:700">Hi ${esc(firstName)},</h1>

          <p style="margin:0 0 12px 0">
            First of all, thanks so much for reaching out — it just landed in my inbox!
          </p>
          <p style="margin:0 0 12px 0">
            Even though this is an automated email, I just wanted to say hi and let you know that I am a real person.
          </p>
          <p style="margin:0 0 12px 0">
            I try to reply within 24 hours, unless I’m arguing with DaVinci Resolve about who’s really in control of the playback.
          </p>
          <p style="margin:0 0 20px 0">
            Either way, your message is in safe hands.
          </p>

          <p style="margin:0 0 20px 0">Talk soon,</p>

          <p style="margin:0 0 4px 0;font-weight:600">Gregor Hargel</p>
          <p style="margin:0 0 24px 0;color:#6b7280">Bali-based Video Editor</p>

          <!-- Optional: echo back user's message -->
          <div style="margin-top:24px;border-top:1px solid #e5e7eb;padding-top:16px">
            <p style="margin:0 0 8px 0;color:#6b7280;font-size:13px">You wrote:</p>
            <pre style="white-space:pre-wrap;font:inherit;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:12px;margin:0;">
${esc(message || "")}
            </pre>
          </div>
        </td>
      </tr>
    </table>
  </div>`.trim();

  const { error } = await resend.emails.send({
    from: `Gregor Hargel <${FROM}>`,
    to: [TO],
    subject,
    html,
    text,
    // replyTo: FROM, // kui tahad, et vastused tuleksid otse sinu aadressile
    headers: { "X-Contact-Form": "contact-confirmation" },
  });

  if (error) return Response.json({ ok: false, error: String(error) }, { status: 500 });
  return Response.json({ ok: true });
}

function safeFirstName(full: string | undefined): string {
  if (!full) return "there";
  const first = full.trim().split(/\s+/)[0] || "there";
  return first.length > 40 ? "there" : first; // sane guard
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]!));
}
