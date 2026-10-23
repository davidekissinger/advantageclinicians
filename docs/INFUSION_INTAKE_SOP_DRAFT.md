# Infusion Nursing: Draft Intake, Privacy and Retention SOP

**Status:** PROPOSED — approval and operational implementation required before production launch.  
**Owner:** To be designated by site operator.  
**Applies to:** `infusion-partner-inquiry`, `infusion-clinician-interest`, and any related non-PHI business correspondence.

## 1. Purpose and role boundaries
- Website accepts exploratory **business** inquiry and professional-interest information only.
- Website **never** accepts patient orders, clinical referrals, scheduling, diagnoses, medical histories, medical records, or emergencies.
- An interest form is not a credentialing, employment, or clinical onboarding process.
- Public form submissions do not establish client service agreements, nursing assignment availability, or permission to deliver skilled home-health care.

## 2. Proposed people and permissions
| Role | Duty | Assignment |
| --- | --- | --- |
| Business intake owner | Reviews partner requests and determines business fit | Unassigned; operator approval required |
| RN interest intake reviewer | Reviews limited self-reported interest and determines whether further screening is warranted | Unassigned |
| Netlify site administrator | Controls site/Form access, audit, spam queue, and configuration | Confirm current authorized team members |
| Privacy escalation contact | Handles mistakenly received sensitive information | Unassigned; designate before launch |
| Release approver | Signs off on staffing/clinical claims and reviewed privacy policy | Unassigned; independent legal/compliance review required |

Only expressly authorized team members should access forms. Do not share access credentials. Restrict downloads/exports. Review access at launch and whenever team membership changes.

## 3. Business and RN intake triage
1. Check new submissions in the authorized Netlify Forms account. Track submission type and receipt date, without copying unnecessary personal details into work notes.
2. Separate partner and RN inquiries; reject suspicious/spam submissions. Record whether a future conversation is justified.
3. Never treat self-reported RN license states or infusion experience as validated. Any future screening must verify primary-source licensure and role-specific competence.
4. If there is no current approved service offering, respond only as exploratory and avoid offering shifts, rates, specific clinical coverage or patient care.
5. If the information is sufficient and lawful, communicate through an approved business channel. If further regulated information is needed, first create a separate secure operational workflow.

## 4. Potential patient/PHI misdirection
Public forms use warnings and a submitter attestation, **not** automated PHI detection. The optional partner narrative field is a known risk.
1. Stop ordinary processing and do not forward the submission by normal email, Slack or spreadsheets.
2. Restrict viewer access, identify whether the content may contain patient information, and inform the designated privacy contact through an approved process.
3. Record the event with minimal identifying details and no unnecessary duplicate content.
4. Have the privacy/legal owner determine applicable protections, service-provider obligations, retention or removal, and any needed notifications.
5. Do not delete or export sensitive records ad hoc, without incident documentation and counsel-approved handling.

## 5. Notifications and recordkeeping
- Proposed new-submission email alerts: business metadata only (form type and submission reference), with access through Netlify login; avoid including raw submissions in email.
- Keep clinical and credential documents **out** of Netlify Forms.
- Do not automatically mirror form submissions into public repositories, analytics, or unapproved workspaces.
- If a CRM is later required, re-evaluate consent, segregation, access controls and integration logging before syncing any records.
- Responding staff should have a clear rule for when an inquiry is closed, transferred to approved operational systems, or deleted.

## 6. Proposed retention policy for approval
These are **working proposals, not current platform settings**:
- Test records: remove within **30 days** after QA sign-off, unless legal hold applies.
- Spam/duplicate/unqualified contacts: review and delete within **90 days**.
- Qualified, consented business/RN interest records: review at least annually, and delete when no longer needed, subject to legal requirements.
- Record the chosen retention schedule, who runs it, and how completion is documented. Verify any data held in notifications or downstream exports.

There is **no automated retention enforcement** implemented in this version; manual scheduled review is required until approved automation exists.

## 7. Go-live signatures (not yet approved)
- [ ] Business model: staffing-only claims are supported.
- [ ] Privacy owner, site access reviewers and backup named.
- [ ] Privacy policy matches form fields and notifications.
- [ ] Retention and incident process approved.
- [ ] Public claims/legal review documented, including Ohio Chapter 3740 applicability.
- [ ] Final preview, submit/redirect tests and rollback reviewed.
- [ ] PR marked ready and merged **only after** these approvals.

**The public website and the clinical operations platform have separate release decisions.**

## Ohio home-infusion intake protocol — October 23, 2026
The user clarified that existing infusion care occurs **in patients’ homes within Ohio**. The public website is narrowed to exploratory RN staffing relationships for Ohio home-infusion programs. This clarification does not independently establish which agency presently delivers the clinical care, who employs RNs, or whether Advantage Clinicians holds Ohio home-health licensing or has coverage capacity.

The partner intake now accepts only a fixed Home care setting, Ohio county-level geography and structured business data; its optional narrative field is replaced with a blank hidden legacy field to reduce accidental PHI. The RN form asks for self-reported possible Ohio RN practice authorization and county preferences. Neither form verifies clinician competence or licensing.

Ohio Revised Code §§3740.01–3740.02 govern skilled home-health providers and restrictions on holding out. Section 3740.01's employee definition includes individuals referred to a home-health agency by an employment service; exact staffing/provider responsibilities require counsel review. The Ohio Board of Nursing also explains relevant multistate license privileges and employer reporting responsibilities.

References:
- https://codes.ohio.gov/ohio-revised-code/section-3740.01
- https://codes.ohio.gov/ohio-revised-code/section-3740.02
- https://nursing.ohio.gov/licensing-and-certification/multistate-licensure
- https://nursing.ohio.gov/licensing-and-certification/multistate-licensure/employer-information

**This change is not public-launch authorization or authorization to perform clinical services.**
