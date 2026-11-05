/**
 * Drills for testing (matchers, mocks), deploying (semver, cron, caching,
 * env config) and the dev environment (git, the terminal). Every answer is
 * computed: matchers run through the runner's own `expect`, semver and cron
 * through small reference implementations, git through a tiny simulator.
 */
import path from 'node:path';
import { expect as sbqExpect } from '../../../packages/runner/src/expect.ts';
import { fn as mockFn } from '../../../packages/runner/src/mock.ts';
import { ENTITIES } from '../entities.ts';
import type { Rng } from '../lib.ts';
import { type QuizGen } from '../quizgen.ts';

const q = (s: string) => '`' + s + '`';

// ---------- testing ----------

function passes(fn: () => void): boolean {
  try {
    fn();
    return true;
  } catch {
    return false;
  }
}

const VALUES = [
  { src: '{ id: 1, tags: ["a"] }', v: () => ({ id: 1, tags: ['a'] }) },
  { src: '[1, 2, 3]', v: () => [1, 2, 3] },
  { src: '{ name: "Ada", age: undefined }', v: () => ({ name: 'Ada', age: undefined }) },
  { src: '0.1 + 0.2', v: () => 0.1 + 0.2 },
  { src: '"hello world"', v: () => 'hello world' },
  { src: 'null', v: () => null },
  { src: 'NaN', v: () => NaN },
  { src: '[{ id: 1 }, { id: 2 }]', v: () => [{ id: 1 }, { id: 2 }] },
  { src: 'new Date(0)', v: () => new Date(0) },
  { src: '{ a: 1, b: { c: 2 } }', v: () => ({ a: 1, b: { c: 2 } }) },
];

const MATCHERS: { src: (x: string) => string; run: (actual: unknown) => void }[] = [
  { src: () => `toBe({ id: 1, tags: ["a"] })`, run: (a) => sbqExpect(a).toBe({ id: 1, tags: ['a'] }) },
  { src: () => `toEqual({ id: 1, tags: ["a"] })`, run: (a) => sbqExpect(a).toEqual({ id: 1, tags: ['a'] }) },
  { src: () => `toEqual([1, 2, 3])`, run: (a) => sbqExpect(a).toEqual([1, 2, 3]) },
  { src: () => `toStrictEqual({ name: "Ada" })`, run: (a) => sbqExpect(a).toStrictEqual({ name: 'Ada' }) },
  { src: () => `toEqual({ name: "Ada" })`, run: (a) => sbqExpect(a).toEqual({ name: 'Ada' }) },
  { src: () => `toBe(0.3)`, run: (a) => sbqExpect(a).toBe(0.3) },
  { src: () => `toBeCloseTo(0.3)`, run: (a) => sbqExpect(a).toBeCloseTo(0.3) },
  { src: () => `toContain("world")`, run: (a) => sbqExpect(a).toContain('world') },
  { src: () => `toMatch(/^hello/)`, run: (a) => sbqExpect(a).toMatch(/^hello/) },
  { src: () => `toBeNull()`, run: (a) => sbqExpect(a).toBeNull() },
  { src: () => `toBeFalsy()`, run: (a) => sbqExpect(a).toBeFalsy() },
  { src: () => `toBe(NaN)`, run: (a) => sbqExpect(a).toBe(NaN) },
  { src: () => `toBeNaN()`, run: (a) => sbqExpect(a).toBeNaN() },
  { src: () => `toContainEqual({ id: 2 })`, run: (a) => sbqExpect(a).toContainEqual({ id: 2 }) },
  { src: () => `toContain({ id: 2 })`, run: (a) => sbqExpect(a).toContain({ id: 2 }) },
  { src: () => `toHaveLength(3)`, run: (a) => sbqExpect(a).toHaveLength(3) },
  { src: () => `toMatchObject({ b: { c: 2 } })`, run: (a) => sbqExpect(a).toMatchObject({ b: { c: 2 } }) },
  { src: () => `toEqual({ a: 1 })`, run: (a) => sbqExpect(a).toEqual({ a: 1 }) },
  { src: () => `toHaveProperty("b.c", 2)`, run: (a) => sbqExpect(a).toHaveProperty('b.c', 2) },
  { src: () => `toBeInstanceOf(Date)`, run: (a) => sbqExpect(a).toBeInstanceOf(Date) },
  { src: () => `toEqual(new Date(0))`, run: (a) => sbqExpect(a).toEqual(new Date(0)) },
  { src: () => `toBeDefined()`, run: (a) => sbqExpect(a).toBeDefined() },
  { src: () => `toBeTruthy()`, run: (a) => sbqExpect(a).toBeTruthy() },
];

