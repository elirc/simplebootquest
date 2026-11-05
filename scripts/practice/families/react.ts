/**
 * React practice with real hooks (useState, useEffect, useReducer…), tested
 * through the runner's mount() harness, the same way React Testing Library
 * tests work: render, interact, assert on what the user sees.
 */
import { ENTITIES, capitalize, rows, rowsLiteral, type Entity } from '../entities.ts';
import { json, Rng, type CodeSpec } from '../lib.ts';

interface Comp {
  id: string;
  title: string;
  task: string;
  solution: string;
  /** The component signature + a minimal body the learner starts from. */
  starter: string;
  tests: string;
}

const UNITS = [
  { from: '°C', to: '°F', f: (x: number) => x * 9 / 5 + 32, code: 'x * 9 / 5 + 32' },
  { from: 'km', to: 'mi', f: (x: number) => x * 0.621371, code: 'x * 0.621371' },
  { from: 'kg', to: 'lb', f: (x: number) => x * 2.20462, code: 'x * 2.20462' },
  { from: 'EUR', to: 'USD', f: (x: number) => x * 1.08, code: 'x * 1.08' },
  { from: 'm', to: 'ft', f: (x: number) => x * 3.28084, code: 'x * 3.28084' },
  { from: 'L', to: 'gal', f: (x: number) => x * 0.264172, code: 'x * 0.264172' },
];
const round1 = (x: number) => Math.round(x * 10) / 10;

