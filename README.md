# Urbanspire Group Website

## Project Overview

This project is the design and development of a premium corporate website for **Urbanspire Group**, a construction and related-services group consisting of three companies.

The website should present the group and its companies clearly, showcase approved projects and services, communicate the group's professional identity, and provide a strong foundation for future content updates.

The website should feel **simple, professional, clean, modern, and impressive**. Its visual quality should be inspired by leading construction-group websites, including ASGC Group, without copying its branding, text, code, or protected assets.

## Primary Goals

- Establish a premium digital presence for Urbanspire Group.
- Explain the relationship between the group and its three companies.
- Present the group's services and approved projects.
- Create a visually impressive homepage with a high-quality hero video.
- Provide a responsive, accessible experience across desktop, tablet, and mobile.
- Make project and other approved content straightforward to update.
- Maintain strong performance, security, search-engine optimization, and maintainability.

## Visual Direction

The design should use a restrained, architectural visual style.

- **Primary background:** Near-black `#0e0e0d`
- **Primary accent:** Orange `#ff4d00`
- **Supporting colors:** Warm off-white, neutral gray, and suitable contrast colors
- **Typography:** Modern, confident, highly legible typography
- **Layout:** Spacious sections, strong visual hierarchy, clean grids, and generous whitespace
- **Imagery:** High-quality architectural, construction, and interior imagery with appropriate usage rights
- **Motion:** Subtle and purposeful; avoid unnecessary animation and decorative effects

These are initial design specifications and should be treated as the project's starting design direction.

## Homepage Hero Video

The homepage hero should feature high-quality, cinematic architectural or construction footage.

Requirements:

- Use properly licensed footage suitable for a corporate website.
- Choose a wide composition that leaves sufficient space for headline text and calls to action.
- Use a carefully tuned overlay when necessary to preserve text contrast.
- Support muted autoplay, looping, and inline playback where browsers permit.
- Provide a poster-image fallback and a suitable static alternative for reduced-motion preferences.
- Optimize video file size, loading behavior, and mobile performance.
- Do not allow the video to make the page slow, inaccessible, or difficult to use.
- Treat the footage as illustrative unless it is verified to depict an actual Urbanspire project.

The final video, poster image, headline, and calls to action must be approved before production launch.

## Website Structure

The planned website should include the following areas, subject to confirmation during implementation:

- Home
- About the Group
- Our Companies
- Services
- Projects
- Project Details
- Contact

Additional areas, such as Careers, News, or Articles, may be introduced when their requirements and content are ready. Empty content sections should not be presented as if they contain published material.

The three group companies should have clearly identifiable profiles. Their real names, descriptions, services, and other company information must be supplied or approved before launch.

## Proposed Technology

The current implementation specification proposes the following technologies:

- Astro
- TypeScript
- Sanity CMS
- Cloudflare hosting and related services
- Cloudflare R2 for private resume storage if the careers workflow is implemented
- Cloudflare Turnstile for relevant form protection
- Resend for transactional email where required
- GitHub for private source-code management
- Playwright and Lighthouse for testing and quality checks

These are the proposed technologies, not confirmation that the application or infrastructure has already been implemented. Final selections and configurations must follow the approved implementation specification.

## Content and Asset Rules

- Never invent company facts, client names, project histories, certifications, testimonials, statistics, or contact details.
- Temporary copy and fictional projects must be clearly identified as demonstration content.
- Stock imagery and footage must not be represented as actual Urbanspire work.
- Use only assets with suitable permissions or licenses.
- Keep temporary content easy to identify and replace.
- Obtain approval for production copy, images, videos, logos, and other brand assets before launch.

## Quality Standards

The website must be:

- Responsive across common screen sizes.
- Accessible, with keyboard support, readable contrast, and appropriate text alternatives.
- Optimized for performance, including video loading and image delivery.
- Structured for search-engine discoverability.
- Secure, with secrets stored outside source code.
- Tested across relevant browsers and devices.
- Maintainable, with reusable components and clear documentation.

## Documentation

The project documentation is intended to define the requirements, design system, content rules, site architecture, technology choices, implementation phases, testing procedures, and deployment/security practices.

Read `AGENTS.md` before making implementation changes. Follow the relevant project documents and flag conflicts or missing decisions rather than silently inventing requirements.

## Project Status

This repository begins from a planning and specification stage. Do not assume that the website, CMS, forms, storage, or deployment infrastructure already exists.

Implementation should proceed in agreed phases, with each phase reviewed before expanding the scope.

## Definition of Success

The finished website should present Urbanspire Group as a credible, professional organization through clear group structure, strong project presentation, polished design, a compelling hero video, reliable performance, and an experience that is easy to maintain and update.