export const TESTING_GENS: QuizGen[] = [
  {
    id: 'matchers', topic: 'Which assertion passes?',
    intro: 'Choosing the right matcher matters:\n\n- `toBe` uses `Object.is` (same reference for objects).\n- `toEqual` compares recursively and ignores `undefined` properties.\n- `toStrictEqual` doesn\'t ignore them.\n- `toMatchObject` checks a subset.\n- `toContain` uses `===` (use `toContainEqual` for objects).\n- `toBeCloseTo` is for floats.\n\nThese answers come from running the assertions with the runner\'s Vitest-compatible `expect`.',
    make: (r) => {
      const val = r.pick(VALUES);
      const candidates = r.shuffle(MATCHERS).slice(0, 12);
      const results = candidates.map((m) => ({ m, ok: passes(() => m.run(val.v())) }));
      const pass = results.filter((x) => x.ok);
      const fail = results.filter((x) => !x.ok);
      const askPass = pass.length >= 1 && fail.length >= 3 ? true : fail.length >= 1 && pass.length >= 3 ? false : null;
      if (askPass === null) return { prompt: 'skip', correct: 'a', wrong: [] };
      const right = (askPass ? pass : fail)[0]!;
      const wrongs = (askPass ? fail : pass).slice(0, 3);
      const show = (m: (typeof MATCHERS)[number]) => q(`expect(${val.src}).${m.src('')}`);
      return { prompt: `Which of these assertions **${askPass ? 'passes' : 'fails'}**?`, correct: show(right.m), wrong: wrongs.map((w) => show(w.m)), explanation: `${show(right.m)} ${askPass ? 'passes' : 'fails'}; the others ${askPass ? 'fail' : 'pass'}.` };
    },
  },
  {
    id: 'mocks', topic: 'Mock function calls',
    intro: '`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.',
    make: (r) => {
      const e = r.pick(ENTITIES);
      const ids = Array.from({ length: r.int(2, 4) }, () => r.int(1, 5));
      const onceVal = r.int(10, 99);
      const m = mockFn((id: number) => id * 2);
      m.mockReturnValueOnce(onceVal);
      const results = ids.map((id) => m(id));
      const forms = [
        { ask: `what does \`results\` contain?`, correct: q(JSON.stringify(results)), wrong: [q(JSON.stringify(ids.map((id) => id * 2))), q(JSON.stringify(ids)), q(JSON.stringify([onceVal, ...ids.slice(1)]))] },
        { ask: `how many times was \`load${e.one[0]!.toUpperCase() + e.one.slice(1)}\` called?`, correct: String(ids.length), wrong: [String(ids.length - 1), String(ids.length + 1), String(new Set(ids).size === ids.length ? ids.length + 2 : new Set(ids).size)] },
        { ask: `what is \`mock.calls[1]\`?`, correct: q(JSON.stringify([ids[1]])), wrong: [q(String(ids[1])), q(JSON.stringify([ids[0]])), q(JSON.stringify(ids.slice(0, 2)))] },
        { ask: `does \`expect(load${e.one[0]!.toUpperCase() + e.one.slice(1)}).toHaveBeenCalledWith(${ids[ids.length - 1]})\` pass?`, correct: 'Yes', wrong: ['No: it only checks the first call', 'No: it needs toHaveBeenLastCalledWith', 'No: it compares return values'] },
      ];
      const f = r.pick(forms);
      const name = `load${e.one[0]!.toUpperCase() + e.one.slice(1)}`;
      return { prompt: `\`\`\`js\nconst ${name} = vi.fn((id) => id * 2);\n${name}.mockReturnValueOnce(${onceVal});\nconst results = [${ids.join(', ')}].map((id) => ${name}(id));\n\`\`\`\n\nAfter this runs, ${f.ask.replace('mock.calls', `${name}.mock.calls`)}`, correct: f.correct, wrong: f.wrong };
    },
  },
  {
    id: 'test-pyramid', topic: 'Which kind of test?',
    intro: '**Unit tests** check one function or component in isolation (fast, many). **Integration tests** check pieces working together, like route + database (fewer). **End-to-end tests** drive a real browser through a critical journey (fewest, slowest). Put each check at the cheapest level that can catch the bug.',
    make: (r) => {
      const cases: [string, string][] = [
        ['a price-formatting function rounds half-cents correctly', 'Unit test'],
        ['POST /api/todos without a session returns 401', 'Integration test (Supertest + test database)'],
        ['a new user can sign up, create a todo and see it after reload', 'End-to-end test (Playwright)'],
        ['a reducer handles every action without mutating state', 'Unit test'],
        ['a Prisma unique-constraint violation becomes a 409 response', 'Integration test (Supertest + test database)'],
        ['the login form shows an error message when the API returns 401', 'Component test (Testing Library, mocked API)'],
        ['a Zod schema rejects an email without @', 'Unit test'],
        ['the production build loads and the home page renders after deploy', 'Smoke / end-to-end test'],
        ['a SQL query returns todos for the current user only', 'Integration test (Supertest + test database)'],
        ['a button is disabled while a form is submitting', 'Component test (Testing Library, mocked API)'],
      ];
      const [what, kind] = r.pick(cases);
      return { prompt: `Which test is the best fit to check that **${what}**?`, correct: kind, wrong: ['Unit test', 'Integration test (Supertest + test database)', 'End-to-end test (Playwright)', 'Component test (Testing Library, mocked API)', 'Manual testing before each release'] };
    },
  },
];

