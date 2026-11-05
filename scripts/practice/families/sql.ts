/**
 * SQL query reps over many small schemas. Expected rows are computed with
 * sql.js, the same SQLite engine the browser runner uses, so the tests and
 * the learner's environment agree exactly.
 */
import initSqlJs from 'sql.js';
import { ENTITIES, rows, type Entity } from '../entities.ts';
import { json, Rng, type CodeSpec } from '../lib.ts';

type SqlJs = Awaited<ReturnType<typeof initSqlJs>>;
let SQL: SqlJs | undefined;
const snake = (s: string) => s.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);

function schema(e: Entity, seed: string): { setup: string; table: string; child: string; fk: string } {
  const table = snake(e.key);
  const child = `${snake(e.one)}_events`;
  const fk = `${snake(e.one)}_id`;
  const data = rows(e, seed, 9);
  const cols = ['id INTEGER PRIMARY KEY', `${snake(e.nameField)} TEXT NOT NULL`, ...e.nums.map((f) => `${snake(f.name)} ${f.decimals ? 'REAL' : 'INTEGER'} NOT NULL`), ...e.cats.map((c) => `${snake(c.name)} TEXT NOT NULL`), ...(e.bool ? [`${snake(e.bool.name)} INTEGER NOT NULL`] : [])];
  const fields = ['id', e.nameField, ...e.nums.map((f) => f.name), ...e.cats.map((c) => c.name), ...(e.bool ? [e.bool.name] : [])];
  const values = data.map((r) => `  (${fields.map((f) => (typeof r[f] === 'string' ? `'${String(r[f]).replace(/'/g, "''")}'` : typeof r[f] === 'boolean' ? (r[f] ? 1 : 0) : r[f])).join(', ')})`);
  const rng = new Rng(`${seed}:events:${e.key}`);
  const events: string[] = [];
  let id = 1;
  for (const r of data) {
    const n = rng.int(0, 3); // some rows have no events, for LEFT JOIN practice
    for (let i = 0; i < n; i++) events.push(`  (${id++}, ${r.id}, '${rng.pick(['view', 'like', 'share'])}', ${rng.int(1, 20)}, ${rng.int(1, 28)})`);
  }
  const setup = `CREATE TABLE ${table} (\n  ${cols.join(',\n  ')}\n);\n\nINSERT INTO ${table} (${fields.map(snake).join(', ')}) VALUES\n${values.join(',\n')};\n\nCREATE TABLE ${child} (\n  id INTEGER PRIMARY KEY,\n  ${fk} INTEGER NOT NULL REFERENCES ${table}(id),\n  kind TEXT NOT NULL,\n  amount INTEGER NOT NULL,\n  day INTEGER NOT NULL\n);\n\nINSERT INTO ${child} (id, ${fk}, kind, amount, day) VALUES\n${events.join(',\n')};\n`;
  return { setup, table, child, fk };
}

interface SqlTask {
  id: string;
  title: string;
  task: string;
  solution: string;
  /** For write queries: queries that check the resulting state. */
  checks?: { name: string; sql: string }[];
  starter?: string;
  extra?: string;
}

