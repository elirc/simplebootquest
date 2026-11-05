/**
 * Auth & security drills, with answers computed from small reference
 * implementations: an RBAC/ownership policy, cookie rules, JWT expiry, and
 * password policies (code quests).
 */
import { ENTITIES, capitalize } from '../entities.ts';
import { evalJs, json, Rng, type CodeSpec } from '../lib.ts';
import { type QuizGen } from '../quizgen.ts';

type Role = 'guest' | 'member' | 'editor' | 'admin';
const ROLES: Role[] = ['guest', 'member', 'editor', 'admin'];

/** Reference policy: everyone reads published; owners edit own drafts; editors edit anything; only admins delete others'. */
function can(role: Role, own: boolean, action: string, status: 'draft' | 'published'): boolean {
  if (action === 'read') return status === 'published' || own || role === 'editor' || role === 'admin';
  if (role === 'guest') return false;
  if (action === 'update') return role === 'editor' || role === 'admin' || (own && status === 'draft');
  if (action === 'delete') return role === 'admin' || (own && status === 'draft');
  if (action === 'publish') return (role === 'editor' || role === 'admin') && status === 'draft';
  return false;
}

export const AUTH_GENS: QuizGen[] = [
  {
    id: 'policy', topic: 'Applying an access policy',
    intro: 'This app\'s policy:\n\n- **Read**: published items are public. Drafts are readable by their owner, editors and admins.\n- **Update**: editors and admins can update anything. Owners can update their own **drafts**.\n- **Delete**: admins can delete anything. Owners can delete their own drafts.\n- **Publish**: editors and admins, drafts only.\n- Guests can only read published items.\n\nAuthorization bugs (IDOR, missing ownership checks) are the #1 web vulnerability, so practise applying the rules exactly.',
    make: (r) => {
      const e = r.pick(ENTITIES);
      const role = r.pick(ROLES);
      const own = role !== 'guest' && r.bool();
      const action = r.pick(['read', 'update', 'delete', 'publish']);
      const status = r.pick(['draft', 'published'] as const);
      const ok = can(role, own, action, status);
      return { prompt: `A **${role}** tries to **${action}** a **${status}** ${e.one} that ${own ? 'they own' : 'belongs to someone else'}. What should the API do?`, correct: ok ? 'Allow it' : role === 'guest' && action !== 'read' ? 'Reject with 401 (log in first)' : 'Reject with 403 (or 404 to hide that it exists)', wrong: ['Allow it', 'Reject with 401 (log in first)', 'Reject with 403 (or 404 to hide that it exists)', 'Reject with 400'], explanation: ok ? 'The policy allows it.' : 'The policy forbids it.' };
    },
  },
  {
    id: 'cookies', topic: 'Will the browser send the cookie?',
    intro: 'Cookie attributes decide when a browser sends a cookie:\n\n- `SameSite=Strict`: only same-site requests.\n- `SameSite=Lax` (the default): same-site requests, plus **top-level GET navigations** from other sites (clicking a link), but not cross-site POSTs or fetches.\n- `SameSite=None; Secure`: every request, over HTTPS only.\n- `Secure`: never over plain HTTP.\n\nThat\'s why `Lax` blocks most CSRF.',
    make: (r) => {
      const ss = r.pick(['Strict', 'Lax', 'None']);
      const secure = ss === 'None' ? true : r.bool();
      const scenarios: { text: string; cross: boolean; topGet: boolean; https: boolean }[] = [
        { text: 'the user clicks a link to your site from another website (top-level GET)', cross: true, topGet: true, https: true },
        { text: 'another website auto-submits a hidden POST form to your API', cross: true, topGet: false, https: true },
        { text: 'your own frontend calls your API on the same site with fetch', cross: false, topGet: false, https: true },
        { text: 'another website calls your API with fetch(…, { credentials: "include" })', cross: true, topGet: false, https: true },
        { text: 'the user visits your site over plain http:// (no TLS)', cross: false, topGet: true, https: false },
      ];
      const s = r.pick(scenarios);
      let sent = true;
      if (secure && !s.https) sent = false;
      if (s.cross && ss === 'Strict') sent = false;
      if (s.cross && ss === 'Lax' && !s.topGet) sent = false;
      return { prompt: `A session cookie is set with \`SameSite=${ss}${secure ? '; Secure' : ''}; HttpOnly\`. Is it sent when ${s.text}?`, correct: sent ? 'Yes' : 'No', wrong: ['Yes', 'No', 'Only if the page uses JavaScript to read it', 'Only for GET requests'], explanation: sent ? 'The browser includes it.' : 'The browser leaves it out.' };
    },
  },
  {
    id: 'jwt-exp', topic: 'Token expiry arithmetic',
    intro: 'JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript\'s `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.',
    make: (r) => {
      const iat = 1_700_000_000 + r.int(0, 99999);
      const ttl = r.pick([300, 900, 3600, 86400]);
      const leeway = r.pick([0, 30, 60]);
      const now = iat + ttl + r.pick([-120, -1, 0, 10, 45, 90]);
      const valid = now < iat + ttl + leeway;
      return { prompt: `A token has \`iat: ${iat}\` and \`exp: ${iat + ttl}\`. The server's clock reads \`${now}\` (seconds) and it allows **${leeway}s** of leeway. Is the token accepted?`, correct: valid ? 'Yes' : 'No, it has expired', wrong: ['Yes', 'No, it has expired', 'No, it is not valid yet', 'It depends on the signature only'], explanation: `exp + leeway = ${iat + ttl + leeway}; now = ${now}.` };
    },
  },
  {
    id: 'hashing', topic: 'Storing secrets correctly',
    intro: '**Hash** what you only need to verify (passwords, API keys) with a slow, salted hash like bcrypt or argon2. **Encrypt** what you need to read back later (third-party tokens). **Sign** what must not be tampered with (session tokens). Never store secrets in plain text.',
    make: (r) => {
      const items: [string, string][] = [
        ['user passwords', 'Hash with bcrypt or argon2'],
        ['API keys you issue (only need to verify later)', 'Hash, keeping a short prefix for display'],
        ['a user\'s GitHub OAuth token you call GitHub with', 'Encrypt with a key from a KMS'],
        ['the session token in a cookie', 'Sign it (or store a random id server-side)'],
        ['password reset tokens', 'Hash, with a short expiry, single use'],
        ['your app\'s DATABASE_URL', 'Keep it in the platform\'s secret store, never in code'],
        ['a user\'s display name', 'Store as plain text (it is not secret)'],
      ];
      const [what, how] = r.pick(items);
      return { prompt: `How should you handle **${what}**?`, correct: how, wrong: items.map(([, h]) => h).concat(['Base64-encode it', 'Hash with SHA-256 (fast)']), explanation: how };
    },
  },
];

