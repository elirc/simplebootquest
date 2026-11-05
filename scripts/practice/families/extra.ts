/**
 * Extra families: request-validation functions (CRUD backends) and
 * "how does the test runner execute this?" drills, computed by running the
 * runner itself.
 */
import { runQuest } from '../../../packages/runner/src/index.ts';
import { ENTITIES, capitalize, type Entity } from '../entities.ts';
import { evalJs, json, Rng, chunk, question, type CodeSpec, type QuizQuestion, type QuizSpec } from '../lib.ts';

function validator(e: Entity, partial: boolean): string {
  const C = capitalize(e.one);
  const N = e.nameField;
  const lines: string[] = [];
  const guard = (field: string, check: string) => (partial ? `if (input.${field} !== undefined && ${check})` : `if (${check})`);
  lines.push(`${guard(N, `(typeof input.${N} !== 'string' || input.${N}.trim() === '' || input.${N}.length > 40)`)} errors.push({ field: '${N}', message: 'must be 1-40 characters' });`);
  for (const f of e.nums) {
    lines.push(`${guard(f.name, `(typeof input.${f.name} !== 'number' || Number.isNaN(input.${f.name}) || input.${f.name} < ${f.min} || input.${f.name} > ${f.max})`)} errors.push({ field: '${f.name}', message: 'must be a number from ${f.min} to ${f.max}' });`);
  }
  for (const c of e.cats) {
    lines.push(`${guard(c.name, `!${JSON.stringify(c.values)}.includes(input.${c.name})`)} errors.push({ field: '${c.name}', message: 'must be one of ${c.values.join(', ')}' });`);
  }
  if (e.bool) lines.push(`if (input.${e.bool.name} !== undefined && typeof input.${e.bool.name} !== 'boolean') errors.push({ field: '${e.bool.name}', message: 'must be true or false' });`);
  const allowed = [N, ...e.nums.map((f) => f.name), ...e.cats.map((c) => c.name), ...(e.bool ? [e.bool.name] : [])];
  return `function validate${C}${partial ? 'Update' : ''}(input) {\n  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };\n  const errors = [];\n  ${lines.join('\n  ')}\n  if (errors.length) return { ok: false, errors };\n  // Only known fields pass through (no mass assignment).\n  const data = {};\n  for (const key of ${JSON.stringify(allowed)}) if (input[key] !== undefined) data[key] = key === '${N}' ? input[key].trim() : input[key];\n  return { ok: true, data };\n}`;
}

export function validationQuests(opts: { section: string; seed: string }): CodeSpec[] {
  const out: CodeSpec[] = [];
  for (const e of ENTITIES) {
    for (const partial of [false, true]) {
      const r = new Rng(`${opts.seed}:${e.key}:${partial}`);
      const C = capitalize(e.one);
      const fn = `validate${C}${partial ? 'Update' : ''}`;
      const code = validator(e, partial);
      const good: Record<string, unknown> = { [e.nameField]: `  ${r.pick(e.names)} ` };
      for (const f of e.nums) good[f.name] = r.int(f.min, f.max);
      for (const c of e.cats) good[c.name] = r.pick(c.values);
      const f0 = e.nums[0]!;
      const c0 = e.cats[0]!;
      const cases: [string, unknown][] = partial
        ? [['an empty update is fine', {}], ['updates one field', { [f0.name]: f0.min }], ['still validates provided fields', { [f0.name]: f0.max + 1 }], ['rejects unknown categories', { [c0.name]: 'nope' }], ['strips unknown fields like ownerId', { [e.nameField]: 'New', ownerId: 99, role: 'admin' }], ['rejects non-objects', [1, 2]]]
        : [['accepts a valid body (trimmed)', good], ['requires a name', { ...good, [e.nameField]: '   ' }], ['checks number ranges', { ...good, [f0.name]: f0.min - 1 }], ['rejects wrong types', { ...good, [f0.name]: String(f0.min) }], ['reports every problem at once', { [e.nameField]: '', [c0.name]: 'nope' }], ['strips unknown fields like ownerId', { ...good, ownerId: 99 }], ['rejects null', null]];
      const tests = cases.map(([name, input]) => `test(${json(name)}, () => {\n  expect(${fn}(${json(input)})).toEqual(${json(evalJs(code, `${fn}(${json(input)})`))});\n});`);
      const rules = [`- \`${e.nameField}\`: a string of 1–40 characters after trimming (store it trimmed) → \`'must be 1-40 characters'\``, ...e.nums.map((f) => `- \`${f.name}\`: a number from ${f.min} to ${f.max} → \`'must be a number from ${f.min} to ${f.max}'\``), ...e.cats.map((c) => `- \`${c.name}\`: one of ${c.values.map((v) => `\`${v}\``).join(', ')} → \`'must be one of ${c.values.join(', ')}'\``), ...(e.bool ? [`- \`${e.bool.name}\` (optional): a boolean → \`'must be true or false'\``] : [])];
      out.push({
        kind: 'code',
        slug: `validate-${e.key}${partial ? '-update' : ''}`,
        title: `Validate ${partial ? 'an update to' : 'a new'} ${e.one}`,
        section: opts.section,
        language: 'js',
        lesson: `# Validate ${partial ? 'an update to' : 'a new'} ${e.one}\n\nEvery write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write \`${fn}(input)\` returning \`{ ok: true, data }\` or \`{ ok: false, errors: [{ field, message }] }\`, with errors in the order below.\n\n${partial ? '**This is a partial update (PATCH)**: every field is optional, but any field that *is* provided must be valid.\n\n' : '**All fields are required** except booleans.\n\n'}${rules.join('\n')}\n\nNon-objects (including arrays and \`null\`) → \`[{ field: '_', message: 'must be an object' }]\`. On success, \`data\` contains **only** the known fields (unknown ones like \`ownerId\` or \`role\` are stripped, which prevents mass assignment).`,
        starter: `function ${fn}(input) {\n  return { ok: true, data: input };\n}`,
        solution: code,
        tests: tests.join('\n\n'),
        hints: ['Collect errors in an array, checking each field in order, then decide ok/not ok at the end.', 'Build `data` from an allow-list of field names, never by copying `input` wholesale.'],
        xp: 20,
      });
    }
  }
  return out;
}