function tasks(e: Entity, s: ReturnType<typeof schema>, r: Rng, values: (sql: string) => unknown[]): SqlTask[] {
  const T = s.table;
  const name = snake(e.nameField);
  const nf = r.pick(e.nums);
  const nf2 = e.nums.find((f) => f !== nf) ?? nf;
  const n = snake(nf.name);
  const n2 = snake(nf2.name);
  const cf = r.pick(e.cats);
  const c = snake(cf.name);
  const vals = values(`SELECT ${n} FROM ${T} ORDER BY ${n}`) as number[];
  const mid = vals[Math.floor(vals.length / 2)]!;
  const low = vals[2]!;
  const high = vals[6]!;
  const someName = (values(`SELECT ${name} FROM ${T} ORDER BY id LIMIT 1 OFFSET 3`)[0] as string) ?? 'x';
  const frag = someName.slice(1, 3).toLowerCase();
  const catVals = (values(`SELECT DISTINCT ${c} FROM ${T} ORDER BY ${c}`) as string[]).slice(0, 2);
  const list: SqlTask[] = [
    { id: 'where', title: `${e.many} with ${nf.label} above ${mid}`, task: `Return the \`${name}\` and \`${n}\` of ${e.many} whose \`${n}\` is greater than ${mid}, ordered by \`${n}\` descending, then \`${name}\`.`, solution: `SELECT ${name}, ${n}\nFROM ${T}\nWHERE ${n} > ${mid}\nORDER BY ${n} DESC, ${name};` },
    { id: 'count', title: `Count ${e.many} per ${cf.label}`, task: `Return \`${c}\` and \`total\` (the number of ${e.many}) for each \`${c}\`, ordered by \`total\` descending, then \`${c}\`.`, solution: `SELECT ${c}, COUNT(*) AS total\nFROM ${T}\nGROUP BY ${c}\nORDER BY total DESC, ${c};` },
    { id: 'avg', title: `Average ${nf.label} per ${cf.label}`, task: `Return \`${c}\` and \`avg_${n}\` (the average \`${n}\` rounded to 1 decimal place) per \`${c}\`, ordered by \`${c}\`.`, solution: `SELECT ${c}, ROUND(AVG(${n}), 1) AS avg_${n}\nFROM ${T}\nGROUP BY ${c}\nORDER BY ${c};` },
    { id: 'top', title: `Top 3 ${e.many} by ${nf.label}`, task: `Return the \`${name}\` and \`${n}\` of the 3 ${e.many} with the highest \`${n}\`. Break ties by \`${name}\`.`, solution: `SELECT ${name}, ${n}\nFROM ${T}\nORDER BY ${n} DESC, ${name}\nLIMIT 3;` },
    { id: 'between', title: `${e.many} in a ${nf.label} range`, task: `Return the \`${name}\`s of ${e.many} with \`${n}\` between ${low} and ${high} (inclusive), ordered by \`${n}\`, then \`${name}\`.`, solution: `SELECT ${name}\nFROM ${T}\nWHERE ${n} BETWEEN ${low} AND ${high}\nORDER BY ${n}, ${name};` },
    { id: 'like', title: `Search ${e.many} by ${name}`, task: `Return the \`${name}\`s that contain "${frag}" (case-insensitive in SQLite's \`LIKE\` for ASCII), ordered alphabetically.`, solution: `SELECT ${name}\nFROM ${T}\nWHERE ${name} LIKE '%${frag}%'\nORDER BY ${name};` },
    { id: 'in', title: `${e.many} in some ${cf.label}s`, task: `Return \`id\` and \`${name}\` of ${e.many} whose \`${c}\` is ${catVals.map((v) => `'${v}'`).join(' or ')}, ordered by \`id\`. Use \`IN\`.`, solution: `SELECT id, ${name}\nFROM ${T}\nWHERE ${c} IN (${catVals.map((v) => `'${v}'`).join(', ')})\nORDER BY id;`, extra: `test('uses IN', () => {\n  expect(/\\bin\\s*\\(/i.test(code)).toBe(true);\n});` },
    { id: 'distinct', title: `Distinct ${cf.label}s`, task: `Return each distinct \`${c}\` once, alphabetically.`, solution: `SELECT DISTINCT ${c}\nFROM ${T}\nORDER BY ${c};` },
    { id: 'having', title: `${cf.label}s with several ${e.many}`, task: `Return \`${c}\` and \`total\` for groups that have **at least 2** ${e.many}, ordered by \`${c}\`.`, solution: `SELECT ${c}, COUNT(*) AS total\nFROM ${T}\nGROUP BY ${c}\nHAVING COUNT(*) >= 2\nORDER BY ${c};` },
    { id: 'case', title: `Label ${e.many} by ${nf.label}`, task: `Return \`${name}\` and \`band\`: \`'high'\` when \`${n}\` ≥ ${high}, \`'low'\` when it's below ${low}, otherwise \`'medium'\`. Order by \`${name}\`.`, solution: `SELECT ${name},\n  CASE WHEN ${n} >= ${high} THEN 'high' WHEN ${n} < ${low} THEN 'low' ELSE 'medium' END AS band\nFROM ${T}\nORDER BY ${name};` },
    { id: 'minmax', title: `Range of ${nf.label} per ${cf.label}`, task: `Return \`${c}\`, \`min_${n}\` and \`max_${n}\` per \`${c}\`, ordered by \`${c}\`.`, solution: `SELECT ${c}, MIN(${n}) AS min_${n}, MAX(${n}) AS max_${n}\nFROM ${T}\nGROUP BY ${c}\nORDER BY ${c};` },
    { id: 'above-avg', title: `${e.many} above the average ${nf.label}`, task: `Return the \`${name}\`s of ${e.many} whose \`${n}\` is above the overall average, ordered by \`${name}\`. Use a subquery.`, solution: `SELECT ${name}\nFROM ${T}\nWHERE ${n} > (SELECT AVG(${n}) FROM ${T})\nORDER BY ${name};`, extra: `test('uses a subquery', () => {\n  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);\n});` },
    { id: 'join-sum', title: `Total event amount per ${e.one}`, task: `Join \`${T}\` with \`${s.child}\` and return \`${name}\` and \`total\` (the sum of \`amount\`) for ${e.many} that have events, ordered by \`total\` descending, then \`${name}\`.`, solution: `SELECT t.${name}, SUM(ev.amount) AS total\nFROM ${T} t\nJOIN ${s.child} ev ON ev.${s.fk} = t.id\nGROUP BY t.id, t.${name}\nORDER BY total DESC, t.${name};` },
    { id: 'left-join', title: `Event counts including zeros`, task: `Return \`${name}\` and \`events\` (how many rows in \`${s.child}\`) for **every** ${e.one}, including those with none. Order by \`events\` descending, then \`${name}\`.`, solution: `SELECT t.${name}, COUNT(ev.id) AS events\nFROM ${T} t\nLEFT JOIN ${s.child} ev ON ev.${s.fk} = t.id\nGROUP BY t.id, t.${name}\nORDER BY events DESC, t.${name};` },
    { id: 'not-exists', title: `${e.many} with no events`, task: `Return the \`${name}\`s of ${e.many} that have **no** rows in \`${s.child}\`, ordered by \`${name}\`.`, solution: `SELECT ${name}\nFROM ${T} t\nWHERE NOT EXISTS (SELECT 1 FROM ${s.child} ev WHERE ev.${s.fk} = t.id)\nORDER BY ${name};` },
    { id: 'rank', title: `Rank ${e.many} within each ${cf.label}`, task: `Return \`${c}\`, \`${name}\`, \`${n}\` and \`rank\`: the \`RANK()\` by \`${n}\` (highest first) **within each** \`${c}\`. Order by \`${c}\`, \`rank\`, \`${name}\`.`, solution: `SELECT ${c}, ${name}, ${n},\n  RANK() OVER (PARTITION BY ${c} ORDER BY ${n} DESC) AS rank\nFROM ${T}\nORDER BY ${c}, rank, ${name};` },
    { id: 'running', title: `Running total of ${nf.label}`, task: `Return \`id\`, \`${n}\` and \`running_total\`: the cumulative sum of \`${n}\` ordered by \`id\`.`, solution: `SELECT id, ${n},\n  SUM(${n}) OVER (ORDER BY id) AS running_total\nFROM ${T}\nORDER BY id;` },
    { id: 'page', title: `Page 2 of ${e.many}`, task: `Return the \`id\` and \`${name}\` of the **second page** of ${e.many} sorted by \`${name}\`, with 3 per page.`, solution: `SELECT id, ${name}\nFROM ${T}\nORDER BY ${name}\nLIMIT 3 OFFSET 3;` },
    { id: 'pivot', title: `Event kinds per ${e.one}`, task: `For every ${e.one} that has events, return \`${name}\`, \`views\`, \`likes\` and \`shares\` (event counts per kind), ordered by \`${name}\`. Use conditional aggregation (\`SUM(CASE …)\`).`, solution: `SELECT t.${name},\n  SUM(CASE WHEN ev.kind = 'view' THEN 1 ELSE 0 END) AS views,\n  SUM(CASE WHEN ev.kind = 'like' THEN 1 ELSE 0 END) AS likes,\n  SUM(CASE WHEN ev.kind = 'share' THEN 1 ELSE 0 END) AS shares\nFROM ${T} t\nJOIN ${s.child} ev ON ev.${s.fk} = t.id\nGROUP BY t.id, t.${name}\nORDER BY t.${name};` },
    { id: 'cte', title: `${cf.label}s above the overall average`, task: `Using a CTE, compute the average \`${n}\` per \`${c}\`, then return the \`${c}\`s whose average is above the overall average of \`${n}\`, ordered by \`${c}\`.`, solution: `WITH per_group AS (\n  SELECT ${c}, AVG(${n}) AS avg_value FROM ${T} GROUP BY ${c}\n)\nSELECT ${c}\nFROM per_group\nWHERE avg_value > (SELECT AVG(${n}) FROM ${T})\nORDER BY ${c};`, extra: `test('uses a CTE', () => {\n  expect(/\\bwith\\b/i.test(code)).toBe(true);\n});` },
    { id: 'two-cols', title: `Sort by two columns`, task: `Return \`${name}\`, \`${n}\` and \`${n2}\`, ordered by \`${n2}\` ascending, then \`${n}\` descending, then \`${name}\`.`, solution: `SELECT ${name}, ${n}, ${n2}\nFROM ${T}\nORDER BY ${n2}, ${n} DESC, ${name};` },
    { id: 'update', title: `Update ${e.many} in one ${cf.label}`, task: `Write an \`UPDATE\` that adds 10 to \`${n}\` for every ${e.one} whose \`${c}\` is '${catVals[0]}'. Nothing else may change.`, solution: `UPDATE ${T}\nSET ${n} = ${n} + 10\nWHERE ${c} = '${catVals[0]}';`, starter: `-- Write your UPDATE here\nSELECT 1;`, checks: [{ name: 'only the matching rows changed', sql: `SELECT id, ${n} FROM ${T} ORDER BY id` }] },
    { id: 'delete', title: `Delete ${e.many} below a ${nf.label}`, task: `Delete every ${e.one} whose \`${n}\` is below ${low} **and** that has no rows in \`${s.child}\` (never delete rows other tables reference).`, solution: `DELETE FROM ${T}\nWHERE ${n} < ${low}\n  AND NOT EXISTS (SELECT 1 FROM ${s.child} ev WHERE ev.${s.fk} = ${T}.id);`, starter: `-- Write your DELETE here\nSELECT 1;`, checks: [{ name: 'the right rows remain', sql: `SELECT id FROM ${T} ORDER BY id` }, { name: 'events are untouched', sql: `SELECT COUNT(*) AS n FROM ${s.child}` }] },
    { id: 'insert', title: `Insert a new ${e.one}`, task: `Insert a ${e.one} with id 100, \`${name}\` 'New ${e.one}', \`${n}\` ${mid}${e.nums.filter((f) => f !== nf).map((f) => `, \`${snake(f.name)}\` ${f.min}`).join('')}, \`${c}\` '${catVals[0]}'${e.cats.filter((x) => x !== cf).map((x) => `, \`${snake(x.name)}\` '${x.values[0]}'`).join('')}${e.bool ? `, \`${snake(e.bool.name)}\` 0` : ''}. Then return how many ${e.many} have that \`${c}\` as \`total\`.`, solution: `INSERT INTO ${T} (id, ${name}, ${n}${e.nums.filter((f) => f !== nf).map((f) => `, ${snake(f.name)}`).join('')}, ${c}${e.cats.filter((x) => x !== cf).map((x) => `, ${snake(x.name)}`).join('')}${e.bool ? `, ${snake(e.bool.name)}` : ''})\nVALUES (100, 'New ${e.one}', ${mid}${e.nums.filter((f) => f !== nf).map((f) => `, ${f.min}`).join('')}, '${catVals[0]}'${e.cats.filter((x) => x !== cf).map((x) => `, '${x.values[0]}'`).join('')}${e.bool ? ', 0' : ''});\n\nSELECT COUNT(*) AS total FROM ${T} WHERE ${c} = '${catVals[0]}';`, checks: [{ name: 'the row exists', sql: `SELECT id, ${name} FROM ${T} WHERE id = 100` }] },
  ];
  if (e.bool) {
    const b = snake(e.bool.name);
    list.push({ id: 'bool', title: `Count ${e.bool.label} ${e.many}`, task: `Booleans are stored as 0/1 in SQLite. Return \`${c}\` and \`total\` (how many ${e.many} have \`${b}\` = 1) per \`${c}\`, including groups with zero, ordered by \`${c}\`.`, solution: `SELECT ${c}, SUM(CASE WHEN ${b} = 1 THEN 1 ELSE 0 END) AS total\nFROM ${T}\nGROUP BY ${c}\nORDER BY ${c};` });
  }
  return list;
}

