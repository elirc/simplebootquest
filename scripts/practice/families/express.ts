/**
 * Express practice with the runner's Express-compatible runtime: learners
 * write real `app.get(...)` handlers, and the tests use Supertest-style
 * `request(app)`. Expected responses are computed by running the reference
 * solution through the same runtime.
 */
import { transform } from 'sucrase';
import { express, request } from '../../../packages/runner/src/express.ts';
import { ENTITIES, capitalize, rows, rowsLiteral, type Entity } from '../entities.ts';
import { chunk, json, question, Rng, type CodeSpec, type QuizQuestion, type QuizSpec } from '../lib.ts';

interface Probe {
  label: string;
  method: 'get' | 'post' | 'patch' | 'put' | 'delete';
  url: string;
  body?: unknown;
  headers?: Record<string, string>;
  /** Assert on these response parts. */
  check: ('status' | 'body' | 'location')[];
  /** Run these probes in sequence on the same app (state carries over). */
  then?: Probe;
}
interface ApiTask {
  id: string;
  title: string;
  task: string;
  routes: string; // reference implementation (routes only)
  probes: Probe[];
}

const NOT_FOUND = `{ error: 'Not found' }`;

function apiTasks(e: Entity, r: Rng): ApiTask[] {
  const K = e.key;
  const N = e.nameField;
  const nf = r.pick(e.nums);
  const cf = r.pick(e.cats);
  const data = rows(e, `api:${e.key}`);
  const v = data[1]![cf.name] as string;
  const findById = `const item = ${K}.find((x) => x.id === Number(req.params.id));`;
  return [
    { id: 'list', title: `List all ${e.many}`, task: `Add \`GET /${K}\` returning every ${e.one} as JSON (status 200).`, routes: `app.get('/${K}', (req, res) => {\n  res.json(${K});\n});`, probes: [{ label: 'lists everything', method: 'get', url: `/${K}`, check: ['status', 'body'] }] },
    { id: 'get-one', title: `Get one ${e.one} by id`, task: `Add \`GET /${K}/:id\`. Respond 200 with the ${e.one}, **404** with \`${NOT_FOUND}\` when it doesn't exist, and **400** with \`{ error: 'Invalid id' }\` when \`:id\` isn't a whole number.`, routes: `app.get('/${K}/:id', (req, res) => {\n  if (!/^\\d+$/.test(req.params.id)) return res.status(400).json({ error: 'Invalid id' });\n  ${findById}\n  if (!item) return res.status(404).json(${NOT_FOUND});\n  res.json(item);\n});`, probes: [{ label: 'found', method: 'get', url: `/${K}/2`, check: ['status', 'body'] }, { label: 'missing', method: 'get', url: `/${K}/999`, check: ['status', 'body'] }, { label: 'invalid id', method: 'get', url: `/${K}/abc`, check: ['status', 'body'] }] },
    { id: 'filter', title: `Filter ${e.many} with a query parameter`, task: `Add \`GET /${K}\`. When \`?${cf.name}=…\` is given, return only ${e.many} with that \`${cf.name}\`. Without it, return all of them.`, routes: `app.get('/${K}', (req, res) => {\n  const { ${cf.name} } = req.query;\n  res.json(${cf.name} ? ${K}.filter((x) => x.${cf.name} === ${cf.name}) : ${K});\n});`, probes: [{ label: 'filtered', method: 'get', url: `/${K}?${cf.name}=${encodeURIComponent(v)}`, check: ['status', 'body'] }, { label: 'no filter', method: 'get', url: `/${K}`, check: ['body'] }, { label: 'no matches', method: 'get', url: `/${K}?${cf.name}=nope`, check: ['body'] }] },
    { id: 'create', title: `Create a ${e.one} with validation`, task: `Add \`POST /${K}\`. The JSON body must have a non-empty string \`${N}\` and a number \`${nf.name}\` that is ≥ 0. Otherwise respond **400** with \`{ error: 'Invalid ${e.one}' }\`. On success, add \`{ id, ${N}, ${nf.name} }\` (id = the highest existing id + 1), and respond **201** with it and a \`Location: /${K}/<id>\` header.`, routes: `app.post('/${K}', (req, res) => {\n  const { ${N}, ${nf.name} } = req.body ?? {};\n  if (typeof ${N} !== 'string' || !${N}.trim() || typeof ${nf.name} !== 'number' || ${nf.name} < 0) {\n    return res.status(400).json({ error: 'Invalid ${e.one}' });\n  }\n  const id = Math.max(0, ...${K}.map((x) => x.id)) + 1;\n  const item = { id, ${N}, ${nf.name} };\n  ${K}.push(item);\n  res.status(201).location(\`/${K}/\${id}\`).json(item);\n});`, probes: [{ label: 'creates', method: 'post', url: `/${K}`, body: { [N]: 'Brand new', [nf.name]: 5 }, check: ['status', 'body', 'location'] }, { label: 'missing name', method: 'post', url: `/${K}`, body: { [nf.name]: 3 }, check: ['status', 'body'] }, { label: 'negative number', method: 'post', url: `/${K}`, body: { [N]: 'x', [nf.name]: -1 }, check: ['status'] }, { label: 'wrong type', method: 'post', url: `/${K}`, body: { [N]: 'x', [nf.name]: '5' }, check: ['status'] }] },
    { id: 'patch', title: `Partially update a ${e.one}`, task: `Add \`PATCH /${K}/:id\` that updates **only** \`${N}\` and/or \`${nf.name}\` from the body (ignore every other field, including \`id\`). Respond 200 with the updated ${e.one}, or **404** with \`${NOT_FOUND}\`.`, routes: `app.patch('/${K}/:id', (req, res) => {\n  ${findById}\n  if (!item) return res.status(404).json(${NOT_FOUND});\n  const { ${N}, ${nf.name} } = req.body ?? {};\n  if (${N} !== undefined) item.${N} = ${N};\n  if (${nf.name} !== undefined) item.${nf.name} = ${nf.name};\n  res.json(item);\n});`, probes: [{ label: 'updates allowed fields only', method: 'patch', url: `/${K}/3`, body: { [nf.name]: 42, id: 99, hacked: true }, check: ['status', 'body'] }, { label: 'missing', method: 'patch', url: `/${K}/999`, body: { [nf.name]: 1 }, check: ['status', 'body'] }] },
    { id: 'delete', title: `Delete a ${e.one}`, task: `Add \`DELETE /${K}/:id\`. Respond **204** with no body when it's deleted, or **404** with \`${NOT_FOUND}\`. A second delete of the same id must 404.`, routes: `app.delete('/${K}/:id', (req, res) => {\n  const index = ${K}.findIndex((x) => x.id === Number(req.params.id));\n  if (index === -1) return res.status(404).json(${NOT_FOUND});\n  ${K}.splice(index, 1);\n  res.status(204).end();\n});`, probes: [{ label: 'deletes, then 404s', method: 'delete', url: `/${K}/1`, check: ['status'], then: { label: 'second delete', method: 'delete', url: `/${K}/1`, check: ['status', 'body'] } }, { label: 'missing', method: 'delete', url: `/${K}/999`, check: ['status'] }] },
    { id: 'sort', title: `Sort ${e.many} safely`, task: `Add \`GET /${K}\` supporting \`?sort=<field>\` and \`&order=asc|desc\` (default asc). Only \`${N}\` and \`${nf.name}\` may be sorted on. Any other field → **400** \`{ error: 'Cannot sort by <field>' }\`. Without \`sort\`, return the ${e.many} as stored. Return just the ${N}s.`, routes: `app.get('/${K}', (req, res) => {\n  const { sort, order = 'asc' } = req.query;\n  if (sort === undefined) return res.json(${K}.map((x) => x.${N}));\n  if (!['${N}', '${nf.name}'].includes(sort)) return res.status(400).json({ error: \`Cannot sort by \${sort}\` });\n  const dir = order === 'desc' ? -1 : 1;\n  const sorted = [...${K}].sort((a, b) => (a[sort] < b[sort] ? -dir : a[sort] > b[sort] ? dir : 0));\n  res.json(sorted.map((x) => x.${N}));\n});`, probes: [{ label: 'sorted desc', method: 'get', url: `/${K}?sort=${nf.name}&order=desc`, check: ['body'] }, { label: 'sorted by name', method: 'get', url: `/${K}?sort=${N}`, check: ['body'] }, { label: 'rejects unknown fields', method: 'get', url: `/${K}?sort=password`, check: ['status', 'body'] }] },
    { id: 'paginate', title: `Paginate ${e.many}`, task: `Add \`GET /${K}\` with \`?page\` (default 1) and \`?limit\` (default 3, max 5). Respond with \`{ data, meta: { page, limit, total } }\`, where \`data\` holds the ${N}s on that page. Invalid numbers (non-integers, < 1) fall back to the defaults.`, routes: `app.get('/${K}', (req, res) => {\n  const int = (v, d) => (/^\\d+$/.test(v ?? '') && Number(v) >= 1 ? Number(v) : d);\n  const page = int(req.query.page, 1);\n  const limit = Math.min(int(req.query.limit, 3), 5);\n  const data = ${K}.slice((page - 1) * limit, page * limit).map((x) => x.${N});\n  res.json({ data, meta: { page, limit, total: ${K}.length } });\n});`, probes: [{ label: 'defaults', method: 'get', url: `/${K}`, check: ['body'] }, { label: 'page 2', method: 'get', url: `/${K}?page=2&limit=2`, check: ['body'] }, { label: 'caps the limit', method: 'get', url: `/${K}?limit=50`, check: ['body'] }, { label: 'bad input', method: 'get', url: `/${K}?page=-1&limit=abc`, check: ['body'] }] },
    { id: 'errors', title: `JSON 404s and a safe error handler`, task: `Add \`GET /${K}/:id\` that **throws** \`new Error('database exploded')\` when the id is \`0\`, and otherwise returns the ${e.one} (or 404 \`${NOT_FOUND}\`). Then add a catch-all 404 middleware responding \`{ error: 'Route not found' }\`, and an error-handling middleware responding **500** with \`{ error: 'Internal server error' }\`, so internal messages never leak.`, routes: `app.get('/${K}/:id', (req, res) => {\n  if (req.params.id === '0') throw new Error('database exploded');\n  ${findById}\n  if (!item) return res.status(404).json(${NOT_FOUND});\n  res.json(item);\n});\napp.use((req, res) => res.status(404).json({ error: 'Route not found' }));\napp.use((err, req, res, next) => res.status(500).json({ error: 'Internal server error' }));`, probes: [{ label: 'works normally', method: 'get', url: `/${K}/1`, check: ['status'] }, { label: 'errors become safe 500s', method: 'get', url: `/${K}/0`, check: ['status', 'body'] }, { label: 'unknown routes get JSON 404s', method: 'get', url: '/nope', check: ['status', 'body'] }] },
    { id: 'search', title: `Search ${e.many}`, task: `Add \`GET /${K}/search\` taking \`?q=\` and returning the ${N}s that contain \`q\` (case-insensitive). A missing or blank \`q\` → **400** \`{ error: 'q is required' }\`. Make sure \`/${K}/search\` isn't swallowed by an \`/:id\` route if you add one!`, routes: `app.get('/${K}/search', (req, res) => {\n  const q = String(req.query.q ?? '').trim().toLowerCase();\n  if (!q) return res.status(400).json({ error: 'q is required' });\n  res.json(${K}.filter((x) => x.${N}.toLowerCase().includes(q)).map((x) => x.${N}));\n});`, probes: [{ label: 'finds matches', method: 'get', url: `/${K}/search?q=${encodeURIComponent(String(data[0]![N]).slice(0, 2).toLowerCase())}`, check: ['status', 'body'] }, { label: 'requires q', method: 'get', url: `/${K}/search?q=%20`, check: ['status', 'body'] }] },
    { id: 'api-key', title: `Protect writes with an API key`, task: `Add a middleware \`requireKey\` that responds **401** \`{ error: 'Missing or invalid API key' }\` unless the \`x-api-key\` header equals \`'letmein'\`. Use it on \`POST /${K}\` (which adds \`{ id, ${N} }\` and responds 201), but **not** on \`GET /${K}\`.`, routes: `function requireKey(req, res, next) {\n  if (req.get('x-api-key') !== 'letmein') return res.status(401).json({ error: 'Missing or invalid API key' });\n  next();\n}\napp.get('/${K}', (req, res) => res.json(${K}));\napp.post('/${K}', requireKey, (req, res) => {\n  const item = { id: ${K}.length + 1, ${N}: req.body.${N} };\n  ${K}.push(item);\n  res.status(201).json(item);\n});`, probes: [{ label: 'reads are public', method: 'get', url: `/${K}`, check: ['status'] }, { label: 'writes need the key', method: 'post', url: `/${K}`, body: { [N]: 'x' }, check: ['status', 'body'] }, { label: 'wrong key', method: 'post', url: `/${K}`, body: { [N]: 'x' }, headers: { 'x-api-key': 'nope' }, check: ['status'] }, { label: 'right key', method: 'post', url: `/${K}`, body: { [N]: 'x' }, headers: { 'x-api-key': 'letmein' }, check: ['status', 'body'] }] },
    { id: 'stats', title: `A stats endpoint`, task: `Add \`GET /${K}/stats\` returning \`{ count, total${capitalize(nf.name)}, average${capitalize(nf.name)} }\`, with the average rounded to a whole number (0 when there are no ${e.many}).`, routes: `app.get('/${K}/stats', (req, res) => {\n  const total = ${K}.reduce((s, x) => s + x.${nf.name}, 0);\n  res.json({ count: ${K}.length, total${capitalize(nf.name)}: total, average${capitalize(nf.name)}: ${K}.length ? Math.round(total / ${K}.length) : 0 });\n});`, probes: [{ label: 'computes stats', method: 'get', url: `/${K}/stats`, check: ['status', 'body'] }] },
    { id: 'duplicate', title: `Reject duplicates with 409`, task: `Add \`POST /${K}\` that creates \`{ id, ${N} }\` (201). If a ${e.one} with the same ${N} already exists (case-insensitive), respond **409** \`{ error: '${capitalize(e.one)} already exists' }\` instead.`, routes: `app.post('/${K}', (req, res) => {\n  const ${N} = String(req.body?.${N} ?? '');\n  if (${K}.some((x) => x.${N}.toLowerCase() === ${N}.toLowerCase())) {\n    return res.status(409).json({ error: '${capitalize(e.one)} already exists' });\n  }\n  const item = { id: ${K}.length + 1, ${N} };\n  ${K}.push(item);\n  res.status(201).json(item);\n});`, probes: [{ label: 'creates new', method: 'post', url: `/${K}`, body: { [N]: 'Unique One' }, check: ['status', 'body'] }, { label: 'rejects duplicates', method: 'post', url: `/${K}`, body: { [N]: String(data[0]![N]).toUpperCase() }, check: ['status', 'body'] }] },
    { id: 'soft-delete', title: `Soft delete`, task: `Instead of removing rows, \`DELETE /${K}/:id\` sets \`deletedAt\` to \`'2026-01-01'\` and responds 204 (404 \`${NOT_FOUND}\` if missing or already deleted). \`GET /${K}\` returns only ${e.many} that are not deleted, as ${N}s.`, routes: `app.delete('/${K}/:id', (req, res) => {\n  const item = ${K}.find((x) => x.id === Number(req.params.id) && !x.deletedAt);\n  if (!item) return res.status(404).json(${NOT_FOUND});\n  item.deletedAt = '2026-01-01';\n  res.status(204).end();\n});\napp.get('/${K}', (req, res) => res.json(${K}.filter((x) => !x.deletedAt).map((x) => x.${N})));`, probes: [{ label: 'soft deletes', method: 'delete', url: `/${K}/2`, check: ['status'], then: { label: 'hidden from the list', method: 'get', url: `/${K}`, check: ['body'] } }, { label: 'cannot delete twice', method: 'delete', url: `/${K}/2`, check: ['status'], then: { label: 'second time', method: 'delete', url: `/${K}/2`, check: ['status', 'body'] } }] },
    { id: 'group', title: `Counts per ${cf.label}`, task: `Add \`GET /${K}/by-${cf.name}\` returning an object mapping each \`${cf.name}\` to how many ${e.many} have it.`, routes: `app.get('/${K}/by-${cf.name}', (req, res) => {\n  const counts = {};\n  for (const x of ${K}) counts[x.${cf.name}] = (counts[x.${cf.name}] ?? 0) + 1;\n  res.json(counts);\n});`, probes: [{ label: 'groups', method: 'get', url: `/${K}/by-${cf.name}`, check: ['status', 'body'] }] },
  ];
}

