# Advantage Clinicians static website

Portable static site for AdvantageClinicians.com.

## Recommended free deployment: Netlify

1. Create a free Netlify account.
2. Deploy this folder (or connect a GitHub repository containing it).
3. Netlify publishes the site with no build command.
4. The contact form is already configured for Netlify Forms.
5. Add `advantageclinicians.com` as the custom domain and follow Netlify's DNS instructions.

## Cloudflare Pages

This site is also compatible with Cloudflare Pages as a static site. The pages and assets will work unchanged, but the contact form will need a separate form service or Pages Function because `data-netlify` is specific to Netlify.

## Files

- `/index.html` — Home
- `/for-healthcare-organizations/` — organization path
- `/for-clinicians/` — clinician path
- `/about/` — About
- `/contact/` — Contact
- `/assets/` — brand assets, CSS, JS

No framework or paid website builder is required.
