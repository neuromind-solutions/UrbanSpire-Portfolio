# Design System — Urbanspire Group

## Design Intent
Create a restrained, premium architectural/construction aesthetic. The website should feel confident and editorial, not crowded, gimmicky, or overly animated.

## Initial Color Direction
- Near-black: `#0e0e0d`
- Orange accent: `#ff4d00`
- Warm off-white and neutral grays for supporting surfaces and text

Treat these as initial values. Verify text contrast and define accessible color tokens before implementation.

## Typography
- Use a modern, highly legible type system.
- Establish clear display, heading, body, label, and caption scales.
- Avoid too many font families or weights.
- Maintain comfortable line lengths and line heights.
- Load web fonts efficiently and provide sensible fallbacks.

## Layout
- Use generous whitespace and strong visual hierarchy.
- Prefer clean grids, aligned edges, and consistent spacing.
- Create responsive containers and predictable section spacing.
- Let high-quality photography and video carry visual impact.
- Avoid excessive gradients, glass effects, shadows, and ornamental animation.

## Hero Video
- Wide cinematic architectural/construction footage.
- Composition should leave space for text and CTA controls.
- Use a subtle overlay only as needed for legibility.
- Muted autoplay, loop, and inline playback where supported.
- Provide a poster image and a static/reduced-motion alternative.
- Avoid blocking the initial render with a large video download.
- Provide a mobile-friendly strategy; use a static poster or lighter source where appropriate.
- Respect `prefers-reduced-motion`.
- Ensure controls, text, and navigation remain accessible.
- Use licensed media; do not imply stock footage depicts a real project.

## Components
Build reusable components for navigation, footer, buttons, section headings, project cards, company cards, service cards, and media frames. Keep components purposeful and avoid abstraction without reuse.

## Responsive Behavior
Design for small mobile, large mobile, tablet, laptop, and wide desktop. Test navigation, typography, grids, image crops, and video behavior at realistic viewport sizes.

## Accessibility
Use semantic landmarks and heading order, keyboard-visible focus, accessible names, meaningful alt text, adequate contrast, and reduced-motion support. Do not communicate important information through color alone.

## Imagery
Use appropriately licensed assets. Use consistent crops and image ratios where suitable. Add descriptive alt text for informative images and empty alt text for purely decorative images.
