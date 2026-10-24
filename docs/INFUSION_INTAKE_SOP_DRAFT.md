# Infusion Nursing: Intake, Privacy and Retention SOP

**Status:** Intake routing and retention schedule APPROVED by David Kissinger on October 24, 2026; remaining privacy/incident and release decisions are open.

**Intake owner:** David Kissinger, sole reviewer of both forms through the authenticated Netlify dashboard; no email alerts. No backup or additional access is designated by this approval.

**Applies to:** `infusion-partner-inquiry`, `infusion-clinician-interest`, and any related non-PHI business correspondence.

## 1. Purpose and role boundaries
- Website accepts exploratory **business** inquiry and professional-interest information only.
- Website **never** accepts patient orders, clinical referrals, scheduling, diagnoses, medical histories, medical records, or emergencies.
- An interest form is not a credentialing, employment, or clinical onboarding process.
- Public form submissions do not establish client service agreements, nursing assignment availability, or permission to deliver skilled home-health care.

## 2. Approved intake roles and remaining assignments
| Role | Duty | Assignment |
| --- | --- | --- |
| Business intake owner | Reviews partner requests and determines business fit | David Kissinger — approved October 24, 2026 |
| RN interest intake reviewer | Reviews limited self-reported interest and determines whether further screening is warranted | David Kissinger — approved October 24, 2026 |
| Netlify site administrator | Controls site/Form access, audit, spam queue, and configuration | Dashboard inventory showed David as sole owner member; no additional access granted |
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
Public forms use warnings and a submitter attestation, **not** automated PHI detection. The visible partner narrative field has been removed. Remaining text fields, the hidden legacy field and forged submissions can still contain patient information; these forms do not enforce a server-side clinical-data filter.
1. Stop ordinary processing and do not forward the submission by normal email, Slack or spreadsheets.
2. Restrict viewer access, identify whether the content may contain patient information, and inform the designated privacy contact through an approved process.
3. Record the event with minimal identifying details and no unnecessary duplicate content.
4. Have the privacy/legal owner determine applicable protections, service-provider obligations, retention or removal, and any needed notifications.
5. Do not delete or export sensitive records ad hoc, without incident documentation and counsel-approved handling.

## 5. Notifications and recordkeeping
- **Approved initial routing:** David reviews both forms in the authenticated Netlify dashboard. No email alerts, new webhooks or automatic forwarding. Dashboard inspection found no configured submission notifications, so the selected setup requires no settings mutation.
- A future notification destination or integration requires a separate owner decision and payload/privacy review. Do not infer an alert address from the account email.
- Keep clinical and credential documents **out** of Netlify Forms.
- Do not automatically mirror form submissions into public repositories, analytics, or unapproved workspaces.
- If a CRM is later required, re-evaluate consent, segregation, access controls and integration logging before syncing any records.
- Responding staff should have a clear rule for when an inquiry is closed, transferred to approved operational systems, or deleted.

## 6. Approved retention schedule — October 24, 2026
David explicitly approved these periods in the task conversation. This is a manual operating policy, not an automatic platform retention setting:
- Test records: remove within **30 days**; use receipt dates as the conservative start for the existing test entries, unless legal hold applies.
- Spam/duplicate/unqualified contacts: review and delete within **90 days**.
- Qualified, consented business/RN interest records: review at least annually, and delete when no longer needed, subject to legal requirements.
- David is the intake reviewer responsible for manual disposition. At each review, check due records and record completion with minimal metadata (form, submission reference, receipt date, classification, disposition date, reason). Verify any downstream exports/copies; none are authorized by the dashboard-only selection.

There is **no automated retention enforcement** implemented in this version; manual scheduled review is required until approved automation exists.

## 7. Approval checklist (partially approved)
- [ ] Business model: staffing-only claims are supported.
- [ ] Privacy escalation and access/export procedure approved; sole-reviewer continuity documented.
- [ ] Privacy policy matches form fields and notifications.
- [x] David approved dashboard-only review of both forms, with no email alerts, on October 24, 2026.
- [x] David approved 30-day test / 90-day unqualified / annual qualified-record review on October 24, 2026.
- [ ] Incident/privacy escalation process and remaining release decisions approved.
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

## October 24 model review — release remains blocked

See [Ohio model comparison](INFUSION_OHIO_MODEL_COMPARISON.md) for verified statutory requirements, proposed responsibility allocation, exact draft copy, intake controls and approval evidence. The working business model is Advantage Clinicians employing nurses and supplying staffing to an identified, clinically accountable client provider. Client payroll employment is not a prerequisite. Recruitment/direct placement remains an optional alternative. Confirm the actual contracts, allocation of clinical responsibilities and applicable operating authority before fulfillment; the website remains business/RN interest intake only. This clarification does not record legal clearance or production release approval.

Before an introduction, verify the contracting entity, RN employer and actual nursing provider through approved business channels; verify applicable provider authority and obtain specific candidate-sharing permission. Contact consent alone is insufficient. Stop at discovery if a pharmacy has not identified the nursing provider. Verify metadata-only notifications or disable raw-submission alerts; review all copies and general contact intake. See the comparison for unresolved screening-rule cross-references and direct/indirect compact-employer duties.

## Owner decision record — October 24, 2026

**Source:** David's explicit answers in the task conversation:
- “David reviews both forms in the dashboard; no email alerts.”
- “Approve the proposed schedule” in response to 30-day tests, 90-day unqualified contacts and annual review of qualified interest.

**Recorded effect:** David is the sole initial intake reviewer; dashboard-only processing and the stated retention periods are approved. No email destination, additional reviewer, automatic deletion job, backup appointment, privacy/legal sign-off, billing purchase, merge or production deployment is authorized by these answers.

**Configuration evidence:** the signed-in dashboard already showed no configured submission notifications and one owner member, with zero reviewers. No notification or access settings change is needed for the selected workflow. The observation is not a complete audit of sessions/integrations or account security.

### Existing test disposition queue

Both infusion forms have one October 23 test receipt and one October 24 test receipt, four entries in total. No real patient data was used. Using receipt dates as the conservative start:

| Test receipt group | Entries | Delete no later than | Action |
| --- | --- | --- | --- |
| October 23, 2026 | One partner + one RN interest | November 22, 2026 | David reviews and deletes under approved policy, unless hold applies |
| October 24, 2026 | One partner + one RN interest | November 23, 2026 | David reviews and deletes under approved policy, unless hold applies |

No test entries were deleted by this approval-recording step. No scheduled automation or automatic retention enforcement exists. For unqualified leads, record receipt/classification and the 90-day deadline; for qualified interest, record the next annual review date and delete when no longer needed, subject to applicable recordkeeping requirements. Potential patient-data incidents remain governed by section 4, with escalation authority still to be finalized before release.
