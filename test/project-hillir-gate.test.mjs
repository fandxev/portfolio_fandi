import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('adds HRIS Hillir Gate before Unit Layanan Disabilitas with alternating layout', () => {
  const hillirIndex = html.indexOf('HRIS Hillir Gate');
  const uldIndex = html.indexOf('Unit Layanan Disabilitas Apps');

  assert.notEqual(hillirIndex, -1);
  assert.ok(hillirIndex < uldIndex);
  assert.match(html, /Fullstack Website Project[\s\S]*?HRIS Hillir Gate/);
  assert.match(html, /data-aos="fade-right"[\s\S]*?img src="img\/hillir_gate_project\.png"/);
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
