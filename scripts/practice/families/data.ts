/**
 * Data-wrangling reps: realistic "filter / group / sort / summarise" tasks
 * over small datasets. This is the bread and butter of CRUD work (shaping
 * API responses, building dashboards). Expected results are computed by
 * running the reference solution.
 */
import { ENTITIES, camel, capitalize, rows, rowsLiteral, type Entity, type Row } from '../entities.ts';
import { transform } from 'sucrase';
import { evalJs, json, Rng, type CodeSpec } from '../lib.ts';

interface Template {
  id: string;
  /** Build one task, or null if the template doesn't fit this entity. */
  build(e: Entity, data: Row[], rng: Rng): TaskDef | null;
}
interface TaskDef {
  fn: string;
  title: string;
  task: string;
  params: string[];
  body: string;
  /** Extra args per test (the dataset is always the first argument). */
  cases: unknown[][];
  empty: unknown; // starter return value
  hint?: string;
  /** TS return type, for the typed variant. */
  tsReturn: string;
  tsParams?: string[];
}

const num = (e: Entity, rng: Rng) => rng.pick(e.nums);
const cat = (e: Entity, rng: Rng) => rng.pick(e.cats);
const quantiles = (data: Row[], field: string) => {
  const vals = data.map((r) => r[field] as number).sort((a, b) => a - b);
  return [vals[2]!, vals[4]!, vals[5]!];
};
const N = (e: Entity) => e.nameField;

