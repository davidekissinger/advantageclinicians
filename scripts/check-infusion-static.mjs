// Dependency-free repository smoke checks for the public static site.
// Run: node scripts/check-infusion-static.mjs
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = new Set();
function inventory(rel = "") {
  const dir = path.join(root, rel);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const name = path.posix.join(rel.replaceAll(path.sep, "/"), entry.name);
    if (entry.isDirectory()) inventory(name);
    else files.add(name);
  }
}
inventory();
const htmlFiles = [...files].filter((file) => file.endsWith(".html"));
const checks = [];
const errors = [];
const read = (name) => fs.readFileSync(path.join(root, name), "utf8");

for (const file of htmlFiles) {
  const markup = read(file);
  const h1Count = (markup.match(/<h1\b/g) ?? []).length;
  if (h1Count !== 1) errors.push(file + ": expected exactly one h1, saw " + h1Count);
  if (!markup.includes('href="/assets/styles.css"')) errors.push(file + ": missing shared stylesheet");
  for (const match of markup.matchAll(/\b(?:href|src)=["'](\/[^"'#?]*)/g)) {
    const href = match[1];
    if (href.startsWith("//")) continue;
    const localPath = href === "/" ? "index.html" : href.endsWith("/") ? href.slice(1) + "index.html" : href.slice(1);
    if (!files.has(localPath) && !files.has(localPath + ".html"))
      errors.push(file + ": unresolved " + href);
  }
  checks.push(file);
}
const base = "specialty-infusion-nursing/";
const routes = [
  base + "index.html", base + "partners/index.html", base + "clinicians/index.html",
  base + "request-coverage/index.html", base + "join-network/index.html",
  base + "thank-you/index.html"
];
for (const file of routes) {
  if (!files.has(file)) errors.push(file + ": route missing");
}
for (const [file, name, consent] of [
  [base + "request-coverage/index.html", "infusion-partner-inquiry", "business_contact_consent"],
  [base + "join-network/index.html", "infusion-clinician-interest", "consent_to_contact"]
]) {
  if (!files.has(file)) continue;
  const markup = read(file);
  for (const needle of [
    'name="' + name + '"', 'name="form-name" value="' + name + '"',
    'data-netlify="true"', 'netlify-honeypot="bot-field"',
    'name="' + consent + '"', 'action="/specialty-infusion-nursing/thank-you/"',
    'Do not submit patient names'
  ]) if (!markup.includes(needle)) errors.push(file + ": missing " + needle);
  if (/type=["']file["']/.test(markup)) errors.push(file + ": file uploads forbidden");
  if (!new RegExp('<input[^>]*name="' + consent + '"[^>]*required').test(markup))
    errors.push(file + ": contact consent must be required");
}
// Home-infusion inquiries must accept locations without a single-state restriction.
const partnerForm = read("specialty-infusion-nursing/request-coverage/index.html");
if (!partnerForm.includes('name="care_setting" type="text" value="Home" readonly'))
  errors.push("Home setting must be fixed in partner form");
if (partnerForm.includes("<option>Ambulatory infusion</option>") || partnerForm.includes("<option>Mixed settings</option>"))
  errors.push("Out-of-scope partner care setting available");
if (partnerForm.includes('<textarea id="partner-message"'))
  errors.push("Public partner narrative textarea must not be available");
if (!partnerForm.includes('name="state_regions"') || !partnerForm.includes("Requested service locations"))
  errors.push("Partner form must collect requested service locations");
const rnForm = read("specialty-infusion-nursing/join-network/index.html");
if (!rnForm.includes('name="practice_authorization_status" required'))
  errors.push("RN form must ask location-neutral practice authorization");
if (!rnForm.includes('type="hidden" name="ohio_practice_status" value=""'))
  errors.push("Legacy practice field must remain hidden for historical submission compatibility");
if (!rnForm.includes("Preferred locations for home visits"))
  errors.push("RN form must collect preferred locations");
for (const file of htmlFiles) {
  if (/\bOhio\b/i.test(read(file))) errors.push(file + ": state-specific marketing restriction remains");
}
const sitemap = read("sitemap.xml");
for (const url of ["specialty-infusion-nursing/", "specialty-infusion-nursing/partners/", "specialty-infusion-nursing/clinicians/"]) {
  if (!sitemap.includes("<loc>https://advantageclinicians.com/" + url + "</loc>"))
    errors.push("Missing indexable route in sitemap: " + url);
}
for (const url of ["specialty-infusion-nursing/request-coverage/", "specialty-infusion-nursing/join-network/", "specialty-infusion-nursing/thank-you/"]) {
  if (sitemap.includes("<loc>https://advantageclinicians.com/" + url + "</loc>"))
    errors.push("Noindex route must not appear in sitemap: " + url);
  const file = url + "index.html";
  if (files.has(file) && !read(file).includes('name="robots" content="noindex, nofollow"'))
    errors.push(file + ": privacy-focused noindex missing");
}
const css = read("assets/styles.css");
if ((css.match(/{/g) ?? []).length !== (css.match(/}/g) ?? []).length) errors.push("CSS curly braces unbalanced");
if (errors.length) {
  console.error("Static validation FAILED:\n- " + errors.join("\n- "));
  process.exitCode = 1;
} else {
  console.log("Static validation PASS — " + htmlFiles.length + " HTML pages, " + files.size + " files, paths/assets/forms/SEO checks OK.");
}
