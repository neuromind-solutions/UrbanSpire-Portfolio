# Implementation Plan — Urbanspire Group

## Working Rule
Build in small phases. Review each phase before expanding scope. The project is in planning/specification until code and deployment are verified.

## Phase 0 — Confirm Inputs
- Confirm legal/public names and details for the group and three companies.
- Collect approved logo, fonts, imagery, hero video, and media licenses.
- Confirm domain, public contact information, and legal/privacy requirements.
- Resolve scope and open technical decisions.
- Identify all temporary content and establish a replacement checklist.

**Gate:** No unsupported company facts are treated as production content.

## Phase 1 — Public Portfolio Foundation
- Set up the project, code quality checks, and base design tokens.
- Implement responsive header and footer.
- Implement Home, About, Companies, Services, Projects, Project Detail, Contact, and 404 as approved.
- Build reusable cards and section components.
- Add the hero video with poster/reduced-motion/mobile/performance fallback.
- Add baseline SEO and accessibility.

**Gate:** Review visual quality, responsive layouts, route behavior, accessibility, and performance.

## Phase 2 — CMS Integration
- Define approved content models.
- Connect project and other approved content to the CMS.
- Add publishing/preview workflow as agreed.
- Confirm access roles and permissions.
- Define export/backup and recovery procedures.
- Verify content publishing freshness against an agreed acceptance criterion.

**Gate:** Editors can safely update approved content and recover from a content-management issue.

## Phase 3 — Optional Editorial and Careers
Only proceed if included in approved scope.
- Add News/Articles only when content and editorial workflow are ready.
- Add Careers and applications only after privacy, retention, storage, email, and security decisions are resolved.
- If resume uploads are implemented, enforce file type/size limits server-side, protect storage, use time-limited access, and define deletion and retry behavior.

**Gate:** Privacy, security, operational ownership, and failure cases are tested.

## Phase 4 — Production Readiness
- Replace or remove all demo content.
- Verify every public claim, project, image, and video.
- Confirm domain, redirects, analytics if approved, legal pages, and contact routes.
- Run browser, responsive, accessibility, SEO, and performance checks.
- Test deployment rollback and backup/recovery process.
- Obtain final stakeholder approval.

**Gate:** Production launch is explicitly approved.