async function runProbe(app: ReturnType<typeof express>, p: Probe) {
  let t = request(app)[p.method](p.url);
  for (const [k, v] of Object.entries(p.headers ?? {})) t = t.set(k, v);
  if (p.body !== undefined) t = t.send(p.body);
  return t;
}

function buildApp(prelude: string, routes: string) {
  const code = transform(`${prelude}\n${routes}`, { transforms: ['imports'] }).code;
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  return new Function('express', `${code}\nreturn app;`)(express) as ReturnType<typeof express>;
}

export async function expressQuests(opts: { section: string; ids: string[]; seed: string }): Promise<CodeSpec[]> {
  const out: CodeSpec[] = [];
  for (const e of ENTITIES) {
    const rng = new Rng(`${opts.seed}:${e.key}:api`);
    const data = rows(e, `api:${e.key}`);
    const prelude = `const app = express();\napp.use(express.json());\n\nconst ${e.key} = ${rowsLiteral(data)};\n`;
    for (const t of apiTasks(e, rng)) {
      if (!opts.ids.includes(t.id)) continue;
      const tests: string[] = [];
      const expectations = async (p: Probe, app: ReturnType<typeof express>, varName: string): Promise<string[]> => {
        const res = await runProbe(app, p);
        const lines: string[] = [];
        let call = `request(app).${p.method}(${json(p.url)})`;
        for (const [k, v] of Object.entries(p.headers ?? {})) call += `.set(${json(k)}, ${json(v)})`;
        if (p.body !== undefined) call += `.send(${json(p.body)})`;
        lines.push(`  const ${varName} = await ${call};`);
        if (p.check.includes('status')) lines.push(`  expect(${varName}.status).toBe(${res.status});`);
        if (p.check.includes('body')) lines.push(`  expect(${varName}.body).toEqual(${json(res.body)});`);
        if (p.check.includes('location')) lines.push(`  expect(${varName}.headers.location).toBe(${json(res.headers.location)});`);
        return lines;
      };
      for (const p of t.probes) {
        const app = buildApp(prelude, t.routes); // fresh state per test
        const lines = await expectations(p, app, 'res');
        if (p.then) lines.push(...(await expectations(p.then, app, 'res2')));
        tests.push(`test(${json(p.label)}, async () => {\n${lines.join('\n')}\n});`);
      }
      // Tests share module state across a run, so each test rebuilds the app.
      const solution = `${prelude}\n${t.routes}\n`;
      const starter = `${prelude}\n// TODO: ${t.title.toLowerCase()}\n`;
      out.push({
        kind: 'code',
        slug: `express-${e.key}-${t.id}`,
        title: `Express: ${t.title}`,
        section: opts.section,
        language: 'js',
        lesson: `# Express: ${t.title}\n\n${t.task}\n\nThe app, \`express.json()\` and the in-memory \`${e.key}\` array are set up for you. Write real Express code: the tests call your app with Supertest-style \`request(app)\`, exactly like an integration test in a real project.\n\n\`\`\`js\n// What the tests do:\nconst res = await request(app).${t.probes[0]!.method}('${t.probes[0]!.url}');\nexpect(res.status).toBe(…);\n\`\`\``,
        starter,
        solution,
        tests: `// Each test gets a fresh copy of the app and its data.\nconst fresh = () => {\n  const original = ${e.key}.map((x) => ({ ...x }));\n  return () => { ${e.key}.length = 0; ${e.key}.push(...original.map((x) => ({ ...x }))); };\n};\nconst reset = fresh();\nbeforeEach(() => reset());\n\n${tests.join('\n\n')}`,
        hints: ['Each route is `app.METHOD(path, (req, res) => { … })`. Path params live in `req.params`, the query string in `req.query`, and the JSON body in `req.body`.', 'Every code path must send exactly one response: `return res.status(404).json(…)` stops the handler early.'],
        xp: 20,
      });
    }
  }
  return out;
}

