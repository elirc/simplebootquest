/**
 * Node.js & HTTP drills. Answers come from Node's own modules (path, URL,
 * URLSearchParams, Buffer) and from HTTP's rules, so they are exactly what a
 * learner would see in a real terminal.
 */
import path from 'node:path';
import { ENTITIES } from '../entities.ts';
import type { Rng } from '../lib.ts';
import { type QuizGen } from '../quizgen.ts';

const SEGS = ['src', 'routes', 'api', 'public', 'images', 'users', 'lib', 'config', 'dist', 'tests', 'utils', 'db'];
const FILES = ['index.js', 'app.ts', 'logo.png', 'notes.md', 'server.mjs', 'styles.css', 'data.json', 'schema.prisma', '.env', 'archive.tar.gz'];
const q = (s: string) => '`' + s + '`';

const STATUS_SCENARIOS: [string, number][] = [
  ['A new todo was created successfully', 201],
  ['A todo was deleted and there is nothing to return', 204],
  ['The request body is missing the required `title` field', 400],
  ['The request has no session cookie and the route needs login', 401],
  ['A logged-in user tries to edit someone else\'s admin settings', 403],
  ['GET /todos/999 where todo 999 does not exist', 404],
  ['DELETE on /todos, which only supports GET and POST', 405],
  ['Signing up with an email that is already registered', 409],
  ['Uploading a 50 MB file to an endpoint that accepts 1 MB', 413],
  ['Sending XML to an endpoint that only accepts JSON', 415],
  ['A well-formed body that fails a business rule (end date before start date)', 422],
  ['A client exceeded the rate limit', 429],
  ['An unexpected exception was thrown in the handler', 500],
  ['The database is down for maintenance; retry later', 503],
  ['The client\'s cached copy is still current (If-None-Match matched)', 304],
  ['A resource moved permanently to a new URL', 301],
  ['A successful GET of a list of todos', 200],
  ['A request accepted for background processing that hasn\'t finished yet', 202],
];
const STATUS_ALL = [200, 201, 202, 204, 301, 302, 304, 400, 401, 403, 404, 405, 409, 413, 415, 422, 429, 500, 502, 503];

const METHODS: [string, string, string][] = [
  ['GET', 'safe and idempotent', 'read a resource'],
  ['HEAD', 'safe and idempotent', 'read only the headers'],
  ['POST', 'neither safe nor idempotent', 'create or trigger an action'],
  ['PUT', 'idempotent but not safe', 'replace a whole resource'],
  ['PATCH', 'not safe, and not idempotent in general', 'partially update a resource'],
  ['DELETE', 'idempotent but not safe', 'remove a resource'],
  ['OPTIONS', 'safe and idempotent', 'ask what is allowed (CORS preflight)'],
];

function joinCase(r: Rng) {
  const parts = r.sample(SEGS, r.int(2, 3));
  const extra = r.pick(['..', '.', './' + r.pick(SEGS), '../' + r.pick(SEGS), r.pick(FILES)]);
  const args = r.shuffle([...parts, extra]).map((p) => `'${p}'`);
  const fn = r.pick(['join', 'join', 'resolve']);
  const real = fn === 'join' ? path.posix.join(...args.map((a) => a.slice(1, -1))) : path.posix.resolve('/app', ...args.map((a) => a.slice(1, -1)));
  const naive = args.map((a) => a.slice(1, -1)).join('/');
  return { code: fn === 'join' ? `path.join(${args.join(', ')})` : `// process.cwd() is '/app'\npath.resolve(${args.join(', ')})`, real, naive };
}

