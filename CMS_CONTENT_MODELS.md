# CMS Content Models — Urbanspire Group

## Status
This is a proposed planning document. Confirm fields and publishing workflows before implementing the CMS schema.

## General Content Rules
- Use only approved factual content.
- Make demo content visibly identifiable and exclude it from production.
- Provide meaningful slugs, page titles, descriptions, and image alt text.
- Avoid duplicating the same fact in multiple editable fields where practical.
- Define required fields and validation before publishing.

## Proposed Models

### Group Settings
Potential fields:
- Public group name
- Approved logo
- Short approved description
- Approved contact links
- SEO defaults

### Company
Potential fields:
- Approved company name
- Slug
- Approved summary and full description
- Approved services
- Licensed imagery and alt text
- Approved CTA/contact information
- SEO title and description

### Service
Potential fields:
- Approved service name
- Slug
- Summary and description
- Licensed image/icon where appropriate
- Related company, if verified
- SEO metadata

### Project
Potential fields:
- Approved project title
- Slug
- Approved summary and full description
- Project category, if useful
- Location, client, dates, scope, and status only when verified and approved
- Licensed images, captions, and alt text
- Related company only when verified
- Featured flag
- SEO metadata

### Article or News Item (Optional)
Potential fields:
- Title and slug
- Approved summary and body
- Author attribution, if approved
- Publication date
- Featured image and alt text
- SEO metadata
- Draft/published state

## Validation and Publishing
Define required fields, slug uniqueness, image requirements, preview behavior, publish permissions, and review process. Do not expose draft content publicly unless the preview workflow is authorized.

## Operational Decisions
Confirm Sanity plan, user roles, backup/export process, publishing freshness expectations, and who owns content updates before production.