/** "What does this server respond?" quizzes, computed by running the app. */
interface Scenario {
  app: string;
  call: { method: 'get' | 'post' | 'delete'; url: string; body?: unknown };
  ask: 'status' | 'body';
}

function scenarios(r: Rng): Scenario {
  const e = r.pick(ENTITIES);
  const K = e.key;
  const n = r.int(1, 5);
  const forms: (() => Scenario)[] = [
    () => ({ app: `const app = express();\napp.get('/${K}/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/${K}/stats', (req, res) => res.json({ count: ${n} }));`, call: { method: 'get', url: `/${K}/stats` }, ask: 'body' }),
    () => ({ app: `const app = express();\napp.get('/${K}/stats', (req, res) => res.json({ count: ${n} }));\napp.get('/${K}/:id', (req, res) => res.json({ id: req.params.id }));`, call: { method: 'get', url: `/${K}/stats` }, ask: 'body' }),
    () => ({ app: `const app = express();\napp.post('/${K}', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());`, call: { method: 'post', url: `/${K}`, body: { name: 'x' } }, ask: 'body' }),
    () => ({ app: `const app = express();\napp.use(express.json());\napp.post('/${K}', (req, res) => res.status(201).json({ got: req.body ?? null }));`, call: { method: 'post', url: `/${K}`, body: { name: 'x' } }, ask: 'body' }),
    () => ({ app: `const app = express();\napp.get('/${K}', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));`, call: { method: 'get', url: `/${K}` }, ask: 'status' }),
    () => ({ app: `const app = express();\napp.get('/${K}', async () => {\n  throw new Error('db down');\n});`, call: { method: 'get', url: `/${K}` }, ask: 'status' }),
    () => ({ app: `const app = express();\napp.get('/${K}', (req, res) => res.json([]));`, call: { method: 'delete', url: `/${K}` }, ask: 'status' }),
    () => ({ app: `const app = express();\nconst api = express.Router();\napi.get('/${K}', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);`, call: { method: 'get', url: `/api/${K}` }, ask: 'body' }),
    () => ({ app: `const app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/${K}', (req, res) => res.json([]));`, call: { method: 'get', url: `/${K}` }, ask: 'status' }),
    () => ({ app: `const app = express();\napp.get('/${K}', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});`, call: { method: 'get', url: `/${K}` }, ask: 'status' }),
    () => ({ app: `const app = express();\napp.get('/${K}', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));`, call: { method: 'get', url: `/${K}?page=${n}` }, ask: 'body' }),
    () => ({ app: `const app = express();\napp.get('/${K}/:id', (req, res, next) => {\n  if (req.params.id === '${n}') return next();\n  res.json({ from: 'first' });\n});\napp.get('/${K}/:id', (req, res) => res.json({ from: 'second' }));`, call: { method: 'get', url: `/${K}/${n}` }, ask: 'body' }),
    () => ({ app: `const app = express();\napp.post('/${K}', (req, res) => res.sendStatus(${r.pick([201, 202, 204])}));`, call: { method: 'post', url: `/${K}` }, ask: 'status' }),
    () => ({ app: `const app = express();\napp.use(express.json());\napp.post('/${K}', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});`, call: { method: 'post', url: `/${K}`, body: { name: 'no title' } }, ask: 'status' }),
    () => ({ app: `const app = express();\napp.get('/${K}/:id', (req, res) => res.json({ n: Number(req.params.id) + ${n} }));`, call: { method: 'get', url: `/${K}/${n}` }, ask: 'body' }),
    () => ({ app: `const app = express();\napp.get('/${K}/:id', (req, res) => res.json({ n: req.params.id + ${n} }));`, call: { method: 'get', url: `/${K}/${n}` }, ask: 'body' }),
    () => ({ app: `const app = express();\napp.use('/${K}', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/${K}/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));`, call: { method: 'get', url: `/${K}/${n}` }, ask: 'body' }),
  ];
  return r.pick(forms)();
}