// ---------- deploy ----------

function parseV(v: string) {
  const [maj, min, pat] = v.split('-')[0]!.split('.').map(Number);
  return { maj: maj!, min: min!, pat: pat!, pre: v.includes('-') };
}
function cmpV(a: string, b: string) {
  const x = parseV(a);
  const y = parseV(b);
  return x.maj - y.maj || x.min - y.min || x.pat - y.pat || Number(y.pre) - Number(x.pre);
}
function satisfies(v: string, range: string) {
  const x = parseV(v);
  if (x.pre) return false;
  const base = range.replace(/^[\^~]/, '');
  const b = parseV(base);
  if (cmpV(v, base) < 0) return false;
  if (range.startsWith('^')) return b.maj === 0 ? x.maj === 0 && x.min === b.min : x.maj === b.maj;
  if (range.startsWith('~')) return x.maj === b.maj && x.min === b.min;
  return cmpV(v, base) === 0;
}

function cronMatches(expr: string, d: Date) {
  const [mi, h, dom, mon, dow] = expr.split(' ');
  const match = (field: string, value: number) => field === '*' || field.split(',').some((part) => (part.startsWith('*/') ? value % Number(part.slice(2)) === 0 : part.includes('-') ? value >= Number(part.split('-')[0]) && value <= Number(part.split('-')[1]) : Number(part) === value));
  return match(mi!, d.getUTCMinutes()) && match(h!, d.getUTCHours()) && match(dom!, d.getUTCDate()) && match(mon!, d.getUTCMonth() + 1) && match(dow!, d.getUTCDay());
}

