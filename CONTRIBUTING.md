# Contributing to Global Tech Docs

Thank you for contributing! This document explains the minimal process we expect contributors to follow so documentation changes are consistent and reviewable.

## Quick start
1. Fork and clone the repo.
2. Create a feature branch: `git checkout -b docs/my-change`.
3. Make small, focused changes (typo fixes, small example improvements, or a single new topic).
4. Run a local build (see `README.md`) and attach HTML/PDF artifacts/screenshots to the PR when helpful.
5. Open a pull request that references the intent and any related code changes.

## Reviewers
- Assign at least one technical writer and one engineer as reviewers when the change affects developer-facing content.

## Style & Conventions
- Use small topics: one task, one concept, or one reference per file.
- Prefer active voice and present tense for tasks.
- Use `conref` for shared warnings and `keyref` for standards/terms.
- Include copy-pasteable examples (shell, JSON, code snippets) where relevant.

## Validation
- Run the DITA validation locally before submitting a PR:

```bash
./dita-ot/bin/dita --validate --input=maps/service_manual.ditamap
```

- Build locally to check HTML output:

```bash
./dita-ot/bin/dita --input=maps/service_manual.ditamap --format=html5 --output=out/html5
```

See `docs/DEVELOPER_GUIDE.md` for step-by-step instructions (local server, accessibility checks, OpenAPI generator).

## Accessibility & QA
- Confirm basic accessibility: headings, alt text for images, and color contrast where applicable.
- If your change affects UI text samples, check on mobile viewports.

## CI
- The repository runs DITA builds and validation on push and PRs. Fix failing validation errors before merging.

## Creating new guides or examples
- Copy an existing topic from `topics/guides/` as a template.
- Keep meta sections (how-to-update/how-to-extend) up to date so future contributors can quickly adapt the content.

Thanks for improving the docs — we appreciate concise, testable changes!
