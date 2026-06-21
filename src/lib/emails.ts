import { SITE } from "./constants";
import { esc } from "./brevo";

/** Wraps email body content in the Little Elara Steps brand theme (table-based, inline styles). */
function shell(inner: string, preheader = ""): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${SITE.name}</title></head>
<body style="margin:0;padding:0;background:#F6FBFE;font-family:Arial,Helvetica,sans-serif;color:#33445C;">
<span style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F6FBFE;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #DCE8F2;">
  <tr><td style="background:#1E7FAE;padding:22px 28px;">
    <div style="font-size:20px;font-weight:bold;color:#ffffff;">Little Elara Steps</div>
    <div style="font-size:11px;color:#D7ECF7;letter-spacing:1px;">INCLUSIVE DAY CARE &amp; PRE SCHOOL &middot; NEW ASHOK NAGAR</div>
  </td></tr>
  <tr><td style="padding:28px;">${inner}</td></tr>
  <tr><td style="background:#E8F3FB;padding:18px 28px;font-size:12px;color:#6E7E93;line-height:1.6;">
    <div style="font-weight:bold;color:#33445C;">Little Elara Steps</div>
    <div>${esc(SITE.address)}</div>
    <div>Call / WhatsApp: ${esc(SITE.phone)} &middot; ${esc(SITE.email)}</div>
  </td></tr>
</table>
</td></tr></table></body></html>`;
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:7px 0;font-size:13px;color:#6E7E93;width:120px;vertical-align:top;">${esc(label)}</td>
    <td style="padding:7px 0;font-size:14px;color:#33445C;font-weight:600;">${esc(value) || "-"}</td>
  </tr>`;
}

export interface EnquiryData {
  name: string;
  email?: string;
  phone: string;
  childAge?: string;
  program?: string;
  message?: string;
}

/** Email to the business inbox when a new enquiry arrives. */
export function adminEnquiryEmail(d: EnquiryData) {
  const inner = `
    <div style="display:inline-block;background:#FFE6DC;color:#D24E26;font-size:12px;font-weight:bold;padding:5px 12px;border-radius:999px;">NEW ENQUIRY</div>
    <h1 style="font-size:22px;color:#33445C;margin:14px 0 4px;">You have a new admission enquiry</h1>
    <p style="font-size:14px;color:#6E7E93;margin:0 0 18px;">A parent just submitted the enquiry form on your website.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #DCE8F2;">
      ${row("Name", d.name)}
      ${row("Email", d.email || "")}
      ${row("Phone", d.phone)}
      ${row("Child's age", d.childAge || "")}
      ${row("Program", d.program || "")}
      ${row("Message", d.message || "")}
    </table>
    <div style="margin-top:22px;">
      <a href="tel:${esc(d.phone)}" style="background:#1E7FAE;color:#ffffff;text-decoration:none;padding:11px 22px;border-radius:999px;font-weight:bold;font-size:14px;display:inline-block;">Call ${esc(d.name)}</a>
    </div>`;
  return { subject: `New enquiry: ${d.name}`, html: shell(inner, `New enquiry from ${d.name}`) };
}

/** Confirmation email sent to the parent who submitted the enquiry. */
export function userConfirmationEmail(d: EnquiryData) {
  const waText = encodeURIComponent(
    "Hi Little Elara Steps, I just submitted an enquiry on your website."
  );
  const inner = `
    <div style="display:inline-block;background:#E7F6EA;color:#4FA473;font-size:12px;font-weight:bold;padding:5px 12px;border-radius:999px;">ENQUIRY RECEIVED</div>
    <h1 style="font-size:23px;color:#33445C;margin:14px 0 6px;">Thank you, ${esc(d.name)}! <span style="color:#F2683F;">&#128156;</span></h1>
    <p style="font-size:15px;color:#6E7E93;line-height:1.6;margin:0 0 18px;">
      We have received your enquiry for <b style="color:#1E7FAE;">Little Elara Steps</b> and our team will get back to you within <b>one working day</b>. We can&rsquo;t wait to welcome your little one.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F6FBFE;border-radius:12px;padding:6px 14px;">
      ${row("Child's age", d.childAge || "")}
      ${row("Interested in", d.program || "")}
    </table>
    <p style="font-size:14px;color:#6E7E93;margin:18px 0 10px;">Want to talk to us sooner?</p>
    <div>
      <a href="tel:${esc(SITE.phoneRaw)}" style="background:#1E7FAE;color:#ffffff;text-decoration:none;padding:11px 22px;border-radius:999px;font-weight:bold;font-size:14px;display:inline-block;margin:0 6px 6px 0;">Call us</a>
      <a href="https://wa.me/${esc(SITE.whatsapp)}?text=${waText}" style="background:#25D366;color:#ffffff;text-decoration:none;padding:11px 22px;border-radius:999px;font-weight:bold;font-size:14px;display:inline-block;margin:0 0 6px;">WhatsApp</a>
    </div>
    <p style="font-size:13px;color:#9CA9B8;margin-top:20px;font-style:italic;">&ldquo;Every child learns at their own pace. Every little step matters.&rdquo;</p>`;
  return {
    subject: "We received your enquiry — Little Elara Steps",
    html: shell(inner, "Thanks! We received your enquiry and will reply within one working day."),
  };
}

/** Admin login one-time-passcode email. */
export function otpEmail(code: string, name = "Admin") {
  const inner = `
    <h1 style="font-size:21px;color:#33445C;margin:0 0 6px;">Hi ${esc(name)}, here is your login code</h1>
    <p style="font-size:14px;color:#6E7E93;margin:0 0 18px;">Use this one-time code to sign in to the Little Elara Steps admin.</p>
    <div style="background:#F6FBFE;border:1px solid #DCE8F2;border-radius:14px;padding:18px;text-align:center;">
      <div style="font-size:34px;font-weight:bold;letter-spacing:10px;color:#1E7FAE;font-family:'Courier New',monospace;">${esc(code)}</div>
    </div>
    <p style="font-size:13px;color:#6E7E93;margin-top:16px;">This code expires in <b>10 minutes</b>. If you didn&rsquo;t request it, you can safely ignore this email.</p>`;
  return {
    subject: "Your Little Elara Steps admin login code",
    html: shell(inner, "Your admin login code"),
  };
}
