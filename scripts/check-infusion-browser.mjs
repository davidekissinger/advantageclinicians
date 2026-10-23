// Browser-level responsive and accessibility QA for the static infusion MVP.
// This intentionally does NOT submit forms or send personal/patient data to Netlify.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const base = "http://127.0.0.1:8765";
const auditDir = "qa-artifacts";
const routes = [
  "/",
  "/for-healthcare-organizations/",
  "/for-clinicians/",
  "/specialty-infusion-nursing/",
  "/specialty-infusion-nursing/partners/",
  "/specialty-infusion-nursing/clinicians/",
  "/specialty-infusion-nursing/request-coverage/",
  "/specialty-infusion-nursing/join-network/",
  "/specialty-infusion-nursing/thank-you/",
  "/contact/",
  "/privacy/",
  "/terms/"
];
const infusionRoutes = routes.filter(route => route.startsWith("/specialty-infusion-nursing/"));
const widths = [360, 390, 768, 1024, 1440];
const report = { checks: [], failures: [], accessibility: [], screenshots: [] };
const fail = (title, detail) => report.failures.push({ title, detail: String(detail) });
const server = spawn("python3", ["-m", "http.server", "8765", "--bind", "127.0.0.1"], {
  cwd: process.cwd(), stdio: "ignore"
});
let browser;
await mkdir(auditDir, { recursive: true });
try {
  let ready = false;
  for (let attempt = 0; attempt < 45; attempt++) {
    if (server.exitCode !== null) throw new Error("Static HTTP test server quit unexpectedly");
    try {
      const res = await fetch(base + "/");
      if (res.ok) { ready = true; break; }
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  assert(ready, "Static HTTP test server did not start");
  browser = await chromium.launch({ headless: true });
  // Axe requires an explicit BrowserContext rather than browser.newPage().
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on("pageerror", error => fail("browser script error", error.message));

  // Route smoke test: use the local static site (no protected Netlify preview bypass).
  for (const route of routes) {
    try {
      const response = await page.goto(base + route, { waitUntil: "domcontentloaded" });
      assert(response && response.status() === 200, "Expected HTTP 200");
      const heading = await page.locator("h1").count();
      assert(heading === 1, "Expected exactly one top-level heading; found " + heading);
      const logoLoaded = await page.locator("header .logo img").evaluate(img => img.complete && img.naturalWidth > 0);
      assert(logoLoaded, "Brand logo failed to load");
      report.checks.push("Route, H1 and logo: " + route);
    } catch (error) { fail("route " + route, error); }
  }

  // Responsive overflow tests across major breakpoints, with screenshot evidence.
  for (const width of widths) {
    await page.setViewportSize({ width, height: width < 500 ? 840 : 950 });
    for (const route of infusionRoutes) {
      try {
        await page.goto(base + route, { waitUntil: "domcontentloaded" });
        const dimensions = await page.evaluate(() => ({
          innerWidth: window.innerWidth,
          docWidth: document.documentElement.scrollWidth,
          bodyWidth: document.body.scrollWidth
        }));
        assert(dimensions.docWidth <= dimensions.innerWidth + 1,
          "Horizontal overflow: " + JSON.stringify(dimensions));
        assert(dimensions.bodyWidth <= dimensions.innerWidth + 1,
          "Body overflow: " + JSON.stringify(dimensions));
        report.checks.push("Responsive " + width + "px: " + route);
        if ([390, 1440].includes(width) &&
            ["/specialty-infusion-nursing/",
             "/specialty-infusion-nursing/request-coverage/",
             "/specialty-infusion-nursing/join-network/"].includes(route)) {
          const slug = route.replaceAll("/", "-").replace(/^-|-$/g, "");
          const imagePath = auditDir + "/" + slug + "-" + width + "px.png";
          await page.screenshot({ path: imagePath, fullPage: true });
          report.screenshots.push(imagePath);
        }
      } catch (error) { fail("responsive " + width + "px " + route, error); }
    }
  }

  // Mobile navigation must become keyboard/touch operable at small viewports.
  try {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base + "/specialty-infusion-nursing/", { waitUntil: "domcontentloaded" });
    assert(!(await page.locator("#site-nav").isVisible()), "Collapsed navigation should start hidden");
    await page.getByRole("button", { name: "Open menu" }).click();
    assert(await page.locator("#site-nav").isVisible(), "Menu should open on click");
    assert((await page.getByRole("button", { name: "Close menu" }).getAttribute("aria-expanded")) === "true",
      "Menu must expose expanded state");
    await page.getByRole("button", { name: "Close menu" }).click();
    assert(!(await page.locator("#site-nav").isVisible()), "Menu should collapse on second click");
    report.checks.push("Mobile navigation opens, closes and updates aria-expanded");
  } catch (error) { fail("mobile navigation", error); }

  // Required fields and consent validate locally. Do NOT submit either form.
  for (const item of [
    {
      url: "/specialty-infusion-nursing/request-coverage/",
      name: "infusion-partner-inquiry",
      fill: async p => {
        await p.locator("#partner-contact").fill("Example Partner");
        await p.locator("#partner-email").fill("example@example.org");
        await p.locator("#partner-org").fill("Fictitious Pharmacy");
        await p.locator("#partner-type").selectOption("Specialty pharmacy");
        await p.locator("#partner-region").fill("Lucas County, Ohio");
        await p.locator("#partner-setting").selectOption("Home");
        await p.locator("#partner-timing").selectOption("Exploratory planning");
        await p.locator('[name="business_contact_consent"]').check();
      }
    },
    {
      url: "/specialty-infusion-nursing/join-network/",
      name: "infusion-clinician-interest",
      fill: async p => {
        await p.locator("#rn-name").fill("Example Registered Nurse");
        await p.locator("#rn-email").fill("example@example.org");
        await p.locator("#rn-license").selectOption("RN");
        await p.locator("#rn-years").selectOption("1–3 years");
        await p.locator("#rn-license-states").fill("Ohio");
        await p.locator("#rn-regions").fill("Toledo, Ohio");
        await p.locator('[name="consent_to_contact"]').check();
      }
    }
  ]) {
    try {
      await page.goto(base + item.url, { waitUntil: "domcontentloaded" });
      const form = page.locator('form[name="' + item.name + '"]');
      assert(await form.count() === 1, "Expected one form");
      assert(!(await form.evaluate(el => el.checkValidity())), "Blank form must fail required validation");
      assert((await form.getAttribute("action")) === "/specialty-infusion-nursing/thank-you/",
        "Expected Netlify success target");
      assert((await form.locator('input[type="file"]').count()) === 0, "Uploads must be absent");
      await item.fill(page);
      assert(await form.evaluate(el => el.checkValidity()), "Sample fictional data should validate");
      assert(await form.evaluate(el => new FormData(el).get("form-name")) === item.name,
        "Netlify hidden form name must match");
      report.checks.push("Form validity, consent and no upload: " + item.name);
    } catch (error) { fail("form " + item.name, error); }
  }

  // WCAG A/AA automated audits for new pages on phone and desktop.
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 950 });
    for (const route of infusionRoutes) {
      try {
        await page.goto(base + route, { waitUntil: "domcontentloaded" });
        const result = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();
        const violations = result.violations.map(v => ({
          id: v.id, impact: v.impact, description: v.help,
          nodes: v.nodes.slice(0, 8).map(n => ({
            target: n.target, summary: n.failureSummary
          }))
        }));
        report.accessibility.push({ width, route, violations });
        if (violations.length) fail("accessibility " + width + "px " + route, JSON.stringify(violations));
        else report.checks.push("WCAG 2.1 A/AA automated audit: " + width + "px " + route);
      } catch (error) { fail("axe scan " + width + "px " + route, error); }
    }
  }

} catch (error) { fail("setup", error); }
finally {
  await writeFile(auditDir + "/results.json", JSON.stringify(report, null, 2));
  await browser?.close();
  server.kill("SIGTERM");
}
const details = report.failures.slice(0, 40);
console.log(JSON.stringify({
  status: report.failures.length ? "FAIL" : "PASS",
  checks: report.checks.length,
  screenshots: report.screenshots.length,
  accessibilityScans: report.accessibility.length,
  failures: details
}, null, 2));
if (report.failures.length) process.exitCode = 1;