export async function expressPredictQuizzes(opts: { section: string; count: number; seed: string }): Promise<QuizSpec[]> {
  const rng = new Rng(`${opts.seed}:express-predict`);
  const questions: QuizQuestion[] = [];
  const seen = new Set<string>();
  let guard = 0;
  while (questions.length < opts.count * 5 && guard++ < opts.count * 200) {
    const s = scenarios(rng);
    const key = s.app + JSON.stringify(s.call);
    if (seen.has(key)) continue;
    seen.add(key);
    const app = buildApp('', s.app);
    let t = request(app)[s.call.method](s.call.url);
    if (s.call.body !== undefined) t = t.send(s.call.body);
    const res = await t;
    const statuses = [200, 201, 204, 400, 401, 404, 422, 500, 503];
    const right = s.ask === 'status' ? String(res.status) : '`' + JSON.stringify(res.body) + '`';
    const wrong =
      s.ask === 'status'
        ? rng.sample(statuses.filter((x) => x !== res.status), 3).map(String)
        : ['`{}`', '`' + JSON.stringify(Object.fromEntries(Object.entries((res.body as object) ?? {}).map(([k, v]) => [k, typeof v === 'number' ? v + 1 : typeof v === 'string' ? (/^\d+$/.test(v) ? Number(v) : `${v}x`) : v]))) + '`', '`{"got":{"name":"x"}}`', '`{"got":null}`', '`{"id":"stats"}`', '`{"count":' + rng.int(1, 5) + '}`', '`{"from":"first"}`', '`{"from":"second"}`'];
    const req = `\`${s.call.method.toUpperCase()} ${s.call.url}\`${s.call.body ? ` with body \`${JSON.stringify(s.call.body)}\`` : ''}`;
    questions.push(question(rng, `What ${s.ask === 'status' ? 'status code' : 'JSON body'} does ${req} get?\n\n\`\`\`js\n${s.app}\n\`\`\``, right, wrong.filter((w) => w !== right), `The real response is ${right}.`));
  }
  return chunk(questions, 5).map((qs, i) => ({
    kind: 'quiz',
    slug: `express-predict-${i + 1}`,
    title: `What Does the Server Respond? #${i + 1}`,
    section: opts.section,
    lesson: `# What Does the Server Respond? #${i + 1}\n\nExpress runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:\n\n- A \`/:id\` route registered before \`/stats\` captures "stats" as an id.\n- \`req.body\` is \`undefined\` unless \`express.json()\` runs *before* the route.\n- \`req.params\` and \`req.query\` values are always **strings**.\n- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).\n- A request that no route handles gets a 404.\n\nEach answer was computed by actually running the app.`,
    questions: qs,
    xp: 10,
  }));
}