export const DEPLOY_GENS: QuizGen[] = [
  {
    id: 'semver-range', topic: 'Which version does npm install?',
    intro: '`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.',
    make: (r) => {
      const maj = r.int(0, 3);
      const min = r.int(0, 5);
      const pat = r.int(0, 4);
      const range = `${r.pick(['^', '~', ''])}${maj}.${min}.${pat}`;
      const available = [...new Set([`${maj}.${min}.${pat}`, `${maj}.${min}.${pat + r.int(1, 3)}`, `${maj}.${min + 1}.0`, `${maj}.${min + r.int(2, 3)}.${r.int(0, 2)}`, `${maj + 1}.0.0`, `${maj + 1}.0.0-beta.1`, `${maj}.${Math.max(0, min - 1)}.9`])].sort(cmpV);
      const ok = available.filter((v) => satisfies(v, range));
      const chosen = ok[ok.length - 1] ?? 'none';
      return { prompt: `\`package.json\` has \`"some-lib": "${range}"\`. The registry has: ${available.map(q).join(', ')}. Which version does a fresh \`npm install\` pick?`, correct: q(chosen), wrong: available.filter((v) => v !== chosen).map(q), explanation: `${q(chosen)} is the highest version matching ${q(range)}.` };
    },
  },
  {
    id: 'cron', topic: 'Reading cron schedules',
    intro: 'Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.',
    make: (r) => {
      const exprs = ['0 9 * * 1-5', '*/15 * * * *', '30 2 * * *', '0 0 1 * *', '0 */6 * * *', '0,30 8-17 * * 1-5', '0 3 * * 0', '45 23 * * 5', '0 12 15 * *', '*/10 9-11 * * *'];
      const expr = r.pick(exprs);
      const d = new Date(Date.UTC(2026, r.int(0, 11), r.int(1, 28), r.int(0, 23), r.pick([0, 10, 15, 30, 45, 50])));
      const ok = cronMatches(expr, d);
      const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getUTCDay()];
      return { prompt: `Does the cron schedule \`${expr}\` fire at **${d.toISOString().slice(0, 16).replace('T', ' ')} UTC** (a ${day})?`, correct: ok ? 'Yes' : 'No', wrong: ['Yes', 'No', 'Only if the server is in UTC+1', 'Only on the first run'], explanation: ok ? 'Every field matches.' : 'At least one field does not match.' };
    },
  },
  {
    id: 'cache', topic: 'Is the cached copy fresh?',
    intro: 'A response with `Cache-Control: max-age=N` is **fresh** for N seconds after it was generated (the `Age` header says how old a CDN copy already is). `no-cache` means "store it, but revalidate before every use", `no-store` means never store it, and `s-maxage` overrides `max-age` for shared caches (CDNs) only.',
    make: (r) => {
      const max = r.pick([60, 300, 3600, 86400]);
      const smax = r.bool() ? r.pick([30, 600, 7200]) : null;
      const age = r.int(0, 2 * max);
      const cache = r.pick(['browser', 'CDN']);
      const directive = r.pick(['normal', 'normal', 'no-cache', 'no-store']);
      let fresh: string;
      if (directive === 'no-store') fresh = 'It must not be cached at all';
      else if (directive === 'no-cache') fresh = 'It must revalidate with the server first';
      else {
        const limit = cache === 'CDN' && smax !== null ? smax : max;
        fresh = age < limit ? 'Fresh: serve it from cache' : 'Stale: revalidate (e.g. If-None-Match → 304)';
      }
      const header = directive === 'normal' ? `public, max-age=${max}${smax !== null ? `, s-maxage=${smax}` : ''}` : directive;
      return { prompt: `A ${cache} holds a response with \`Cache-Control: ${header}\` that is **${age}s** old. What happens on the next request?`, correct: fresh, wrong: ['Fresh: serve it from cache', 'Stale: revalidate (e.g. If-None-Match → 304)', 'It must revalidate with the server first', 'It must not be cached at all'] };
    },
  },
  {
    id: 'env', topic: 'Reading environment variables',
    intro: 'Everything in `process.env` is a **string** (or `undefined`). `Boolean("false")` is `true`, `Number("")` is `0`, and `Number(undefined)` is `NaN`. Parse and validate config once at startup (Zod is great for this) and fail fast.',
    make: (r) => {
      const cases: [string, string, string][] = [
        ['DEBUG="false"', 'Boolean(process.env.DEBUG)', 'true'],
        ['DEBUG="false"', 'process.env.DEBUG === "true"', 'false'],
        ['PORT=""', 'Number(process.env.PORT)', '0'],
        ['PORT is not set', 'Number(process.env.PORT)', 'NaN'],
        ['PORT is not set', 'Number(process.env.PORT ?? 3000)', '3000'],
        ['PORT=""', 'Number(process.env.PORT || 3000)', '3000'],
        ['PORT=""', 'Number(process.env.PORT ?? 3000)', '0'],
        ['WORKERS="4"', 'process.env.WORKERS + 1', '"41"'],
        ['WORKERS="4"', 'Number(process.env.WORKERS) + 1', '5'],
        ['ORIGINS="a.com, b.com"', 'process.env.ORIGINS.split(",")', '["a.com", " b.com"]'],
        ['RATE="1e3"', 'Number(process.env.RATE)', '1000'],
        ['RATE="10req"', 'parseInt(process.env.RATE)', '10'],
      ];
      const [env, expr, out] = r.pick(cases);
      return { prompt: `With \`${env}\`, what is \`${expr}\`?`, correct: q(out), wrong: ['true', 'false', '0', 'NaN', '3000', '"41"', '5', 'undefined', '"4"'].map(q), explanation: `It evaluates to ${q(out)}.` };
    },
  },
  {
    id: 'deploy-order', topic: 'Safe deployment order',
    intro: 'Databases and code must stay compatible during a deploy, because old and new code run side by side for a while. The **expand → migrate → contract** pattern: add new things first (backwards compatible), deploy code that uses them, backfill, then remove the old things in a *later* deploy.',
    make: (r) => {
      const tasks: [string, string, string[]][] = [
        ['rename column `name` to `full_name`', 'Add `full_name`, write both, backfill, switch reads, then drop `name` later', ['Rename the column in one migration', 'Drop `name` first, then add `full_name`', 'Rename it and redeploy quickly']],
        ['add a required `country` column to a big users table', 'Add it nullable (or with a default), backfill, deploy code that sets it, then add NOT NULL', ['Add it as NOT NULL in one step', 'Add it NOT NULL with no default during peak hours', 'Skip the migration and store it in JSON']],
        ['remove an unused API field', 'Stop sending it after confirming no clients use it (logs/deprecation), then remove the code', ['Delete it from the code today', 'Rename it first', 'Return null for it forever']],
        ['change the JWT signing key', 'Accept old and new keys during a transition window (key ids), then retire the old one', ['Swap the key and log everyone out', 'Keep the old key forever', 'Store the key in the frontend']],
        ['switch to a new database host', 'Replicate to the new host, switch reads/writes during a short window with a rollback plan', ['Change DATABASE_URL and restart', 'Copy the data with a spreadsheet', 'Point half the instances at each host forever']],
      ];
      const [task, right, wrong] = r.pick(tasks);
      return { prompt: `You need to **${task}** with zero downtime. What's the safe approach?`, correct: right, wrong };
    },
  },
];