function uiComponents(e: Entity, r: Rng, i: number): Comp[] {
  const C = capitalize(e.one);
  const N = e.nameField;
  const data = rows(e, `react:${e.key}`, 6);
  const nf = r.pick(e.nums);
  const cf = r.pick(e.cats);
  const step = r.int(1, 5);
  const min = 0;
  const max = step * r.int(3, 6);
  const clicks = r.int(2, 9);
  const maxLen = r.pick([10, 20, 30, 40]);
  const pageSize = r.int(2, 3);
  const unit = UNITS[i % UNITS.length]!;
  const input = r.int(2, 90);
  const stars = r.pick([3, 5, 10]);
  const pick = r.int(1, stars);
  const DATA = `const ${e.key.toUpperCase()} = ${rowsLiteral(data)};`;
  const names = data.map((d) => String(d[N]));
  const q = names[1]!.slice(0, 2).toLowerCase();
  const matching = names.filter((n) => n.toLowerCase().includes(q));
  const cats = [...new Set(data.map((d) => String(d[cf.name])))];
  const inCat = (c: string) => data.filter((d) => d[cf.name] === c).map((d) => String(d[N]));
  const sortedAsc = [...data].sort((a, b) => (a[nf.name] as number) - (b[nf.name] as number)).map((d) => String(d[N]));
  const sortedDesc = [...data].sort((a, b) => (b[nf.name] as number) - (a[nf.name] as number)).map((d) => String(d[N]));
  const total2 = (data[0]![nf.name] as number) * 2 + (data[1]![nf.name] as number);

  return [
    {
      id: 'counter', title: `A ${e.one} counter with limits`,
      task: `Build \`${C}Counter\`: it shows a count in a \`<span>\` (starting at ${min}), a button labelled \`-\` and a button labelled \`+\`. \`+\` adds **${step}**, \`-\` subtracts ${step}. The count never goes below ${min} or above ${max}: disable the \`-\` button at ${min} and the \`+\` button at ${max}.`,
      starter: `function ${C}Counter() {\n  return (\n    <div>\n      <button>-</button>\n      <span>0</span>\n      <button>+</button>\n    </div>\n  );\n}`,
      solution: `function ${C}Counter() {\n  const [count, setCount] = useState(${min});\n  return (\n    <div>\n      <button disabled={count <= ${min}} onClick={() => setCount((c) => Math.max(${min}, c - ${step}))}>-</button>\n      <span>{count}</span>\n      <button disabled={count >= ${max}} onClick={() => setCount((c) => Math.min(${max}, c + ${step}))}>+</button>\n    </div>\n  );\n}`,
      tests: `test('starts at ${min} with - disabled', () => {\n  const ui = mount(<${C}Counter />);\n  expect(text(ui.find('span'))).toBe('${min}');\n  expect(ui.getByText('-').props.disabled).toBe(true);\n});\n\ntest('steps by ${step} and stops at ${max}', () => {\n  const ui = mount(<${C}Counter />);\n  for (let i = 0; i < ${clicks}; i++) ui.click(ui.getByText('+'));\n  expect(text(ui.find('span'))).toBe('${Math.min(max, clicks * step)}');\n  expect(ui.getByText('+').props.disabled).toBe(${clicks * step >= max});\n});\n\ntest('goes back down', () => {\n  const ui = mount(<${C}Counter />);\n  ui.click(ui.getByText('+'));\n  ui.click(ui.getByText('+'));\n  ui.click(ui.getByText('-'));\n  expect(text(ui.find('span'))).toBe('${Math.min(max, 2 * step) - step}');\n});`,
    },
    {
      id: 'toggle', title: `Show and hide ${e.many}`,
      task: `Build \`${C}Toggle\` with a button. While hidden it reads \`Show ${e.many}\`; while shown it reads \`Hide ${e.many}\` and a \`<ul>\` lists every ${N} from the \`items\` prop. It starts hidden.`,
      starter: `function ${C}Toggle({ items }) {\n  return <button>Show ${e.many}</button>;\n}`,
      solution: `function ${C}Toggle({ items }) {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide ${e.many}' : 'Show ${e.many}'}</button>\n      {open && (\n        <ul>\n          {items.map((x) => (\n            <li key={x.id}>{x.${N}}</li>\n          ))}\n        </ul>\n      )}\n    </div>\n  );\n}`,
      tests: `${DATA}\n\ntest('starts hidden', () => {\n  const ui = mount(<${C}Toggle items={${e.key.toUpperCase()}} />);\n  expect(ui.find('ul')).toBeUndefined();\n  expect(text(ui.find('button'))).toBe('Show ${e.many}');\n});\n\ntest('shows and hides', () => {\n  const ui = mount(<${C}Toggle items={${e.key.toUpperCase()}} />);\n  ui.click('button');\n  expect(ui.findAll('li').map(text)).toEqual(${json(names)});\n  expect(text(ui.find('button'))).toBe('Hide ${e.many}');\n  ui.click('button');\n  expect(ui.find('ul')).toBeUndefined();\n});`,
    },
    {
      id: 'char-count', title: `A ${e.one} note with a character limit`,
      task: `Build \`NoteField\` with a controlled \`<textarea>\`, a \`<p>\` showing \`<length>/${maxLen}\`, and a \`Save\` button. Disable Save when the text is empty (after trimming) or longer than ${maxLen} characters. When it's too long, also show \`<p role="alert">Too long</p>\`. Clicking Save calls \`onSave(text)\`.`,
      starter: `function NoteField({ onSave }) {\n  return (\n    <div>\n      <textarea />\n      <button>Save</button>\n    </div>\n  );\n}`,
      solution: `function NoteField({ onSave }) {\n  const [text, setText] = useState('');\n  const tooLong = text.length > ${maxLen};\n  return (\n    <div>\n      <textarea value={text} onChange={(e) => setText(e.target.value)} />\n      <p>{text.length}/${maxLen}</p>\n      {tooLong && <p role="alert">Too long</p>}\n      <button disabled={!text.trim() || tooLong} onClick={() => onSave(text)}>Save</button>\n    </div>\n  );\n}`,
      tests: `test('counts characters', () => {\n  const ui = mount(<NoteField onSave={() => {}} />);\n  expect(ui.getByText('0/${maxLen}')).toBeDefined();\n  ui.type('textarea', 'hello');\n  expect(ui.getByText('5/${maxLen}')).toBeDefined();\n});\n\ntest('disables save when empty or too long', () => {\n  const ui = mount(<NoteField onSave={() => {}} />);\n  expect(ui.getByText('Save').props.disabled).toBe(true);\n  ui.type('textarea', '   ');\n  expect(ui.getByText('Save').props.disabled).toBe(true);\n  ui.type('textarea', '${'x'.repeat(maxLen + 1)}');\n  expect(ui.getByText('Save').props.disabled).toBe(true);\n  expect(text(ui.find((n) => n.props.role === 'alert'))).toBe('Too long');\n});\n\ntest('saves', () => {\n  const onSave = vi.fn();\n  const ui = mount(<NoteField onSave={onSave} />);\n  ui.type('textarea', 'ship it');\n  ui.click(ui.getByText('Save'));\n  expect(onSave).toHaveBeenCalledWith('ship it');\n});`,
    },
    {
      id: 'filter', title: `Filter a list of ${e.many}`,
      task: `Build \`${C}Filter\` with a text \`<input>\` and a \`<ul>\` of the ${N}s from \`items\` that contain the input text (case-insensitive). When nothing matches, render \`<p>No matches</p>\` instead of the list.`,
      starter: `function ${C}Filter({ items }) {\n  return (\n    <div>\n      <input />\n      <ul>\n        {items.map((x) => <li key={x.id}>{x.${N}}</li>)}\n      </ul>\n    </div>\n  );\n}`,
      solution: `function ${C}Filter({ items }) {\n  const [query, setQuery] = useState('');\n  const q = query.trim().toLowerCase();\n  const visible = items.filter((x) => x.${N}.toLowerCase().includes(q));\n  return (\n    <div>\n      <input value={query} onChange={(e) => setQuery(e.target.value)} />\n      {visible.length === 0 ? (\n        <p>No matches</p>\n      ) : (\n        <ul>\n          {visible.map((x) => <li key={x.id}>{x.${N}}</li>)}\n        </ul>\n      )}\n    </div>\n  );\n}`,
      tests: `${DATA}\n\ntest('shows everything at first', () => {\n  const ui = mount(<${C}Filter items={${e.key.toUpperCase()}} />);\n  expect(ui.findAll('li').length).toBe(${names.length});\n});\n\ntest('filters case-insensitively', () => {\n  const ui = mount(<${C}Filter items={${e.key.toUpperCase()}} />);\n  ui.type('input', ${json(q.toUpperCase())});\n  expect(ui.findAll('li').map(text)).toEqual(${json(matching)});\n});\n\ntest('empty state', () => {\n  const ui = mount(<${C}Filter items={${e.key.toUpperCase()}} />);\n  ui.type('input', 'zzzz');\n  expect(ui.find('ul')).toBeUndefined();\n  expect(ui.text()).toContain('No matches');\n});`,
    },
    {
      id: 'todo', title: `Add and remove ${e.many}`,
      task: `Build \`${C}List\`: a \`<form>\` with an \`<input>\` and an \`Add\` button. Submitting adds the trimmed text as a new \`<li>\` (ignore blank input) and clears the input. Each \`<li>\` contains the text and a \`Remove\` button that removes it.`,
      starter: `function ${C}List() {\n  return (\n    <form>\n      <input />\n      <button>Add</button>\n    </form>\n  );\n}`,
      solution: `function ${C}List() {\n  const [items, setItems] = useState([]);\n  const [draft, setDraft] = useState('');\n  const nextId = useRef(1);\n  return (\n    <div>\n      <form\n        onSubmit={(e) => {\n          e.preventDefault();\n          const text = draft.trim();\n          if (!text) return;\n          setItems((list) => [...list, { id: nextId.current++, text }]);\n          setDraft('');\n        }}\n      >\n        <input value={draft} onChange={(e) => setDraft(e.target.value)} />\n        <button>Add</button>\n      </form>\n      <ul>\n        {items.map((item) => (\n          <li key={item.id}>\n            {item.text}\n            <button type="button" onClick={() => setItems((list) => list.filter((x) => x.id !== item.id))}>Remove</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}`,
      tests: `const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));\n\ntest('adds trimmed items and clears the input', () => {\n  const ui = mount(<${C}List />);\n  ui.type('input', '  ${names[0]} ');\n  ui.submit('form');\n  ui.type('input', '${names[1]}');\n  ui.submit('form');\n  expect(labels(ui)).toEqual(${json([names[0], names[1]])});\n  expect(ui.find('input').props.value).toBe('');\n});\n\ntest('ignores blank input', () => {\n  const ui = mount(<${C}List />);\n  ui.type('input', '   ');\n  ui.submit('form');\n  expect(ui.findAll('li')).toEqual([]);\n});\n\ntest('removes items', () => {\n  const ui = mount(<${C}List />);\n  for (const t of ${json(names.slice(0, 3))}) {\n    ui.type('input', t);\n    ui.submit('form');\n  }\n  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));\n  expect(labels(ui)).toEqual(${json([names[0], names[2]])});\n});`,
    },
    {
      id: 'tabs', title: `Tabs of ${e.many} by ${cf.label}`,
      task: `Build \`${C}Tabs\`: one \`<button>\` per distinct \`${cf.name}\` in \`items\` (in order of first appearance), with \`aria-selected\` on the active one. Below, a \`<ul>\` shows the ${N}s in the active ${cf.label}. The first ${cf.label} starts active.`,
      starter: `function ${C}Tabs({ items }) {\n  return <div />;\n}`,
      solution: `function ${C}Tabs({ items }) {\n  const groups = [...new Set(items.map((x) => x.${cf.name}))];\n  const [active, setActive] = useState(groups[0]);\n  return (\n    <div>\n      <div role="tablist">\n        {groups.map((g) => (\n          <button key={g} role="tab" aria-selected={g === active} onClick={() => setActive(g)}>{g}</button>\n        ))}\n      </div>\n      <ul>\n        {items.filter((x) => x.${cf.name} === active).map((x) => <li key={x.id}>{x.${N}}</li>)}\n      </ul>\n    </div>\n  );\n}`,
      tests: `${DATA}\n\ntest('one tab per ${cf.name}', () => {\n  const ui = mount(<${C}Tabs items={${e.key.toUpperCase()}} />);\n  expect(ui.findAll('button').map(text)).toEqual(${json(cats)});\n  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual(${json(cats.map((_, k) => k === 0))});\n  expect(ui.findAll('li').map(text)).toEqual(${json(inCat(cats[0]!))});\n});\n\ntest('switching tabs', () => {\n  const ui = mount(<${C}Tabs items={${e.key.toUpperCase()}} />);\n  ui.click(ui.findAll('button')[${cats.length - 1}]);\n  expect(ui.findAll('li').map(text)).toEqual(${json(inCat(cats[cats.length - 1]!))});\n});`,
    },
    {
      id: 'sort-toggle', title: `Sort ${e.many} by ${nf.label}`,
      task: `Build \`${C}Sorter\`: a \`<ul>\` of ${N}s from \`items\`, sorted by \`${nf.name}\` **ascending** at first, and a button that toggles the direction. The button reads \`Sort descending\` while ascending, and \`Sort ascending\` while descending. Never mutate the \`items\` prop.`,
      starter: `function ${C}Sorter({ items }) {\n  return <ul>{items.map((x) => <li key={x.id}>{x.${N}}</li>)}</ul>;\n}`,
      solution: `function ${C}Sorter({ items }) {\n  const [asc, setAsc] = useState(true);\n  const sorted = [...items].sort((a, b) => (asc ? a.${nf.name} - b.${nf.name} : b.${nf.name} - a.${nf.name}));\n  return (\n    <div>\n      <button onClick={() => setAsc((v) => !v)}>{asc ? 'Sort descending' : 'Sort ascending'}</button>\n      <ul>{sorted.map((x) => <li key={x.id}>{x.${N}}</li>)}</ul>\n    </div>\n  );\n}`,
      tests: `${DATA}\n\ntest('ascending first', () => {\n  const ui = mount(<${C}Sorter items={${e.key.toUpperCase()}} />);\n  expect(ui.findAll('li').map(text)).toEqual(${json(sortedAsc)});\n  expect(text(ui.find('button'))).toBe('Sort descending');\n});\n\ntest('toggles', () => {\n  const ui = mount(<${C}Sorter items={${e.key.toUpperCase()}} />);\n  ui.click('button');\n  expect(ui.findAll('li').map(text)).toEqual(${json(sortedDesc)});\n  expect(text(ui.find('button'))).toBe('Sort ascending');\n});\n\ntest('does not mutate props', () => {\n  const before = JSON.stringify(${e.key.toUpperCase()});\n  const ui = mount(<${C}Sorter items={${e.key.toUpperCase()}} />);\n  ui.click('button');\n  expect(JSON.stringify(${e.key.toUpperCase()})).toBe(before);\n});`,
    },
    {
      id: 'cart', title: `A ${e.one} cart total`,
      task: `Build \`Cart\`. For each item in \`items\` render an \`<li>\` with the ${N}, a \`-\` button, the quantity in a \`<span>\` (starting at 0), and a \`+\` button. Quantities never go below 0. Below the list, \`<p>\` shows \`Total: <sum of quantity × ${nf.name}>\`.`,
      starter: `function Cart({ items }) {\n  return <p>Total: 0</p>;\n}`,
      solution: `function Cart({ items }) {\n  const [qty, setQty] = useState({});\n  const change = (id, d) => setQty((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) + d) }));\n  const total = items.reduce((sum, x) => sum + (qty[x.id] ?? 0) * x.${nf.name}, 0);\n  return (\n    <div>\n      <ul>\n        {items.map((x) => (\n          <li key={x.id}>\n            {x.${N}}\n            <button onClick={() => change(x.id, -1)}>-</button>\n            <span>{qty[x.id] ?? 0}</span>\n            <button onClick={() => change(x.id, 1)}>+</button>\n          </li>\n        ))}\n      </ul>\n      <p>Total: {total}</p>\n    </div>\n  );\n}`,
      tests: `${DATA}\nconst plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);\nconst minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);\n\ntest('starts empty', () => {\n  const ui = mount(<Cart items={${e.key.toUpperCase()}} />);\n  expect(text(ui.find('p'))).toBe('Total: 0');\n});\n\ntest('adds up quantities', () => {\n  const ui = mount(<Cart items={${e.key.toUpperCase()}} />);\n  plus(ui, 0);\n  plus(ui, 0);\n  plus(ui, 1);\n  expect(text(ui.find('p'))).toBe('Total: ${total2}');\n});\n\ntest('never below zero', () => {\n  const ui = mount(<Cart items={${e.key.toUpperCase()}} />);\n  minus(ui, 2);\n  expect(text(ui.findAll('span')[2])).toBe('0');\n  expect(text(ui.find('p'))).toBe('Total: 0');\n});`,
    },
    {
      id: 'pager', title: `Page through ${e.many}`,
      task: `Build \`${C}Pager\`: show ${pageSize} ${N}s per page in a \`<ul>\`, a \`<p>\` with \`Page X of Y\`, and \`Previous\` / \`Next\` buttons, disabled on the first and last page.`,
      starter: `function ${C}Pager({ items }) {\n  return <ul />;\n}`,
      solution: `function ${C}Pager({ items }) {\n  const [page, setPage] = useState(1);\n  const pages = Math.max(1, Math.ceil(items.length / ${pageSize}));\n  const visible = items.slice((page - 1) * ${pageSize}, page * ${pageSize});\n  return (\n    <div>\n      <ul>{visible.map((x) => <li key={x.id}>{x.${N}}</li>)}</ul>\n      <p>Page {page} of {pages}</p>\n      <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Previous</button>\n      <button disabled={page === pages} onClick={() => setPage((p) => p + 1)}>Next</button>\n    </div>\n  );\n}`,
      tests: `${DATA}\n\ntest('first page', () => {\n  const ui = mount(<${C}Pager items={${e.key.toUpperCase()}} />);\n  expect(ui.findAll('li').map(text)).toEqual(${json(names.slice(0, pageSize))});\n  expect(text(ui.find('p'))).toBe('Page 1 of ${Math.ceil(names.length / pageSize)}');\n  expect(ui.getByText('Previous').props.disabled).toBe(true);\n});\n\ntest('next and last page', () => {\n  const ui = mount(<${C}Pager items={${e.key.toUpperCase()}} />);\n  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));\n  const last = ${Math.ceil(names.length / pageSize)};\n  expect(text(ui.find('p'))).toBe(\`Page \${last} of \${last}\`);\n  expect(ui.findAll('li').map(text)).toEqual(${json(names.slice((Math.ceil(names.length / pageSize) - 1) * pageSize))});\n  expect(ui.getByText('Next').props.disabled).toBe(true);\n});`,
    },
    {
      id: 'converter', title: `${unit.from} to ${unit.to} converter`,
      task: `Build \`Converter\`: an \`<input>\` for a value in ${unit.from} and an \`<output>\` showing it in ${unit.to}, rounded to **1 decimal place** (\`Math.round(x * 10) / 10\`). Show nothing in the output while the input is empty or not a number.`,
      starter: `function Converter() {\n  return (\n    <div>\n      <input />\n      <output />\n    </div>\n  );\n}`,
      solution: `function Converter() {\n  const [value, setValue] = useState('');\n  const x = Number(value);\n  const valid = value.trim() !== '' && !Number.isNaN(x);\n  return (\n    <div>\n      <input value={value} onChange={(e) => setValue(e.target.value)} />\n      <output>{valid ? Math.round((${unit.code}) * 10) / 10 : ''}</output>\n    </div>\n  );\n}`,
      tests: `test('converts', () => {\n  const ui = mount(<Converter />);\n  ui.type('input', '${input}');\n  expect(text(ui.find('output'))).toBe('${round1(unit.f(input))}');\n});\n\ntest('empty and invalid input show nothing', () => {\n  const ui = mount(<Converter />);\n  expect(text(ui.find('output'))).toBe('');\n  ui.type('input', 'abc');\n  expect(text(ui.find('output'))).toBe('');\n});\n\ntest('zero is a valid value', () => {\n  const ui = mount(<Converter />);\n  ui.type('input', '0');\n  expect(text(ui.find('output'))).toBe('${round1(unit.f(0))}');\n});`,
    },
    {
      id: 'rating', title: `A ${stars}-star ${e.one} rating`,
      task: `Build \`Rating\` with ${stars} buttons labelled \`★\` (rated) or \`☆\` (not rated), each with \`aria-label="Rate N"\`, and a \`<p>\` showing \`N/${stars}\` (\`0/${stars}\` at first). Clicking star N sets the rating to N. Clicking the current rating again resets it to 0.`,
      starter: `function Rating() {\n  return <p>0/${stars}</p>;\n}`,
      solution: `function Rating() {\n  const [rating, setRating] = useState(0);\n  return (\n    <div>\n      {Array.from({ length: ${stars} }, (_, i) => i + 1).map((n) => (\n        <button key={n} aria-label={\`Rate \${n}\`} onClick={() => setRating((r) => (r === n ? 0 : n))}>{n <= rating ? '★' : '☆'}</button>\n      ))}\n      <p>{rating}/${stars}</p>\n    </div>\n  );\n}`,
      tests: `const star = (ui, n) => ui.find((el) => el.props['aria-label'] === \`Rate \${n}\`);\n\ntest('renders ${stars} empty stars', () => {\n  const ui = mount(<Rating />);\n  expect(ui.findAll('button').map(text).join('')).toBe('${'☆'.repeat(stars)}');\n  expect(text(ui.find('p'))).toBe('0/${stars}');\n});\n\ntest('rates', () => {\n  const ui = mount(<Rating />);\n  ui.click(star(ui, ${pick}));\n  expect(ui.findAll('button').map(text).join('')).toBe('${'★'.repeat(pick)}${'☆'.repeat(stars - pick)}');\n  expect(text(ui.find('p'))).toBe('${pick}/${stars}');\n});\n\ntest('clicking the same star resets', () => {\n  const ui = mount(<Rating />);\n  ui.click(star(ui, ${pick}));\n  ui.click(star(ui, ${pick}));\n  expect(text(ui.find('p'))).toBe('0/${stars}');\n});`,
    },
    {
      id: 'reducer', title: `Manage ${e.many} with useReducer`,
      task: `Write a reducer \`${e.key}Reducer(state, action)\` for an array of \`{ id, ${N}, done }\` with actions \`add\` (\`{ type: 'add', ${N} }\`, id = state.length + 1, done false), \`toggle\` (\`{ type: 'toggle', id }\`) and \`clearDone\`. Never mutate the state. Then build \`${C}Board\` using \`useReducer\`: it starts with the \`initial\` prop. Each item is an \`<li>\` with an \`onClick\` that toggles it, plus \`aria-checked\` set to its \`done\`. A \`Clear done\` button dispatches \`clearDone\`.`,
      starter: `function ${e.key}Reducer(state, action) {\n  return state;\n}\n\nfunction ${C}Board({ initial }) {\n  return <ul />;\n}`,
      solution: `function ${e.key}Reducer(state, action) {\n  switch (action.type) {\n    case 'add':\n      return [...state, { id: state.length + 1, ${N}: action.${N}, done: false }];\n    case 'toggle':\n      return state.map((x) => (x.id === action.id ? { ...x, done: !x.done } : x));\n    case 'clearDone':\n      return state.filter((x) => !x.done);\n    default:\n      return state;\n  }\n}\n\nfunction ${C}Board({ initial }) {\n  const [items, dispatch] = useReducer(${e.key}Reducer, initial);\n  return (\n    <div>\n      <ul>\n        {items.map((x) => (\n          <li key={x.id} aria-checked={x.done} onClick={() => dispatch({ type: 'toggle', id: x.id })}>{x.${N}}</li>\n        ))}\n      </ul>\n      <button onClick={() => dispatch({ type: 'clearDone' })}>Clear done</button>\n    </div>\n  );\n}`,
      tests: `const INITIAL = ${json(names.slice(0, 3).map((n, k) => ({ id: k + 1, [N]: n, done: false })))};\n\ntest('reducer: add, toggle, clearDone without mutating', () => {\n  const s0 = Object.freeze(INITIAL.map((x) => Object.freeze({ ...x })));\n  const s1 = ${e.key}Reducer(s0, { type: 'add', ${N}: 'New' });\n  expect(s1[3]).toEqual({ id: 4, ${N}: 'New', done: false });\n  const s2 = ${e.key}Reducer(s1, { type: 'toggle', id: 2 });\n  expect(s2.map((x) => x.done)).toEqual([false, true, false, false]);\n  expect(${e.key}Reducer(s2, { type: 'clearDone' }).map((x) => x.id)).toEqual([1, 3, 4]);\n  expect(${e.key}Reducer(s0, { type: 'nope' })).toBe(s0);\n});\n\ntest('board toggles and clears', () => {\n  const ui = mount(<${C}Board initial={INITIAL} />);\n  ui.click(ui.findAll('li')[0]);\n  expect(ui.findAll('li').map((li) => li.props['aria-checked'])).toEqual([true, false, false]);\n  ui.click(ui.getByText('Clear done'));\n  expect(ui.findAll('li').map(text)).toEqual(${json(names.slice(1, 3))});\n});`,
    },
    {
      id: 'stale-closure', title: `Fix a stale state update`,
      task: `\`DoubleClick\` should add **2** to the count every time its button is clicked. The starter calls \`setCount(count + 1)\` twice in the same handler, but both calls read the same stale \`count\`, so it only adds 1. Fix it using the **functional update** form. Show the count in a \`<span>\`, starting at ${step}.`,
      starter: `function DoubleClick() {\n  const [count, setCount] = useState(${step});\n  return (\n    <div>\n      <span>{count}</span>\n      <button\n        onClick={() => {\n          setCount(count + 1);\n          setCount(count + 1);\n        }}\n      >\n        +2\n      </button>\n    </div>\n  );\n}`,
      solution: `function DoubleClick() {\n  const [count, setCount] = useState(${step});\n  return (\n    <div>\n      <span>{count}</span>\n      <button\n        onClick={() => {\n          setCount((c) => c + 1);\n          setCount((c) => c + 1);\n        }}\n      >\n        +2\n      </button>\n    </div>\n  );\n}`,
      tests: `test('adds two per click', () => {\n  const ui = mount(<DoubleClick />);\n  ui.click('button');\n  ui.click('button');\n  ui.click('button');\n  expect(text(ui.find('span'))).toBe('${step + 6}');\n});`,
    },
  ];
}

