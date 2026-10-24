# Infusion Nursing: Website Production-Readiness Review

**Current geographic positioning — October 24:** Service development and RN recruitment are open-ended across locations. Earlier Ohio-only marketing/intake descriptions below are historical and superseded. See [current service scope](INFUSION_SERVICE_SCOPE.md). Ohio legal references apply to that jurisdiction, not to the business's full geographic reach.


**Review date:** October 23, 2026  
**Repository:** `davidekissinger/advantageclinicians`  
**Branch:** `feature/specialty-infusion-v1`  
**Reviewed build commit:** `8a228e9cec635a4235c2b33960107d759ffdfe91`  
**Draft PR:** https://github.com/davidekissinger/advantageclinicians/pull/1  
**Preview:** https://deploy-preview-1--advantageclinicians.netlify.app/specialty-infusion-nursing/  
**Review result:** **TECHNICAL QA PASSED; PRODUCTION RELEASE NOT YET AUTHORIZED.**

## Verified functionality
| Test | Result | Evidence |
| --- | --- | --- |
| Existing routes + new infusion routes | PASS | Static route/asset check and 12 browser route/H1/logo checks |
| Responsive layout at 360, 390, 768, 1024, 1440px | PASS | 30 viewports checked; no horizontal overflow |
| Navigation and aria-expanded toggle | PASS | Chromium browser test |
| Two client-side form validation flows | PASS | Required data/consent, Netlify form name, no file uploads |
| Automated WCAG 2.1 A/AA audits | PASS | 12 scans across six infusion pages, 390px and 1440px; zero detected violations |
| Existing Netlify form registrations | PASS | `infusion-partner-inquiry` and `infusion-clinician-interest` registered |
| Actual intake receipt | PASS (receipt only) | Partner: 1 recorded 3:29 PM EDT; RN interest: 1 recorded 3:31 PM EDT on Oct 23 |
| Latest Netlify deployment | PASS (preview) | Netlify preview for draft PR; no production release |
| Visual screenshots | REVIEWED | Desktop/phone hub and forms; no obvious clipping in generated screenshots |
| **Browser-based redirect after actual Netlify POST** | **NOT INDEPENDENTLY VERIFIED** | Form receipt and configured `action` do not prove the final redirect |
| **Email notification delivery** | **NOT VERIFIED** | Notification configuration not accessible through the available site form listing |

Test workflow: https://github.com/davidekissinger/advantageclinicians/actions/runs/40015009270  
Downloadable screenshot/audit artifact: https://github.com/davidekissinger/advantageclinicians/actions/runs/40015009270/artifacts/12528396135

Automated scanning does not establish conformance for every accessibility criterion. Human testing of screen-reader behavior, focus order and cognitive usability is still recommended.

## Claims/compliance: open critical gate
- Site may invite **exploratory staffing discussions**; it cannot represent established infusion-visit availability, staffed territories, verified nurse competency, or licensed direct-care operations without documentation.
- Ohio Revised Code Chapter 3740, including §3740.02, restricts home-health agencies without the required licensure from providing or **holding themselves out** as skilled home-health service providers. The entity's actual model and applicability of these rules require qualified review.
- Distinguish *staffing/sourcing personnel for a clinically accountable pharmacy/provider* from *direct nursing care operated by Advantage Clinicians*. Neither clinical licensure nor operating authority was verified here.
- The visible partner narrative field has been removed. Remaining text fields, the hidden legacy field and forged submissions remain a residual risk: PHI could still be submitted despite warning and attestation. No public form is suitable for patient-specific orders, referrals or care documentation.
- The use of Netlify's ordinary form storage for patient information has **not** been authorized. If a PHI processing relationship is contemplated, legal counsel must determine roles and required safeguards/BAAs and identify an approved platform.

Official references:
- https://codes.ohio.gov/ohio-revised-code/section-3740.02
- https://codes.ohio.gov/ohio-revised-code/chapter-3740
- https://odh.ohio.gov/know-our-programs/home-health-agencies
- https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html

## Open privacy/operational controls
- [ ] Name the authorized business intake owner and backup; verify least-privilege Netlify form access.
- [ ] Confirm who can export/copy records, and which notification method is used; send notification *metadata only* via ordinary email.
- [ ] Approve and implement retention and disposal schedule; Netlify Forms does not implement this operating policy for the team automatically.
- [ ] Establish incident escalation for mistakenly received patient/medical information (contain, limit access, assess, delete/retain under guidance and document).
- [ ] Approve public privacy policy against actual data flows and contact-consent language.
- [ ] Business owner approves proposed positioning and no-availability language.
- [ ] Appropriate Ohio counsel/compliance reviewer evaluates licensure, staffing agency and clinical representations.
- [ ] Confirm redirect / email notification if those are required release criteria.

## Decision boundary
**Website publication:** may be considered once website claims and data practices are approved and tested. This does **not** enable clinical staffing orders, license/competency verification, partner commitments or patient care.  
**Clinical operations:** must pass separate company, licensure, clinical oversight, nurse credentialing, agreements, insurance, documentation, and (if PHI is handled) HIPAA security/BAA gates.

