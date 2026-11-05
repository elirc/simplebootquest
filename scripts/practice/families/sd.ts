/**
 * System Design drills: back-of-the-envelope maths (computed exactly, with
 * distractors built from common mistakes) and pattern-choice scenarios.
 */
import { ENTITIES } from '../entities.ts';
import type { Rng } from '../lib.ts';
import { fmtNum, type QuizGen } from '../quizgen.ts';

const DAY = 86_400;
const pct = (x: number) => `${+(x * 100).toPrecision(4)}%`;
const mins = (x: number) => `${fmtNum(Math.round(x))} minutes`;
const app = (r: Rng) => r.pick(['a recipe app', 'a todo app', 'a ticketing system', 'a photo-sharing app', 'a learning platform', 'an online shop', 'a chat app', 'a booking site', 'a fitness tracker', 'a news reader']);

function choice(prompt: string, correct: string, wrong: string[], explanation?: string) {
  return { prompt, correct, wrong, explanation };
}

const g = (id: string, topic: string, intro: string, make: QuizGen['make']): QuizGen => ({ id, topic, intro, make });

export const SD_GENS: Record<string, QuizGen[]> = {
  '01-sd-foundations': [
    g('qps', 'Requests per second from daily users', 'Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.', (r) => {
      const dau = r.pick([1, 2, 5]) * 10 ** r.int(4, 6);
      const per = r.int(2, 30) * 5;
      const peak = r.pick([2, 3, 5, 10]);
      const avg = (dau * per) / DAY;
      const ans = avg * peak;
      return choice(`${app(r)} has **${fmtNum(dau)} daily active users**, each making **${per} requests** a day. Peak traffic is **${peak}×** the average. Roughly how many requests per second at peak?`, `~${fmtNum(ans)}/s`, [`~${fmtNum(avg)}/s`, `~${fmtNum(ans * 60)}/s`, `~${fmtNum(ans / 24)}/s`, `~${fmtNum(dau * per * peak / 3600)}/s`], `${fmtNum(dau)} × ${per} ÷ 86,400 ≈ ${fmtNum(avg)}/s average, × ${peak} ≈ ${fmtNum(ans)}/s.`);
    }),
    g('storage', 'Storage growth per year', 'Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.', (r) => {
      const n = r.pick([1, 2, 5]) * 10 ** r.int(3, 5);
      const kb = r.pick([1, 2, 3, 4, 5, 8, 10, 50, 100, 200, 300, 500]);
      const gb = (n * kb * 365) / 1_000_000;
      const f = (x: number) => (x >= 1000 ? `${+(x / 1000).toPrecision(3)} TB` : `${+x.toPrecision(3)} GB`);
      return choice(`Users create **${fmtNum(n)} items a day**, each about **${kb} KB**. Roughly how much storage do they need per year?`, f(gb), [f(gb * 10), f(gb / 10), f(gb / 365), f(gb * 12)], `${fmtNum(n)} × ${kb} KB × 365 ≈ ${f(gb)}.`);
    }),
    g('availability-serial', 'Availability of dependencies in series', 'If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.', (r) => {
      const k = r.int(2, 4);
      const vals = Array.from({ length: k }, () => r.pick([0.99, 0.995, 0.999, 0.9995, 0.9999]));
      const total = vals.reduce((a, b) => a * b, 1);
      return choice(`A request needs **all** of: ${vals.map((v, i) => `service ${String.fromCharCode(65 + i)} (${pct(v)})`).join(', ')}. What is the best possible availability?`, pct(total), [pct(Math.min(...vals)), pct(vals.reduce((a, b) => a + b, 0) / k), pct(1 - (1 - Math.min(...vals)) ** k), pct(total * 0.99)], `Multiply them: ${pct(total)}.`);
    }),
    g('availability-parallel', 'Redundancy in parallel', 'With N independent replicas, all of them are down only (1 − a)^N of the time, so availability = 1 − (1 − a)^N. That assumes **independent** failures, which a shared region or bad deploy breaks.', (r) => {
      const a = r.pick([0.9, 0.95, 0.99, 0.995]);
      const n = r.int(2, 3);
      const total = 1 - (1 - a) ** n;
      return choice(`You run **${n} independent replicas**, each **${pct(a)}** available. A request succeeds if at least one is up. What is the availability?`, pct(total), [pct(a), pct(a ** n), pct(Math.min(1, a * n)), pct(1 - (1 - a) / n)], `1 − (1 − ${a})^${n} = ${pct(total)}.`);
    }),
    g('downtime', 'Nines to downtime', 'Downtime budget = (1 − availability) × period. A 30-day month has 43,200 minutes, so 99.9% allows about 43 minutes.', (r) => {
      const a = r.pick([0.99, 0.995, 0.999, 0.9995, 0.9999]);
      const period = r.pick([['a 30-day month', 43_200], ['a year', 525_600], ['a week', 10_080]] as const);
      const ans = (1 - a) * period[1];
      return choice(`How much downtime does a **${pct(a)}** availability target allow in **${period[0]}**?`, mins(ans), [mins(ans * 10), mins(ans / 10), mins(a * 60), mins(ans * 2)], `(1 − ${a}) × ${fmtNum(period[1])} minutes ≈ ${mins(ans)}.`);
    }),
    g('littles-law', "Little's law", "**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.", (r) => {
      const rps = r.int(1, 60) * 50;
      const ms = r.int(1, 40) * 20;
      const ans = (rps * ms) / 1000;
      return choice(`An API handles **${fmtNum(rps)} requests/s**, and each takes **${ms} ms**. On average, how many requests are in flight at once?`, fmtNum(ans), [fmtNum(rps), fmtNum(rps * ms), fmtNum(rps / ms), fmtNum(ans * 10)], `${fmtNum(rps)} × ${ms / 1000}s = ${fmtNum(ans)}.`);
    }),
  ],
  '02-scaling-the-api': [
    g('instances', 'How many instances?', 'Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).', (r) => {
      const peak = r.int(4, 120) * 100;
      const cap = r.int(2, 20) * 100;
      const util = r.pick([0.5, 0.6, 0.7]);
      const n = Math.ceil(peak / (cap * util)) + 1;
      return choice(`Peak load is **${fmtNum(peak)} req/s**. One instance handles **${fmtNum(cap)} req/s** at 100% CPU. You target **${util * 100}% utilisation** plus **one spare instance (N+1)**. How many instances?`, String(n), [String(Math.ceil(peak / cap)), String(Math.ceil(peak / (cap * util))), String(n + 2), String(Math.max(1, n - 2))], `ceil(${peak} ÷ (${cap} × ${util})) + 1 = ${n}.`);
    }),
    g('pool', 'Connection pool maths', 'Total DB connections = instances × pool size per instance. It must stay below the database\'s max_connections (minus a few reserved for admin), or new connections fail under load.', (r) => {
      const inst = r.int(2, 40);
      const pool = r.pick([5, 8, 10, 15, 20, 25]);
      const max = r.pick([100, 200, 500]);
      const total = inst * pool;
      const ok = total <= max - 10;
      return choice(`You run **${inst} instances** with a pool of **${pool}** connections each. Postgres allows **${max}** connections (keep 10 for admin). What happens at full load?`, ok ? `It fits: ${total} connections` : `It doesn't fit: ${total} connections needed. Use a pooler (PgBouncer) or shrink the pools`, [ok ? `It doesn't fit: ${total} connections needed. Use a pooler (PgBouncer) or shrink the pools` : `It fits: ${total} connections`, `It fits: ${pool} connections`, `It fits: ${inst} connections`, `Connections are shared automatically`]);
    }),
    g('scaling-choice', 'Which scaling move?', 'Before adding machines, find the bottleneck: CPU-bound work, database load, slow dependencies and static assets each need a different fix.', (r) => {
      const cases: [string, string][] = [
        ['CPU is at 95% on every instance and p95 latency is climbing', 'Add instances (scale out) behind the load balancer'],
        ['CPU is at 20%, but requests wait for database connections', 'Fix slow queries and indexes, and size the pool or add a pooler'],
        ['Half of all requests are for images and the JS bundle', 'Serve static assets from a CDN'],
        ['Users are randomly logged out after scaling to 3 instances', 'Move sessions to a shared store (or stateless tokens)'],
        ['One endpoint resizes images inside the request and blocks the event loop', 'Move the work to a background job or worker thread'],
        ['Reads dominate and the primary database is overloaded', 'Add read replicas and cache hot reads'],
        ['A third-party API is slow and requests pile up', 'Set timeouts, add a circuit breaker, and move the call off the request path'],
      ];
      const [symptom, fix] = r.pick(cases);
      return choice(`**Symptom:** ${symptom}. What's the best first move?`, fix, cases.map(([, f]) => f).filter((f) => f !== fix).slice(0, 6));
    }),
    g('cdn-offload', 'CDN offload', 'If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.', (r) => {
      const rps = r.int(1, 80) * 500;
      const share = r.pick([0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
      const hit = r.pick([0.9, 0.95, 0.98]);
      const origin = rps * (1 - share) + rps * share * (1 - hit);
      return choice(`**${fmtNum(rps)} req/s** arrive. **${share * 100}%** are cacheable static requests, and the CDN hits **${hit * 100}%** of those. How many req/s reach your servers?`, `~${fmtNum(origin)}`, [`~${fmtNum(rps * (1 - share))}`, `~${fmtNum(rps * (1 - hit))}`, `~${fmtNum(rps)}`, `~${fmtNum(rps * share * (1 - hit))}`], `Dynamic ${fmtNum(rps * (1 - share))} + cache misses ${fmtNum(rps * share * (1 - hit))} ≈ ${fmtNum(origin)}.`);
    }),
  ],
  '03-databases-at-scale': [
    g('replicas', 'How many read replicas?', 'Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don\'t help write load.', (r) => {
      const reads = r.int(2, 60) * 1000;
      const cap = r.pick([1500, 2000, 2500, 4000, 5000]);
      const primaryShare = r.pick([0, 0.2]);
      const n = Math.ceil((reads * (1 - primaryShare)) / cap);
      return choice(`You have **${fmtNum(reads)} reads/s**. ${primaryShare ? `${primaryShare * 100}% of them must hit the primary (read-your-writes).` : 'All reads can go to replicas.'} One replica handles **${fmtNum(cap)} reads/s**. How many replicas do you need (no headroom)?`, String(n), [String(Math.ceil(reads / cap)), String(n + 2), String(Math.max(0, n - 1)), String(Math.ceil(reads / cap / 2))]);
    }),
    g('shards', 'How many shards?', 'Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.', (r) => {
      const tb = r.int(1, 60);
      const per = r.pick([0.5, 1, 2]);
      const growth = r.pick([1, 2, 3]);
      const n = Math.ceil((tb * growth) / per);
      return choice(`You have **${tb} TB** of data, expected to grow **${growth}×** over the planning horizon. Each shard should hold at most **${per} TB**. How many shards should you plan for?`, String(n), [String(Math.ceil(tb / per)), String(n * 2), String(Math.max(1, Math.ceil(n / 2))), String(tb * growth)]);
    }),
    g('index-choice', 'Which index?', 'Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.', (r) => {
      const e = r.pick(ENTITIES);
      const nf = r.pick(e.nums).name.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
      const cf = r.pick(e.cats).name.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
      const forms: [string, string, string[]][] = [
        [`WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20`, `(user_id, created_at DESC)`, [`(created_at)`, `(created_at, user_id)`, `(user_id) and (created_at) separately`]],
        [`WHERE ${cf} = $1 AND ${nf} > $2`, `(${cf}, ${nf})`, [`(${nf}, ${cf})`, `(${nf})`, `no index: the table is small enough`]],
        [`WHERE deleted_at IS NULL AND user_id = $1`, `a partial index on (user_id) WHERE deleted_at IS NULL`, [`(deleted_at)`, `(deleted_at, user_id)`, `a full-text index`]],
        [`WHERE lower(email) = lower($1)`, `an expression index on (lower(email))`, [`(email)`, `(email DESC)`, `a hash of the whole row`]],
        [`WHERE ${nf} BETWEEN $1 AND $2 ORDER BY ${nf}`, `(${nf})`, [`(${cf})`, `(id, ${nf})`, `a partial index WHERE ${nf} IS NULL`]],
      ];
      const [query, right, wrong] = r.pick(forms);
      return choice(`On a large \`${e.key}\` table, which index best serves:\n\n\`\`\`sql\nSELECT * FROM ${e.key} ${query};\n\`\`\``, right, wrong);
    }),
    g('db-choice', 'Database decisions', 'Default to Postgres for CRUD apps: it gives you transactions, constraints, joins, JSONB and full-text search. Reach for specialised stores when a concrete need outgrows it.', (r) => {
      const cases: [string, string][] = [
        ['a typical CRUD app with users, orders and reports', 'PostgreSQL'],
        ['session data and rate-limit counters with TTLs', 'Redis'],
        ['user-uploaded images and PDFs', 'Object storage (S3-compatible) + CDN'],
        ['full-text product search with typo tolerance at large scale', 'A search engine (OpenSearch / Meilisearch) fed from Postgres'],
        ['an append-only log of analytics events queried in aggregate', 'A columnar warehouse (BigQuery / ClickHouse)'],
        ['a few flexible attributes per product on top of a relational model', 'PostgreSQL with a JSONB column'],
        ['a durable job queue for a small app already on Postgres', 'PostgreSQL (pg-boss / Graphile Worker)'],
      ];
      const [need, tool] = r.pick(cases);
      return choice(`Best default choice for **${need}**?`, tool, cases.map(([, t]) => t).filter((t) => t !== tool).slice(0, 6));
    }),
  ],
  '04-caching': [
    g('effective-latency', 'Effective latency with a cache', 'Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.', (r) => {
      const hit = r.pick([0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 0.98, 0.99]);
      const c = r.int(1, 5);
      const b = r.int(2, 50) * 10;
      const ans = hit * c + (1 - hit) * (c + b);
      return choice(`A cache answers in **${c} ms** and the database in **${b} ms**. With a **${hit * 100}% hit ratio**, what's the average latency?`, `${+ans.toFixed(1)} ms`, [`${+(hit * c + (1 - hit) * b).toFixed(1)} ms`, `${c} ms`, `${+(hit * b).toFixed(1)} ms`, `${+((c + b) / 2).toFixed(1)} ms`], `${hit} × ${c} + ${+(1 - hit).toFixed(2)} × (${c} + ${b}) = ${+ans.toFixed(1)} ms.`);
    }),
    g('db-load', 'Database load behind a cache', 'Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.', (r) => {
      const rps = r.int(1, 100) * 500;
      const hit = r.pick([0.75, 0.8, 0.85, 0.9, 0.92, 0.95, 0.97, 0.98, 0.99]);
      const ans = rps * (1 - hit);
      return choice(`**${fmtNum(rps)} reads/s** go through a cache with a **${hit * 100}%** hit ratio. How many reads/s reach the database?`, fmtNum(ans), [fmtNum(rps * hit), fmtNum(rps), fmtNum(ans * 10), fmtNum(ans / 10)]);
    }),
    g('cache-size', 'Sizing a cache', 'Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.', (r) => {
      const keys = r.int(1, 80) * 100_000;
      const hot = r.pick([0.05, 0.1, 0.15, 0.2, 0.25]);
      const kb = r.int(1, 8);
      const gb = (keys * hot * (kb + 0.1)) / 1_000_000;
      return choice(`You have **${fmtNum(keys)}** items, and the hottest **${hot * 100}%** get almost all reads. Each cached value is **${kb} KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?`, `${+gb.toPrecision(2)} GB`, [`${+(gb / hot).toPrecision(2)} GB`, `${+(gb * 10).toPrecision(2)} GB`, `${+(gb / 10).toPrecision(2)} GB`, `${+(keys * kb / 1e9).toPrecision(2)} GB`]);
    }),
    g('cache-pattern', 'Which caching approach?', 'Cache-aside (lazy loading) is the default. Write-through keeps the cache warm at a write cost. TTLs bound staleness. Some data should never be cached.', (r) => {
      const cases: [string, string][] = [
        ['a public product page that changes a few times a day', 'Cache at the CDN with a short s-maxage, plus cache-aside in Redis'],
        ['the current user\'s profile on every request', 'Cache-aside with a short TTL, invalidated when the profile is updated'],
        ['the stock count used to confirm a purchase', 'Don\'t cache it for the decision: read it from the database in the transaction'],
        ['a leaderboard recomputed from millions of rows', 'Precompute it into a Redis sorted set (or a materialised view)'],
        ['an expensive report that may be a few minutes stale', 'Cache the result with a TTL and a stampede lock (or stale-while-revalidate)'],
        ['a response personalised with the user\'s name', 'Cache-Control: private (never in a shared CDN)'],
      ];
      const [what, how] = r.pick(cases);
      return choice(`Best approach for **${what}**?`, how, cases.map(([, h]) => h).filter((h) => h !== how).slice(0, 5));
    }),
  ],
  '05-async-work': [
    g('workers', 'How many workers?', 'Workers needed ≈ arrival rate × processing time per job (Little\'s law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.', (r) => {
      const rate = r.int(2, 300);
      const sec = r.pick([0.2, 0.5, 1, 1.5, 2, 3, 5, 8, 12, 20]);
      const n = Math.ceil(rate * sec);
      return choice(`Jobs arrive at **${rate}/s** and each takes **${sec} s** of work, one job per worker at a time. At least how many workers keep up?`, String(n), [String(rate), String(Math.ceil(rate / sec)), String(n * 2), String(Math.ceil(sec))]);
    }),
    g('drain', 'Draining a backlog', 'Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn\'t faster than arrivals, it never drains.', (r) => {
      const backlog = r.int(1, 200) * 1000;
      const proc = r.int(5, 40) * 10;
      const arr = r.int(1, proc / 10 - 1) * 10;
      const net = proc - arr;
      const min = backlog / net / 60;
      return choice(`A queue has **${fmtNum(backlog)} jobs** waiting. Workers finish **${proc}/s** while new jobs arrive at **${arr}/s**. How long until the backlog is gone?`, `~${+min.toPrecision(3)} minutes`, [`~${+(backlog / proc / 60).toPrecision(3)} minutes`, `~${+(backlog / arr / 60).toPrecision(3)} minutes`, `It never drains`, `~${+(min * 60).toPrecision(3)} minutes`], `${fmtNum(backlog)} ÷ (${proc} − ${arr}) ≈ ${+min.toPrecision(3)} minutes.`);
    }),
    g('backoff', 'Retry schedules', 'Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.', (r) => {
      const base = r.pick([1, 2, 3, 5]);
      const retries = r.int(3, 7);
      const cap = r.pick([10, 30, 60, 120, 1000]);
      const delays = Array.from({ length: retries }, (_, i) => Math.min(base * 2 ** i, cap));
      const total = delays.reduce((a, b) => a + b, 0);
      return choice(`A job retries **${retries} times** with delays of \`min(${base}s × 2^attempt, ${cap}s)\` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?`, `${total}s`, [`${base * retries}s`, `${base * 2 ** retries}s`, `${delays[delays.length - 1]}s`, `${total * 2}s`], `Delays: ${delays.join(' + ')} = ${total}s.`);
    }),
    g('async-choice', 'Sync or async?', 'Do work **inside the request** only when the user needs the result right now. Everything else (emails, image processing, webhooks, reports) goes to a queue, with retries and idempotent consumers.', (r) => {
      const cases: [string, string][] = [
        ['send a welcome email after signup', 'Queue it (outbox pattern), and respond to the signup immediately'],
        ['check that a coupon code is valid at checkout', 'Do it synchronously in the request'],
        ['generate thumbnails for an uploaded photo', 'Queue a job, and show a placeholder until it\'s ready'],
        ['charge a credit card when the user clicks Pay', 'Do it synchronously, with an idempotency key, and confirm via a webhook'],
        ['export a 200k-row CSV', 'Queue a job, then notify the user with a download link'],
        ['notify 10,000 followers about a new post', 'Fan out in background jobs, in batches'],
        ['validate a form field', 'Do it synchronously in the request'],
      ];
      const [what, how] = r.pick(cases);
      return choice(`How should you **${what}**?`, how, cases.map(([, h]) => h).filter((h) => h !== how).slice(0, 5));
    }),
  ],
  '06-reliability': [
    g('error-budget', 'Error budgets', 'Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.', (r) => {
      const slo = r.pick([0.99, 0.995, 0.999]);
      const req = r.int(1, 100) * 1_000_000;
      const failed = Math.round(req * (1 - slo) * r.pick([0.3, 0.7, 1.2, 2]));
      const budget = req * (1 - slo);
      const left = budget - failed;
      return choice(`Your SLO is **${pct(slo)}** of requests succeeding this month. There have been **${fmtNum(req)}** requests and **${fmtNum(failed)}** failures. How much error budget is left?`, left >= 0 ? `${fmtNum(left)} failed requests (${Math.round((left / budget) * 100)}% of the budget)` : `None: it's overspent by ${fmtNum(-left)}`, [`${fmtNum(budget)} failed requests (100% of the budget)`, `None: it's overspent by ${fmtNum(Math.abs(left) + 1000)}`, `${fmtNum(Math.abs(left) * 2)} failed requests (${Math.min(99, Math.round((Math.abs(left) * 2 / budget) * 100))}% of the budget)`, `${fmtNum(failed)} failed requests`]);
    }),
    g('fanout-tail', 'Tail latency under fan-out', 'If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That\'s why p99 matters more than averages.', (r) => {
      const n = r.int(2, 100);
      const p = r.pick([0.05, 0.02, 0.01, 0.005, 0.001]);
      const ans = 1 - (1 - p) ** n;
      return choice(`A page calls **${n}** backend services in parallel and waits for all of them. Each call is slower than its p${+(100 - p * 100).toPrecision(4)} latency ${pct(p)} of the time. How often is the page slow?`, pct(ans), [pct(p), pct(p * n * 2), pct(p / n), pct(Math.min(1, ans * 3))], `1 − (1 − ${p})^${n} ≈ ${pct(ans)}.`);
    }),
    g('timeouts', 'Timeout budgets', 'Downstream timeouts must fit inside the caller\'s timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.', (r) => {
      const t = r.int(1, 30) * 100;
      const retries = r.int(1, 3);
      const backoff = r.pick([0, 100, 200]);
      const worst = (retries + 1) * t + retries * backoff;
      return choice(`A service calls a dependency with a **${t} ms** timeout, retries **${retries}** times, and waits **${backoff} ms** between attempts. What's the worst-case time spent on this call?`, `${worst} ms`, [`${t} ms`, `${t * retries} ms`, `${worst + t} ms`, `${(retries + 1) * t} ms`].filter((x) => x !== `${worst} ms`), `(${retries} + 1) × ${t} + ${retries} × ${backoff} = ${worst} ms.`);
    }),
    g('incident-step', 'What do you do first?', 'During an incident: **mitigate first** (roll back, flip a flag, scale up), communicate, *then* find the root cause. Fix forward only when rollback isn\'t possible.', (r) => {
      const cases: [string, string][] = [
        ['5xx errors spike right after a deploy', 'Roll back the deploy (or switch off the new feature flag)'],
        ['the database CPU is at 100% from one runaway report query', 'Kill or throttle that query, then fix it'],
        ['a third-party payment API is down', 'Degrade gracefully: queue orders as pending and tell users'],
        ['disk is 98% full on the database server', 'Free space or grow the volume immediately, then find what filled it'],
        ['a leaked API key is found in a public repo', 'Revoke and rotate the key immediately'],
        ['latency doubled with no deploy, and traffic is up 4×', 'Scale out and enable rate limiting, then investigate the source of the traffic'],
      ];
      const [what, first] = r.pick(cases);
      return choice(`**${what}**. What's the first step?`, first, cases.map(([, f]) => f).filter((f) => f !== first).concat(['Start writing the postmortem', 'Wait 30 minutes to see if it recovers']).slice(0, 6));
    }),
  ],
  '07-api-design-at-scale': [
    g('rate-limit', 'Token bucket rate limits', 'A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.', (r) => {
      const b = r.int(1, 20) * 5;
      const rate = r.int(1, 20);
      const sec = r.int(1, 12) * 5;
      const ans = b + rate * sec;
      return choice(`A client starts with a full bucket of **${b} tokens** that refills at **${rate}/s**. Hammering the API nonstop, how many requests can it make in the first **${sec} seconds**?`, String(ans), [String(b), String(rate * sec), String(b * sec), String(ans + b)], `${b} (the burst) + ${rate} × ${sec} = ${ans}.`);
    }),
    g('pages', 'Pagination maths', 'Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.', (r) => {
      const total = r.int(50, 5000);
      const size = r.pick([10, 20, 25, 50, 100]);
      const pages = Math.ceil(total / size);
      return choice(`An endpoint returns **${fmtNum(total)} items**, **${size}** per page. How many pages are there?`, String(pages), [String(Math.floor(total / size)), String(pages + 1), String(Math.round(total / size / 2)), String(size)]);
    }),
    g('bandwidth', 'API bandwidth', 'Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.', (r) => {
      const rps = r.int(1, 50) * 100;
      const kb = r.int(1, 100) * 5;
      const ratio = r.pick([1, 5, 8]);
      const mbps = (rps * kb * 8) / 1000 / ratio;
      return choice(`An endpoint serves **${fmtNum(rps)} req/s** with **${kb} KB** JSON responses${ratio > 1 ? `, compressed ${ratio}×` : ' (uncompressed)'}. Roughly how much outbound bandwidth is that?`, `${+mbps.toPrecision(3)} Mbit/s`, [`${+(mbps * ratio).toPrecision(3)} Mbit/s`, `${+(mbps / 8).toPrecision(3)} Mbit/s`, `${+(mbps * 1000).toPrecision(3)} Mbit/s`, `${+(rps * kb / 1000).toPrecision(3)} Mbit/s`].filter((x) => x !== `${+mbps.toPrecision(3)} Mbit/s`));
    }),
    g('api-choice', 'API design decisions', 'Good public APIs are **predictable**: consistent resource names, the right status codes, cursor pagination, idempotency keys for unsafe operations, and additive versioning.', (r) => {
      const cases: [string, string][] = [
        ['a client retries a POST /payments after a timeout', 'Require an Idempotency-Key and replay the stored response'],
        ['you need to rename a response field used by mobile apps', 'Add the new field, deprecate the old one, remove it after clients migrate'],
        ['partners need to know when an order ships', 'Send signed webhooks with retries (and offer a polling endpoint)'],
        ['an infinite-scroll feed where new items arrive constantly', 'Cursor (keyset) pagination'],
        ['a third-party app acts on behalf of a user', 'OAuth 2.0 authorization code with PKCE and scoped tokens'],
        ['a client exceeds its quota', '429 Too Many Requests with a Retry-After header'],
      ];
      const [what, how] = r.pick(cases);
      return choice(`**${what}**. What's the best design?`, how, cases.map(([, h]) => h).filter((h) => h !== how).slice(0, 5));
    }),
  ],
  '08-data-security-ops': [
    g('rpo', 'Backups: RPO and RTO', '**RPO** (recovery point objective) is how much data you can lose: the time since the last good backup. **RTO** (recovery time objective) is how long recovery takes. Point-in-time recovery (WAL archiving) shrinks RPO to minutes.', (r) => {
      const every = r.pick([1, 2, 4, 6, 8, 12, 24, 48]);
      const pitr = r.bool();
      const ans = pitr ? 'A few minutes (point-in-time recovery)' : `Up to ${every} hours of data`;
      return choice(`You take a full backup every **${every} hours**${pitr ? ', and continuously archive the WAL for point-in-time recovery' : ', with nothing in between'}. The database disk dies just before the next backup. What's the worst-case data loss?`, ans, [`Up to ${every} hours of data`, 'A few minutes (point-in-time recovery)', 'Nothing: backups are instant', `Up to ${every * 2} hours of data`].filter((x) => x !== ans));
    }),
    g('cost', 'Back-of-the-envelope costs', 'Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.', (r) => {
      const gbDay = r.int(1, 200) * 10;
      const price = r.pick([0.05, 0.06, 0.08, 0.09, 0.12]);
      const cdn = r.bool();
      const monthly = gbDay * 30 * price * (cdn ? 0.3 : 1);
      return choice(`You serve **${gbDay} GB/day** of images. Egress costs **$${price}/GB**${cdn ? ', but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN\'s own fee)' : ''}. Roughly what's the monthly egress bill?`, `$${fmtNum(monthly)}`, [`$${fmtNum(gbDay * price)}`, `$${fmtNum(monthly * 10)}`, `$${fmtNum(gbDay * 365 * price)}`, `$${fmtNum(monthly / (cdn ? 0.3 : 0.5))}`].filter((x) => x !== `$${fmtNum(monthly)}`));
    }),
    g('tenancy', 'Multi-tenant isolation', 'Most SaaS apps start with **one shared database and a tenant_id on every row**, enforced in every query (or with Postgres row-level security). Separate schemas or databases per tenant cost more to operate, so use them for strict isolation requirements.', (r) => {
      const cases: [string, string][] = [
        ['a new B2B SaaS with 50 small customers', 'Shared database with tenant_id on every row (plus row-level security)'],
        ['a bank customer whose contract requires physically separate data', 'A dedicated database for that tenant'],
        ['one tenant\'s heavy reports slow everyone down', 'Rate limit per tenant and move reports to a replica or warehouse'],
        ['a query forgot WHERE tenant_id = … and leaked data across customers', 'Enforce isolation centrally (row-level security or a scoped repository), not per query'],
      ];
      const [what, how] = r.pick(cases);
      return choice(`**${what}**. What's the best approach?`, how, cases.map(([, h]) => h).filter((h) => h !== how).concat(['A separate microservice per tenant', 'Encrypt each tenant\'s rows with the same key']));
    }),
    g('privacy', 'Personal data handling', 'Collect less, keep it for less time, and know where every copy lives (database, logs, backups, search index, third parties). Deletion requests must reach all of them.', (r) => {
      const cases: [string, string][] = [
        ['a user requests account deletion', 'Delete or anonymise their data in every system (search index, files, third parties), and log the deletion'],
        ['request logs include users\' email addresses', 'Stop logging them (redact), and let old logs expire'],
        ['you must keep invoices for 7 years', 'Keep the financial records, anonymising personal fields where the law allows'],
        ['an analytics event includes a full home address', 'Remove it: collect only what the analysis needs'],
      ];
      const [what, how] = r.pick(cases);
      return choice(`**${what}**. What should you do?`, how, cases.map(([, h]) => h).filter((h) => h !== how).concat(['Set deleted = true on the user row only', 'Nothing: backups make it impossible anyway']));
    }),
  ],
  '09-case-studies': [
    g('short-ids', 'Short ID space', 'With an alphabet of A characters and length L, there are A^L possible IDs. For random IDs, collisions become likely after about √(A^L) items (the birthday paradox), so keep usage far below that or check for duplicates.', (r) => {
      const alpha = r.pick([[62, 'base62 (a–z, A–Z, 0–9)'], [36, 'base36 (a–z, 0–9)'], [16, 'hex']] as const);
      const len = r.int(4, 10);
      const space = alpha[0] ** len;
      const fmt = (n: number) => (n >= 1e12 ? `~${+(n / 1e12).toPrecision(2)} trillion` : fmtNum(n));
      return choice(`A URL shortener uses **${len}-character** codes in **${alpha[1]}**. How many distinct codes are possible?`, fmt(space), [fmt(alpha[0] * len), fmt(space / alpha[0]), fmt(10 ** len), fmt(space * alpha[0])], `${alpha[0]}^${len} ≈ ${fmt(space)}.`);
    }),
    g('fanout-write', 'Feed fan-out cost', 'Fan-out **on write** copies each post into every follower\'s feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it\'s opened. Many systems mix both: push for normal users, pull for celebrities.', (r) => {
      const posts = r.int(1, 50) * 10;
      const followers = r.int(1, 40) * 100;
      const ans = posts * followers;
      return choice(`Users publish **${posts} posts/s**, and each author has **${fmtNum(followers)} followers** on average. With fan-out on write, how many feed inserts per second is that?`, fmtNum(ans), [fmtNum(posts), fmtNum(followers), fmtNum(ans / 10), fmtNum(ans * 10)]);
    }),
    g('chat', 'Real-time connections', 'Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.', (r) => {
      const users = r.int(1, 100) * 10_000;
      const online = r.pick([0.02, 0.05, 0.1, 0.15, 0.2, 0.3]);
      const perServer = r.pick([5_000, 10_000, 25_000, 50_000, 100_000]);
      const n = Math.ceil((users * online) / perServer);
      return choice(`A chat app has **${fmtNum(users)} users**. At peak, **${online * 100}%** are online, each holding one WebSocket. One server holds **${fmtNum(perServer)}** connections. How many servers do you need (no headroom)?`, String(n), [String(Math.ceil(users / perServer)), String(n * 2), String(Math.max(1, n - 1)), String(Math.ceil(n / 2) || 1)].filter((x) => x !== String(n)));
    }),
    g('case-choice', 'Case study decisions', 'Every case study comes down to a few key decisions: where the data lives, what must be consistent, what can be async, and what happens when parts fail.', (r) => {
      const cases: [string, string][] = [
        ['two users book the same last seat at the same moment', 'A unique constraint or an atomic conditional update in the database'],
        ['users upload 20 MB photos', 'Pre-signed direct uploads to object storage, then async processing'],
        ['a shortened link must redirect as fast as possible worldwide', 'Cache code→URL at the edge, with a 301/302 from the nearest location'],
        ['search must tolerate typos across millions of products', 'A dedicated search index kept in sync from the database'],
        ['notifications must not slow down posting a comment', 'Write the comment, enqueue the fan-out job, and respond immediately'],
        ['the concert sale gets 500k users at 10:00', 'A virtual waiting room that admits users at a controlled rate'],
      ];
      const [what, how] = r.pick(cases);
      return choice(`**${what}**. What's the key design move?`, how, cases.map(([, h]) => h).filter((h) => h !== how).slice(0, 5));
    }),
  ],
};
