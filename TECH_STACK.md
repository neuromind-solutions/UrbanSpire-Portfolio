# Technology Stack — Urbanspire Group

## Proposed Stack
The current project specification proposes:
- Astro
- TypeScript
- Sanity CMS
- Cloudflare hosting and related services
- Cloudflare R2 for private resume files if Careers is implemented
- Cloudflare Turnstile for form abuse protection where needed
- Resend for transactional email where needed
- Private GitHub repository
- Playwright and Lighthouse for testing

This is the proposed stack, not a statement that services are configured or deployed.

## Implementation Principles
- Prefer static output for pages that do not require request-time server behavior.
- Add server-side functionality only where required.
- Keep dependencies minimal and justified.
- Pin and maintain dependencies responsibly.
- Use TypeScript types for application and content models.
- Keep secrets in environment variables or the hosting platform's secret store.
- Document environment variables without committing actual values.

## CMS
Sanity is proposed for projects and other approved editorial content. Confirm roles, permissions, backup/export strategy, preview behavior, publishing freshness, and the chosen plan before production. Do not assume a role or feature is included in a plan without verification.

## Cloudflare Runtime
If Cloudflare Workers are used, benchmark server-rendered and form endpoints against current platform limits. Keep routes efficient and monitor runtime behavior. Confirm current limits and plan features during implementation.

## Open Decisions
- Final rendering/deployment mode
- Sanity plan and editor permissions
- Content models and preview workflow
- Hosting configuration and domain
- Whether Careers is in initial scope
- If Careers is included, where applicant metadata is stored and how cleanup is enforced
- Email sender/inbox configuration
- Backup and recovery procedure