/** "What does the test runner do?" quizzes: hooks order, pass/fail counts. Computed by running the runner. */
export async function runnerQuizzes(opts: { section: string; seed: string; count: number }): Promise<QuizSpec[]> {
  const rng = new Rng(`${opts.seed}:runner`);
  const qs: QuizQuestion[] = [];
  const seen = new Set<string>();
  let guard = 0;
  while (qs.length < opts.count * 5 && guard++ < opts.count * 60) {
    const nTests = rng.int(2, 3);
    const outerHooks = rng.sample(['beforeEach', 'afterEach'], rng.int(1, 2));
    const inner = rng.bool();
    const failAt = rng.int(-1, nTests - 1);
    const body: string[] = [];
    for (const h of outerHooks) body.push(`${h}(() => log.push('${h === 'beforeEach' ? 'B' : 'A'}'));`);
    for (let i = 0; i < nTests; i++) body.push(`test('t${i + 1}', () => {\n  log.push('t${i + 1}');${i === failAt ? `\n  expect(${i + 1}).toBe(${i + 2});` : ''}\n});`);
    if (inner) body.push(`describe('group', () => {\n  beforeEach(() => log.push('b'));\n  test('t${nTests + 1}', () => {\n    log.push('t${nTests + 1}');\n  });\n});`);
    const tests = `const log = [];\n${body.join('\n')}\ntest('zz report', () => {\n  console.log(log.join(' '));\n});`;
    if (seen.has(tests)) continue;
    seen.add(tests);
    const res = await runQuest({ language: 'js', code: '', tests });
    const order = res.logs[0] ?? '';
    const passed = res.results.filter((r) => r.passed).length - 1;
    const total = res.results.length - 1;
    const display = tests.replace(/\ntest\('zz report'[\s\S]*$/, '');
    if (rng.bool()) {
      const parts = order.split(' ');
      const wrong = [parts.filter((p) => p !== 'A').join(' '), parts.filter((p) => p !== 'b').join(' '), parts.filter((p) => p.startsWith('t')).join(' '), [...parts].sort().join(' ')];
      qs.push(question(rng, `In what order are the entries pushed to \`log\` when this file runs (tests run in order)?\n\n\`\`\`js\n${display}\n\`\`\``, '`' + order + '`', wrong.map((w) => '`' + w + '`'), 'Hooks run around **every** test, outer hooks before inner ones (afterEach in reverse).'));
    } else {
      qs.push(question(rng, `How many of these tests pass?\n\n\`\`\`js\n${display}\n\`\`\``, `${passed} of ${total}`, [`${total} of ${total}`, `${Math.max(0, passed - 1)} of ${total}`, `0 of ${total}`, `${passed} of ${total + 1}`]));
    }
  }
  return chunk(qs, 5).filter((c) => c.length === 5).map((group, i) => ({
    kind: 'quiz',
    slug: `testing-runner-${i + 1}`,
    title: `How Does the Runner Execute This? #${i + 1}`,
    section: opts.section,
    lesson: `# How Does the Runner Execute This? #${i + 1}\n\nVitest (and Jest) collect your tests first, then run them in order. For **each** test: every \`beforeEach\` from the outermost \`describe\` inwards, then the test, then every \`afterEach\` from the innermost outwards. A failing \`expect\` fails only that test, and the hooks still run. These answers come from running each file through the platform's test runner.`,
    questions: group,
    xp: 10,
  }));
}