function dataComponents(e: Entity, r: Rng): Comp[] {
  const C = capitalize(e.one);
  const N = e.nameField;
  const nf = r.pick(e.nums);
  const data = rows(e, `fetch:${e.key}`, 5);
  const names = data.map((d) => String(d[N]));
  const DATA = `const ${e.key.toUpperCase()} = ${rowsLiteral(data)};`;
  const D = e.key.toUpperCase();
  const q = names[0]!.slice(0, 2).toLowerCase();
  const hits = names.filter((n) => n.toLowerCase().includes(q));
  return [
    {
      id: 'load-list', title: `Load ${e.many} from an API`,
      task: `Build \`${C}List({ load })\`. \`load()\` returns a promise of ${e.many}. Show \`<p>Loading…</p>\` while waiting, then a \`<ul>\` of ${N}s. If \`load\` rejects, show \`<p role="alert">Something went wrong</p>\` and a \`Retry\` button that calls \`load\` again.`,
      starter: `function ${C}List({ load }) {\n  return <p>Loading…</p>;\n}`,
      solution: `function ${C}List({ load }) {\n  const [state, setState] = useState({ status: 'loading', items: [] });\n  const [attempt, setAttempt] = useState(0);\n  useEffect(() => {\n    let ignore = false;\n    setState({ status: 'loading', items: [] });\n    load()\n      .then((items) => !ignore && setState({ status: 'ready', items }))\n      .catch(() => !ignore && setState({ status: 'error', items: [] }));\n    return () => {\n      ignore = true;\n    };\n  }, [load, attempt]);\n  if (state.status === 'loading') return <p>Loading…</p>;\n  if (state.status === 'error')\n    return (\n      <div>\n        <p role="alert">Something went wrong</p>\n        <button onClick={() => setAttempt((a) => a + 1)}>Retry</button>\n      </div>\n    );\n  return <ul>{state.items.map((x) => <li key={x.id}>{x.${N}}</li>)}</ul>;\n}`,
      tests: `${DATA}\n\ntest('loading then data', async () => {\n  const load = vi.fn(async () => ${D});\n  const ui = mount(<${C}List load={load} />);\n  expect(ui.text()).toBe('Loading…');\n  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(${json(names)}));\n  expect(load).toHaveBeenCalledTimes(1);\n});\n\ntest('error and retry', async () => {\n  let fail = true;\n  const load = vi.fn(async () => {\n    if (fail) throw new Error('500');\n    return ${D};\n  });\n  const ui = mount(<${C}List load={load} />);\n  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));\n  fail = false;\n  ui.click(ui.getByText('Retry'));\n  await waitFor(() => expect(ui.findAll('li').length).toBe(${names.length}));\n  expect(load).toHaveBeenCalledTimes(2);\n});`,
    },
    {
      id: 'detail', title: `Load a ${e.one} when the id changes`,
      task: `Build \`${C}Detail({ id, load })\`. Call \`load(id)\` on mount **and whenever \`id\` changes**, and show \`<h2>{${N}}</h2>\` plus \`<p>${nf.label}: {${nf.name}}</p>\` once loaded (\`<p>Loading…</p>\` before). Responses for an old id that arrive late must be ignored.`,
      starter: `function ${C}Detail({ id, load }) {\n  return <p>Loading…</p>;\n}`,
      solution: `function ${C}Detail({ id, load }) {\n  const [item, setItem] = useState(null);\n  useEffect(() => {\n    let ignore = false;\n    setItem(null);\n    load(id).then((x) => {\n      if (!ignore) setItem(x);\n    });\n    return () => {\n      ignore = true;\n    };\n  }, [id, load]);\n  if (!item) return <p>Loading…</p>;\n  return (\n    <div>\n      <h2>{item.${N}}</h2>\n      <p>${nf.label}: {item.${nf.name}}</p>\n    </div>\n  );\n}`,
      tests: `${DATA}\nconst byId = (id) => ${D}.find((x) => x.id === id);\n\ntest('loads by id', async () => {\n  const load = vi.fn(async (id) => byId(id));\n  const ui = mount(<${C}Detail id={2} load={load} />);\n  await waitFor(() => expect(text(ui.find('h2'))).toBe(${json(names[1])}));\n  expect(ui.text()).toContain(${json(`${nf.label}: ${data[1]![nf.name]}`)});\n});\n\ntest('reloads when the id changes', async () => {\n  const load = vi.fn(async (id) => byId(id));\n  const ui = mount(<${C}Detail id={1} load={load} />);\n  await waitFor(() => expect(ui.find('h2')).toBeDefined());\n  ui.rerender(<${C}Detail id={3} load={load} />);\n  await waitFor(() => expect(text(ui.find('h2'))).toBe(${json(names[2])}));\n  expect(load).toHaveBeenCalledWith(3);\n});\n\ntest('ignores a slow response for an old id', async () => {\n  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));\n  const ui = mount(<${C}Detail id={1} load={load} />);\n  ui.rerender(<${C}Detail id={4} load={load} />);\n  await sleep(60);\n  await waitFor(() => expect(text(ui.find('h2'))).toBe(${json(names[3])}));\n});`,
    },
    {
      id: 'search', title: `Search ${e.many} on submit`,
      task: `Build \`${C}Search({ search })\`: a \`<form>\` with an \`<input>\`. On submit, call \`search(query)\` (trimmed; do nothing for a blank query) and show the results as a \`<ul>\` of ${N}s, plus \`<p>{n} results</p>\`. Disable the submit button while a search is in flight.`,
      starter: `function ${C}Search({ search }) {\n  return (\n    <form>\n      <input />\n      <button>Search</button>\n    </form>\n  );\n}`,
      solution: `function ${C}Search({ search }) {\n  const [query, setQuery] = useState('');\n  const [results, setResults] = useState(null);\n  const [busy, setBusy] = useState(false);\n  async function onSubmit(e) {\n    e.preventDefault();\n    const q = query.trim();\n    if (!q) return;\n    setBusy(true);\n    try {\n      setResults(await search(q));\n    } finally {\n      setBusy(false);\n    }\n  }\n  return (\n    <div>\n      <form onSubmit={onSubmit}>\n        <input value={query} onChange={(e) => setQuery(e.target.value)} />\n        <button disabled={busy}>Search</button>\n      </form>\n      {results && (\n        <div>\n          <p>{results.length} results</p>\n          <ul>{results.map((x) => <li key={x.id}>{x.${N}}</li>)}</ul>\n        </div>\n      )}\n    </div>\n  );\n}`,
      tests: `${DATA}\nconst search = vi.fn(async (q) => ${D}.filter((x) => x.${N}.toLowerCase().includes(q.toLowerCase())));\n\ntest('searches on submit', async () => {\n  const ui = mount(<${C}Search search={search} />);\n  ui.type('input', '  ${q} ');\n  await ui.act(async () => ui.submit('form'));\n  await waitFor(() => expect(ui.text()).toContain('${hits.length} results'));\n  expect(ui.findAll('li').map(text)).toEqual(${json(hits)});\n  expect(search).toHaveBeenCalledWith('${q}');\n});\n\ntest('ignores blank queries', () => {\n  const spy = vi.fn(async () => []);\n  const ui = mount(<${C}Search search={spy} />);\n  ui.type('input', '   ');\n  ui.submit('form');\n  expect(spy).not.toHaveBeenCalled();\n});\n\ntest('disables the button while searching', async () => {\n  let finish;\n  const slow = () => new Promise((r) => (finish = r));\n  const ui = mount(<${C}Search search={slow} />);\n  ui.type('input', 'x');\n  ui.submit('form');\n  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));\n  finish([]);\n  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));\n});`,
    },
    {
      id: 'create', title: `Save a new ${e.one}`,
      task: `Build \`New${C}({ create })\`: a \`<form>\` with an \`<input>\` for the ${N} and a \`Save\` button. On submit, call \`create({ ${N} })\`. While saving, the button reads \`Saving…\` and is disabled. On success, clear the input and show \`<p role="status">Saved!</p>\`. On failure, show \`<p role="alert">{error.message}</p>\` and keep the input.`,
      starter: `function New${C}({ create }) {\n  return (\n    <form>\n      <input />\n      <button>Save</button>\n    </form>\n  );\n}`,
      solution: `function New${C}({ create }) {\n  const [value, setValue] = useState('');\n  const [state, setState] = useState({ status: 'idle', error: null });\n  async function onSubmit(e) {\n    e.preventDefault();\n    setState({ status: 'saving', error: null });\n    try {\n      await create({ ${N}: value });\n      setValue('');\n      setState({ status: 'saved', error: null });\n    } catch (err) {\n      setState({ status: 'error', error: err.message });\n    }\n  }\n  const saving = state.status === 'saving';\n  return (\n    <form onSubmit={onSubmit}>\n      <input value={value} onChange={(e) => setValue(e.target.value)} />\n      <button disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>\n      {state.status === 'saved' && <p role="status">Saved!</p>}\n      {state.status === 'error' && <p role="alert">{state.error}</p>}\n    </form>\n  );\n}`,
      tests: `test('saves and clears', async () => {\n  const create = vi.fn(async () => ({ id: 1 }));\n  const ui = mount(<New${C} create={create} />);\n  ui.type('input', ${json(names[0])});\n  ui.submit('form');\n  await waitFor(() => expect(ui.text()).toContain('Saved!'));\n  expect(create).toHaveBeenCalledWith({ ${N}: ${json(names[0])} });\n  expect(ui.find('input').props.value).toBe('');\n});\n\ntest('shows a saving state', async () => {\n  let done;\n  const ui = mount(<New${C} create={() => new Promise((r) => (done = r))} />);\n  ui.type('input', 'x');\n  ui.submit('form');\n  await waitFor(() => expect(text(ui.find('button'))).toBe('Saving…'));\n  expect(ui.find('button').props.disabled).toBe(true);\n  done({});\n  await waitFor(() => expect(text(ui.find('button'))).toBe('Save'));\n});\n\ntest('shows errors and keeps the input', async () => {\n  const ui = mount(<New${C} create={async () => { throw new Error('${capitalize(e.one)} already exists'); }} />);\n  ui.type('input', 'dup');\n  ui.submit('form');\n  await waitFor(() => expect(text(ui.find((n) => n.props.role === 'alert'))).toBe('${capitalize(e.one)} already exists'));\n  expect(ui.find('input').props.value).toBe('dup');\n});`,
    },
    {
      id: 'optimistic-delete', title: `Optimistic delete with rollback`,
      task: `Build \`${C}Manager({ initial, remove })\`: a \`<ul>\` of ${N}s, each \`<li>\` with a \`Delete\` button. Clicking Delete removes the item **immediately** (optimistic), then calls \`remove(id)\`. If that rejects, put the item back in its original position and show \`<p role="alert">Could not delete</p>\`.`,
      starter: `function ${C}Manager({ initial, remove }) {\n  return <ul>{initial.map((x) => <li key={x.id}>{x.${N}}</li>)}</ul>;\n}`,
      solution: `function ${C}Manager({ initial, remove }) {\n  const [items, setItems] = useState(initial);\n  const [error, setError] = useState(null);\n  async function onDelete(item) {\n    const snapshot = items;\n    setError(null);\n    setItems((list) => list.filter((x) => x.id !== item.id));\n    try {\n      await remove(item.id);\n    } catch {\n      setItems(snapshot);\n      setError('Could not delete');\n    }\n  }\n  return (\n    <div>\n      {error && <p role="alert">{error}</p>}\n      <ul>\n        {items.map((x) => (\n          <li key={x.id}>\n            {x.${N}}\n            <button onClick={() => onDelete(x)}>Delete</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}`,
      tests: `${DATA}\nconst names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));\nconst del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));\n\ntest('removes immediately', async () => {\n  let finish;\n  const ui = mount(<${C}Manager initial={${D}} remove={() => new Promise((r) => (finish = r))} />);\n  del(ui, 1);\n  expect(names(ui)).toEqual(${json(names.filter((_, k) => k !== 1))});\n  finish();\n});\n\ntest('rolls back on failure', async () => {\n  const ui = mount(<${C}Manager initial={${D}} remove={async () => { throw new Error('500'); }} />);\n  del(ui, 2);\n  await waitFor(() => expect(ui.text()).toContain('Could not delete'));\n  expect(names(ui)).toEqual(${json(names)});\n});`,
    },
    {
      id: 'load-more', title: `Load more ${e.many}`,
      task: `Build \`${C}Feed({ loadPage })\`. \`loadPage(page)\` (1-based) resolves to \`{ items, hasMore }\`. Load page 1 on mount and show every loaded ${N} in a \`<ul>\`. While \`hasMore\` is true, show a \`Load more\` button that loads the next page and **appends** its items.`,
      starter: `function ${C}Feed({ loadPage }) {\n  return <ul />;\n}`,
      solution: `function ${C}Feed({ loadPage }) {\n  const [items, setItems] = useState([]);\n  const [page, setPage] = useState(1);\n  const [hasMore, setHasMore] = useState(false);\n  useEffect(() => {\n    let ignore = false;\n    loadPage(page).then((res) => {\n      if (ignore) return;\n      setItems((prev) => [...prev, ...res.items]);\n      setHasMore(res.hasMore);\n    });\n    return () => {\n      ignore = true;\n    };\n  }, [page, loadPage]);\n  return (\n    <div>\n      <ul>{items.map((x) => <li key={x.id}>{x.${N}}</li>)}</ul>\n      {hasMore && <button onClick={() => setPage((p) => p + 1)}>Load more</button>}\n    </div>\n  );\n}`,
      tests: `${DATA}\nconst loadPage = vi.fn(async (page) => ({ items: ${D}.slice((page - 1) * 2, page * 2), hasMore: page * 2 < ${D}.length }));\n\ntest('loads pages and appends', async () => {\n  const ui = mount(<${C}Feed loadPage={loadPage} />);\n  await waitFor(() => expect(ui.findAll('li').length).toBe(2));\n  ui.click(ui.getByText('Load more'));\n  await waitFor(() => expect(ui.findAll('li').length).toBe(4));\n  ui.click(ui.getByText('Load more'));\n  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(${json(names)}));\n  expect(ui.find('button')).toBeUndefined();\n});`,
    },
    {
      id: 'favourite', title: `Optimistic favourite toggle`,
      task: `Build \`Favourite({ id, initial, save })\`: a button with \`aria-pressed\` reflecting whether it's favourited, reading \`★ Saved\` or \`☆ Save\`. Clicking flips the state **immediately**, then calls \`save(id, newValue)\`. If that rejects, flip back and show \`<p role="alert">Could not save</p>\`.`,
      starter: `function Favourite({ id, initial, save }) {\n  return <button>☆ Save</button>;\n}`,
      solution: `function Favourite({ id, initial, save }) {\n  const [on, setOn] = useState(initial);\n  const [error, setError] = useState(false);\n  async function toggle() {\n    const next = !on;\n    setOn(next);\n    setError(false);\n    try {\n      await save(id, next);\n    } catch {\n      setOn(!next);\n      setError(true);\n    }\n  }\n  return (\n    <div>\n      <button aria-pressed={on} onClick={toggle}>{on ? '★ Saved' : '☆ Save'}</button>\n      {error && <p role="alert">Could not save</p>}\n    </div>\n  );\n}`,
      tests: `test('toggles optimistically', async () => {\n  const save = vi.fn(async () => {});\n  const ui = mount(<Favourite id={${data[0]!.id}} initial={false} save={save} />);\n  ui.click('button');\n  expect(text(ui.find('button'))).toBe('★ Saved');\n  expect(ui.find('button').props['aria-pressed']).toBe(true);\n  await waitFor(() => expect(save).toHaveBeenCalledWith(${data[0]!.id}, true));\n});\n\ntest('rolls back on failure', async () => {\n  const ui = mount(<Favourite id={1} initial={true} save={async () => { throw new Error('x'); }} />);\n  ui.click('button');\n  await waitFor(() => expect(ui.text()).toContain('Could not save'));\n  expect(text(ui.find('button'))).toBe('★ Saved');\n});`,
    },
    {
      id: 'polling-refresh', title: `Refresh on demand`,
      task: `Build \`${C}Count({ fetchCount })\`: on mount, call \`fetchCount()\` and show \`<p>{n} ${e.many}</p>\`. A \`Refresh\` button fetches again, and shows \`Refreshing…\` (and is disabled) while in flight. Show the previous number while refreshing (don't blank it out).`,
      starter: `function ${C}Count({ fetchCount }) {\n  return <p>0 ${e.many}</p>;\n}`,
      solution: `function ${C}Count({ fetchCount }) {\n  const [count, setCount] = useState(null);\n  const [busy, setBusy] = useState(true);\n  const refresh = useCallback(() => {\n    setBusy(true);\n    fetchCount().then((n) => {\n      setCount(n);\n      setBusy(false);\n    });\n  }, [fetchCount]);\n  useEffect(() => {\n    refresh();\n  }, [refresh]);\n  return (\n    <div>\n      {count !== null && <p>{count} ${e.many}</p>}\n      <button disabled={busy} onClick={refresh}>{busy ? 'Refreshing…' : 'Refresh'}</button>\n    </div>\n  );\n}`,
      tests: `test('loads and refreshes, keeping the old number visible', async () => {\n  let n = ${names.length};\n  let release;\n  const fetchCount = vi.fn(() => new Promise((r) => (release = () => r(n))));\n  const ui = mount(<${C}Count fetchCount={fetchCount} />);\n  release();\n  await waitFor(() => expect(text(ui.find('p'))).toBe('${names.length} ${e.many}'));\n  n = ${names.length + 3};\n  ui.click(ui.getByText('Refresh'));\n  await waitFor(() => expect(text(ui.find('button'))).toBe('Refreshing…'));\n  expect(text(ui.find('p'))).toBe('${names.length} ${e.many}');\n  release();\n  await waitFor(() => expect(text(ui.find('p'))).toBe('${names.length + 3} ${e.many}'));\n  expect(fetchCount).toHaveBeenCalledTimes(2);\n});`,
    },
    {
      id: 'dependent', title: `Dependent requests`,
      task: `Build \`${C}Browser({ loadGroups, loadItems })\`. On mount, \`loadGroups()\` resolves to a list of group names: render one \`<button>\` per group. Clicking a group calls \`loadItems(group)\` and shows the resulting ${N}s in a \`<ul>\`. Before any group is chosen, show \`<p>Pick a group</p>\`.`,
      starter: `function ${C}Browser({ loadGroups, loadItems }) {\n  return <p>Pick a group</p>;\n}`,
      solution: `function ${C}Browser({ loadGroups, loadItems }) {\n  const [groups, setGroups] = useState([]);\n  const [group, setGroup] = useState(null);\n  const [items, setItems] = useState([]);\n  useEffect(() => {\n    loadGroups().then(setGroups);\n  }, [loadGroups]);\n  useEffect(() => {\n    if (!group) return;\n    let ignore = false;\n    loadItems(group).then((list) => !ignore && setItems(list));\n    return () => {\n      ignore = true;\n    };\n  }, [group, loadItems]);\n  return (\n    <div>\n      {groups.map((g) => <button key={g} onClick={() => setGroup(g)}>{g}</button>)}\n      {group ? <ul>{items.map((x) => <li key={x.id}>{x.${N}}</li>)}</ul> : <p>Pick a group</p>}\n    </div>\n  );\n}`,
      tests: `${DATA}\nconst GROUPS = ['first', 'rest'];\nconst loadItems = vi.fn(async (g) => (g === 'first' ? ${D}.slice(0, 1) : ${D}.slice(1)));\n\ntest('loads groups then items', async () => {\n  const ui = mount(<${C}Browser loadGroups={async () => GROUPS} loadItems={loadItems} />);\n  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));\n  expect(ui.text()).toContain('Pick a group');\n  ui.click(ui.getByText('rest'));\n  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(${json(names.slice(1))}));\n  expect(loadItems).toHaveBeenCalledWith('rest');\n});`,
    },
    {
      id: 'abort', title: `Cancel stale searches`,
      task: `Build \`Live${C}Search({ search })\`: an \`<input>\`. Every change calls \`search(query, signal)\` with an \`AbortSignal\`, and aborts the previous request's controller (in the effect cleanup). Show the ${N}s of the latest results in a \`<ul>\`. A slow, outdated response must never overwrite newer results.`,
      starter: `function Live${C}Search({ search }) {\n  return <input />;\n}`,
      solution: `function Live${C}Search({ search }) {\n  const [query, setQuery] = useState('');\n  const [results, setResults] = useState([]);\n  useEffect(() => {\n    const controller = new AbortController();\n    search(query, controller.signal)\n      .then((list) => {\n        if (!controller.signal.aborted) setResults(list);\n      })\n      .catch(() => {});\n    return () => controller.abort();\n  }, [query, search]);\n  return (\n    <div>\n      <input value={query} onChange={(e) => setQuery(e.target.value)} />\n      <ul>{results.map((x) => <li key={x.id}>{x.${N}}</li>)}</ul>\n    </div>\n  );\n}`,
      tests: `${DATA}\n\ntest('only the latest results win', async () => {\n  const signals = [];\n  const search = (q, signal) => {\n    signals.push(signal);\n    const delay = q === 'a' ? 40 : 2;\n    return new Promise((r) => setTimeout(() => r(${D}.filter((x) => x.${N}.toLowerCase().includes(q))), delay));\n  };\n  const ui = mount(<Live${C}Search search={search} />);\n  ui.type('input', 'a');\n  ui.type('input', ${json(q)});\n  await sleep(80);\n  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(${json(hits)}));\n  expect(signals[1].aborted).toBe(true);\n});`,
    },
  ];
}

