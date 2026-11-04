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
- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Database:** PostgreSQL, Prisma
- **Testing:** Vitest, React Testing Library, Supertest
- **Code execution:** sandboxed runner for checking learner submissions

---

## Project Structure (planned)

```
simplebootquest/
├── apps/
│   ├── web/          # React frontend (lessons, editor, progress)
│   └── api/          # Express + TypeScript backend
├── packages/
│   └── shared/       # Shared types and utilities
├── content/
│   └── chapters/     # Lesson content, exercises, and test files
└── runner/           # Sandboxed code execution for checking submissions
```

---

## Getting Started (Development)

> ⚠️ SimpleBootQuest is in early development. Setup instructions will be updated as the project takes shape.

**Prerequisites**

- Node.js 20+
- npm or pnpm
- PostgreSQL 15+ (or Docker)

```bash
git clone https://github.com/elirc/simplebootquest.git
cd simplebootquest
npm install
cp .env.example .env
npm run dev
```

---

## Roadmap

- [ ] Core lesson viewer and in-browser code editor
- [ ] Sandboxed test runner for submissions
- [ ] User accounts and progress tracking
- [ ] XP, levels, and streaks
- [ ] Chapters 1–4 content
- [ ] Chapters 5–8 content
- [ ] Chapters 9–12 content
- [ ] Final project guide and review checklist

---

## Contributing

Contributions are welcome, especially new exercises, lesson improvements, and bug fixes. Open an issue to discuss an idea before submitting a large change.

## License

TBD
