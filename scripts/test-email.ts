/**
 * One-off Brevo test send.
 * Run: pnpm tsx scripts/test-email.ts you@example.com
 */
import { readFileSync } from "fs";
import { sendBrevoEmail } from "../src/lib/brevo";
import { userConfirmationEmail } from "../src/lib/emails";

function loadEnv(file: string) {
  try {
    for (const line of readFileSync(file, "utf8").split("\n")) {
      const m = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
      if (m && process.env[m[1]] === undefined)
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {}
}

async function main() {
  loadEnv(".env.local");
  const to = process.argv[2] || "shishirshrivastava30@gmail.com";
  console.log("Sending test email to:", to);
  console.log("Using key prefix:", (process.env.BREVO_API_KEY || "").slice(0, 9) || "(none)");

  const mail = userConfirmationEmail({
    name: "Shishir",
    email: to,
    phone: "+91 93109 82342",
    childAge: "3 years",
    program: "Play School & Preschool",
  });

  try {
    const res = await sendBrevoEmail({
      to: [{ email: to, name: "Shishir" }],
      subject: "[TEST] " + mail.subject,
      htmlContent: mail.html,
    });
    console.log("✓ SENT. Brevo response:", JSON.stringify(res));
  } catch (e) {
    console.error("✗ FAILED:", e instanceof Error ? e.message : e);
  }
}

main();