export function reactQuests(opts: { section: string; kind: 'ui' | 'data'; seed: string; perTemplate?: number }): CodeSpec[] {
  const out: CodeSpec[] = [];
  const seen = new Set<string>();
  ENTITIES.forEach((e, i) => {
    const rng = new Rng(`${opts.seed}:${e.key}:${opts.kind}`);
    const comps = opts.kind === 'ui' ? uiComponents(e, rng, i) : dataComponents(e, rng);
    for (const c of comps) {
      const slug = `react-${opts.kind === 'ui' ? 'ui' : 'data'}-${e.key}-${c.id}`;
      if (seen.has(slug)) continue;
      seen.add(slug);
      out.push({
        kind: 'code',
        slug,
        title: `React: ${c.title}`,
        section: opts.section,
        language: 'jsx',
        lesson: `# React: ${c.title}\n\n${c.task}\n\nThese components use **real React hooks** (\`useState\`, \`useEffect\`, \`useReducer\`, \`useRef\`, \`useCallback\`), available as globals or via \`import { useState } from 'react'\`. The tests render your component with \`mount()\` and interact with it like a user would (\`ui.click\`, \`ui.type\`, \`ui.submit\`), just like React Testing Library.`,
        starter: c.starter,
        solution: c.solution,
        tests: c.tests,
        hints: ['Start with the state you need (`useState`), then derive everything else from it while rendering.', opts.kind === 'data' ? 'Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag.' : 'Event handlers update state; React re-renders with the new state.'],
        xp: 20,
      });
    }
  });
  return out;
}
