# Specialty Infusion Nursing — Preview, QA and Release Gates

**Branch:** `feature/specialty-infusion-v1` — do not merge into `main` until website and compliance approvals are documented.

## Current release status — October 24, 2026

This matrix supersedes unchecked items in historical sections below. The later sections preserve earlier evidence; an old unchecked QA item does not negate a later passing result.

| Area | Current evidence / next action | Status |
| --- | --- | --- |
| Website implementation | Six infusion routes and existing site integration; no additional major feature identified for informational release | COMPLETE |
| Employer-based staffing documentation | Corrected working model: AC employs/supplies nurses; client payroll employment is not required | CORRECTED; no legal clearance implied |
| Latest website QA | Website commit `9504887`: 57 browser checks, 12 accessibility scans, zero failures. Documentation correction `5c28a36`, workflow [40082057569](https://github.com/davidekissinger/advantageclinicians/actions/runs/40082057569): static and browser jobs successful | PASS; see current PR CI for later documentation-only evidence commit |
| Form registration and historical receipt | Oct 24 connector inventory after live preview tests: partner and RN forms each have two recorded submissions; Home/Ohio fields and separate identities preserved | VERIFIED |
| Current protected preview and real POST redirect | Authenticated preview `6adc7a20bc196545b7af4823` for `5c28a36` is ready. Both fabricated non-patient submissions redirected to `/specialty-infusion-nursing/thank-you/` and were recorded | PASS |
| Notifications and access | Signed-in dashboard: no submission notifications configured; one team member and zero reviewers. No settings or membership changed | VERIFIED CURRENT STATE; owner must select intake workflow |
| Intake/privacy operating choices | Assign owner/backup/privacy responder; approve retention, access/export and incident procedure | OWNER DECISION / IMPLEMENTATION |
| Public claims / service arrangement | Final wording and actual employer/provider arrangement reviewed; applicable legal/compliance decision recorded | OPEN |
| Deployment capacity | Netlify dashboard reports production deploys paused by team credit/plan limits; existing published sites remain live. No purchase or plan change made | EXTERNAL BLOCKER; owner action |
| Production | Connector reports published deploy `6aaeea9896f1429124d585ea`; no merge or production publish performed | UNCHANGED |

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
- [x] Partner optional public narrative field removed for the revised Ohio-home scope; remaining fields still require PHI-misdirection safeguards.
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
## Ohio home-infusion scope and retesting
- [x] Initial partner inquiry restricted to patients' homes within Ohio, organized by county/metro.
- [x] Ambulatory and facility selections removed from partner form.
- [x] RN form includes self-reported eligibility to practice in Ohio; no primary-source verification implied.
- [x] Partner optional narrative textarea removed; hidden legacy form field retained.
- [ ] Run static and browser validation after these form and page changes.
- [ ] Verify Ohio home-health agency/clinical-provider and employer relationship with qualified counsel before any service or licensure claim.
- [ ] Approve updated privacy disclosures, intake ownership and retention safeguards before merging.

## October 24 model review — release remains blocked

See [Ohio model comparison](INFUSION_OHIO_MODEL_COMPARISON.md) for verified statutory requirements, proposed responsibility allocation, exact draft copy, intake controls and approval evidence. The working business model is Advantage Clinicians employing nurses and supplying staffing to an identified, clinically accountable client provider. Client payroll employment is not a prerequisite. Recruitment/direct placement remains an optional alternative. Confirm the actual contracts, allocation of clinical responsibilities and applicable operating authority before fulfillment; the website remains business/RN interest intake only. This clarification does not record legal clearance or production release approval.

## Live preview verification — October 24, 2026

- Authenticated to Netlify through its existing sign-in flow; confirmed preview `6adc7a20bc196545b7af4823`, commit `5c28a36220c934bf4c20c434bb3bb24b480b3d06`, is ready and not published to production.
- Partner form: used a clearly labeled fictional QA organization/contact and reserved example-domain email; no patient data. Real browser POST reached the generic thank-you page. Netlify receipt timestamp: `2026-10-24T09:31:34.526Z`; count increased from 1 to 2.
- RN form: used a clearly labeled fictional QA nurse and reserved example-domain email, selected eligibility requiring review, and supplied no real license data. Real browser POST reached the same generic thank-you page. Netlify receipt timestamp: `2026-10-24T09:32:19.228Z`; count increased from 1 to 2.
- Generic success pages did not echo submitted values. Preview tools briefly interfered with automated checkbox interaction; direct browser interaction set both consent fields and both submissions completed. No website defect was established.
- Submission-notification settings showed no configured notifications. Email delivery cannot be claimed; select dashboard-only review or configure and test a specifically approved notification destination.
- Team membership inventory showed a single owner member and no reviewers. This verifies membership, not a complete audit of sessions, integrations, exports or account security. No access changes were made.
- Production deploy remains `6aaeea9896f1429124d585ea`. Netlify reports a team-level production-deploy pause; resolving billing/credit capacity is separate from code readiness and requires the owner. No spending, upgrade, auto-recharge or production deployment was performed.

Remaining decisions: intake owner/backup/privacy responder; dashboard vs notification workflow; retention and misdirected-data procedure; exact public claims and applicable staffing/provider review; production capacity and explicit release authorization.
