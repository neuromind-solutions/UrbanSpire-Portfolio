# Deployment and Security — Urbanspire Group

## Status
Deployment infrastructure is proposed in the project specification; do not assume it is already configured. Confirm ownership and current settings before deploying.

## Repository and Secrets
- Use a private repository unless the client explicitly approves otherwise.
- Never commit API tokens, passwords, private keys, applicant files, or production secrets.
- Use environment variables and the hosting provider's secret-management features.
- Provide an `.env.example` containing variable names and safe descriptions only.
- Limit credentials to the minimum permissions required.
- Rotate credentials if exposure is suspected.

## Deployment
Document:
- Build and deployment commands
- Required environment variables
- Domain and DNS ownership
- Preview and production environments
- Rollback procedure
- Monitoring and incident ownership

Test the production build before deployment. Avoid deploying unreviewed demo content.

## CMS and Content Security
- Restrict CMS access to approved users.
- Confirm role capabilities and plan limitations before assigning permissions.
- Establish content export, backup, and recovery procedures.
- Review published content and media permissions.
- Keep preview routes and privileged endpoints appropriately protected.

## Forms and Abuse Prevention
For any public form:
- Validate all fields on the server, not only in the browser.
- Apply sensible request size limits and rate/abuse protection.
- Avoid exposing internal error details.
- Protect against spam and automated abuse where appropriate.
- Do not log sensitive personal information unnecessarily.

## Careers and Resume Handling
This workflow is optional and must not be implemented until requirements are approved.

If resume uploads are enabled:
- Set and enforce a maximum file size; the specification proposes PDF resumes up to 5 MB.
- Validate file type and content server-side.
- Store resumes in private storage, never in a public bucket.
- Provide only time-limited secure access when required.
- Define access permissions, applicant notice, metadata storage, and retention policy.
- The specification proposes 90-day retention; confirm the exact scope of deletion, including files, metadata, logs, and backups.
- Make cleanup scheduled, batched, idempotent, observable, and retryable.
- Protect form submission with appropriate abuse prevention.
- Verify email delivery and failure handling.
- Never expose resumes through predictable public URLs.

## Privacy and Compliance
Confirm the appropriate privacy notice, consent/notice language, data controller details, retention policy, and contact point with the client. Do not invent legal text or claim compliance without review.

## Backups and Recovery
Document how source code, CMS content, and required data can be restored. Verify backup/export availability for the selected service plan rather than assuming a built-in backup feature exists.

## Incident Readiness
Identify who owns production access, security updates, alerts, domain renewal, email delivery, and incident response before launch.
