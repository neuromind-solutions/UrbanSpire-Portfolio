# Testing and Quality Assurance — Urbanspire Group

## General Rule
Report only checks actually run. Do not claim a build, test suite, audit, or browser check passed unless it was executed and its result was reviewed.

## Build and Code Quality
Run the repository's available:
- Production build
- Type checking
- Linting/format checks
- Automated tests

Document commands and outcomes. Resolve errors or clearly report blockers.

## Responsive Checks
Review representative small mobile, large mobile, tablet, laptop, and wide desktop widths. Check:
- Navigation and menus
- Hero video and poster behavior
- Headline wrapping and CTA layout
- Company, service, and project grids
- Image cropping and overflow
- Footer layout
- Forms and validation

## Accessibility
Check:
- Semantic landmarks and heading hierarchy
- Keyboard navigation and visible focus
- Accessible names for controls
- Contrast and readable text sizes
- Alt text for informative images
- Form labels and useful error messages
- Reduced-motion behavior
- Video fallback and text legibility

## Functional Checks
- All internal and external links
- All planned routes and the not-found page
- Empty content states
- CMS loading and missing-content behavior, if integrated
- Contact form validation and delivery, if implemented
- Careers upload validation, privacy, retention, and deletion, if implemented

## SEO and Performance
- Page titles and descriptions
- Canonical URLs and sitemap/robots behavior
- Social metadata
- No fabricated structured data
- Image sizing and lazy loading where appropriate
- Hero video loading strategy and poster fallback
- Lighthouse or equivalent measurements on agreed pages and conditions

Agree target metrics and test conditions before treating a score as a release gate.

## Browser Checks
Use Playwright or manual browser testing as appropriate. Test current supported browsers and disclose any untested combinations.

## Release Checklist
- [ ] No unapproved factual claims
- [ ] Demo content removed or clearly excluded from production
- [ ] Media rights verified
- [ ] Responsive review completed
- [ ] Accessibility review completed
- [ ] Functional checks completed
- [ ] SEO checks completed
- [ ] Performance reviewed
- [ ] Build and automated checks reviewed
- [ ] Deployment and recovery steps documented
- [ ] Stakeholder approval recorded