export const BASIC: Template[] = [
  { id: 'above', build: (e, d, r) => { const f = num(e, r); const [a, b] = quantiles(d, f.name); return { fn: camel(e.key, 'above'), title: `${capitalize(e.many)} with a ${f.label} above a limit`, task: `Return the ${N(e)} of every ${e.one} whose \`${f.name}\` is **greater than** \`min\`, in the original order.`, params: [e.key, 'min'], body: `return ${e.key}.filter((x) => x.${f.name} > min).map((x) => x.${N(e)});`, cases: [[a], [b], [999999]], empty: [], tsReturn: 'string[]', tsParams: ['number'] }; } },
  { id: 'count-cat', build: (e, d, r) => { const c = cat(e, r); return { fn: camel('count', e.key, 'by', c.name), title: `Count ${e.many} by ${c.label}`, task: `Return how many ${e.many} have \`${c.name}\` equal to \`value\`.`, params: [e.key, 'value'], body: `let count = 0;\n  for (const x of ${e.key}) if (x.${c.name} === value) count++;\n  return count;`, cases: c.values.slice(0, 3).map((v) => [v]).concat([['nope']]), empty: 0, tsReturn: 'number', tsParams: ['string'] }; } },
  { id: 'sum', build: (e, d, r) => { const f = num(e, r); return { fn: camel('total', f.name), title: `Total ${f.label} of all ${e.many}`, task: `Return the sum of \`${f.name}\` across all ${e.many}. An empty list totals 0.`, params: [e.key], body: `return ${e.key}.reduce((sum, x) => sum + x.${f.name}, 0);`, cases: [[]], empty: undefined, tsReturn: 'number' }; } },
  { id: 'average', build: (e, d, r) => { const f = num(e, r); return { fn: camel('average', f.name), title: `Average ${f.label}`, task: `Return the average \`${f.name}\` rounded to **one decimal place** (use \`Math.round(x * 10) / 10\`). Return \`null\` for an empty list.`, params: [e.key], body: `if (${e.key}.length === 0) return null;\n  const total = ${e.key}.reduce((sum, x) => sum + x.${f.name}, 0);\n  return Math.round((total / ${e.key}.length) * 10) / 10;`, cases: [[]], empty: undefined, tsReturn: 'number | null' }; } },
  { id: 'max', build: (e, d, r) => { const f = num(e, r); return { fn: camel('highest', f.name), title: `The ${e.one} with the highest ${f.label}`, task: `Return the ${N(e)} of the ${e.one} with the **highest** \`${f.name}\`. If several tie, return the first. Return \`null\` for an empty list.`, params: [e.key], body: `let best = null;\n  for (const x of ${e.key}) if (best === null || x.${f.name} > best.${f.name}) best = x;\n  return best ? best.${N(e)} : null;`, cases: [[]], empty: undefined, tsReturn: 'string | null' }; } },
  { id: 'min', build: (e, d, r) => { const f = num(e, r); return { fn: camel('lowest', f.name), title: `The ${e.one} with the lowest ${f.label}`, task: `Return the ${N(e)} of the ${e.one} with the **lowest** \`${f.name}\` (first one on ties), or \`null\` for an empty list.`, params: [e.key], body: `let best = null;\n  for (const x of ${e.key}) if (best === null || x.${f.name} < best.${f.name}) best = x;\n  return best ? best.${N(e)} : null;`, cases: [[]], empty: undefined, tsReturn: 'string | null' }; } },
  { id: 'sort-asc', build: (e, d, r) => { const f = num(e, r); return { fn: camel(e.key, 'by', f.name), title: `Sort ${e.many} by ${f.label}`, task: `Return the ${N(e)}s sorted by \`${f.name}\` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.`, params: [e.key], body: `return [...${e.key}].sort((a, b) => a.${f.name} - b.${f.name}).map((x) => x.${N(e)});`, cases: [], empty: [], hint: '`[...array].sort(...)` copies first, so the original stays untouched.', tsReturn: 'string[]' }; } },
  { id: 'top-n', build: (e, d, r) => { const f = num(e, r); return { fn: camel('top', e.key, 'by', f.name), title: `Top ${e.many} by ${f.label}`, task: `Return the ${N(e)}s of the \`n\` ${e.many} with the **highest** \`${f.name}\`, highest first. Don't mutate the input.`, params: [e.key, 'n'], body: `return [...${e.key}].sort((a, b) => b.${f.name} - a.${f.name}).slice(0, n).map((x) => x.${N(e)});`, cases: [[1], [3], [0]], empty: [], tsReturn: 'string[]', tsParams: ['number'] }; } },
  { id: 'group-count', build: (e, d, r) => { const c = cat(e, r); return { fn: camel('count', e.key, 'per', c.name), title: `How many ${e.many} per ${c.label}?`, task: `Return an object mapping each \`${c.name}\` to the number of ${e.many} with it. Only include values that appear.`, params: [e.key], body: `const counts = {};\n  for (const x of ${e.key}) counts[x.${c.name}] = (counts[x.${c.name}] ?? 0) + 1;\n  return counts;`, cases: [[]], empty: undefined, tsReturn: 'Record<string, number>' }; } },
  { id: 'group-sum', build: (e, d, r) => { const c = cat(e, r); const f = num(e, r); return { fn: camel(f.name, 'per', c.name), title: `Total ${f.label} per ${c.label}`, task: `Return an object mapping each \`${c.name}\` to the **sum** of \`${f.name}\` for ${e.many} in it.`, params: [e.key], body: `const totals = {};\n  for (const x of ${e.key}) totals[x.${c.name}] = (totals[x.${c.name}] ?? 0) + x.${f.name};\n  return totals;`, cases: [[]], empty: undefined, tsReturn: 'Record<string, number>' }; } },
  { id: 'lookup', build: (e, d, r) => { const f = num(e, r); const target = r.pick(d)[N(e)]; return { fn: camel(f.name, 'of'), title: `Look up a ${e.one}'s ${f.label}`, task: `Return the \`${f.name}\` of the ${e.one} whose ${N(e)} is \`${N(e)}\`, or \`null\` if there isn't one.`, params: [e.key, N(e)], body: `const found = ${e.key}.find((x) => x.${N(e)} === ${N(e)});\n  return found ? found.${f.name} : null;`, cases: [[target], ['Nope']], empty: undefined, tsReturn: 'number | null', tsParams: ['string'] }; } },
  { id: 'unique', build: (e, d, r) => { const c = cat(e, r); return { fn: camel('distinct', c.name + 's'), title: `Distinct ${c.label} values`, task: `Return every distinct \`${c.name}\` that appears, sorted alphabetically.`, params: [e.key], body: `return [...new Set(${e.key}.map((x) => x.${c.name}))].sort();`, cases: [[]], empty: undefined, tsReturn: 'string[]' }; } },
  { id: 'format', build: (e, d, r) => { const f = num(e, r); return { fn: camel('describe', e.key), title: `Format ${e.many} as labels`, task: `Return one string per ${e.one}: \`"<${N(e)}> (<${f.name}>)"\`, e.g. \`"${d[0]![N(e)]} (${d[0]![f.name]})"\`.`, params: [e.key], body: `return ${e.key}.map((x) => \`\${x.${N(e)}} (\${x.${f.name}})\`);`, cases: [[]], empty: undefined, tsReturn: 'string[]' }; } },
  { id: 'partition', build: (e, d, r) => (e.bool ? { fn: camel('split', e.key, 'by', e.bool.name), title: `Split ${e.many} by "${e.bool.label}"`, task: `Return \`{ yes, no }\`: the ${N(e)}s of ${e.many} where \`${e.bool.name}\` is true, and those where it's false. Keep the original order.`, params: [e.key], body: `const yes = [];\n  const no = [];\n  for (const x of ${e.key}) (x.${e.bool.name} ? yes : no).push(x.${N(e)});\n  return { yes, no };`, cases: [[]], empty: undefined, tsReturn: '{ yes: string[]; no: string[] }' } : null) },
  { id: 'index', build: (e) => ({ fn: camel(e.key, 'by', 'id'), title: `Index ${e.many} by id`, task: `Return an object mapping each \`id\` to the ${e.one}'s ${N(e)}, for fast lookups.`, params: [e.key], body: `const byId = {};\n  for (const x of ${e.key}) byId[x.id] = x.${N(e)};\n  return byId;`, cases: [[]], empty: undefined, tsReturn: 'Record<number, string>' }) },
];

