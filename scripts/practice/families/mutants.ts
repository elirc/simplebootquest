/**
 * "Write the tests" practice graded by mutation testing, at scale.
 * Subjects are the data-wrangling functions; mutants are generated with
 * classic mutation operators (boundary flips, negated conditions, swapped
 * comparators, changed rounding…). A mutant is only kept if the reference
 * test suite provably catches it and it actually changes behaviour.
 */
import { ENTITIES, rows, rowsLiteral } from '../entities.ts';
import { evalJs, Rng, type WriteTestsSpec } from '../lib.ts';
import { ADVANCED, BASIC, dataQuest } from './data.ts';

const OPERATORS: { find: RegExp; replace: string; name: (m: string) => string }[] = [
  { find: / > /g, replace: ' >= ', name: () => 'boundary: `>` became `>=`' },
  { find: / >= /g, replace: ' > ', name: () => 'boundary: `>=` became `>`' },
  { find: / < /g, replace: ' <= ', name: () => 'boundary: `<` became `<=`' },
  { find: / <= /g, replace: ' < ', name: () => 'boundary: `<=` became `<`' },
  { find: / === /g, replace: ' !== ', name: () => 'condition negated: `===` became `!==`' },
  { find: /b\.(\w+) - a\.\1/g, replace: 'a.$1 - b.$1', name: () => 'sort direction reversed' },
  { find: /a\.(\w+) - b\.\1/g, replace: 'b.$1 - a.$1', name: () => 'sort direction reversed' },
  { find: /\?\? 0\)/g, replace: '?? 1)', name: () => 'wrong starting count (`?? 0` became `?? 1`)' },
  { find: /Math\.round/g, replace: 'Math.floor', name: () => 'rounding: `Math.round` became `Math.floor`' },
  { find: /\* 10\) \/ 10/g, replace: '* 100) / 100', name: () => 'rounds to 2 decimals instead of 1' },
  { find: /, 0\);/g, replace: ', 1);', name: () => 'reduce starts from 1 instead of 0' },
  { find: /\.slice\(0, n\)/g, replace: '.slice(0, n - 1)', name: () => 'off-by-one in slice' },
  { find: /length === 0/g, replace: 'length === 1', name: () => 'empty check is wrong' },
  { find: /\.toLowerCase\(\)/g, replace: '', name: () => 'search became case-sensitive' },
  { find: /\.trim\(\)/g, replace: '', name: () => 'input is no longer trimmed' },
  { find: /n - 1\]/g, replace: 'n]', name: () => 'off-by-one in the index' },
  { find: /\.sort\(\)/g, replace: '', name: () => 'results are no longer sorted' },
  { find: /\[\.\.\.(\w+)\]\.sort/g, replace: '$1.sort', name: () => 'sorts (mutates) the input array in place' },
  { find: /\{ \.\.\.x, /g, replace: 'Object.assign(x, { ', name: () => 'mutates the original objects' },
  { find: /\(page - 1\) \* size/g, replace: 'page * size', name: () => 'pages start at the wrong offset' },
  { find: /Math\.ceil/g, replace: 'Math.floor', name: () => '`Math.ceil` became `Math.floor`' },
];

/** All single-site mutations of `code`. */
function mutate(code: string): { name: string; code: string }[] {
  const out: { name: string; code: string }[] = [];
  for (const op of OPERATORS) {
    const re = new RegExp(op.find.source, 'g');
    let m: RegExpExecArray | null;
    while ((m = re.exec(code))) {
      const before = code.slice(0, m.index);
      const after = code.slice(m.index + m[0].length);
      const replaced = m[0].replace(new RegExp(op.find.source), op.replace);
      if (op.name(m[0]).includes('Object.assign')) continue;
      let mutant = before + replaced + after;
      if (replaced.startsWith('Object.assign(x, { ')) mutant = mutant.replace(/Object\.assign\(x, \{ ([^}]*)\}\)/, 'Object.assign(x, { $1})');
      out.push({ name: op.name(m[0]), code: mutant });
    }
  }
  return out;
}

export function mutantQuests(opts: { section: string; seed: string; count: number }): WriteTestsSpec[] {
  const out: WriteTestsSpec[] = [];
  const templates = [...BASIC, ...ADVANCED];
  const rng = new Rng(`${opts.seed}:mutants`);
  const combos = rng.shuffle(templates.flatMap((t) => ENTITIES.map((e) => ({ t, e }))));
  for (const { t, e } of combos) {
    if (out.length >= opts.count) break;
    const spec = dataQuest(e, t, opts.section, 'js', `${opts.seed}:wt`);
    if (!spec || t.id === 'diff') continue;
    const data = rows(e, `${opts.seed}:wt:${t.id}`);
    const DATA = e.key.toUpperCase();
    const fnSource = spec.solution.replace(/^export /m, '');
    const subject = `const ${DATA} = ${rowsLiteral(data)};\n\n${fnSource}`;
    // Reference tests = the data quest's tests, minus their own copy of the data.
    const tests = spec.tests.replace(/^const [A-Z_]+ = \[[\s\S]*?\n\];\n/, '').trim();
    const calls = [...tests.matchAll(/expect\((\w+\([^;]*?\))\)\.toEqual\(([\s\S]*?)\);\n\}\);/g)].map((m) => ({ expr: m[1]!, expected: m[2]! }));
    const mutants = mutate(fnSource)
      .map((m) => ({ ...m, code: `const ${DATA} = ${rowsLiteral(data)};\n\n${m.code}` }))
      .filter((m) => {
        // Must change behaviour on the reference tests (or be caught by the mutation test).
        try {
          return calls.some((c) => JSON.stringify(evalJs(m.code, c.expr)) !== JSON.stringify(JSON.parse(c.expected))) || (tests.includes('does not mutate') && /Object\.assign|\.sort\(/.test(m.name + m.code) && m.name.includes('mutat'));
        } catch {
          return true; // throws → caught
        }
      });
    const unique = [...new Map(mutants.map((m) => [m.name, m])).values()].slice(0, 4);
    if (unique.length < 2) continue;
    const fn = /function (\w+)/.exec(fnSource)![1]!;
    out.push({
      kind: 'write-tests',
      slug: `wt-${e.key}-${t.id}`,
      title: `Test It: ${spec.title.replace(/^Data: /, '')}`,
      section: opts.section,
      language: 'js',
      lesson: `# Test It: ${spec.title.replace(/^Data: /, '')}\n\nThe **Code under test** tab has a correct \`${fn}\` and its dataset \`${DATA}\`. Write tests that pass against it **and** catch ${unique.length} hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).\n\nWhat the function does:\n\n${spec.lesson.split('\n').slice(2).join('\n').split('The tests call')[0]!.trim()}\n\nTips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use \`toEqual\` for arrays and objects.`,
      subject,
      starter: `test('${fn} works', () => {\n  // expect(${fn}(${DATA}${spec.tests.includes(`${fn}(${DATA}, `) ? ', …' : ''})).toEqual(…);\n});`,
      solution: tests,
      mutants: unique,
      xp: 20,
    });
  }
  return out;
}
