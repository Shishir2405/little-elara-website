/**
 * Renders the 3 transactional emails to static HTML so you can preview them.
 * Run:  pnpm tsx scripts/email-previews.ts   then open the files in email-previews/
 */
import { writeFileSync, mkdirSync } from "fs";
import { adminEnquiryEmail, userConfirmationEmail, otpEmail } from "../src/lib/emails";

const sample = {
  name: "Priya Sharma",
  email: "priya.sharma@example.com",
  phone: "+91 98765 43210",
  childAge: "3 years",
  program: "Play School & Preschool",
  message: "Hello! I would like to know about admissions and book a tour this week.",
};

mkdirSync("email-previews", { recursive: true });
writeFileSync("email-previews/1-admin-notification.html", adminEnquiryEmail(sample).html);
writeFileSync("email-previews/2-user-confirmation.html", userConfirmationEmail(sample).html);
writeFileSync("email-previews/3-admin-otp.html", otpEmail("482913", "Sakshi").html);

console.log("✓ Wrote email-previews/1-admin-notification.html");
console.log("✓ Wrote email-previews/2-user-confirmation.html");
console.log("✓ Wrote email-previews/3-admin-otp.html");
