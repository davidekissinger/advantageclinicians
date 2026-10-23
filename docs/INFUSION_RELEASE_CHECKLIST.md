# Specialty Infusion Nursing — Preview, QA and Release Gates

**Branch:** `feature/specialty-infusion-v1` — do not merge into `main` until website and compliance approvals are documented.

## Verification record — 2026-10-23
- Netlify Deploy Preview PR #1: **ready** (deploy `6adb7df9cce581c333301fb5`).
- Netlify site-level form registration: `infusion-partner-inquiry`, `infusion-clinician-interest` detected; subsequent test entries are documented below.
- Static branch link and asset inventory: 15 HTML pages, no unresolved local routes in connector-based validation.
- Production deploy remains `6aaeea9896f1429124d585ea`, unchanged.
- **Not verified at that initial record:** successful test POST/redirect or legal/claims/privacy approval. See later evidence in readiness review.
- Repeatable CI test: `node scripts/check-infusion-static.mjs` on PR and manually.

## Static smoke checks (automatable)
- [ ] New URLs resolve in a Netlify Deploy Preview (not just GitHub).
- [ ] Existing homepage, organization, clinician, contact, legal and thank-you routes still work.
- [ ] New and old navigation, footer and cards link correctly with mobile menu.
- [ ] Assets, canonical metadata, sitemap, title/description and social image links resolve.
- [ ] Keyboard-only nav/form use, labels, required consent and focus-visible states work.
- [ ] Mobile widths 360, 390, 768, 1024, 1440px checked; no overflow; reduced-motion honored.
- [ ] No patient/clinical fields, uploads, credentials or PHI anywhere in forms.
- [ ] Form names are unique and `form-name` matches the form; `data-netlify="true"` present.
- [ ] Safe honeypot, required-field validation and generic thank-you action are functional.

## Netlify preview verification (human or authorized tester)
- [ ] PR Deploy Preview has status **ready** and accessible to authorized reviewer; staging access may require team login.
- [ ] Forms visible/detected: `infusion-partner-inquiry` and `infusion-clinician-interest`.
- [ ] Submit **fabricated non-patient** test leads to both forms, with test consent.
- [ ] Confirm exactly the intended fields, no attachments, and separate form identities.
- [ ] Confirm submissions are available to an authorized reviewer; define notification policy.
- [ ] Verify each success redirects to `/specialty-infusion-nursing/thank-you/`.
- [ ] Test keyboard and touch interaction, accessibility, layout and SEO.

## Required approvals BEFORE production merge
- [ ] **S4 Privacy/data:** Named owner and responder, restricted form access, consent/retention policy, PHI-misrouting incident procedure, privacy policy approved.
- [ ] **S7 Claims/content:** Confirm each public geographic/therapy/availability claim is appropriate; no implied coverage, licensure, certified capability, immediate RN placement or offers.
- [ ] Business operator accepts the service-line language and partner/RN pathways.
- [ ] Legal/compliance professional reviews applicable website and staffing recruitment representations.
- [ ] Approval and reviewer evidence entered in PR; planned rollback recorded.

## Separate operational gates BEFORE actual clinical coverage
- [ ] **S1:** Contracting identity; whether staffing placement vs licensed skilled care; Ohio and other state licensure legal determination.
- [ ] **S2:** Clinical leadership and responsibility for orders, protocols, documentation, supervision and adverse-event escalation.
- [ ] **S3:** RN primary-source license checks; competencies; other screenings; insurance and classification.
- [ ] **S5:** Approved partner contracts, liability, scope and cancellations.
- [ ] **S6 if PHI:** Appropriate BAAs, HIPAA security risk analysis, secure systems and incident controls.
- [ ] Written final go-live authorization; this website by itself is not such authorization.

## Rollback
Keep the main branch and current production deploy as known-good. If a later production release fails, republish the last known-good Netlify deploy or revert its merge commit; confirm forms/site behavior. Never roll back by removing stored lead records without the records retention process.

## Release review addendum — October 23, 2026
- [x] Two forms registered and received one submission each, as reported by Netlify:
  - `infusion-partner-inquiry`: Oct 23, 3:29 PM Eastern
  - `infusion-clinician-interest`: Oct 23, 3:31 PM Eastern
- [x] Preview deployed and GitHub static validation green at earlier commit.
- [ ] Confirm responsive browser QA / WCAG audit results on the latest commit (`browser-qa` GitHub Action).
- [ ] A human reviewer must still inspect screenshot artifacts or protected live preview for design quality.
- [ ] Form thank-you redirect and outbound notification delivery remain unverified by the form submission count.
- [ ] Do not self-approve the legal/clinical claims or privacy operating SOP; retain draft PR until explicit approval.
- [ ] Partner inquiry includes an optional free-text field. It is **not PHI-safe**; a person could misuse it. Decide whether to remove this field before launch or use an approved secure intake.
- [ ] Name the authorized business intake reviewer and restrict Netlify Forms team access to that role.
- [ ] Adopt documented retention/deletion, marketing-consent and inappropriate-PHI incident handling processes.
- [ ] Review whether any new public service/coverage language could be interpreted as holding out as a skilled home-health provider under Ohio Revised Code §3740.02. A staffing-only model must be verified with qualified counsel before production.

## Latest browser QA evidence
- [x] 12 browser route checks, 30 responsive viewport cases, 2 form validity cases, 1 mobile navigation case.
- [x] 12 automated WCAG 2.1 A/AA scans with zero detected violations.
- [x] Reviewed six desktop/mobile screenshots of the hub and two forms.
- [x] Both forms registered and each received one test submission.
- [ ] Browser redirect after real Netlify POST and email notification delivery not independently confirmed.
- [ ] Owner, privacy and legal/claims approvals not yet provided.

Detailed evidence: `docs/INFUSION_RELEASE_READINESS.md`. Operating proposal: `docs/INFUSION_INTAKE_SOP_DRAFT.md`.
