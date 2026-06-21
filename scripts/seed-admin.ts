/**
 * Seeds the single admin who can log in.
 * Run:  pnpm seed:admin   (after filling ADMIN_EMAIL + MONGODB_URI in .env.local)
 */
import { readFileSync } from "fs";
import mongoose from "mongoose";
import { Admin } from "../src/models/Admin";

// Minimal .env.local loader (no extra dependency).
function loadEnv(file: string) {
  try {
    const text = readFileSync(file, "utf8");
    for (const line of text.split("\n")) {
      const m = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
      if (m && process.env[m[1]] === undefined) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    // no .env.local — rely on real environment
  }
}

async function main() {
  loadEnv(".env.local");
  const uri = process.env.MONGODB_URI;
  const email = (process.env.ADMIN_EMAIL || "").toLowerCase().trim();
  const name = process.env.ADMIN_NAME || "Admin";

  if (!uri || !email) {
    console.error("✗ Set MONGODB_URI and ADMIN_EMAIL in .env.local first.");
    process.exit(1);
  }

  await mongoose.connect(uri);
  const admin = await Admin.findOneAndUpdate(
    { email },
    { email, name },
    { upsert: true, new: true }
  );
  console.log(`✓ Seeded admin: ${admin.email}`);
  await mongoose.disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
