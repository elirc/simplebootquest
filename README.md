# SimpleBootQuest

**Learn full-stack CRUD web development by building, one quest at a time.**

SimpleBootQuest is a hands-on, gamified learning platform inspired by sites like boot.dev, but deliberately smaller and more focused. There's no sprawling curriculum covering every language and paradigm. There's one path: **building full-stack CRUD web apps with JavaScript, TypeScript, Node.js, and React.**

You write real code, the platform checks it, you earn XP, and you move on to the next quest. By the end, you can design, build, and deploy a complete web app from database to UI.

---

## Why SimpleBootQuest?

- **One focused path.** Everything leads toward shipping full-stack CRUD apps. Nothing else.
- **Learn by doing.** Every lesson ends with code you write and tests that check it.
- **One language, top to bottom.** JavaScript/TypeScript on both the frontend and the backend.
- **Practical over theoretical.** You learn the concepts you'll actually use to build a typical web app.
- **Gamified progress.** XP, levels, streaks, and quest chains keep you moving.

## Who it's for

- Beginners who know a bit of programming and want to build real web apps
- Self-taught developers filling gaps in their full-stack knowledge
- Frontend devs who want to learn the backend, and the other way around
- Anyone who wants a short, clear path instead of an endless catalog

---

## The Learning Path

The curriculum is split into **chapters**. Each chapter is a set of short **quests** (lessons and exercises) and ends with a **boss fight** (a small project).

| # | Chapter | What you'll learn |
|---|---------|-------------------|
| 1 | **JavaScript Foundations** | Variables, functions, arrays, objects, control flow, modules |
| 2 | **Modern JS & Async** | ES6+, destructuring, promises, `async`/`await`, `fetch`, error handling |
| 3 | **TypeScript Essentials** | Types, interfaces, generics, narrowing, typing functions and APIs |
| 4 | **Node.js & HTTP** | The runtime, npm, the filesystem, HTTP basics, building a raw server |
| 5 | **REST APIs with Express** | Routing, middleware, request validation, status codes, REST conventions |
| 6 | **Databases & SQL** | Relational modeling, SQL queries, PostgreSQL, migrations, an ORM (Prisma) |
| 7 | **CRUD Backend** | Create / Read / Update / Delete endpoints wired to a real database |
| 8 | **Auth & Security** | Password hashing, sessions vs. JWT, protected routes, common vulnerabilities |
| 9 | **React Fundamentals** | Components, props, state, effects, lists, forms |
| 10 | **React + API** | Fetching data, loading/error states, routing, connecting to your backend |
| 11 | **Testing** | Unit tests and API tests with Vitest, component tests with React Testing Library |
| 12 | **Deploy It** | Environment variables, building for production, deploying frontend + backend + DB |

### 🏆 Final Quest

Build and deploy a complete full-stack CRUD app of your choice (task manager, recipe book, inventory tracker, etc.) with:

- A TypeScript + Express REST API
- A PostgreSQL database
- User authentication
- A React frontend
- Tests
- A live deployment

---

## How It Works

1. **Read the quest.** Short, focused explanations. No walls of text.
2. **Write the code.** Solve the exercise in the in-browser editor or locally.
3. **Run the checks.** Automated tests tell you right away whether your solution works.
4. **Earn XP.** Complete quests to level up and unlock the next chapter.
5. **Beat the boss.** Each chapter ends with a mini-project that ties it all together.

### Gamification

- **XP & Levels:** earn XP for every completed quest
- **Streaks:** keep a daily coding streak alive
- **Achievements:** unlock badges for milestones (first API, first deploy, etc.)
- **Progress map:** see exactly where you are on the path

---

## Tech Stack

Learners build with this stack, and the platform itself is built with it too:

- **Language:** TypeScript / JavaScript
- **Frontend:** React 19, Vite, React Router, CodeMirror
- **Backend:** Node.js, Express 5, Zod
- **Database:** PostgreSQL, Prisma 7
- **Auth:** bcrypt password hashing, JWT in an httpOnly cookie
- **Testing:** Vitest, Supertest, React Testing Library
- **Code execution:** learner code runs in a Web Worker in the browser (JS, TS, JSX via Sucrase; SQL via sql.js)

> 📖 **Want to learn how this app was built?** Read [BUILDING.md](./BUILDING.md), a step-by-step walkthrough of the build order, the architecture, and the reasoning behind every major decision. It's written for junior developers who want to think like mid and senior engineers.

---

## Project Structure

```
simplebootquest/
├── apps/
│   ├── api/              # Express + Prisma backend (auth, progress, XP, quizzes)
│   └── web/              # React frontend (lessons, editor, dashboard, profile)
├── packages/
│   ├── shared/           # API types, XP/level curve, streaks, achievements
│   ├── runner/           # Runs learner code against quest tests (browser + Node)
│   └── curriculum/       # Loads and validates the content files
├── content/
│   └── chapters/         # The curriculum: one folder per chapter and quest
├── scripts/
│   └── validate-content.ts   # Proves every solution passes and every starter fails
└── BUILDING.md           # How (and why) the app was built
```

---

## Getting Started (Development)

**Prerequisites:** Node.js 20+, and Docker (or a local PostgreSQL 15+).

```bash
git clone https://github.com/elirc/simplebootquest.git
cd simplebootquest
npm install
```

Start PostgreSQL and configure the API:

```bash
docker compose up -d
cp .env.example apps/api/.env
```

Create the database tables:

```bash
npm run db:migrate
```

Run the API (port 3001) and the web app (port 5173) together:

```bash
npm run dev
```

Open http://localhost:5173.

### Useful scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | API + web with hot reload |
| `npm test` | All unit/integration tests, then content validation |
| `npm run typecheck` | TypeScript across every package |
| `npm run validate:content` | Check every quest: solutions pass, starters fail |
| `npm run build` | Production build of web + API |
| `npm start` | Run the production server (serves the API and the built web app) |

API integration tests need a database named `simplebootquest_test`. Create it with `docker compose exec db createdb -U sbq simplebootquest_test`, or point `TEST_DATABASE_URL` at another database.

### Writing content

Each quest is a folder in `content/chapters/<NN-chapter>/<NN-quest>/` containing a `quest.md` (frontmatter + lesson in Markdown). Code quests also have `starter.*`, `tests.*` and `solution.*` files, and SQL quests have a `setup.sql`. Quizzes and projects keep their questions and requirements in the frontmatter. Quests can add `hints` and `resources` to their frontmatter, too. Run `npm run validate:content` after every change.

### A note on code checking

Learner code runs **in the browser**, inside a Web Worker, so there's no server infrastructure to run and feedback is instant. The trade-off is that a determined learner could fake a pass, so progress works on an honor system, like The Odin Project. Quizzes are graded on the server. See [BUILDING.md, Step 3](./BUILDING.md#step-3--the-code-runner-the-riskiest-piece) for the reasoning.

---

## Roadmap

- [x] Lesson viewer and in-browser code editor
- [x] Test runner for JS, TypeScript, JSX and SQL quests
- [x] User accounts and progress tracking
- [x] XP, levels, streaks, achievements and leaderboard
- [x] 12-chapter curriculum with quizzes and projects
- [ ] Expanded curriculum (many more quests per chapter)
- [ ] Server-side sandboxed verification
- [ ] Peer review for projects

---

## Contributing

Contributions are welcome, especially new exercises, lesson improvements, and bug fixes. Open an issue to discuss an idea before submitting a large change.

## License

TBD
