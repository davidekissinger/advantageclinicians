# Ohio home-infusion nursing — build scope correction
**Date:** October 23, 2026
**Repository:** davidekissinger/advantageclinicians
**Feature branch:** feature/specialty-infusion-v1

## Clarified scope (user-reported)
- Existing infusion care is performed in **home settings within Ohio**.
- The site's specialty service line targets possible **Ohio in-home infusion RN staffing partnerships**, with interest recorded by county/metro region.
- No claim is made that Advantage Clinicians itself performs those existing infusion visits, holds skilled home-health licensure, employs deployed field clinicians, or has statewide capacity.

## Website changes
- Partner landing and intake: fixed **Home** setting, Ohio county/metro region, general visit volume/timing, pharmacy/provider inquiry only. No ambulatory/facility choices.
- RN landing and interest: experience relevant to home infusion, broad Ohio county preference, self-reported Ohio license or potential NLC privilege. Prior clinical experience in other settings can still be reported.
- Removed the optional narrative textarea from partner intake; a blank legacy field preserves the existing form schema reference.
- Existing intake submissions remain separate from any future secure clinical/onboarding workflows.

## Operating release gates
1. Verify the contracting entity, employing entity and licensed/clinically accountable organization; determine Ohio home-health licensure obligations.
2. Verify RN license/Ohio privilege and infusion competencies before any engagement; assess non-Ohio multistate nursing employer reporting requirements.
3. Specify who handles orders, care plans, clinical protocols, emergency escalation, documentation, patient data and insurance.
4. Approve website claims, Netlify business-data access/retention and PHI-misdirection response protocol.
5. Keep the website release distinct from any actual staffing or clinical service authorization.

## Official sources
- https://codes.ohio.gov/ohio-revised-code/section-3740.01
- https://codes.ohio.gov/ohio-revised-code/section-3740.02
- https://codes.ohio.gov/ohio-administrative-code/chapter-4723-4
- https://nursing.ohio.gov/licensing-and-certification/multistate-licensure
- https://nursing.ohio.gov/licensing-and-certification/multistate-licensure/employer-information

## October 24 model review — release remains blocked

See [Ohio model comparison](INFUSION_OHIO_MODEL_COMPARISON.md) for verified statutory requirements, proposed responsibility allocation, exact draft copy, intake controls and approval evidence. The working business model is Advantage Clinicians employing nurses and supplying staffing to an identified, clinically accountable client provider. Client payroll employment is not a prerequisite. Recruitment/direct placement remains an optional alternative. Confirm the actual contracts, allocation of clinical responsibilities and applicable operating authority before fulfillment; the website remains business/RN interest intake only. This clarification does not record legal clearance or production release approval.
