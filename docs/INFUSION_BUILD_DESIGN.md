# Specialty Infusion Nursing — Implementation Baseline

Status: v1 **exploratory informational MVP** on branch `feature/specialty-infusion-v1` — October 23, 2026.

## Goal and boundaries
- Home for the service line: Advantage Clinicians; Good Stick remains mobile specimen collection and is not modified.
- B2B conversation between Ohio home-infusion pharmacies/providers and a potential RN network; no ambulatory, facility or non-Ohio staffing coverage is promoted in this release.
- Two business/professional interest Netlify Forms. Partner form fixes setting to Home and collects Ohio regions; optional public narrative field removed. RN form adds self-reported Ohio practice status and Ohio county preferences. No patient intake, orders, automated matching, clinical referral or assignment guarantees.
- **User-reported current care context:** Infusions are presently done in patients’ homes within Ohio. The site therefore focuses on prospective staffing for home infusion within Ohio, without asserting Advantage Clinicians operates direct care or can serve every county.
- No Supabase or authenticated CRM in v1.

## Pages
- `/specialty-infusion-nursing/`: hub, paths, workflow and public limitations.
- `/specialty-infusion-nursing/partners/`: organizational value and intake CTA.
- `/specialty-infusion-nursing/clinicians/`: professional interest and screening context.
- `/specialty-infusion-nursing/request-coverage/`: `infusion-partner-inquiry`.
- `/specialty-infusion-nursing/join-network/`: `infusion-clinician-interest`.
- `/specialty-infusion-nursing/thank-you/`: generic acknowledgement; never echo submitted data.

## Processing and responsible-use constraints
- Marketing forms reject no PHI automatically. Strong visible warnings, limited fields, required attestations and human review reduce but do not eliminate the risk of inappropriate submissions.
- Any accidental PHI requires the organization's approved secure incident process, not ordinary email forwarding.
- Inbound leads should be assigned to a named reviewer with restricted permissions and an approved retention/deletion schedule.
- Self-reported RN licensure is *not* primary-source verification.
- Any operational fulfillment requires an independently defined legal entity, state-specific licensure analysis, accountable clinical supervision, competent practitioners, insurance, contracts, policies and secure clinical systems.
- Legal/claims review and privacy approval are **mandatory gates** to merging a public intake feature.

## Design and deployment
- Reuse existing Montserrat, Source Sans 3, navy `#0B3A78`, teal `#1DA5B8`, and logo.
- Static HTML, CSS; new navigation item and discoverability sections on existing audience paths.
- Deploy GitHub pull request to Netlify preview; preview is not production approval.
- Release checklist: `docs/INFUSION_RELEASE_CHECKLIST.md`.

## Deferred design
- Controlled staff CRM / Supabase after validated business demand, with strict access, retention, audit and RLS.
- Credential verification, provider matchmaking and assignment/care-documentation are **not implemented** in this build.

Source baseline: Advantage Clinicians Infusion Nursing Design & Build Structure v1.0, October 23, 2026.

## Legal-model review references (not a licensure determination)
- Ohio Revised Code, Chapter 3740 / §3740.01 definitions: https://codes.ohio.gov/ohio-revised-code/chapter-3740
- Ohio Revised Code, §3740.02 licensure and restrictions on holding out as a skilled home health provider: https://codes.ohio.gov/ohio-revised-code/section-3740.02
- Ohio Department of Health home health agency licensure: https://odh.ohio.gov/know-our-programs/home-health-agencies/home-health-agency-licensure/home-health-agency-licensure
- HHS business associate guidance, applicable only if a covered-entity/business-associate relationship and PHI access exists: https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html

**Decision:** This build is a prospective B2B staffing **discussion** and RN interest registration, not an operational infusion nursing offering. A clinician's interest submission does not verify a license or competency. No agency licensure has been established by this build.