export const ADVANCED: Template[] = [
  { id: 'between', build: (e, d, r) => { const f = num(e, r); const [a, b, c] = quantiles(d, f.name); return { fn: camel(e.key, 'in', 'range'), title: `${capitalize(e.many)} in a ${f.label} range`, task: `Return the ${N(e)}s of ${e.many} whose \`${f.name}\` is between \`low\` and \`high\` **inclusive**. Use \`filter\` and \`map\`.`, params: [e.key, 'low', 'high'], body: `return ${e.key}.filter((x) => x.${f.name} >= low && x.${f.name} <= high).map((x) => x.${N(e)});`, cases: [[a, b], [b, c], [a, a]], empty: [], tsReturn: 'string[]', tsParams: ['number', 'number'] }; } },
  { id: 'percent', build: (e, d, r) => (e.bool ? { fn: camel('percent', e.bool.name), title: `What share of ${e.many} are ${e.bool.label}?`, task: `Return the percentage (0–100, rounded to a whole number) of ${e.many} where \`${e.bool.name}\` is true. Return 0 for an empty list.`, params: [e.key], body: `if (${e.key}.length === 0) return 0;\n  return Math.round((${e.key}.filter((x) => x.${e.bool!.name}).length / ${e.key}.length) * 100);`, cases: [[]], empty: undefined, tsReturn: 'number' } : null) },
  { id: 'every-some', build: (e, d, r) => { const f = num(e, r); const [a] = quantiles(d, f.name); const max = Math.max(...d.map((x) => x[f.name] as number)); return { fn: camel('all', e.key, 'under'), title: `Are all ${e.many} under a ${f.label} limit?`, task: `Return \`true\` if **every** ${e.one} has \`${f.name}\` below \`limit\` (and \`true\` for an empty list, like \`Array.prototype.every\`).`, params: [e.key, 'limit'], body: `return ${e.key}.every((x) => x.${f.name} < limit);`, cases: [[a], [max + 1], [max]], empty: undefined, tsReturn: 'boolean', tsParams: ['number'] }; } },
  { id: 'pluck', build: (e, d, r) => { const f = num(e, r); return { fn: camel('summarise', e.key), title: `Pick just the fields the UI needs`, task: `Return a new array of objects with only \`id\`, \`${N(e)}\` and \`${f.name}\` (in that order). APIs should never send more than the client needs.`, params: [e.key], body: `return ${e.key}.map(({ id, ${N(e)}, ${f.name} }) => ({ id, ${N(e)}, ${f.name} }));`, cases: [[]], empty: undefined, hint: 'Destructure the parameter: `({ id, name }) => ({ id, name })`.', tsReturn: `{ id: number; ${N(e)}: string; ${f.name}: number }[]` }; } },
  { id: 'chain', build: (e, d, r) => { const c = cat(e, r); const f = num(e, r); return { fn: camel(e.key, 'in', c.name, 'ranked'), title: `Filter, sort, map: ${e.many} in one ${c.label}`, task: `Return the ${N(e)}s of ${e.many} whose \`${c.name}\` equals \`value\`, sorted by \`${f.name}\` **highest first**. One chain of array methods is enough.`, params: [e.key, 'value'], body: `return ${e.key}\n    .filter((x) => x.${c.name} === value)\n    .sort((a, b) => b.${f.name} - a.${f.name})\n    .map((x) => x.${N(e)});`, cases: c.values.slice(0, 3).map((v) => [v]), empty: [], tsReturn: 'string[]', tsParams: ['string'] }; } },
  { id: 'avg-per', build: (e, d, r) => { const c = cat(e, r); const f = num(e, r); return { fn: camel('average', f.name, 'per', c.name), title: `Average ${f.label} per ${c.label}`, task: `Return an object mapping each \`${c.name}\` to the average \`${f.name}\` of its ${e.many}, rounded to a whole number.`, params: [e.key], body: `const groups = {};\n  for (const x of ${e.key}) (groups[x.${c.name}] ??= []).push(x.${f.name});\n  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));`, cases: [[]], empty: undefined, tsReturn: 'Record<string, number>' }; } },
  { id: 'nth', build: (e, d, r) => { const f = num(e, r); return { fn: camel('nth', 'by', f.name), title: `The n-th ${e.one} by ${f.label}`, task: `Return the ${N(e)} of the ${e.one} ranked \`n\` (1 = highest \`${f.name}\`), or \`null\` if \`n\` is out of range.`, params: [e.key, 'n'], body: `const sorted = [...${e.key}].sort((a, b) => b.${f.name} - a.${f.name});\n  return n >= 1 && n <= sorted.length ? sorted[n - 1].${N(e)} : null;`, cases: [[1], [2], [5], [0], [99]], empty: undefined, tsReturn: 'string | null', tsParams: ['number'] }; } },
  { id: 'update', build: (e, d, r) => { const f = num(e, r); const c = cat(e, r); return { fn: camel('bump', f.name), title: `Update ${e.many} immutably`, task: `Return a **new** array where every ${e.one} with \`${c.name}\` equal to \`value\` has \`${f.name}\` increased by \`amount\`. Other ${e.many} are unchanged. **Don't mutate** the input objects (React state depends on this).`, params: [e.key, 'value', 'amount'], body: `return ${e.key}.map((x) => (x.${c.name} === value ? { ...x, ${f.name}: x.${f.name} + amount } : x));`, cases: [[c.values[0], 10], [c.values[1], 1]], empty: undefined, hint: 'Spread to copy: `{ ...x, field: newValue }`.', tsReturn: `${capitalize(e.one)}[]`, tsParams: ['string', 'number'] }; } },
  { id: 'search', build: (e, d, r) => { const sample = String(r.pick(d)[N(e)]); const q = sample.slice(1, 3).toLowerCase(); return { fn: camel('search', e.key), title: `Search ${e.many} by ${N(e)}`, task: `Return the ${N(e)}s that **contain** \`query\`, ignoring case. An empty (or whitespace-only) query returns every ${N(e)}.`, params: [e.key, 'query'], body: `const q = query.trim().toLowerCase();\n  return ${e.key}.filter((x) => x.${N(e)}.toLowerCase().includes(q)).map((x) => x.${N(e)});`, cases: [[q], [q.toUpperCase()], ['  '], ['zzz']], empty: [], tsReturn: 'string[]', tsParams: ['string'] }; } },
  { id: 'histogram', build: (e, d, r) => { const f = num(e, r); const span = f.max - f.min; const width = Math.max(1, Math.round(span / 4 / 5) * 5) || 1; return { fn: camel(f.name, 'histogram'), title: `Bucket ${e.many} by ${f.label}`, task: `Group ${e.many} into buckets of width \`width\` by \`${f.name}\`: the bucket key is \`Math.floor(value / width) * width\`. Return an object of bucket → count.`, params: [e.key, 'width'], body: `const buckets = {};\n  for (const x of ${e.key}) {\n    const key = Math.floor(x.${f.name} / width) * width;\n    buckets[key] = (buckets[key] ?? 0) + 1;\n  }\n  return buckets;`, cases: [[width], [width * 2]], empty: undefined, tsReturn: 'Record<number, number>', tsParams: ['number'] }; } },
  { id: 'paginate', build: (e) => ({ fn: camel('page', 'of', e.key), title: `Paginate ${e.many}`, task: `Return \`{ items, page, totalPages }\` where \`items\` are the ${N(e)}s on page \`page\` (1-based) of size \`size\`. Out-of-range pages return an empty \`items\` array.`, params: [e.key, 'page', 'size'], body: `const totalPages = Math.ceil(${e.key}.length / size);\n  const items = ${e.key}.slice((page - 1) * size, page * size).map((x) => x.${N(e)});\n  return { items, page, totalPages };`, cases: [[1, 3], [2, 3], [3, 3], [9, 3]], empty: undefined, tsReturn: '{ items: string[]; page: number; totalPages: number }', tsParams: ['number', 'number'] }) },
  { id: 'diff', build: (e) => { const f = e.nums[0]!; return { fn: camel(f.name, 'changes'), title: `What changed between two snapshots?`, task: `Given yesterday's and today's ${e.many} (same ids), return the ids whose \`${f.name}\` changed, in today's order.`, params: ['before', 'after'], body: `const old = new Map(before.map((x) => [x.id, x.${f.name}]));\n  return after.filter((x) => old.get(x.id) !== x.${f.name}).map((x) => x.id);`, cases: [], empty: [], tsReturn: 'number[]', tsParams: [`${capitalize(e.one)}[]`] }; } },
];

