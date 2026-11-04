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
4. **Run each registered test** with a per-test timeout, collecting pass or fail plus a readable error message.

### Why write our own `expect` instead of bundling Jest?

Jest and Vitest are built for Node. They expect a file system and a CLI process. Our `expect` (`src/expect.ts`) is about 250 lines, has zero dependencies, runs anywhere, and mirrors the Vitest API (`toBe`, `toEqual`, `toThrow`, `.not`, `.resolves`, `.rejects`, ...). So what learners practice transfers directly to real projects. Writing it is also a great exercise: Chapter 11 of the curriculum asks learners to build their own `deepEqual` and mock functions.

### SQL in the browser

SQL quests use [sql.js](https://github.com/sql-js/sql.js), which is SQLite compiled to WebAssembly. Each run creates a **fresh in-memory database**, runs the quest's `setup` SQL (schema and seed data), then the learner's query. Tests inspect `result` (rows from the last statement) or call `query()` to check what an `INSERT` or `UPDATE` did.

**Trade-off:** the curriculum's projects use PostgreSQL, but quests run SQLite. For the subset of SQL taught (SELECT, WHERE, JOIN, GROUP BY, INSERT, UPDATE, DELETE), the two dialects are identical. Lessons point out the few places where they differ.

### React without React

To test components we don't need a real DOM. `src/jsx.ts` is a ~100-line JSX runtime: `h()` builds plain objects, and `render()` calls function components until only HTML-like elements remain. Tests then assert on structure (`el.type === 'ul'`) and text (`text(el)`). It's a miniature version of what React Testing Library does on top of a real DOM.

### Verification

`src/runner.test.ts` tests the runner itself: passing code, failing code, syntax errors, async tests, timeouts, TypeScript, JSX and SQL. Later we'll go a level further and run *every quest's reference solution* through this same runner to prove the curriculum itself is correct (Step 5).
