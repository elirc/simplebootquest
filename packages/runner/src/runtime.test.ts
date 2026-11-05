import { describe, expect as vexpect, it } from 'vitest';
import { runQuest } from './index.js';

const js = (code: string, tests: string) => runQuest({ language: 'js', code, tests });
const jsx = (code: string, tests: string) => runQuest({ language: 'jsx', code, tests });

describe('anti-tamper', () => {
  it('learner code cannot replace expect with a fake', async () => {
    const r = await js(
      `const add = () => 0;\nconst expect = () => new Proxy({}, { get: () => () => {} });\nfunction test() {}`,
      `test('adds', () => expect(add(1, 2)).toBe(3));`,
    );
    vexpect(r.passed).toBe(false);
    vexpect(r.results[0]?.error).toContain('Expected 0 to be 3');
  });

  it('learner code may still define helper-like names that are not protected', async () => {
    const r = await js(`function sleep(ms) { return 'mine'; }\nfunction render(v) { return '<' + v + '>'; }`, `test('t', () => { expect(sleep(1)).toBe('mine'); expect(render('x')).toBe('<x>'); });`);
    vexpect(r.passed).toBe(true);
  });
});

describe('modules', () => {
  it('resolves react, express and supertest imports', async () => {
    const r = await jsx(
      `import { useState } from 'react';\nimport express from 'express';\nimport request from 'supertest';\nexport const ok = typeof useState === 'function' && typeof express === 'function' && typeof request === 'function';`,
      `test('imports', () => expect(ok).toBe(true));`,
    );
    vexpect(r.error).toBeUndefined();
    vexpect(r.passed).toBe(true);
  });

  it('gives a helpful error for unknown modules', async () => {
    const r = await js(`import _ from 'lodash';`, `test('x', () => {});`);
    vexpect(r.error).toContain('"lodash" isn\'t available');
  });
});

describe('hooks', () => {
  it('useState updates on click', async () => {
    const r = await jsx(
      `function Counter() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n + 1)}>Clicked {n}</button>;\n}`,
      `test('counts', () => {\n  const ui = mount(<Counter />);\n  expect(ui.text()).toBe('Clicked 0');\n  ui.click('button');\n  ui.click('button');\n  expect(ui.text()).toBe('Clicked 2');\n});`,
    );
    vexpect(r.results).toEqual([vexpect.objectContaining({ passed: true })]);
  });

  it('useEffect runs after render, re-runs on deps change, and cleans up', async () => {
    const r = await jsx(
      `const log = [];\nfunction Title({ name }) {\n  useEffect(() => { log.push('on ' + name); return () => log.push('off ' + name); }, [name]);\n  return <h1>{name}</h1>;\n}`,
      `test('effects', () => {\n  const ui = mount(<Title name="a" />);\n  ui.rerender(<Title name="a" />);\n  ui.rerender(<Title name="b" />);\n  ui.unmount();\n  expect(log).toEqual(['on a', 'off a', 'on b', 'off b']);\n});`,
    );
    vexpect(r.passed).toBe(true);
  });

  it('async effects with waitFor', async () => {
    const r = await jsx(
      `function Todos({ load }) {\n  const [items, setItems] = useState(null);\n  useEffect(() => { load().then(setItems); }, [load]);\n  if (!items) return <p>Loading…</p>;\n  return <ul>{items.map((t) => <li key={t}>{t}</li>)}</ul>;\n}`,
      `test('loads', async () => {\n  const load = vi.fn(async () => ['milk', 'eggs']);\n  const ui = mount(<Todos load={load} />);\n  expect(ui.text()).toBe('Loading…');\n  await waitFor(() => expect(ui.findAll('li').length).toBe(2));\n  expect(load).toHaveBeenCalledTimes(1);\n});`,
    );
    vexpect(r.passed).toBe(true);
  });

  it('state is kept per instance, keyed lists, useReducer, useRef, context, controlled inputs', async () => {
    const r = await jsx(
      `const Theme = createContext('light');\nfunction Item({ label }) {\n  const [on, setOn] = useState(false);\n  const theme = useContext(Theme);\n  return <li onClick={() => setOn((v) => !v)}>{label}:{on ? 'on' : 'off'}:{theme}</li>;\n}\nfunction reducer(s, a) { return a.type === 'add' ? [...s, a.text] : s; }\nfunction App() {\n  const [items, dispatch] = useReducer(reducer, ['a', 'b']);\n  const [draft, setDraft] = useState('');\n  const renders = useRef(0);\n  renders.current++;\n  return (\n    <Theme.Provider value="dark">\n      <form onSubmit={(e) => { e.preventDefault(); dispatch({ type: 'add', text: draft }); setDraft(''); }}>\n        <input value={draft} onChange={(e) => setDraft(e.target.value)} />\n      </form>\n      <ul>{items.map((t) => <Item key={t} label={t} />)}</ul>\n    </Theme.Provider>\n  );\n}`,
      `test('app', () => {\n  const ui = mount(<App />);\n  ui.click(ui.findAll('li')[1]);\n  ui.type('input', 'c');\n  expect(ui.find('input').props.value).toBe('c');\n  ui.submit();\n  expect(ui.findAll('li').map(text)).toEqual(['a:off:dark', 'b:on:dark', 'c:off:dark']);\n  expect(ui.find('input').props.value).toBe('');\n});`,
    );
    vexpect(r.error).toBeUndefined();
    vexpect(r.passed).toBe(true);
  });

  it('reports infinite render loops clearly', async () => {
    const r = await jsx(
      `function Bad() { const [n, setN] = useState(0); useEffect(() => { setN(n + 1); }); return <p>{n}</p>; }`,
      `test('loop', () => { mount(<Bad />); });`,
    );
    vexpect(r.results[0]?.error).toContain('Too many re-renders');
  });

  it('hooks outside mount() explain the rule', async () => {
    const r = await jsx(`function C() { const [a] = useState(1); return <p>{a}</p>; }`, `test('x', () => { render(<C />); });`);
    vexpect(r.results[0]?.error).toContain('can only be called inside a component that is rendered with mount()');
  });
});