function tsInterface(e: Entity): string {
  const fields = [`id: number`, `${e.nameField}: string`, ...e.nums.map((f) => `${f.name}: number`), ...e.cats.map((c) => `${c.name}: ${c.values.map((v) => JSON.stringify(v)).join(' | ')}`), ...(e.bool ? [`${e.bool.name}: boolean`] : [])];
  return `interface ${capitalize(e.one)} {\n${fields.map((f) => `  ${f};`).join('\n')}\n}`;
}

/** Build a code quest from an entity + template. */
export function dataQuest(e: Entity, t: Template, section: string, language: 'js' | 'ts', seed: string): CodeSpec | null {
  const rng = new Rng(`${seed}:${e.key}:${t.id}`);
  const data = rows(e, `${seed}:${t.id}`);
  const def = t.build(e, data, rng);
  if (!def) return null;
  const DATA = e.key.toUpperCase();
  const isDiff = t.id === 'diff';
  const changed = isDiff ? data.map((x, i) => (i % 3 === 1 ? { ...x, [e.nums[0]!.name]: (x[e.nums[0]!.name] as number) + 7 } : x)) : null;

  const sig = (typed: boolean) => {
    const ps = def.params.map((p, i) => {
      if (!typed) return p;
      if (i === 0) return `${p}: ${isDiff ? `${capitalize(e.one)}[]` : `${capitalize(e.one)}[]`}`;
      return `${p}: ${def.tsParams?.[i - 1] ?? 'unknown'}`;
    });
    return `function ${def.fn}(${ps.join(', ')})${typed ? `: ${def.tsReturn}` : ''}`;
  };
  const typed = language === 'ts';
  const pre = typed ? `${tsInterface(e)}\n\n` : '';
  const solution = `${pre}export ${sig(typed)} {\n  ${def.body}\n}\n`;
  const emptyReturn = def.empty === undefined ? (def.tsReturn.startsWith('{') || def.tsReturn.startsWith('Record') ? '{}' : def.tsReturn.includes('[]') ? '[]' : '0') : JSON.stringify(def.empty);
  const starter = `${pre}export ${sig(typed)} {\n  // TODO\n  return ${emptyReturn}${typed ? ' as any' : ''};\n}\n`;

  // Test cases: the dataset with each case's args, plus an empty dataset where it makes sense.
  const calls: { label: string; args: unknown[]; expr: string }[] = [];
  const dataArg = (args: unknown[]) => [DATA, ...args.map((a) => json(a))].join(', ');
  if (isDiff) {
    calls.push({ label: 'finds changed ids', args: [], expr: `${def.fn}(BEFORE, AFTER)` });
    calls.push({ label: 'no changes', args: [], expr: `${def.fn}(BEFORE, BEFORE)` });
  } else {
    const cases = def.cases.length ? def.cases : [[]];
    for (const c of cases) {
      if (c.length === 0 && def.cases.length && def.cases.every((x) => x.length === 0)) {
        calls.push({ label: 'an empty list', args: [], expr: `${def.fn}([])` });
        calls.push({ label: `all ${e.many}`, args: [], expr: `${def.fn}(${DATA})` });
      } else {
        calls.push({ label: c.length ? `with ${c.map((a) => json(a)).join(', ')}` : `all ${e.many}`, args: c, expr: `${def.fn}(${dataArg(c)})` });
      }
    }
  }
  const prelude = isDiff ? `const BEFORE = ${rowsLiteral(data)};\nconst AFTER = ${rowsLiteral(changed!)};` : `const ${DATA} = ${rowsLiteral(data)};`;
  const runtime = stripTypes(`${prelude}\n${solution}`);
  const tests: string[] = [];
  for (const call of calls) {
    let expected: unknown;
    try {
      expected = evalJs(runtime, call.expr);
    } catch (err) {
      throw new Error(`${e.key}/${t.id}: ${(err as Error).message}\n${runtime}`);
    }
    tests.push(`test(${json(call.label)}, () => {\n  expect(${call.expr}).toEqual(${json(expected)});\n});`);
  }
  if (t.id === 'update' || t.id === 'sort-asc' || t.id === 'top-n') {
    // First, so no earlier test has already reordered the shared data.
    tests.unshift(`test('does not mutate the input', () => {\n  const before = JSON.stringify(${DATA});\n  ${def.fn}(${dataArg(def.cases[0] ?? [])});\n  expect(JSON.stringify(${DATA})).toBe(before);\n});`);
  }
  // Make sure the starter fails at least one test, or the quest is free XP.
  const starterRuntime = stripTypes(`${prelude}\n${starter}`);
  const starterPassesAll = calls.every((c) => {
    try {
      return JSON.stringify(evalJs(starterRuntime, c.expr)) === JSON.stringify(evalJs(runtime, c.expr));
    } catch {
      return false;
    }
  });
  if (starterPassesAll) return null;

  const lesson = `# ${def.title}

${def.task}

The tests call your function with this data (also available as \`${isDiff ? 'BEFORE` / `AFTER' : DATA}\` in the tests):

\`\`\`js
${isDiff ? 'const BEFORE = ' + rowsLiteral(data) : `const ${DATA} = ${rowsLiteral(data)}`}
\`\`\`
${typed ? '\nType the parameters and the return value. The interface is already written for you.\n' : ''}`;
  return {
    kind: 'code',
    slug: `${language === 'ts' ? 'ts' : 'js'}-data-${e.key}-${t.id}`,
    title: `Data: ${def.title}`,
    section,
    language,
    lesson,
    starter,
    solution,
    tests: `${prelude}\n\n${tests.join('\n\n')}`,
    hints: [def.hint ?? 'Loop over the array (or use filter/map/reduce) and build the result step by step.', 'Check the empty-list case: what should your function return when there is nothing to process?'],
    xp: 15,
  };
}

/** Strip TypeScript types (and `export`) so generated solutions can be evaluated in Node. */
export function stripTypes(code: string): string {
  return transform(code, { transforms: ['typescript'] }).code.replace(/^export /gm, '');
}

export function dataQuests(templates: Template[], section: string, language: 'js' | 'ts', seed: string, entities = ENTITIES): CodeSpec[] {
  const out: CodeSpec[] = [];
  for (const t of templates) for (const e of entities) {
    const q = dataQuest(e, t, section, language, seed);
    if (q) out.push(q);
  }
  return out;
}
