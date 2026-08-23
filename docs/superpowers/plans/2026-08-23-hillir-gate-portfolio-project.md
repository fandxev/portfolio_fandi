# HRIS Hillir Gate Portfolio Project Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the HRIS Hillir Gate project card and its Details modal content to the static portfolio without changing the existing project architecture.

**Architecture:** Keep the existing inline HTML card pattern and shared `modalPresets` object. Insert one alternating text-left/image-right card before Unit Layanan Disabilitas, register one modal preset, and reuse the existing delegated button wiring.

**Tech Stack:** Static HTML, inline Tailwind CSS classes, AOS, vanilla JavaScript, skillicons.dev image URLs, Node built-in test runner.

---

### Task 1: Add a failing static contract test

**Files:**
- Create: `test/project-hillir-gate.test.mjs`
- Test: `test/project-hillir-gate.test.mjs`

- [ ] **Step 1: Write the failing test**

Create a Node built-in test that reads `index.html` and checks the approved project contract:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('adds HRIS Hillir Gate before Unit Layanan Disabilitas with alternating layout', () => {
  const hillirIndex = html.indexOf('HRIS Hillir Gate');
  const uldIndex = html.indexOf('Unit Layanan Disabilitas Apps');

  assert.notEqual(hillirIndex, -1);
  assert.ok(hillirIndex < uldIndex);
  assert.match(html, /Fullstack Website Project[\\s\\S]*?HRIS Hillir Gate/);
  assert.match(html, /data-aos="fade-right"[\\s\\S]*?img src="img\\/hillir_gate_project\.png"/);
  assert.equal((html.match(/data-type="project_hillir_gate"/g) ?? []).length, 2);
  assert.match(html, /project_hillir_gate:\s*\{/);
});

test('documents the Hillir Gate stack in the Details modal', () => {
  const modalStart = html.indexOf('project_hillir_gate:');
  const modalEnd = html.indexOf('project_uld:', modalStart);
  const modal = html.slice(modalStart, modalEnd);

  for (const icon of ['nextjs', 'react', 'typescript', 'tailwind', 'nestjs', 'nodejs', 'prisma', 'mysql']) {
    assert.match(modal, new RegExp(`skillicons\\.dev/icons\\?i=${icon}`));
  }
  assert.match(modal, /Fullstack Web Developer/);
});
```

- [ ] **Step 2: Run the test to verify it fails for the missing feature**

Run:

```powershell
node --test test/project-hillir-gate.test.mjs
```

Expected result: the test fails because `HRIS Hillir Gate`, its card, and `project_hillir_gate` do not yet exist in `index.html`.

### Task 2: Implement the new project card and modal preset

**Files:**
- Modify: `index.html:640-705` to insert the text-left/image-right card and add spacing before Unit Layanan Disabilitas.
- Modify: `index.html:1373-1420` to register `project_hillir_gate` before `project_uld`.
- Use: `img/hillir_gate_project.png` as the already-approved featured image.

- [ ] **Step 1: Insert the project card before Unit Layanan Disabilitas**

Add a `data-aos="fade-right"` two-column card with the text column first in the DOM, the image frame second, desktop/mobile icon rows, two Details buttons with `data-type="project_hillir_gate"`, and the existing radial background glow. Use the copy from the design spec and the icon URL identifiers `nextjs`, `react`, `typescript`, and `nestjs` in the visible card.

- [ ] **Step 2: Preserve the alternating vertical rhythm**

Add `mt-[100px]` to the existing Unit Layanan Disabilitas grid wrapper because it becomes the second project card after the new first card.

- [ ] **Step 3: Register the Details modal preset**

Add `project_hillir_gate` before `project_uld` with this content structure:

```html
<h3 class="emblem">Description</h3>
<hr class="line_modal">
<br>
<p>
Developed HRIS Hillir Gate, a fullstack human resources platform that centralizes employee data,
attendance tracking, leave and permission requests, reimbursements, KPI workflows, and payroll
operations. Built responsive web interfaces and integrated role-based access control to support
efficient day-to-day HR management.
</p>
<br><br>
<h3 class="emblem">Team Overview</h3>
<hr class="line_modal">
<br>
<ul>
  <li>• My Role: Fullstack Web Developer</li>
</ul>
<br><br>
<h3 class="emblem">My Contribution</h3>
<hr class="line_modal">
<br>
<ul>
  <li>• Developed responsive HRIS interfaces for employee and HR operations</li>
  <li>• Built REST API modules and backend business logic for core HR workflows</li>
  <li>• Designed and integrated data models for employee, attendance, KPI, and payroll processes</li>
  <li>• Implemented role-based access control and permission-aware application flows</li>
</ul>
<br><br>
<h3 class="emblem">Tools &amp; Tech</h3>
<hr class="line_modal">
<br>
<ul>
  <li><img style="display:inline; margin-right:8px;" src="https://skillicons.dev/icons?i=nextjs" class="h-8" alt="Next.js" /> Next.js</li>
  <li><img style="display:inline; margin-right:8px;" src="https://skillicons.dev/icons?i=react" class="h-8" alt="React" /> React</li>
  <li><img style="display:inline; margin-right:8px;" src="https://skillicons.dev/icons?i=typescript" class="h-8" alt="TypeScript" /> TypeScript</li>
  <li><img style="display:inline; margin-right:8px;" src="https://skillicons.dev/icons?i=tailwind" class="h-8" alt="Tailwind CSS" /> Tailwind CSS</li>
  <li><img style="display:inline; margin-right:8px;" src="https://skillicons.dev/icons?i=nestjs" class="h-8" alt="NestJS" /> NestJS</li>
  <li><img style="display:inline; margin-right:8px;" src="https://skillicons.dev/icons?i=nodejs" class="h-8" alt="Node.js" /> Node.js</li>
  <li><img style="display:inline; margin-right:8px;" src="https://skillicons.dev/icons?i=prisma" class="h-8" alt="Prisma" /> Prisma</li>
  <li><img style="display:inline; margin-right:8px;" src="https://skillicons.dev/icons?i=mysql" class="h-8" alt="MySQL" /> MySQL</li>
</ul>
```

- [ ] **Step 4: Keep the existing modal event wiring unchanged**

Do not add a new click handler. The existing `.detail-btn` listener will resolve both new buttons through `data-type="project_hillir_gate"`.

### Task 3: Verify the implementation

**Files:**
- Verify: `index.html`
- Verify: `test/project-hillir-gate.test.mjs`
- Verify: `img/hillir_gate_project.png`

- [ ] **Step 1: Run the static contract test**

Run:

```powershell
node --test test/project-hillir-gate.test.mjs
```

Expected result: all tests pass.

- [ ] **Step 2: Inspect the diff and repository status**

Run:

```powershell
git -c safe.directory='D:/web portfolio github/portfolio_fandi/portfolio_fandi' diff --check
git -c safe.directory='D:/web portfolio github/portfolio_fandi/portfolio_fandi' diff --stat
git -c safe.directory='D:/web portfolio github/portfolio_fandi/portfolio_fandi' status --short
```

Confirm the changes are limited to the portfolio card/modal, the approved image, and the focused static test. Do not stage unrelated user files.

- [ ] **Step 3: Perform a structural HTML check**

Run:

```powershell
node --check test/project-hillir-gate.test.mjs
```

Confirm the test script parses successfully and the static contract has passed before reporting completion.
