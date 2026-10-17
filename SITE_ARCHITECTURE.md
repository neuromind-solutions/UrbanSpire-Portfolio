# Site Architecture — Urbanspire Group

## Proposed Sitemap
- `/` — Home
- `/about` — About the Group
- `/companies` — Overview of the three companies
- `/companies/[slug]` — Individual company profile
- `/services` — Services overview
- `/projects` — Project listing
- `/projects/[slug]` — Project detail
- `/contact` — Contact information and contact form, if approved

Potential later routes:
- `/careers`
- `/news`
- `/articles` or `/insights`

Only implement optional routes when the scope and content are approved. Do not show navigation links to empty sections.

## Group Company Structure
The `/companies` page should explain the relationship between Urbanspire Group and its three companies. Each company profile should support approved name, summary, description, services, imagery, and contact/CTA information where applicable. Exact fields must be confirmed against the CMS model and client requirements.

## Shared UI
- Site header/navigation
- Footer
- Buttons and links
- Section heading
- Company card
- Service card
- Project card
- Breadcrumbs where useful
- Form field, validation, and status components where forms exist
- Not-found page

## Project Listing and Details
Project cards and detail pages must use verified content. Demo entries must be labeled clearly and must not be mistaken for real portfolio work. Define filtering or categorization only when there is enough approved content to support it.

## Empty and Error States
- Do not show empty Blog/News/Articles navigation.
- If Careers is launched with no vacancies, show “No open positions currently” only if approved for use.
- Provide understandable not-found, form error, success, and loading states where relevant.

## SEO
Define page titles, descriptions, canonical URL strategy, social sharing metadata, sitemap, robots rules, and structured data only where accurate. Never add fabricated ratings, reviews, locations, or business claims to structured data.