export const NODE_GENS: QuizGen[] = [
  {
    id: 'path-join', topic: 'path.join and path.resolve',
    intro: '`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node\'s own `path` module (POSIX).',
    make: (r) => {
      const c = joinCase(r);
      return { prompt: `What does this return?\n\n\`\`\`js\n${c.code}\n\`\`\``, correct: q(c.real), wrong: [q(c.naive), q(c.real.replace(/^\//, '')), q(path.posix.normalize(c.naive + '/')), q('/' + c.naive.replace(/\.\.\/?/g, ''))], explanation: `Node returns ${q(c.real)}.` };
    },
  },
  {
    id: 'path-parts', topic: 'Parsing file paths',
    intro: '`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.',
    make: (r) => {
      const p = `/${r.sample(SEGS, r.int(1, 3)).join('/')}/${r.pick(FILES)}`;
      const fn = r.pick(['basename', 'dirname', 'extname']);
      const real = (path.posix as unknown as Record<string, (s: string) => string>)[fn]!(p);
      const all = [path.posix.basename(p), path.posix.dirname(p), path.posix.extname(p), path.posix.basename(p, path.posix.extname(p)), p.split('.').slice(1).join('.') ? '.' + p.split('.').slice(1).join('.') : "''"];
      return { prompt: `What does \`path.${fn}(${JSON.stringify(p)})\` return?`, correct: q(real || "''"), wrong: all.map((x) => q(x || "''")), explanation: `It returns ${q(real || "''")}.` };
    },
  },
  {
    id: 'url-parts', topic: 'Parsing URLs',
    intro: 'The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn\'t.',
    make: (r) => {
      const e = r.pick(ENTITIES);
      const port = r.pick(['', ':3000', ':8080']);
      const u = new URL(`https://${r.pick(['api.example.com', 'shop.test', 'localhost'])}${port}/v${r.int(1, 2)}/${e.key}/${r.int(1, 99)}?${r.pick(e.cats).name}=${r.pick(r.pick(e.cats).values)}&page=${r.int(1, 5)}#top`);
      const prop = r.pick(['pathname', 'search', 'host', 'hostname', 'port', 'origin', 'hash']);
      const real = (u as unknown as Record<string, string>)[prop]!;
      const others = ['pathname', 'search', 'host', 'hostname', 'port', 'origin', 'hash'].filter((p) => p !== prop).map((p) => (u as unknown as Record<string, string>)[p]!);
      return { prompt: `\`\`\`js\nconst url = new URL(${JSON.stringify(u.href)});\n\`\`\`\n\nWhat is \`url.${prop}\`?`, correct: q(real || "''"), wrong: [...others.map((x) => q(x || "''")), q(real.replace(/^[?#]/, '') || 'undefined')], explanation: `\`url.${prop}\` is ${q(real || "''")}.` };
    },
  },
  {
    id: 'search-params', topic: 'URLSearchParams',
    intro: '`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it\'s missing.',
    make: (r) => {
      const e = r.pick(ENTITIES);
      const c = r.pick(e.cats);
      const v1 = r.pick(c.values);
      const v2 = r.pick(c.values);
      const qstr = `${c.name}=${encodeURIComponent(v1)}&q=${encodeURIComponent(r.pick(['hello world', 'a&b', 'café', 'x+y']))}&${c.name}=${encodeURIComponent(v2)}`;
      const sp = new URLSearchParams(qstr);
      const forms = [`params.get(${JSON.stringify(c.name)})`, `params.getAll(${JSON.stringify(c.name)})`, `params.get('q')`, `params.get('missing')`, `params.has(${JSON.stringify(c.name)})`, `[...params.keys()].length`, `params.toString()`];
      const form = r.pick(forms);
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      const real = new Function('params', `return ${form}`)(sp);
      const show = (v: unknown) => q(JSON.stringify(v));
      return { prompt: `\`\`\`js\nconst params = new URLSearchParams(${JSON.stringify(qstr)});\n\`\`\`\n\nWhat is \`${form}\`?`, correct: show(real), wrong: [show(v2), show([v1]), show(null), show(undefined), show(decodeURIComponent(qstr)), show(3), show(v1 === v2 ? 'x' : v1)], explanation: `It's ${show(real)}.` };
    },
  },
  {
    id: 'bytes', topic: 'Bytes vs characters',
    intro: '`Content-Length` and many limits count **bytes**, not characters. In UTF-8, ASCII is 1 byte, accented Latin letters are 2, most other scripts are 3, and emoji are 4. `Buffer.byteLength(str)` tells you.',
    make: (r) => {
      const s = r.pick(['hello', 'café', 'naïve', '日本', 'ok 👍', 'Zoë', 'São Paulo', '🎉🎉', 'résumé', 'Ελλάδα', 'tacos', 'Москва']);
      const real = Buffer.byteLength(s);
      return { prompt: `What does \`Buffer.byteLength(${JSON.stringify(s)})\` return?`, correct: String(real), wrong: [String(s.length), String([...s].length), String(real + 1), String(s.length * 2), String(real - 1)], explanation: `${JSON.stringify(s)} is ${real} bytes in UTF-8 (${s.length} UTF-16 code units).` };
    },
  },
  {
    id: 'base64', topic: 'Base64',
    intro: 'Base64 turns bytes into text using 64 characters, so binary data can travel through text-only channels (JSON, headers, JWTs). It is **encoding, not encryption**: anyone can decode it. Every 3 bytes become 4 characters, padded with `=`.',
    make: (r) => {
      const s = r.pick(['hi', 'abc', 'user:pass', 'admin', 'Node', 'yes', 'ok!', 'token', 'a', 'json']);
      const real = Buffer.from(s).toString('base64');
      return { prompt: `What does \`Buffer.from(${JSON.stringify(s)}).toString('base64')\` return?`, correct: q(real), wrong: [q(real.replace(/=+$/, '')), q(Buffer.from(s).toString('hex')), q(Buffer.from(s + ' ').toString('base64')), q(Buffer.from(s.toUpperCase()).toString('base64'))], explanation: `It's ${q(real)}.` };
    },
  },
  {
    id: 'status', topic: 'Choosing status codes',
    intro: 'Status codes are part of your API\'s contract: 2xx success, 3xx redirect or cache, 4xx the client\'s fault, 5xx the server\'s fault. Picking the precise code (409 vs 400, 401 vs 403) helps clients react correctly.',
    make: (r) => {
      const [scenario, code] = r.pick(STATUS_SCENARIOS);
      return { prompt: `Which status code fits best?\n\n> ${scenario}`, correct: String(code), wrong: r.sample(STATUS_ALL.filter((c) => c !== code && Math.floor(c / 100) === Math.floor(code / 100)), 2).concat(r.sample(STATUS_ALL.filter((c) => c !== code), 2)).map(String), explanation: `${code} is the conventional answer.` };
    },
  },
  {
    id: 'methods', topic: 'HTTP method semantics',
    intro: '**Safe** methods don\'t change server state. **Idempotent** methods have the same effect whether you send them once or five times, which is what makes retries safe.',
    make: (r) => {
      const [m, props, use] = r.pick(METHODS);
      const ask = r.pick(['props', 'use']);
      if (ask === 'props') return { prompt: `Which describes \`${m}\`?`, correct: props, wrong: ['safe and idempotent', 'idempotent but not safe', 'neither safe nor idempotent', 'safe but not idempotent'], explanation: `${m} is ${props}.` };
      return { prompt: `Which method would you use to **${use}**?`, correct: m, wrong: METHODS.map((x) => x[0]), explanation: `${m}: ${use}.` };
    },
  },
  {
    id: 'content-type', topic: 'Content types',
    intro: '`Content-Type` tells the receiver how to parse the body. Servers should set it on every response, and `express.json()` only parses requests that send `application/json`.',
    make: (r) => {
      const pairs: [string, string][] = [['index.html', 'text/html'], ['app.js', 'text/javascript'], ['styles.css', 'text/css'], ['data.json', 'application/json'], ['logo.png', 'image/png'], ['photo.jpg', 'image/jpeg'], ['icon.svg', 'image/svg+xml'], ['font.woff2', 'font/woff2'], ['report.pdf', 'application/pdf'], ['notes.txt', 'text/plain'], ['an HTML form post', 'application/x-www-form-urlencoded'], ['a file upload form', 'multipart/form-data'], ['an unknown binary file', 'application/octet-stream']];
      const [what, type] = r.pick(pairs);
      return { prompt: `Which \`Content-Type\` fits **${what}**?`, correct: q(type), wrong: pairs.map(([, t]) => q(t)).filter((t) => t !== q(type)).slice(0, 8), explanation: `Use ${q(type)}.` };
    },
  },
];
