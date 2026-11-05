---
slug: "ae-q-tokens-cost"
title: "Tokens, Cost and Speed"
type: "quiz"
xp: 15
questions: [{"prompt": "What usually uses up the most context in a long agent session?", "options": ["Your short prompts", "Tool outputs: file contents, logs and test results", "The model name"], "answer": 1}, {"prompt": "Which request is cheaper and faster for the agent?", "options": ["\"Understand the whole codebase first\"", "\"In src/todos/service.ts, add a dueAt field to createTodo, following updateTodo\"", "Both are equal"], "answer": 1}, {"prompt": "How do you keep test output from flooding the context?", "options": ["Never run tests", "Run only the relevant tests and trim the output to the failures", "Paste it twice"], "answer": 1}, {"prompt": "When is it worth switching to a fresh session?", "options": ["Never", "When starting an unrelated task, so old context does not distract or cost tokens", "Every message"], "answer": 1}, {"prompt": "When is the highest-effort or largest model setting most justified?", "options": ["Renaming a variable", "Tricky debugging or design work with many interacting parts", "Formatting code"], "answer": 1}]
---
# Tokens, Cost and Speed

Everything an agent reads and writes is measured in **tokens** (roughly 3–4 characters of English, or less for code). Tokens drive three things you care about:

1. **Context limits**: the conversation, files, tool outputs and instructions must all fit. When they don't, older content is summarised or dropped.
2. **Cost**: you pay per input and output token. Re-reading big files every turn adds up. (Prompt caching makes repeated prefixes cheaper.)
3. **Latency**: more input means slower turns, and long outputs take time to generate.

Practical habits:
- Point the agent at **specific files and functions** instead of "look around the whole repo".
- Ask for **targeted test runs** (`npm test -- todos.service`) rather than the full suite on every step.
- Keep tool output short: `--silent`, `| tail -50`, `grep` for the failure.
- Start a **fresh session** for an unrelated task instead of dragging in an old context.
- Bigger or "thinking harder" settings cost more. Use them for hard problems, not for renaming a variable.
