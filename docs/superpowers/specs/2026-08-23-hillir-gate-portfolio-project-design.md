# HRIS Hillir Gate Portfolio Project Design

**Status:** Approved for implementation

## Goal

Add the HRIS Hillir Gate project to the portfolio immediately before Unit Layanan Disabilitas Apps, preserving the alternating project composition and matching the existing Details modal style.

## Context

The portfolio is a static single-page site implemented in `index.html`. Project cards use alternating two-column layouts, inline Tailwind classes, AOS entrance animations, and a shared JavaScript modal driven by `modalPresets`. The approved hero asset already exists at `img/hillir_gate_project.png`.

The Hillir Gate codebases show a Next.js/React/TypeScript frontend and a NestJS/Node.js backend using Prisma with MySQL. The product is an HRIS covering employee information, attendance, leave and permission requests, reimbursements, KPI workflows, payroll, notifications, organization data, and access control.

## Design

### Project card

- Insert a new card at the beginning of `#section_project`, before Unit Layanan Disabilitas Apps.
- Use the opposite composition from the current first card: descriptive text on the left and the screenshot on the right.
- Keep the existing visual language: `fade-right` AOS animation, purple radial glow, dark rounded image frame, `font-speedy` headings, responsive text sizing, icon row, and Details button.
- Use the category label `Fullstack Website Project` and the project title `HRIS Hillir Gate`.
- Use `img/hillir_gate_project.png` as the featured image, with responsive cropping consistent with the existing project cards.
- Render the same stack icons in desktop and mobile controls: Next.js, React, TypeScript, NestJS, and MySQL. The full popup list will also include Tailwind CSS, Node.js, and Prisma.
- Add the same vertical spacing to the now-second Unit Layanan Disabilitas card that existing subsequent cards use.

### Portfolio summary copy

Use concise English copy in the existing portfolio voice:

> Developed HRIS Hillir Gate, a fullstack human resources platform that centralizes employee data, attendance tracking, leave and permission requests, reimbursements, KPI workflows, and payroll operations. Built responsive web interfaces and integrated role-based access control to support efficient day-to-day HR management.

### Details modal

Add a `project_hillir_gate` preset with:

- Title: `HRIS Hillir Gate`
- Description explaining the HRIS scope and fullstack implementation.
- Team Overview containing the role `Fullstack Web Developer` without inventing a team size.
- My Contribution covering responsive frontend development, REST API/backend modules, data modeling and business logic, and access-controlled HR workflows.
- Tools & Tech using skillicons for `nextjs`, `react`, `typescript`, `tailwind`, `nestjs`, `nodejs`, `prisma`, and `mysql`.

Both desktop and mobile Details buttons will reference the same `data-type="project_hillir_gate"` key.

## Scope and safety

Only the portfolio repository will change. The Hillir Gate backend and frontend repositories are read-only sources for copy and stack verification. No refactor of existing project cards or modal architecture is required.

## Verification

Use a Node built-in test to assert the static contract: the new card appears before Unit Layanan Disabilitas, uses the approved image and alternating layout, exposes both Details buttons, and defines the modal preset with the expected stack icons. Then run the test, inspect the diff, and perform an HTML/script structural check.
