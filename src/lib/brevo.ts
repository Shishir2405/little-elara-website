interface SendArgs {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
}

/** Send a transactional email via the Brevo API. */
export async function sendBrevoEmail({ to, subject, htmlContent }: SendArgs) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  if (!apiKey || !senderEmail) {
    throw new Error("Brevo is not configured (BREVO_API_KEY / BREVO_SENDER_EMAIL).");
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { email: senderEmail, name: process.env.BREVO_SENDER_NAME || "Little Elara Steps" },
      to,
      subject,
      htmlContent,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Brevo error ${res.status}: ${text}`);
  }
  return res.json().catch(() => ({}));
}

/** Minimal HTML escaping for values placed into email templates. */
export function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