describe('express + request', () => {
  const app = `const app = express();\napp.use(express.json());\nconst todos = [{ id: 1, title: 'Milk' }];\napp.get('/todos', (req, res) => res.json(todos));\napp.get('/todos/:id', (req, res) => {\n  const todo = todos.find((t) => t.id === Number(req.params.id));\n  if (!todo) return res.status(404).json({ error: 'Not found' });\n  res.json(todo);\n});\napp.post('/todos', (req, res) => {\n  if (!req.body?.title) return res.status(400).json({ error: 'title is required' });\n  const todo = { id: todos.length + 1, title: req.body.title };\n  todos.push(todo);\n  res.status(201).location('/todos/' + todo.id).json(todo);\n});\nconst api = express.Router();\napi.get('/health', (req, res) => res.json({ ok: true, q: req.query.q }));\napp.use('/api', api);\napp.get('/boom', async () => { throw new Error('kaboom'); });\napp.use((err, req, res, next) => res.status(err.status ?? 500).json({ error: err.status ? err.message : 'Internal' }));`;
  it('routes, params, json bodies, routers and errors', async () => {
    const r = await js(
      app,
      `test('list', async () => { const res = await request(app).get('/todos').expect(200).expect('Content-Type', /json/); expect(res.body).toEqual([{ id: 1, title: 'Milk' }]); });\n` +
        `test('one and 404', async () => { expect((await request(app).get('/todos/1')).body.title).toBe('Milk'); expect((await request(app).get('/todos/9')).status).toBe(404); });\n` +
        `test('create', async () => { const res = await request(app).post('/todos').send({ title: 'Eggs' }); expect(res.status).toBe(201); expect(res.headers.location).toBe('/todos/2'); });\n` +
        `test('validation', async () => { await request(app).post('/todos').send({}).expect(400, { error: 'title is required' }); });\n` +
        `test('router mount and query', async () => { expect((await request(app).get('/api/health?q=x')).body).toEqual({ ok: true, q: 'x' }); });\n` +
        `test('async errors reach the error handler', async () => { const res = await request(app).get('/boom'); expect(res.status).toBe(500); expect(res.body).toEqual({ error: 'Internal' }); });\n` +
        `test('bad json', async () => { const res = await request(app).post('/todos').set('Content-Type', 'application/json').send('{bad'); expect(res.status).toBe(400); });\n` +
        `test('unknown route', async () => { const res = await request(app).delete('/nope'); expect(res.status).toBe(404); expect(res.text).toBe('Cannot DELETE /nope'); });`,
    );
    vexpect(r.results.filter((t) => !t.passed)).toEqual([]);
    vexpect(r.passed).toBe(true);
  });

  it('without express.json(), req.body is undefined (like real Express)', async () => {
    const r = await js(`const app = express();\napp.post('/x', (req, res) => res.json({ body: req.body ?? null }));`, `test('no parser', async () => { expect((await request(app).post('/x').send({ a: 1 })).body).toEqual({ body: null }); });`);
    vexpect(r.passed).toBe(true);
  });

  it('a handler that never responds fails clearly', async () => {
    const r = await js(`const app = express();\napp.get('/hang', () => {});`, `test('hang', async () => { await request(app).get('/hang'); });`);
    vexpect(r.results[0]?.error).toContain('never sent a response');
  });
});
