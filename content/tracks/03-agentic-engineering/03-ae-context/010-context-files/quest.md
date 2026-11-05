---
slug: "ae-context-files"
title: "Context Files: CLAUDE.md & AGENTS.md"
type: "quiz"
xp: 15
resources: [{"title": "Claude Code: Memory (CLAUDE.md)", "url": "https://code.claude.com/docs/en/memory"}, {"title": "AGENTS.md", "url": "https://agents.md/"}]
questions: [{"prompt": "What is a CLAUDE.md / AGENTS.md file for?", "options": ["Licensing", "Project instructions loaded into every agent session: commands, conventions, gotchas", "Storing API keys"], "answer": 1}, {"prompt": "Which item belongs in the context file?", "options": ["The full company history", "The exact command to run a single test file", "Your database password"], "answer": 1}, {"prompt": "Why keep the context file concise?", "options": ["Agents can't read long files", "It is loaded into every session and consumes context each time", "Markdown has a size limit"], "answer": 1}, {"prompt": "You keep typing \"remember to run the validator\" in every session. What should you do?", "options": ["Keep typing it", "Add it to the context file", "Stop validating"], "answer": 1}, {"prompt": "Should a context file be reviewed in pull requests like code?", "options": ["No", "Yes: it shapes every future agent change, so it deserves the same care", "Only by managers"], "answer": 1}]
---
# Context Files: CLAUDE.md & AGENTS.md

Most agents load a **project instructions file** at the start of every session: `CLAUDE.md` for Claude Code, `AGENTS.md` for several other tools, `.cursor/rules` for Cursor. Think of it as the onboarding doc for a very fast new teammate who forgets everything overnight.

### What belongs in it

- **Commands**: how to install, run, test, typecheck, lint and migrate. *Exact* commands, including how to run a single test file.
- **Architecture in brief**: the main folders and what lives where ("routes → services → Prisma").
- **Conventions**: error handling, naming, where new code goes, testing style.
- **Gotchas**: "Run `npm run validate:content` after editing content", "Never edit `src/generated/`", "Tests need the `simplebootquest_test` database".
- **Boundaries**: what never to do ("never commit `.env`", "don't add dependencies without asking").

### What doesn't

- Long prose and the project's history. Keep it concise, because it costs context in **every** session.
- Things the code already makes obvious, or that a linter enforces.
- Secrets. Ever.

Treat it like code: review changes to it, keep it current, and improve it whenever you catch yourself repeating an instruction.
