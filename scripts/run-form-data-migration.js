/**
 * Runs the 018_add_questionnaire_form_data migration (adds form_data JSONB to staff_questionnaires).
 * Requires DATABASE_URL or SUPABASE_DB_URL (e.g. in .env.local; Supabase → Settings → Database → Connection string).
 */
const fs = require("fs");
const path = require("path");

// Load .env.local if present
const envPath = path.join(__dirname, "../.env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf8");
  content.split("\n").forEach((line) => {
    const m = line.match(/^\s*([^#=]+)=(.*)$/);
    if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
  });
}

const sql = fs.readFileSync(
  path.join(__dirname, "../supabase/migrations/018_add_questionnaire_form_data.sql"),
  "utf8"
);

const url = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL;
if (!url) {
  console.error("Missing DATABASE_URL or SUPABASE_DB_URL. Either:");
  console.error("  1. Set one of them in .env.local (Supabase → Settings → Database → Connection string), then run:");
  console.error("     node scripts/run-form-data-migration.js");
  console.error("  2. Or run this SQL in Supabase Dashboard → SQL Editor:\n");
  console.error(sql);
  process.exit(1);
}

async function run() {
  const { Client } = require("pg");
  const client = new Client({ connectionString: url });
  try {
    await client.connect();
    await client.query(sql);
    console.log("Migration 018 (form_data column) applied successfully.");
  } catch (err) {
    console.error("Migration failed:", err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

run();