function run(db: { exec(sql: string): { columns: string[]; values: unknown[][] }[] }, sql: string) {
  const res = db.exec(sql);
  const last = res[res.length - 1];
  if (!last) return [];
  return last.values.map((row) => Object.fromEntries(last.columns.map((col, i) => [col, row[i]])));
}

export async function sqlQuests(opts: { section: string; seed: string; ids?: string[] }): Promise<CodeSpec[]> {
  SQL ??= await initSqlJs();
  const out: CodeSpec[] = [];
  for (const e of ENTITIES) {
    const s = schema(e, opts.seed);
    const probe = new SQL.Database();
    probe.exec(s.setup);
    const values = (sql: string) => run(probe, sql).map((r) => Object.values(r)[0]);
    const rng = new Rng(`${opts.seed}:${e.key}:sql`);
    for (const t of tasks(e, s, rng, values)) {
      if (opts.ids && !opts.ids.includes(t.id)) continue;
      const db = new SQL.Database();
      db.exec(s.setup);
      const result = run(db, t.solution);
      const tests: string[] = [];
      if (!t.checks || t.id === 'insert') tests.push(`test('returns the expected rows', () => {\n  expect(result).toEqual(${json(result)});\n});`);
      for (const ch of t.checks ?? []) tests.push(`test(${json(ch.name)}, () => {\n  expect(query(${json(ch.sql)})).toEqual(${json(run(db, ch.sql))});\n});`);
      if (t.extra) tests.push(t.extra);
      db.close();
      // The starter must fail: compare what it would produce.
      const starter = t.starter ?? `SELECT * FROM ${s.table};`;
      const sdb = new SQL.Database();
      sdb.exec(s.setup);
      const sres = run(sdb, starter);
      const same = !t.checks && JSON.stringify(sres) === JSON.stringify(result);
      sdb.close();
      if (same || (result.length === 0 && !t.checks)) continue;
      out.push({
        kind: 'code',
        slug: `sql-${e.key}-${t.id}`,
        title: `SQL: ${t.title[0]!.toUpperCase()}${t.title.slice(1)}`,
        section: opts.section,
        language: 'sql',
        lesson: `# SQL: ${t.title[0]!.toUpperCase()}${t.title.slice(1)}\n\n${t.task}\n\nTables: \`${s.table}\` and \`${s.child}\` (open the setup to see the data). Column names in SQL are snake_case.`,
        setup: s.setup,
        starter,
        solution: t.solution,
        tests: tests.join('\n\n'),
        hints: ['Start from `SELECT * FROM …` to look at the data, then add one clause at a time.', 'Check the exact column names and aliases the task asks for: tests compare them.'],
        xp: 15,
      });
    }
    probe.close();
  }
  return out;
}
