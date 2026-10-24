# Specialty infusion nursing — geographic positioning

**Owner direction:** October 24, 2026. Service development and recruitment are not limited to Ohio. This direction supersedes the October 23 Ohio-only marketing/intake interpretation.

## Current public scope
- Invite partner inquiries and RN interest across locations without a single-state restriction.
- Ask partners for requested states, cities or regions and RNs for preferred work locations and self-reported license jurisdictions/practice authorization.
- Keep home-infusion focus, business/RN-interest-only intake, no patient data/uploads and no guaranteed assignments or coverage.
- Do not claim established capacity or authorization in every location. Evaluate applicable requirements, provider arrangements, credentials, travel and availability for each proposed engagement.
- The owner's earlier statement that existing infusions occurred in Ohio homes described current care context; it did not define the business's geographic boundary.

## Implementation
- Remove Ohio-only wording from homepage/audience teasers, specialty pages, FAQ, metadata, form labels/help/consent and privacy disclosure.
- Keep both Netlify form names, existing routes, consent, honeypots and general field identities.
- Add required RN `practice_authorization_status` (`#rn-practice-status`) with location-neutral self-report options. Keep legacy `ohio_practice_status` as a blank hidden field solely for historical submission compatibility. It is neither displayed nor an eligibility gate.
- Keep `license_states`, `state_regions` and `service_geography`; their labels accept jurisdictions and requested/preferred locations without an Ohio filter.
- Existing local tests now validate fictional California/Washington requests and RN interest. Static checks guard against reintroducing Ohio-specific public positioning. Automated QA uses fictional data on a local server and creates no real engagement or public form entry.

## Documentation and operating continuity
Ohio-specific legal analysis in `INFUSION_OHIO_MODEL_COMPARISON.md` is retained as a jurisdictional reference, not a service/recruitment boundary or a finding applicable everywhere. Evaluate other jurisdictions when an actual engagement is proposed; no new legal clearance is asserted by removing geographic marketing limits.

The working employer-based staffing model, David's sole dashboard review with no email alerts, and approved manual retention schedule remain in effect. Earlier preview/receipt evidence is historical; verify the new preview and form field registration after this revision. Keep PR #1 draft/unmerged and production unchanged until the remaining release decisions are complete.

## Verification before branch update
Static validation passed across 15 HTML pages. Local browser QA passed 57 checks, including fictional requests and RN interest from California/Washington; 12 accessibility scans detected zero violations. Six screenshots were generated, and the updated mobile hub was reviewed. Existing form names/routes and approved intake/retention were preserved; the required generic RN practice field is new and needs deploy-time registration verification.