## Rollback
The main branch and its production deploy were unchanged at review. Preserve known-good production deploy and revert the merge or republish known-good Netlify production deploy if a subsequently approved release fails. Recheck pages and form functionality; keep proper records of form submissions.

## Historical Ohio scope interpretation — October 23 (superseded)
The user clarified that existing infusion care occurs **in patients’ homes within Ohio**. The public website is narrowed to exploratory RN staffing relationships for Ohio home-infusion programs. This clarification does not independently establish which agency presently delivers the clinical care, who employs RNs, or whether Advantage Clinicians holds Ohio home-health licensing or has coverage capacity.

The partner intake now accepts only a fixed Home care setting, Ohio county-level geography and structured business data; its optional narrative field is replaced with a blank hidden legacy field to reduce accidental PHI. The RN form asks for self-reported possible Ohio RN practice authorization and county preferences. Neither form verifies clinician competence or licensing.

Ohio Revised Code §§3740.01–3740.02 govern skilled home-health providers and restrictions on holding out. Section 3740.01's employee definition includes individuals referred to a home-health agency by an employment service; exact staffing/provider responsibilities require counsel review. The Ohio Board of Nursing also explains relevant multistate license privileges and employer reporting responsibilities.

References:
- https://codes.ohio.gov/ohio-revised-code/section-3740.01
- https://codes.ohio.gov/ohio-revised-code/section-3740.02
- https://nursing.ohio.gov/licensing-and-certification/multistate-licensure
- https://nursing.ohio.gov/licensing-and-certification/multistate-licensure/employer-information

**This change is not public-launch authorization or authorization to perform clinical services.**

## October 24 model review — release remains blocked

See [Ohio model comparison](INFUSION_OHIO_MODEL_COMPARISON.md) for verified statutory requirements, proposed responsibility allocation, exact draft copy, intake controls and approval evidence. The working business model is Advantage Clinicians employing nurses and supplying staffing to an identified, clinically accountable client provider. Client payroll employment is not a prerequisite. Recruitment/direct placement remains an optional alternative. Confirm the actual contracts, allocation of clinical responsibilities and applicable operating authority before fulfillment; the website remains business/RN interest intake only. This clarification does not record legal clearance or production release approval.

### Verification of October 24 changes
- Existing static script: PASS, 15 HTML pages, routes/assets/forms/SEO checks.
- Existing Playwright/axe script: PASS, 57 checks, 12 accessibility scans, zero failures; six screenshots generated. Updated mobile hub screenshot reviewed.
- No QA scripts, form schemas, routing or deployment configuration changed. Tests ran against a local static server and did not submit public forms.
- October 23 workflow 40017989393 remains historical successful evidence for the preceding head. New commit requires its own CI result; see PR checks.
- Live POST redirects, notification payload/delivery and actual access/retention controls remain unverified. No clinical, business-owner or legal approval recorded.

### Current release-preparation findings
- October 24 GitHub workflow [40080815306](https://github.com/davidekissinger/advantageclinicians/actions/runs/40080815306) succeeded for website commit `9504887`.
- Netlify connector confirms production remains deploy `6aaeea9896f1429124d585ea`; both infusion forms remain registered, each with one historical submission.
- The initial preparation pass was blocked by a signed-out browser session; the later authenticated checks below supersede that limitation.
- Employer-based staffing is the working model; the recommendation requiring client payroll employment is withdrawn. This is a documentation correction, not a new finding of licensure or release approval.
- See the current matrix in `INFUSION_RELEASE_CHECKLIST.md` for the remaining deployment decisions.

### Authenticated release-preparation results — October 24
- Corrected-model commit `5c28a36` passed static and browser CI in workflow [40082057569](https://github.com/davidekissinger/advantageclinicians/actions/runs/40082057569). Its Netlify deploy preview `6adc7a20bc196545b7af4823` is ready.
- Both forms were submitted in the actual protected preview with clearly fabricated non-patient QA data. Both reached the generic thank-you page; Netlify independently recorded each new entry, increasing each count from 1 to 2. This closes the former live-POST redirect gap for this preview.
- Submission notifications are not configured. Team membership shows one owner member, zero reviewers; no settings or access changes made. Retention and incident processes remain proposed.
- Netlify reports a team-level production-deploy pause due to credit/plan limits while existing published sites stay live. The build cannot bypass that restriction; no billing changes were made.
- PR remains draft/unmerged. Website-only release still needs the recorded owner/privacy/claims decisions. Actual clinical staffing retains separate operational requirements.
- Detailed evidence and current status: `INFUSION_RELEASE_CHECKLIST.md`.

### Owner-approved intake and retention — October 24
David explicitly selected sole dashboard review of both infusion forms with no email alerts, and approved 30-day test deletion, 90-day unqualified-contact deletion and annual qualified-interest review. Existing notification configuration already matches the selected workflow. The SOP now records those approvals, a manual disposition procedure and conservative November 22/23 deadlines for the current October 23/24 test entries. No records were deleted and no automatic retention job was created. Earlier descriptions of these two choices as pending are superseded by this decision record. Remaining privacy/incident, claims/compliance, deployment-capacity and final release approvals remain open.
