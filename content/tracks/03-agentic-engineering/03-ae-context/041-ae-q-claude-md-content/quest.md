---
slug: "ae-q-claude-md-content"
title: "What Belongs in a Context File"
type: "quiz"
xp: 15
resources: [{"title": "AGENTS.md", "url": "https://agents.md/"}]
questions: [{"prompt": "Which line is most valuable in a CLAUDE.md?", "options": ["\"Write good code\"", "\"Run a single test with: npm test -- path/to/file.test.ts\"", "A list of every file in the repo"], "answer": 1}, {"prompt": "Why keep the context file short?", "options": ["Style", "It is loaded into every session, so every line costs context and attention", "Git limits file size"], "answer": 1}, {"prompt": "Which convention is worth writing down?", "options": ["\"Use variables\"", "\"Money is stored as integer cents everywhere\"", "\"Functions have names\""], "answer": 1}, {"prompt": "What should never go in the context file?", "options": ["Test commands", "API keys or passwords", "Architecture notes"], "answer": 1}, {"prompt": "The file says to run `npm run test:all`, but that script no longer exists. What is the effect?", "options": ["None", "The agent follows stale instructions and wastes time, so keep the file current", "npm fixes it"], "answer": 1}]
---
# What Belongs in a Context File

A `CLAUDE.md` / `AGENTS.md` is read at the start of every session. Every line costs context, every session, so make each one earn its place.

**Good content**:
- How to **run things**: install, dev server, tests (and how to run a *single* test), type-check, lint.
- **Architecture in a few lines**: "apps/api (Express + Prisma), apps/web (React + Vite), packages/shared (types)".
- **Conventions that aren't obvious from the code**: "money is integer cents", "all API errors go through `HttpError`", "never import from `apps/web` into `apps/api`".
- **Gotchas**: "run `npm run db:generate` after editing schema.prisma", "integration tests need `TEST_DATABASE_URL`".
- **Rules**: "don't edit generated files in `src/generated/`", "ask before adding dependencies".

**Leave out**:
- Things the agent can trivially discover (listing every file).
- Generic advice ("write clean code").
- Long prose. Use bullet points and commands.
- **Secrets.** Ever.

Keep it **current**: an outdated instruction ("use `npm run test:all`" when the script was renamed) is worse than none.
