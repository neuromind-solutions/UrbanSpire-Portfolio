# Careers and Applications Workflow — Urbanspire Group

## Status
Optional feature. Do not implement until the client confirms that Careers is in scope and approves the privacy and operational requirements.

## Public Page
If launched without vacancies, the proposed empty state is: “No open positions currently.” Confirm the wording before production. Do not invent job openings or employment claims.

## Application Flow
If applications are enabled, define:
1. Candidate reviews an approved vacancy.
2. Candidate submits required fields and a resume.
3. Server validates inputs and file content.
4. Abuse protection is verified server-side.
5. Resume is stored in private object storage.
6. Authorized staff receive a notification.
7. Candidate receives a confirmation only if approved and configured.
8. Data is deleted according to the approved retention policy.

## Resume Requirements
The project specification proposes PDF resumes up to 5 MB. Enforce limits server-side. Do not trust filename extensions or browser-provided MIME type alone. Use private storage and time-limited secure access.

## Data and Privacy Decisions
Before implementation, confirm:
- Applicant fields collected
- Privacy notice and legal basis/notice wording
- Who can access applications
- Where applicant metadata is stored
- Whether the proposed 90-day retention applies to resumes, metadata, logs, and backups
- Deletion schedule and evidence of successful cleanup
- Email recipient, sender identity, and failure handling
- Candidate confirmation behavior
- Incident and data-request ownership

## Reliability and Security
- Make cleanup batched, idempotent, observable, and retryable.
- Handle partial failures without losing track of retained files or metadata.
- Keep private resumes out of public assets and logs.
- Avoid including sensitive applicant data in notification emails unless explicitly approved.
- Test invalid files, oversized files, spam, duplicate submissions, storage failures, email failures, and expired links.

## Launch Gate
Do not launch the workflow until privacy copy, retention, access control, storage, notification delivery, cleanup, and operational ownership have been reviewed and tested.
