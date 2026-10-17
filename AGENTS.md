# AI Agent Instructions — Urbanspire Group Website

## Mission
Build a premium, responsive corporate website for Urbanspire Group. The target experience is simple, professional, clean, and impressive, with an architectural visual language and a high-quality cinematic hero video.

## Read Before Implementing
Read `README.md` and the relevant project documents before making changes. Treat the approved implementation specification as the source of truth. These Markdown files organize the requirements; they do not silently replace or override the original specification.

## Non-Negotiable Rules
- Do not invent company facts, project details, clients, metrics, certifications, testimonials, addresses, or contact information.
- Clearly label temporary or fictional content as demo content.
- Never present stock imagery or footage as a real Urbanspire project.
- Use only assets with suitable licenses or explicit permission.
- Do not copy ASGC's code, wording, branding, or protected assets. Use it only as a high-level design reference.
- Keep secrets and credentials out of source control.
- Do not claim infrastructure or features are implemented until they have been built and tested.
- Prefer accessible semantic HTML, reusable components, and maintainable TypeScript.
- Avoid unnecessary dependencies, decorative effects, and excessive animation.
- Do not add a page or feature merely because it is listed as a possible future feature; respect the agreed implementation phase.

## Decision Handling
If a requirement is missing, contradictory, or dependent on client approval:
1. Record the open question.
2. Choose a safe, reversible placeholder only if work can reasonably continue.
3. Clearly mark the placeholder.
4. Do not publish the assumption as a company fact.

## Hero Video
Implement a cinematic architectural/construction hero video with appropriate rights, readable text contrast, muted autoplay where supported, looping and inline playback where supported, a poster fallback, reduced-motion support, and mobile/performance safeguards. The hero must remain usable when video playback is unavailable.

## Quality Gates
Before declaring a task complete:
- Run relevant build, lint, type, and test commands that exist in the repository.
- Check responsive behavior, keyboard access, contrast, and meaningful alt text.
- Check routes, empty states, loading/error states, and SEO metadata affected by the change.
- Report tests actually run and disclose any failures or checks not performed.
