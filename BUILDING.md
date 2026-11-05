# Building SimpleBootQuest — A Guided Tour for Growing Engineers

> **Who this is for:** you're a junior developer who can write some JavaScript and maybe a little React. You want to know how a *real* full-stack app is planned, structured, and built. You also want to know **why** each decision was made, not just what the code looks like.

The [README](./README.md) explains what SimpleBootQuest *is*. This document explains **how it was built, in what order, and why.** Read it alongside the git history: each step below matches one or more commits, so you can `git checkout` a commit and see the codebase exactly as it was at that point.

The skills that move you from junior to mid-level to senior are mostly not about syntax. They're about:

1. **Sequencing:** knowing what to build first so that later work is easy.
2. **Boundaries:** deciding where one piece of code ends and another begins.
3. **Trade-offs:** picking the simplest thing that works, *and knowing what you gave up.*
4. **Verification:** proving your code works instead of hoping it does.

Every step below calls out which of these it's practicing.

---

## Table of Contents

- [Step 0 — Decide what you're building (before writing code)](#step-0--decide-what-youre-building-before-writing-code)
- [Step 1 — The monorepo skeleton](#step-1--the-monorepo-skeleton)
- [Step 2 — Shared domain logic first](#step-2--shared-domain-logic-first)
- [Step 3 — The code runner (the riskiest piece)](#step-3--the-code-runner-the-riskiest-piece)
- [Step 4 — Content as files, with a schema](#step-4--content-as-files-with-a-schema)
- [Step 5 — Test the content, not just the code](#step-5--test-the-content-not-just-the-code)
- [Step 6 — The database schema](#step-6--the-database-schema)
- [Step 7 — The API: layers, auth, and idempotent XP](#step-7--the-api-layers-auth-and-idempotent-xp)
- [Step 8 — The React frontend](#step-8--the-react-frontend)
- [Step 9 — Verify like a user, then automate it](#step-9--verify-like-a-user-then-automate-it)
- [Step 10 — Scaling the content (and what it taught us)](#step-10--scaling-the-content-and-what-it-taught-us)
- [Step 11 — Parallel tracks and a new quest type](#step-11--parallel-tracks-and-a-new-quest-type)
- [Step 12 — Grading tests with mutation testing](#step-12--grading-tests-with-mutation-testing)
- [Step 13 — Doubling the content without lowering the bar](#step-13--doubling-the-content-without-lowering-the-bar)
- [Step 14 — A design council, a real runtime, and content at 10×](#step-14--a-design-council-a-real-runtime-and-content-at-10)
- [Recap: the build order, and why](#recap-the-build-order-and-why)
- [Exercises: extend it yourself](#exercises-extend-it-yourself)

<!-- Later steps are appended below as the app is built. -->

---

## Step 0 — Decide what you're building (before writing code)

*Skill: sequencing.*

Before writing any code, write down the **core loop** of the product in one sentence:

> A learner reads a short lesson, writes code in the browser, runs tests against it, and earns XP when the tests pass.

Everything else (levels, streaks, achievements, leaderboards, projects) is decoration around that loop. Seniors ask this question first, because it tells you **what must exist on day one** and what can wait.

From the core loop we can list the nouns, which become our data model:

| Noun | Where it lives | Why there |
|------|----------------|-----------|
| Chapter, Quest (lesson + starter code + tests) | **Files in the repo** (`content/`) | Content is written by humans, reviewed in pull requests, and versioned with the code. A database would make that harder. |
| User | **Database** | Created at runtime by sign-ups. |
| Progress (which quests a user finished, their draft code) | **Database** | Changes constantly, per user. |
| Achievements earned | **Database** | Per user. |

That split ("content in git, user state in the database") is one of the most important decisions in the whole project. It means:

- Adding a lesson is a pull request with no migration, admin panel, or seed script.
- Progress rows reference quests by a **stable string slug** (`"js-functions"`), not a database foreign key. The trade-off: if you rename a slug, old progress rows point at nothing. We accept that and write a validation script that catches duplicate or malformed slugs.

Next, pick the tech. The product teaches JS/TS/Node/React, so we build it with the same stack. That's dogfooding: every pattern the curriculum teaches appears somewhere in this codebase.

| Layer | Choice | Why |
|-------|--------|-----|
| Language | TypeScript everywhere | One language, shared types between client and server. |
| Frontend | React + Vite + React Router | The industry default. Vite is fast and has almost no config. |
| Backend | Node + Express 5 | Express is small enough to understand completely. Version 5 handles async errors natively. |
| Database | PostgreSQL + Prisma | Postgres is the default relational DB. Prisma gives typed queries and migrations. |
| Tests | Vitest + Supertest | Same API as Jest, but faster and ESM-native. |

**The hardest question:** where does learner code run? We'll answer it in Step 3, because it's the riskiest part of the system, and you always tackle the riskiest part early.

---

## Step 1 — The monorepo skeleton

*Skill: boundaries.*

```
simplebootquest/
├── apps/
│   ├── api/        # Express server
│   └── web/        # React app
├── packages/
│   ├── shared/     # Types + pure logic used by BOTH apps
│   └── runner/     # Runs learner code against tests
├── content/        # The curriculum (markdown + code files)
└── scripts/        # One-off tooling (content validation)
```

We use **npm workspaces** (`"workspaces"` in the root `package.json`). Each folder is its own package with its own `package.json`, and they can depend on each other by name (`"@sbq/shared": "0.1.0"`). npm symlinks them together in `node_modules`.

**Why a monorepo instead of two repos?**

- The API and the web app share types (`QuestDetail`, `PublicUser`, ...). With one repo, changing a type and both of its consumers happens in **one commit**. With two repos you need to publish a package and coordinate versions.
- One `npm install`, one `npm test`, one place to look.

**Why `apps/` vs `packages/`?** It's a convention: `apps` are things you *deploy*, and `packages` are libraries that apps *import*. Libraries must never import from apps. That rule keeps the dependency graph one-directional:

```
web ──┐
      ├──► runner ──► shared
api ──┘──────────────► shared
```

**Small but important decisions in this step:**

- `tsconfig.base.json` holds the strict TypeScript settings once. Each package `extends` it. `"strict": true` and `"noUncheckedIndexedAccess": true` catch the bugs juniors most often ship: `undefined` sneaking out of arrays and objects.
- The shared packages point `"main"` straight at `src/index.ts` (TypeScript source, not compiled JS). Vite, Vitest and tsx all understand TypeScript, so we skip a build step for internal packages entirely. **Trade-off:** plain `node` can't run them. We handle that in the API's production build by bundling (Step 6).
- `.env.example` is committed and `.env` is ignored. Never commit secrets. Do commit a template that shows which variables exist.
- `docker-compose.yml` gives every contributor an identical Postgres with `docker compose up -d`. That makes "works on my machine" problems much rarer.

---

## Step 2 — Shared domain logic first

*Skills: sequencing, verification.*

Before any server or UI exists, we write the **pure business rules** in `packages/shared`:

- `levels.ts` turns XP into levels and works out streaks.
- `achievements.ts` holds a declarative list of achievements and a function that returns which new ones were just earned.
- `types.ts` defines the API's request and response shapes, shared by client and server.

**Why first?** Pure functions (no database, no HTTP, no DOM) are the easiest code to write, test, and reason about. They're also the code *most likely to be wrong in subtle ways* (off-by-one errors in level thresholds, timezone bugs in streaks). Writing them first, with tests, means every later layer stands on verified ground.

### Worked example: the level curve

A naive "every 100 XP is a level" curve feels flat. Instead each level costs 50 XP more than the last: 100, 150, 200, ... The cumulative threshold for level `L` (with `n = L - 1`) is an arithmetic series:

```
100 + 150 + ... (n terms) = n/2 * (2·100 + (n-1)·50) = 25·n·(n+3)
```

Writing the formula in a comment and pinning it with a test (`[0, 100, 250, 450, 700]`) is what turns "I think this is right" into "I know this is right". A real bug was caught exactly this way during development: the first draft of the formula was wrong, and the boundary test failed immediately.

### Worked example: streaks and time zones

`nextStreak(current, lastActiveDate, today)` takes **dates as strings** (`"2026-01-31"`), not `Date` objects, and never calls `new Date()` itself. This is **dependency injection in its simplest form**: the function doesn't reach out for the current time, the caller passes it in. That makes it trivially testable (`'2026-01-31' → '2026-02-01'` is a consecutive day) and keeps all time-zone decisions in one place (we use UTC days).

> 💡 **Mid-level habit:** whenever a function reads the clock, generates random numbers, or does I/O, ask "could the caller pass this in instead?" Your tests will thank you.

### Why achievements are data, not `if` statements

```ts
{ key: 'streak-7', title: 'Week Warrior', earned: (c) => c.streak >= 7 }
```

Each achievement is an object with a predicate. Adding one is a one-line change. The UI can list every achievement (earned and locked) without knowing the rules, and the server stores only the `key`. This is the **open/closed principle** in practice: open to extension (add a row), closed to modification (no function needs editing).

---

## Step 3 — The code runner (the riskiest piece)

*Skills: trade-offs, verification.*

**The question:** a learner writes `function add(a, b) { return a + b }`. Where does that code run, and how do we check it?

| Option | Pros | Cons |
|--------|------|------|
| On the server with `eval`/`vm` | Results can't be faked | **Dangerous.** Node's `vm` module is *not* a security boundary. Learner code could read your env vars or delete files. |
| On the server in disposable containers (like boot.dev) | Safe and trustworthy | Expensive infrastructure: container orchestration, queues, cold starts. |
| **In the learner's browser, in a Web Worker** | Free, instant, and safe for *our* servers. A Worker has no DOM access and can be killed on timeout. | A determined user could fake a "pass" with dev tools. |

We chose the browser. **This is a deliberate trade-off, and the most important thing to understand in this step:** the browser runner gives up result integrity in exchange for zero infrastructure and instant feedback. For a self-paced learning tool, cheating only cheats yourself (The Odin Project works on the same honor system). We write the trade-off down in the README so future maintainers know it was intentional, and that upgrading to sandboxed server-side execution is a known next step, not an oversight.

### How it works

`packages/runner` exports `runQuest({ language, code, tests, setup })`:

1. **Transpile** the learner's code with [Sucrase](https://github.com/alangpierce/sucrase), a tiny, fast compiler that strips TypeScript types, converts JSX, and rewrites `export` statements. We chose it over the full TypeScript compiler, which is around 10 MB in the browser. **Trade-off:** Sucrase doesn't type-check, so TypeScript quests verify *behavior*, not types.
2. **Concatenate** the learner's code and the quest's tests into one `async` function body. Because they share a scope, tests can call `add(1, 2)` directly. The learner doesn't have to learn an export/import ceremony on lesson one.
3. **Inject helpers** as function parameters: `test`, `expect`, a captured `console`, and, depending on the language, JSX helpers (`h`, `render`, `text`) or SQL helpers (`query`, `result`).

   > **A scoping bug worth learning from.** Function parameters and `const` declarations live in the same scope, so a learner writing `const text = ...` got *"Identifier 'text' has already been declared"*, a baffling error for a beginner. The fix wraps the code in a nested block: `{ learnerCode; { tests } }`. Inner blocks may shadow outer names, the tests still see everything the learner defined, and the helper functions Sucrase injects into *both* files (like `_nullishCoalesce`) no longer collide. A regression test pins it down. The lesson: **the platform's own globals are a leaky abstraction**, so design for learners who know nothing about them.
4. **Run each registered test** with a per-test timeout, collecting pass or fail plus a readable error message.

### Why write our own `expect` instead of bundling Jest?

Jest and Vitest are built for Node. They expect a file system and a CLI process. Our `expect` (`src/expect.ts`) is about 250 lines, has zero dependencies, runs anywhere, and mirrors the Vitest API (`toBe`, `toEqual`, `toThrow`, `.not`, `.resolves`, `.rejects`, ...). So what learners practice transfers directly to real projects. Writing it is also a great exercise: Chapter 12 of the curriculum asks learners to build their own `deepEqual` and mock functions.

### SQL in the browser

SQL quests use [sql.js](https://github.com/sql-js/sql.js), which is SQLite compiled to WebAssembly. Each run creates a **fresh in-memory database**, runs the quest's `setup` SQL (schema and seed data), then the learner's query. Tests inspect `result` (rows from the last statement) or call `query()` to check what an `INSERT` or `UPDATE` did.

**Trade-off:** the curriculum's projects use PostgreSQL, but quests run SQLite. For the subset of SQL taught (SELECT, WHERE, JOIN, GROUP BY, INSERT, UPDATE, DELETE), the two dialects are identical. Lessons point out the few places where they differ.

### React without React

To test components we don't need a real DOM. `src/jsx.ts` is a ~100-line JSX runtime: `h()` builds plain objects, and `render()` calls function components until only HTML-like elements remain. Tests then assert on structure (`el.type === 'ul'`) and text (`text(el)`). It's a miniature version of what React Testing Library does on top of a real DOM.

### Verification

`src/runner.test.ts` tests the runner itself: passing code, failing code, syntax errors, async tests, timeouts, TypeScript, JSX and SQL. Later we'll go a level further and run *every quest's reference solution* through this same runner to prove the curriculum itself is correct (Step 5).

---

## Step 4 — Content as files, with a schema

*Skill: boundaries.*

Each quest is a folder:

```
content/tracks/01-full-stack/       # (later: one folder per track, see Step 11)
└── 01-javascript-foundations/
    ├── chapter.md                 # frontmatter: title, description
    └── 03-control-flow/
        ├── quest.md               # frontmatter + the lesson in Markdown
        ├── starter.js             # what the learner sees first
        ├── tests.js               # what the runner checks
        └── solution.js            # reference solution (revealed after 3 attempts or completion)
```

Quizzes and projects put their data (questions, requirements) in the frontmatter instead of separate files.

**Design decisions worth copying:**

- **Ordering comes from the folder name** (`03-control-flow`). `ls` shows the real course order, and reordering is a rename. The number is stripped to form the chapter slug.
- **The quest's `slug` lives in frontmatter, not the folder name.** Progress in the database is keyed by slug. If we derived it from the folder name, renumbering folders would orphan everyone's progress. *Identity should be stable, and position should be free to change.*
- **Validate at the boundary.** `packages/curriculum` parses frontmatter with [Zod](https://zod.dev) schemas. A typo like `type: qiuz` fails loudly at startup with a file path and field name. It doesn't turn into a mysterious `undefined` in the UI weeks later. Anything that enters your program from outside (files, HTTP bodies, env vars) should be validated once at the edge and trusted afterwards.
- **It's its own package** (`@sbq/curriculum`), so the API *and* the validation script can load content without either one importing the other.

---

## Step 5 — Test the content, not just the code

*Skill: verification.*

Content has bugs too. A quest whose tests are wrong is worse than a code bug: it tells a learner their correct answer is wrong. `scripts/validate-content.ts` runs on every `npm test` and checks two things for **every code quest**:

1. The **reference solution passes** every test. This proves the tests are satisfiable and correct.
2. The **starter code fails** at least one test. This proves the quest isn't free XP and that the tests actually test something.

Check #2 is a simple form of **mutation testing**: if the tests can't tell the empty starter apart from a correct solution, they aren't testing anything.

Writing this script caught real issues during development. One example: a starter stub left a `Promise.reject()` unhandled, which crashed Node (browsers just log a warning). The fix was a process-level `unhandledRejection` handler in the validator. The lesson: **your tooling runs in a different environment than production** (Node vs browser), and those differences show up in exactly these edge cases.

### How the lessons are written

Each lesson follows the same shape, and that consistency is part of the design:

1. **The concept**, in a few sentences and a short code sample.
2. **The gotcha**: the bug juniors actually ship (`fetch` doesn't reject on 404, `sort()` compares strings, sequential `await` in loops).
3. **The task**, with exact function names and behaviors spelled out like a spec.

Every chapter ends with a quiz checkpoint and a **boss**. The bosses build on each other: an in-memory todo list (Ch. 1), an HTTP client for it (Ch. 2), a typed generic store (Ch. 3), and eventually a real Express + Postgres API and a React frontend. The curriculum mirrors how you'd build a real app: logic first, then I/O, then UI.

---

## Step 6 — The database schema

*Skills: boundaries, trade-offs.*

`apps/api/prisma/schema.prisma` has only **three models**, because content lives in files (Step 0):

| Model | Purpose | Key constraint |
|-------|---------|----------------|
| `User` | Account, XP, streak | `email @unique` |
| `QuestProgress` | One row per (user, quest): status, saved code, attempts, project links | `@@unique([userId, questSlug])` |
| `UserAchievement` | Which badges a user has earned | `@@id([userId, key])` |

**Decisions worth noticing:**

- **The composite unique key on `QuestProgress`** is what makes `upsert` possible ("create the row if it doesn't exist, otherwise update it"). It also guarantees, *at the database level*, that a user can never have two progress rows for one quest. Constraints are enforced even when application code has bugs.
- **`xp`, `streak` and `longestStreak` are stored on `User`**, even though XP could be computed by summing progress rows. This is deliberate **denormalisation**: the leaderboard sorts by XP on every page view, and `ORDER BY xp` on an indexed column is far cheaper than aggregating every user's progress. The trade-off is that the two must be kept in sync. They are, because they're updated in the same transaction (Step 7).
- **`onDelete: Cascade`**: deleting a user deletes their progress and achievements. Without it, the delete fails with a foreign-key error, which is sometimes what you want (e.g. orders in a shop), but not here.
- **IDs are `cuid()` strings**, not autoincrement integers. Sequential ids leak information (`/users/42` tells you there are about 42 users) and invite people to guess other users' ids.
- **`lastActiveDate` is a `"YYYY-MM-DD"` string in UTC**, matching the pure `nextStreak()` function from Step 2. Storing exactly the shape your logic needs avoids conversion bugs.

### Prisma 7 specifics

Prisma 7 no longer ships a native query engine. It talks to Postgres through a **driver adapter** (`@prisma/adapter-pg`, built on the `pg` package):

```ts
new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
```

The connection URL moved out of `schema.prisma` into `prisma.config.ts`, and the client is generated into `src/generated/prisma` (gitignored, regenerated by `postinstall`). When a tool's major version changes how it works, **read the generated code and the type definitions** rather than trusting old blog posts. That's how this setup was verified.

Migrations are committed (`prisma/migrations/`). Development uses `prisma migrate dev`, which creates and applies migrations. Production uses `prisma migrate deploy`, which only applies existing ones and never generates anything.

---

## Step 7 — The API: layers, auth, and idempotent XP

*Skills: boundaries, verification, trade-offs.*

```
apps/api/src/
├── server.ts            # the ONLY file that reads process.env, opens ports, handles SIGTERM
├── app.ts               # createApp(deps): builds the Express app (no listen!)
├── config.ts            # Zod-validated config: fail fast at boot
├── db.ts                # Prisma client factory
├── auth.ts              # hashing, JWT cookies, optionalAuth/requireAuth, toPublicUser
├── errors.ts            # HttpError, parse(schema, data), the central error handler
├── logger.ts            # structured JSON logs
├── routes/              # HTTP in, HTTP out: auth.ts, quests.ts, me.ts
└── services/progress.ts # business rules: XP, streaks, achievements
```

### `createApp(deps)`: dependency injection at the top level

`createApp({ config, db, curriculum, clock })` receives **everything it depends on**. `server.ts` passes the real things. The tests pass a test database and a **fake clock**, which is how `test/quests.test.ts` checks streaks across days without waiting days:

```ts
clock.set('2026-03-10T09:00:00Z'); // day 1 → streak 1
clock.set('2026-03-11T23:00:00Z'); // day 2 → streak 2
clock.set('2026-03-14T08:00:00Z'); // gap   → streak resets to 1
```

The same idea appears at every scale in this codebase, from `nextStreak(today)` in Step 2 to the whole app here. Learners practice it in the curriculum's Chapter 12.

### The hardest bug in the app: awarding XP twice

A learner double-clicks "Submit", or their flaky Wi-Fi makes the browser retry. Two requests arrive at the same moment. The naive code:

```ts
const progress = await db.questProgress.findUnique(...);
if (progress?.status !== 'COMPLETED') {      // both requests see IN_PROGRESS...
  await db.user.update({ xp: { increment } }); // ...and both award XP 💥
}
```

This is a **race condition** (check-then-act). The fix in `services/progress.ts` is a **conditional update**:

```ts
const flipped = await tx.questProgress.updateMany({
  where: { userId, questSlug, status: 'IN_PROGRESS' },  // the check...
  data:  { status: 'COMPLETED', ... },                  // ...and the act, in ONE statement
});
if (flipped.count === 0) return alreadyCompleted;      // someone else won the race
```

The database row lock guarantees only one `UPDATE` can change the row from `IN_PROGRESS`, so exactly one request gets `count === 1` and awards XP. The test `is safe against concurrent duplicate submissions` fires 5 parallel requests and asserts XP was awarded exactly once.

> 💡 **Senior habit:** for anything involving money, points or inventory, ask "what happens if this request arrives twice, at the same time?" Make the operation **idempotent**: doing it twice has the same effect as doing it once.

Everything else (XP increment, streak, new achievements) runs in the same `$transaction`, so a crash halfway through can't leave a completed quest without its XP.

### Authentication

- Passwords are hashed with **bcrypt** (cost 12). `bcryptjs` is pure JavaScript, so there's no native build step to break on someone's machine. It's a bit slower than native `bcrypt`, which is fine at our scale.
- The session is a **JWT in an httpOnly, SameSite=Lax cookie**. httpOnly means JavaScript can't read it, so an XSS bug can't steal it. SameSite=Lax means it isn't sent on cross-site POSTs, which blocks CSRF. We chose a JWT over server-side sessions to avoid a sessions table. **Trade-off:** a JWT can't be revoked before it expires (14 days). For a learning app that's acceptable. For a bank it wouldn't be.
- **Login responses don't reveal whether an email exists.** Both failure paths return the same message *and take the same time*: when the email is unknown we still run `bcrypt.compare` against a dummy hash. Without that, an attacker could time responses to discover registered emails.
- `toPublicUser()` is the **only** way a user object leaves the server. You can't accidentally `res.json(user)` with the password hash in it if every route goes through one function. A test asserts `passwordHash` never appears in a response.
- Login and register are **rate limited** (20 per 15 minutes per IP).

### Validation at the boundary

Every request body passes through `parse(ZodSchema, req.body)`, which throws `HttpError(400, 'Validation failed', details)`. `details` maps each field to its message (`{ email: 'Email is invalid' }`), so the frontend can show errors next to the right inputs. Handlers never see unvalidated data.

### What the server deliberately does *not* trust (and what it does)

| Data | Trusted? | Why |
|------|----------|-----|
| Quiz answers | **Graded on the server.** Answers are never sent to the client. | Cheap to protect, so we do. |
| Code quest pass/fail | Reported by the client | The trade-off from Step 3: running code server-side safely needs sandbox infrastructure. |
| Project completion | Self-reported with a repo URL | Same as The Odin Project. A future feature could be peer review. |

### Production concerns, handled early

- `/api/health` runs `SELECT 1`, so the hosting platform can detect a dead database connection.
- `server.ts` handles `SIGTERM`: it stops accepting connections, lets in-flight requests finish, disconnects Prisma, then exits. Deploys don't drop requests.
- `helmet` sets security headers. The Content-Security-Policy allows `'unsafe-eval'` and `'wasm-unsafe-eval'` **only because the code runner needs them**. A comment says so, so nobody "fixes" it later and breaks the app.
- Request logs are one JSON line each (method, path, status, ms). Bodies and cookies are never logged, because they contain passwords and tokens.
- In production the API also serves the built React app, with a single-page-app fallback to `index.html`. That gives one origin: no CORS, and cookies just work.

### Building for production

The internal packages ship as TypeScript source (Step 1), so plain `node` can't import them. `tsup` bundles `server.ts` **plus** the `@sbq/*` packages into a single `dist/server.js`, and leaves real npm dependencies external. One snag found while testing the build: a bundled CommonJS dependency (`gray-matter`) calls `require()`, which doesn't exist in ES modules. The fix is a one-line banner that creates `require` with `createRequire(import.meta.url)`. **Always run your production build locally before you deploy it.**

---

## Step 8 — The React frontend

*Skills: boundaries, trade-offs.*

```
apps/web/src/
├── main.tsx             # providers: Router → Auth → Toasts → App
├── App.tsx              # routes (+ RequireAuth wrapper, lazy-loaded quest page)
├── api.ts               # the ONLY file that calls fetch(); typed with @sbq/shared
├── auth.tsx             # AuthContext: current user, login/register/logout
├── runner/
│   ├── worker.ts        # Web Worker: runs @sbq/runner (+ sql.js wasm)
│   └── runInWorker.ts   # spawns a worker per run, kills it after 8s
├── components/          # Layout, CodeEditor, TestResults, Hints, XpBar, Toasts, useAsync...
└── pages/               # Home, Auth, Learn, Chapter, Quest, Profile, Leaderboard, NotFound
```

### One API module, typed end to end

Components never call `fetch` directly. They call `api.quest(slug)`, which returns `Promise<QuestDetail>`, the **same type** the server uses to build the response (`packages/shared`). If someone renames a field on the server, TypeScript flags every frontend usage. `api.ts` also normalises errors into an `ApiError` with `status` and field-level `details`, so forms can show server validation messages next to the right input (try registering with a taken email).

### No data-fetching library, on purpose

`components/useAsync.ts` is a 40-line hook. It models state as a **discriminated union** (`loading | success | error`), keeps previous data while reloading (no spinner flash), and ignores stale responses when the component re-renders with new params. This is exactly what curriculum Chapter 10 teaches. For a bigger app, use TanStack Query, which adds caching, deduplication and background refetching. **Trade-off:** we have less code and fewer dependencies, but we refetch more than strictly necessary.

### Running learner code without freezing the page

`runInWorker()` creates a **fresh Web Worker for every run**:

- A fresh worker means no leftover state between runs (a learner's global variable from the last run can't leak into this one).
- If the code loops forever, the main thread calls `worker.terminate()` after 8 seconds. The UI never freezes, because the loop is on a different thread.
- Workers can't touch the DOM, the page's cookies or `localStorage`, which limits what hostile code could do to the page.

Vite bundles the worker (`new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' })`) along with sql.js's WebAssembly file (`import wasmUrl from 'sql.js/dist/sql-wasm.wasm?url'`).

### The quest page

It's one route with three variants (`CodeQuest`, `QuizQuest`, `ProjectQuest`), selected by `quest.type`. That's a discriminated union again, this time driving the UI. Details worth reading in `pages/Quest.tsx`:

- **Debounced autosave:** an effect waits 1.5s after the last keystroke, then `PUT`s the draft. The cleanup function cancels the pending timer on each keystroke. This is the canonical "debounce with `useEffect`" pattern.
- **`key={quest.slug}`** on each variant resets all local state when navigating between quests. Without it, the editor would keep the previous quest's code. This is a classic React bug, and `key` is the idiomatic fix.
- **Progressive hints** reveal one at a time: just enough help, without spoiling the solution.
- The quest page is **lazy-loaded** (`React.lazy`), so the code editor's ~500 KB isn't downloaded by people who are just browsing the landing page.

### Accessibility is part of "done"

Every input has a `<label>`, errors use `role="alert"` and `aria-invalid`, progress bars have `role="progressbar"` with values, and quiz options are real radio buttons inside `<fieldset>`s. That also makes the UI testable by role (`getByRole('button', { name: /show a hint/i })`), so good accessibility and good tests reinforce each other.

### Styling without a framework

`styles.css` defines **design tokens** (`--bg`, `--accent`, `--ok`, ...) on `:root` and redefines them under `prefers-color-scheme: dark`. Every component uses the tokens, so dark mode is about 20 lines. No CSS framework is needed at this size. **Trade-off:** Tailwind or CSS modules would scale better on a large team, but plain CSS is one less tool to learn while you study the rest of the stack.

---

## Step 9 — Verify like a user, then automate it

*Skill: verification.*

Unit and integration tests passed, but that doesn't prove a *user* can complete a quest. Before calling the app done, it was driven in a real browser (Playwright) against the **production build**: register, run starter code (fails), type a solution (passes), see the XP toast and achievement, run a SQL quest, run a JSX quest, paste `while (true) {}` and confirm the worker is killed, check the profile, and check that a 390px-wide phone viewport has no horizontal scroll.

That pass is what proved two things no unit test covers:

1. The production **Content-Security-Policy** still allows the runner (`'unsafe-eval'` for `new Function`, `'wasm-unsafe-eval'` for sql.js). A stricter default CSP would have silently broken every quest.
2. The sql.js WebAssembly file is found and loaded inside the worker in the bundled build.

Then the checks were **automated** in `.github/workflows/ci.yml`: on every push, GitHub Actions starts a Postgres service container and runs typecheck → all tests (runner, shared, curriculum, API integration, React components) → content validation → production build.

A small but real bug turned up while wiring this up. `npm test` runs every workspace's tests and *then* the content validator. The curriculum package had no test files, Vitest exits non-zero when it finds none, and so the validator **silently never ran**. Everything looked green because the earlier suites printed passing results. Adding real tests for the content loader fixed it. **Always confirm the last step of a pipeline actually ran.** A green summary can hide a step that never executed.

---

## Step 10 — Scaling the content (and what it taught us)

*Skills: verification, sequencing.*

The first version shipped 79 quests. Growing it to 255 quests (with hints and further reading on every one) was a different kind of engineering problem: **how do you add hundreds of things without breaking any of them?**

### Make room before you grow

Quest folders were renumbered from `01, 02, 03…` to `010, 020, 030…`, so new quests slot in between (`011`, `012`, …) without renaming everything again. This was safe *only* because of the Step 4 decision to key progress by the slug in frontmatter, not the folder name. **Earlier design decisions either enable or block later changes.** That one paid off months later.

### Let the validator find your mistakes

Writing ~180 new quests by hand produced real bugs, and **every single one was caught by `npm run validate:content`** before a learner could see it:

| Bug | How it was caught | Lesson |
|-----|-------------------|--------|
| A hand-written HMAC signature in a test was simply wrong | Reference solution failed its own test. Recomputing with Node's `crypto` confirmed the solution was right and the test was wrong | Don't hand-compute expected values for crypto or hashes. Derive them with an independent tool |
| `1_000_000 * 0.001` is `999.9999…` in floating point, so `Math.floor` gave 599 instead of 600 | Solution failed | Round before flooring. Money and counts deserve integer maths |
| A starter that was deliberately slow (naive Fibonacci) hung the validator forever | Validation never finished | The validator now runs every quest in a **worker thread with a timeout**, just like the browser |
| A test declared `const text = …`, which collided with the runner's `text()` helper | `SyntaxError: Identifier 'text' has already been declared` | Fixed in the runner itself (nested block scopes), so **learners** can never hit it either |
| A test referenced helper functions that didn't exist | `ReferenceError` | Redesigned the quest to inject its dependency (`each(cases, register = test)`). The fix *improved* the lesson |

A pattern worth noticing: two of those bugs were fixed **in the platform, not the content**, because the content bug revealed a trap that learners would also fall into. When you find a bug, ask: "Is this a one-off, or a class of bug I can eliminate for everyone?"

### Content as data, generated with a tiny tool

Quests were authored as Python data structures and written to disk with a ~60-line helper (lesson, starter, tests, solution, hints, resources in one place). The output is plain Markdown and JS/TS files, so the tool is disposable and nothing in the repo depends on it. **Build throwaway tooling freely when it removes repetition, but don't make the product depend on it.**

### Every quest gets the same learning scaffolding

- **Progressive hints** (`hints:` in frontmatter) are revealed one at a time in the UI, from a gentle nudge to nearly the answer.
- **"Go deeper" resources** (`resources:`) link to MDN, react.dev, the Postgres docs, OWASP cheat sheets, and so on.
- **The solution unlocks** after 3 attempts, framed as "compare approaches", not "copy this".

---

## Step 11 — Parallel tracks and a new quest type

*Skills: boundaries, sequencing, verification.*

The product grew from one path into three **tracks**: the Full-Stack Path plus **System Design** and **Agentic Engineering**. The new tracks use a quest type the app didn't have: the **design write-up**. This step is a good example of extending a system that already has users and data.

### Ask before building

The request was one sentence ("add a system design and agentic engineering track"). Before writing anything, five questions were asked: *How do the tracks relate to the existing path? Which quest formats? What emphasis (building agents, or working with them)? What level? How big?* Each answer removed a whole branch of possible work. For example, "quizzes and design write-ups only" meant no new code runner, and "working *with* coding agents" defined the content of an entire track. Clarifying questions are cheap; building the wrong thing isn't.

### Adding a level to the content tree

Content moved from `content/chapters/` to `content/tracks/<NN-track>/<NN-chapter>/<NN-quest>/` with a single `git mv`. Because progress is keyed by **quest slug** (Step 4), not by path, every learner's progress survived the move untouched. That's the third time the same early decision has paid off.

New invariants that come with a new level of nesting, enforced by the loader:

- Chapter slugs must be unique **across** tracks, because they appear in URLs (`/learn/:chapterSlug`).
- Prev/next links must not cross from the end of one track into the start of another (the API checks `trackSlug`).

### A new quest type, end to end

Adding `type: 'design'` touched every layer. That's why a shared `QuestType` union in `packages/shared` matters: the moment it was extended, **TypeScript pointed at every place that needed updating**, including an icon map in the UI that would otherwise have rendered `undefined`. Exhaustive types turn "did I find every place?" into a compiler error.

| Layer | Change |
|-------|--------|
| Content | `rubric`, `minWords` in frontmatter; `template.md`, `reference.md` files |
| Loader | Validates design quests; a reference is required |
| Validator | The template alone must be under the word minimum (the "starter must fail" rule, adapted), and the reference must meet it |
| API | `POST /quests/:slug/design` enforces the word count server-side; the reference is only served after completion |
| UI | Markdown editor with preview, live word count, rubric checklist, autosaved drafts, reference tab |
| Gamification | Design and per-track achievements |

### Grading what can't be auto-graded

A design document can't be unit-tested. Rather than pretend otherwise (say, with keyword matching that rewards stuffing buzzwords), the design is honest about it:

- **Self-review against an explicit rubric**: the same skill as reviewing your own PR.
- **A reference design**, revealed only *after* submitting, so learners commit to their own thinking first. It's framed as "compare trade-offs", not "here's the answer".
- **A server-side minimum length**: the one objective check that stops empty submissions.

A future improvement would be peer review, or an LLM grader that gives feedback against the rubric. Either way, the trade-off is written down.

---

## Step 12 — Grading tests with mutation testing

*Skills: verification, trade-offs.*

Learners had passed hundreds of tests, but never **written** a test suite that got graded. The Unit Testing chapter adds a `mode: write-tests` code quest. The hard question is how to grade a test suite automatically. "It has 5 tests" or "every test passes" measures nothing: `expect(true).toBe(true)` passes too.

### The answer: mutation testing

Each quest ships with the correct implementation (`subject.js`) and several **mutants**: copies with one realistic bug each (`>` instead of `>=`, a missing `await`, mutating an input). The learner's suite must:

1. **pass** against the correct implementation (otherwise the test is wrong), and
2. **fail** against every mutant (otherwise it can't detect that bug).

The learner sees one result row per mutant ("Catches the bug: free shipping starts one cent too late"). That's precise, actionable feedback on *what* their tests miss, without giving away the test to write. It's the same technique tools like Stryker use on real codebases, and the same idea as the content validator's rule that "every starter must fail" (Step 5), turned into a learning tool.

### Implementation notes

- **No new runner infrastructure.** `runQuest` already runs "code + tests in one scope". Write-tests mode calls it once with the subject and once per mutant, swapping which side the learner wrote, then aggregates the results. A small addition, built on a well-tested primitive.
- **Vitest-compatible API.** The runner gained `describe`, `beforeEach`/`afterEach`, `vi.fn()` and the `toHaveBeenCalled*` matchers, so learners write tests that run unchanged in a real Vitest project.
- **Mutants are generated, not hand-copied.** The authoring script applies one string replacement per mutant and **asserts that the replaced text occurs exactly once**, so a typo can't silently produce a "mutant" identical to the subject.
- **The validator grades the reference suites too.** It caught a gap in one of them: the password quest's reference tests never tried an uppercase-only password, so the "only matches lowercase letters" mutant survived. The quest's author (this codebase) made exactly the mistake the quest teaches learners to avoid, and the machinery caught it.

**Trade-off:** as with every code quest, the mutants are sent to the browser, so a determined learner could read them. That's the same honor-system decision as Step 3.

---

## Step 13 — Doubling the content without lowering the bar

*Skills: automation, verification, working at scale.*

The curriculum then grew from 356 to 675 quests: every chapter of every track roughly doubled. At that size, the risk isn't writing the content. It's writing **wrong** content: a test that expects the wrong value, or a lesson that describes a file that doesn't exist. Learners trust the platform, so every wrong answer costs them hours.

### Where the new quests go

Each chapter got a **practice block** right before its finale (the boss fight, or the chapter's capstone design doc). Folder numbers are spaced (`010`, `020`, …), so new quests slot in between (`200`–`285` for practice drills, `041`–`049` before a capstone at `050`) **without renaming anything**. That matters, because slugs and folders are stable ids that learners' progress points to (Step 4).

### Generate the facts, write the prose

- **SQL expected results are computed, not typed.** The authoring helper runs `setup.sql` and the reference solution through Python's built-in SQLite (the same engine as sql.js in the browser), then writes the actual rows into `tests.js`. A hand-typed expected table for a 4-way join with `GROUP BY` is a typo waiting to happen.
- **Write-the-tests mutants are string replacements** that must match exactly once (Step 12), so an author can't accidentally ship a mutant identical to the subject.
- **Everything else is checked by the validator**, which still proves every solution passes and every starter fails.

### What the validator caught

The validator turned out to be essential, again:

- **A whole chapter in the wrong language.** One batch of TypeScript drills was generated with the default `js` setting, so all 12 solutions failed to parse. One run of `validate:content` showed the problem, and since the cause was systematic, the fix was in the generator, not 12 hand edits.
- **A reference test suite that missed a mutant.** The money parser's tests never used a number with *two* thousands separators, so the "only removes the first comma" bug survived. Exactly the lesson the quest teaches.
- **Malformed metadata**: a resource link in the wrong shape failed schema validation (Zod, Step 4) before it reached a learner.

### What the validator can't catch

Tests prove code. They can't prove **prose**. Two practices filled that gap:

- **Check claims against the real code.** A write-up describing this app's architecture first named files that don't exist (`lib/auth.ts`, `routes/progress.ts`). Comparing it against `ls apps/api/src` fixed it before it shipped.
- **Make timing tests tolerant.** A test asserting "three 40 ms checks run in parallel in under 110 ms" is exactly the kind of test the chapter on flaky tests warns about. Widening the margins (60 ms checks, a 150 ms bound) keeps the intent and removes the flake.

### Ship in reviewable batches

Each chapter was validated and committed on its own ("Chapter 6: add SQL practice queries…"), so a problem in one batch never blocked or hid behind another, and the history tells the story chapter by chapter. It's the same small-diff discipline as the Agentic Engineering track teaches, applied to content.

---

## Step 14 — A design council, a real runtime, and content at 10×

*Skills: design review, prioritisation, security, generating content you can trust.*

### Five adversarial reviewers

Before adding more, we asked five independent reviewers (AI agents, each with one lens) to attack the design: **security**, **pedagogy**, **architecture**, **learner UX**, and a **devil's advocate** who argued against every core bet. The findings and every accept/reject decision are in [docs/COUNCIL.md](./docs/COUNCIL.md). Read it: it's what a real design review produces.

The strongest signal was **convergence**. Three reviewers independently found the same gap: learners only ever practised *pure functions* in the browser, and never ran real Express routes, React hooks or Supertest tests before the boss projects. When independent reviewers agree, fix that first.

### Closing the biggest gap: a real runtime in the runner

Rather than giving up on the in-browser runner (Step 3), we made it more real:

- **React hooks** (`packages/runner/src/hooks.ts`): `useState`, `useEffect`, `useReducer`, `useRef`, `useContext`… with a `mount()` harness (`click`, `type`, `submit`, `rerender`, `waitFor`) shaped like React Testing Library. It stores hook state per component instance, keyed by position and `key`, and runs effects after render, just like React.
- **Express and Supertest** (`packages/runner/src/express.ts`): `express()`, routers, `express.json()`, Express 5 async error handling, and `request(app).post(…).send(…).expect(201)`. No sockets: requests are dispatched in memory.
- `import { useState } from 'react'`, `import express from 'express'` and `import request from 'supertest'` now resolve, so learners write the same code they'd write in a real project.

**Lesson**: when a constraint (no server-side sandbox) blocks a goal (real-world practice), look for the version of the goal you *can* reach before reaching for heavy infrastructure.

### Security fixes the review found

The security reviewer *proved* an exploit: `const expect = () => …` in learner code replaced the test API, so any quest passed. Fixes:
- The core test API is re-bound **inside the tests' scope** under a random per-run name the learner can't guess.
- Results travel over a private `MessageChannel`, so `self.postMessage({ passed: true })` is ignored.
- `fetch`, `XMLHttpRequest`, `WebSocket` and friends are disabled while learner code runs. The worker is same-origin, so it would otherwise act with the learner's session cookie.
- Quizzes return only a **score** until passed, because per-question feedback let anyone enumerate the answer key.
- There's now a per-user write rate limit, and `TRUST_PROXY` is explicit config.

Each fix has a regression test that reproduces the original attack.

### Features for the learner

- **Optional practice**: practice quests (`optional: true`) don't count toward chapter completion, and chapters show *Core* and *Practice* sections. This fixed the "95 required quests in chapter 1" problem **without deleting anything**, so no one's progress was lost.
- **Search**, **resume where you left off**, and a **spaced-review queue**: completed quests come back after 3, 7, 21 and 60 days, interleaved across chapters.
- A **weekly leaderboard** with an opt-out and honest "self-reported" labelling, and a **streak** computed when it's read (no more stale 🔥 12).
- A **beginner-friendly error explainer** under failing tests.
- **Chapter 0: Your Dev Environment**: terminal, git, npm and debugging, which every boss assumed.

### Data integrity at scale

- `content/slugs.lock` records every published slug, and the validator fails if one disappears. A renamed slug would orphan progress and let XP be earned twice.
- Completions take a `SELECT … FOR UPDATE` lock on the user row, so concurrent completions can't miss an achievement.
- `/api/curriculum` became a small overview (counts and previews). Each chapter's quests come from `/api/chapters/:slug`. With 10× the content, the old response would have been megabytes.

### Generating 10× the content without lowering the bar

The request was 10× more content. Writing ~6,000 quests by hand isn't possible, and padding is exactly what the devil's advocate warned about. So practice is **generated**, by deterministic generators in `scripts/practice/` (`npm run content:practice`), under three rules:

1. **Every answer is computed, never typed.** Data and debug quests run the reference solution in Node. SQL expected rows come from sql.js (the same SQLite as the browser). Express answers come from running the app through the runner's Express. TypeScript answers come from **the real TypeScript compiler**. "Predict the output" options come from running the snippet, *and* from running **misconception variants** (an off-by-one loop, `==` instead of `===`), so the wrong options are mistakes people really make.
2. **Self-check before writing.** Every generated code quest runs through the real runner: the solution must pass and the starter must fail. It found real bugs in the generators *and* in the runtime. For example, React's rule that state updates made before an `await` in an event handler apply immediately was missing from our hooks runtime. Mutants that don't change any test's outcome ("equivalent mutants") are dropped automatically.
3. **Practice is optional and sectioned.** The core path stays focused. Practice sits in collapsible sections ("Predict the Output", "SQL Queries", "Test It (Mutation Graded)", "Design Drills"…) for learners who want more reps.

The result: **675 → 7,020 quests** (2,870 code quests, all run by the validator in about 100 seconds), while the required core path is **467 quests**. Loading all of it takes about 2 seconds and 80 MB at startup, and the curriculum overview the browser downloads is 7 KB gzipped.

A few generated quests are **promoted into the core path** (folders 900–979, before the boss), so the core path now includes real Express routes, real hooks and real data fetching.

**Trade-off, stated honestly**: generated practice is narrower than hand-written lessons. It drills skills; it doesn't explain them. That's why it lives next to the hand-written core path, not in place of it, and why docs/COUNCIL.md says to measure **outcomes** (working deployed apps, retention), not quest counts.

---

## Recap: the build order, and why

| # | Step | Why at this point |
|---|------|-------------------|
| 0 | Define the core loop and data ownership | Everything else depends on these decisions |
| 1 | Monorepo skeleton | Cheap now, painful to retrofit |
| 2 | Pure domain logic + tests | Easiest to get right, and everything builds on it |
| 3 | Code runner | **Riskiest unknown**: if it couldn't work, the product idea changes |
| 4–5 | Content format + validation | The runner exists, so content can be proven correct |
| 6 | Database schema | Only now do we know exactly what state must persist |
| 7 | API | Thin layer over proven logic: routes → services → Prisma |
| 8 | Frontend | Consumes a tested API with shared types |
| 9 | Browser verification + CI | Proves the whole thing works, and keeps it working |
| 10–13 | Content at scale, new tracks, new quest types | Only once the core loop is proven does adding content pay off |
| 14 | Adversarial design review, then fix what reviewers agree on | Independent critics catch what the builders can't see |

The general principle: **de-risk first, build on verified foundations, and leave the UI late.** The UI is the most visible part, so it's tempting to start there. But a UI built before the logic it displays gets rewritten when that logic changes.

---

## Exercises: extend it yourself

Graded roughly junior → senior. Each one practices a skill from this guide.

1. **(Junior)** Add a "Copy solution into editor" button to the Solution tab. *Touches: React state, props.*
2. **(Junior)** Add a new achievement: "Night Owl", for completing a quest between midnight and 5am UTC. *Touches: `packages/shared/achievements.ts` and its tests. Hint: the context will need the completion time.*
3. **(Mid)** Show the learner's rank on their profile page. *Touches: a new Prisma query (`count` of users with more XP), the API, shared types, UI.*
4. **(Mid)** Add a `GET /api/quests/:slug/stats` endpoint showing what percentage of learners completed the quest, and how many attempts it took on average. Watch out for division by zero.
5. **(Mid)** Let learners reset a quest (delete their progress) *without* losing the XP already earned. Which table needs changing, and why does `xpAwarded` on `QuestProgress` help?
6. **(Senior)** Move code verification to the server. Design it first: which isolation technology (containers, Firecracker, isolated-vm), what timeouts, what memory limits, and how do you queue runs under load? Write up the trade-offs before writing code.
7. **(Senior)** Make the leaderboard weekly instead of all-time without scanning every progress row. Consider a `weeklyXp` column, its reset strategy, and the race conditions that reset could introduce.
8. **(Senior)** The content is loaded once at startup. Design hot-reloading for development and zero-downtime content updates for production.