// ---------- dev environment ----------

interface Repo {
  branches: Record<string, number[]>;
  head: string;
  next: number;
}
function runGit(cmds: string[]): Repo {
  const repo: Repo = { branches: { main: [1] }, head: 'main', next: 2 };
  for (const c of cmds) {
    const [, verb, arg] = /^git (\S+)(?: (?:-b |-m "?)?(\S+?)"?)?$/.exec(c) ?? [];
    if (verb === 'commit') repo.branches[repo.head] = [...repo.branches[repo.head]!, repo.next++];
    else if (c.startsWith('git switch -c') || c.startsWith('git checkout -b')) {
      const name = c.split(' ').pop()!;
      repo.branches[name] = [...repo.branches[repo.head]!];
      repo.head = name;
    } else if (verb === 'switch' || verb === 'checkout') repo.head = arg!;
    else if (verb === 'merge') {
      const other = repo.branches[arg!]!;
      const mine = repo.branches[repo.head]!;
      const extra = other.filter((x) => !mine.includes(x));
      const ff = mine.every((x) => other.includes(x));
      repo.branches[repo.head] = ff ? [...other] : [...mine, ...extra, repo.next++];
    }
  }
  return repo;
}

export const DEVENV_GENS: QuizGen[] = [
  {
    id: 'git-sim', topic: 'Follow the git history',
    intro: 'Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch\'s commits in: a **fast-forward** if your branch hasn\'t moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.',
    make: (r) => {
      const feature = r.pick(['feature/login', 'fix/typo', 'add-search', 'refactor-api']);
      const cmds = ['git commit -m "a"'];
      const steps = r.int(4, 7);
      let onFeature = false;
      let created = false;
      for (let i = 0; i < steps; i++) {
        const choice = r.int(0, 3);
        if (!created && choice === 0) {
          cmds.push(`git switch -c ${feature}`);
          created = onFeature = true;
        } else if (created && choice === 1) {
          cmds.push(`git switch ${onFeature ? 'main' : feature}`);
          onFeature = !onFeature;
        } else if (created && !onFeature && choice === 2) cmds.push(`git merge ${feature}`);
        else cmds.push('git commit -m "x"');
      }
      if (!created) cmds.splice(2, 0, `git switch -c ${feature}`);
      const repo = runGit(cmds.map((c) => c.replace(/ -m "\w"/, '')));
      const ask = r.pick(['main', 'head', 'feature']);
      const val = ask === 'head' ? repo.head : String((repo.branches[ask === 'main' ? 'main' : feature] ?? []).length);
      const wrongs = ask === 'head' ? ['main', feature, 'detached HEAD', 'origin/main'] : [String(Number(val) + 1), String(Number(val) - 1), String(Number(val) + 2), String(cmds.filter((c) => c.includes('commit')).length + 1)];
      const question = ask === 'head' ? 'Which branch is checked out at the end?' : `How many commits are in the history of \`${ask === 'main' ? 'main' : feature}\` at the end (including the initial one, and any merge commit)?`;
      return { prompt: `\`\`\`bash\n${cmds.join('\n')}\n\`\`\`\n\n${question}`, correct: val, wrong: wrongs };
    },
  },
  {
    id: 'cd', topic: 'Navigating the terminal',
    intro: '`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.',
    make: (r) => {
      const home = '/home/ada';
      let cwd = `${home}/projects`;
      let prev = cwd;
      const cmds: string[] = [];
      for (let i = 0; i < r.int(3, 5); i++) {
        const c = r.pick(['..', 'api', 'src/routes', '../web', '-', '~', '/tmp', './docs', '../..']);
        cmds.push(`cd ${c}`);
        const before = cwd;
        if (c === '-') cwd = prev;
        else if (c === '~') cwd = home;
        else cwd = path.posix.resolve(cwd, c);
        prev = before;
      }
      return { prompt: `You start in \`${home}/projects\`.\n\n\`\`\`bash\n${cmds.join('\n')}\npwd\n\`\`\`\n\nWhat does \`pwd\` print?`, correct: q(cwd), wrong: [q(home), q(`${home}/projects`), q(prev), q(path.posix.dirname(cwd)), q(cwd + '/api')], explanation: `You end up in ${q(cwd)}.` };
    },
  },
  {
    id: 'commands', topic: 'The right command for the job',
    intro: 'A small set of commands covers most daily work. Learn what each one is *for*, then reach for the docs (`--help`, `man`) for the details.',
    make: (r) => {
      const facts: [string, string][] = [
        ['see which files you changed and what is staged', 'git status'],
        ['see the exact line-by-line changes before committing', 'git diff'],
        ['stage only some changes in a file, chunk by chunk', 'git add -p'],
        ['undo all uncommitted changes to one file', 'git restore <file>'],
        ['create a branch and switch to it', 'git switch -c <name>'],
        ['update your branch with the latest main (keeping history linear)', 'git pull --rebase origin main'],
        ['find which commit introduced a bug', 'git bisect'],
        ['see who last changed each line of a file', 'git blame <file>'],
        ['temporarily shelve uncommitted changes', 'git stash'],
        ['install exactly the versions in package-lock.json (CI)', 'npm ci'],
        ['add a dependency', 'npm install <pkg>'],
        ['add a dev-only dependency (like vitest)', 'npm install -D <pkg>'],
        ['run the "test" script from package.json', 'npm test'],
        ['run a package\'s CLI without installing it globally', 'npx <tool>'],
        ['check for known vulnerabilities in dependencies', 'npm audit'],
        ['list files including hidden ones, with details', 'ls -la'],
        ['search for text in all files under a folder', 'grep -rn "text" src/'],
        ['follow a log file as it grows', 'tail -f app.log'],
        ['see which process is listening on port 3000', 'lsof -i :3000'],
        ['print an environment variable', 'echo $DATABASE_URL'],
        ['make a request to your API from the terminal', 'curl -i http://localhost:3000/api/health'],
        ['debug a Node script with breakpoints in Chrome DevTools', 'node --inspect-brk script.js'],
      ];
      const [task, cmd] = r.pick(facts);
      return { prompt: `Which command would you use to **${task}**?`, correct: q(cmd), wrong: r.sample(facts.filter(([, c]) => c !== cmd), 5).map(([, c]) => q(c)) };
    },
  },
  {
    id: 'stack-traces', topic: 'Reading stack traces',
    intro: 'A stack trace lists the call chain, **most recent call first**. Look for the first line that points at *your* code (not `node_modules` or `node:internal`). That\'s usually where to start debugging. The line above it tells you which library call failed.',
    make: (r) => {
      const e = r.pick(ENTITIES);
      const file = r.pick(['src/services/' + e.one + 'Service.ts', 'src/routes/' + e.key + '.ts', 'src/lib/format.ts']);
      const line = r.int(10, 140);
      const err = r.pick([`TypeError: Cannot read properties of undefined (reading '${e.nameField}')`, `TypeError: ${e.key}.map is not a function`, `ReferenceError: total is not defined`, `PrismaClientKnownRequestError: Unique constraint failed on the fields: (\`email\`)`]);
      const trace = `${err}\n    at ${r.pick(['format', 'toDto', 'list' + e.many[0]!.toUpperCase() + e.many.slice(1)])} (/app/${file}:${line}:${r.int(5, 40)})\n    at /app/src/routes/${e.key}.ts:${r.int(10, 60)}:${r.int(5, 30)}\n    at Layer.handle (/app/node_modules/router/lib/layer.js:152:17)\n    at next (/app/node_modules/router/lib/route.js:157:13)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)`;
      return { prompt: `\`\`\`\n${trace}\n\`\`\`\n\nWhere should you look first?`, correct: q(`${file}:${line}`), wrong: [q('node_modules/router/lib/layer.js:152'), q('node:internal/process/task_queues:95'), q(`src/routes/${e.key}.ts (the route registration only)`), q('package.json')], explanation: `The top frame in your own code is ${q(`${file}:${line}`)}.` };
    },
  },
];
