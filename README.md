# Advantage Clinicians — Launch Package

Static Netlify-ready site for advantageclinicians.com.

## Public routes
- /
- /for-healthcare-organizations/
- /for-clinicians/
- /about/
- /contact/
- /privacy/
- /terms/

## Contact form
The contact page uses Netlify Forms (`data-netlify="true"`) and redirects successful submissions to `/thank-you/`. After deployment, confirm the form appears under Netlify > Forms and submit one test message. Configure an email notification in Netlify if desired.

## Launch checklist
1. Deploy this folder/ZIP to the existing Netlify project.
2. Confirm all public routes return 200.
3. Submit one contact-form test and verify it appears in Netlify Forms.
4. Confirm HTTPS certificate is active for advantageclinicians.com.
5. Confirm www redirects to the primary domain.
6. Review Privacy Policy and Terms of Use with counsel when practical, especially before adding a job board, applicant tracking, analytics, advertising, or employment application workflow.

## Homepage hero
The homepage uses the approved colorful five-clinician image (`/assets/hero-colorful.webp`) while retaining the brand-guide-aligned navy/teal UI system.

## v5 visual adjustment
- Header logo increased to 310px wide on desktop and 230px on mobile.
- No other content or layout changes from the brand-guide-aligned color-hero build.

## Specialty infusion nursing — v1 feature branch

An **exploratory specialty service line**, with dedicated partner and RN interest paths.
The website is **not** a patient referral portal, clinical staffing guarantee, approved job posting, or fulfillment/scheduling system.

| Path | Purpose |
|---|---|
| `/specialty-infusion-nursing/` | Program overview and audience choice |
| `/specialty-infusion-nursing/partners/` | Partner discovery |
| `/specialty-infusion-nursing/clinicians/` | Infusion RN discovery |
| `/specialty-infusion-nursing/request-coverage/` | Non-PHI partner inquiry |
| `/specialty-infusion-nursing/join-network/` | Limited RN interest |
| `/specialty-infusion-nursing/thank-you/` | Generic form acknowledgement |

**Forms:** `infusion-partner-inquiry` and `infusion-clinician-interest`, distinct from the existing `contact` form. Netlify Forms must detect both forms from static HTML after preview deploy. No files, clinical orders, patient information, sensitive credentials or medical data are requested. Both forms require explicit contact consent. Netlify stores form submissions; owner must approve processing, restricted access, retention, and notification settings before production form launch.

**Implementation:** Adds HTML routes and scoped CSS to the existing static Netlify project. No new frameworks, Supabase, credentialing portal or independent clinical operations workflow.
See `docs/INFUSION_RELEASE_CHECKLIST.md` for tests and public release gates. Production must remain unchanged until review and merge.