/** Password policy code quests: each has a different rule set. */
export function passwordQuests(opts: { section: string; seed: string; count: number }): CodeSpec[] {
  const out: CodeSpec[] = [];
  const rng = new Rng(`${opts.seed}:passwords`);
  const RULES = [
    { id: 'length', text: (n: number) => `at least ${n} characters`, code: (n: number) => `if (pw.length < ${n}) problems.push('too short');`, msg: 'too short' },
    { id: 'digit', text: () => 'a digit', code: () => `if (!/\\d/.test(pw)) problems.push('needs a digit');`, msg: 'needs a digit' },
    { id: 'upper', text: () => 'an uppercase letter', code: () => `if (!/[A-Z]/.test(pw)) problems.push('needs an uppercase letter');`, msg: 'needs an uppercase letter' },
    { id: 'lower', text: () => 'a lowercase letter', code: () => `if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');`, msg: 'needs a lowercase letter' },
    { id: 'symbol', text: () => 'a symbol (anything that is not a letter, digit or space)', code: () => `if (!/[^A-Za-z0-9\\s]/.test(pw)) problems.push('needs a symbol');`, msg: 'needs a symbol' },
    { id: 'no-name', text: () => 'not contain the user\'s name (any case)', code: () => `if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');`, msg: 'contains your name' },
    { id: 'no-space', text: () => 'no leading or trailing spaces', code: () => `if (pw !== pw.trim()) problems.push('has surrounding spaces');`, msg: 'has surrounding spaces' },
    { id: 'max', text: (n: number) => `at most ${n * 8} characters (bcrypt only uses the first 72 bytes)`, code: (n: number) => `if (pw.length > ${n * 8}) problems.push('too long');`, msg: 'too long' },
  ];
  const SAMPLES = ['Correct-Horse-9', 'password', 'P4ssw0rd!', 'ada', 'AdaLovelace1!', ' Spaces1! ', 'aaaaaaaaaaaa', 'UPPER123!', 'lower123!', 'Mixed Case 42', 'Tr0ub4dor&3', 'x'.repeat(80) + 'A1!'];
  for (let i = 0; i < opts.count; i++) {
    const n = rng.int(8, 14);
    const chosen = [RULES[0]!, ...rng.sample(RULES.slice(1), rng.int(2, 4))];
    const ordered = RULES.filter((r) => chosen.includes(r));
    const app = rng.pick(ENTITIES);
    const fn = `check${capitalize(app.one)}Password`;
    const body = `function ${fn}(pw, name = '') {\n  const problems = [];\n  ${ordered.map((r) => r.code(r.id === 'max' ? Math.max(9, n) : n)).join('\n  ')}\n  return problems;\n}`;
    const cases = rng.sample(SAMPLES, 6).map((s) => [s, 'Ada']);
    const tests = cases.map(([pw, name], k) => {
      const expected = evalJs(body, `${fn}(${json(pw)}, ${json(name)})`);
      return `test(${json(`case ${k + 1}: ${pw.length > 20 ? pw.slice(0, 12) + '…' : pw}`)}, () => {\n  expect(${fn}(${json(pw)}, ${json(name)})).toEqual(${json(expected)});\n});`;
    });
    const msgs = ordered.map((r) => `- ${r.text(r.id === 'max' ? Math.max(9, n) : n)} → \`'${r.msg}'\``).join('\n');
    out.push({
      kind: 'code',
      slug: `auth-password-policy-${i + 1}`,
      title: `Password Policy #${i + 1}: the ${app.one} app`,
      section: opts.section,
      language: 'js',
      lesson: `# Password Policy #${i + 1}: the ${app.one} app\n\nThe ${app.one} app's security team wants these password rules. Write \`${fn}(pw, name)\` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):\n\n${msgs}\n\nModern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.`,
      starter: `function ${fn}(pw, name = '') {\n  return [];\n}`,
      solution: body,
      tests: tests.join('\n\n'),
      hints: ['Check each rule in order and `push` its message when it is broken.', 'Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter).'],
      xp: 15,
    });
  }
  return out;
}
