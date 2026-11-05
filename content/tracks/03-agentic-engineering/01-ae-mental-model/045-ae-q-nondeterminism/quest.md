---
slug: "ae-q-nondeterminism"
title: "Same Prompt, Different Result"
type: "quiz"
xp: 15
questions: [{"prompt": "Why can the same prompt produce different code on two runs?", "options": ["The model is broken", "Outputs are sampled, and small early differences compound into different paths", "The internet changed"], "answer": 1}, {"prompt": "What turns \"it seemed to work\" into evidence?", "options": ["A confident summary", "Passing automated tests and checks", "Running it once manually"], "answer": 1}, {"prompt": "An agent session has gone in circles for 20 minutes. Often the fastest fix is…", "options": ["Keep arguing", "Reset the changes and start again with a clearer, smaller prompt", "Switch off the tests"], "answer": 1}, {"prompt": "How do you get consistent formatting from agent output?", "options": ["Ask nicely every time", "Run a formatter (Prettier) and linter automatically", "Review whitespace by hand"], "answer": 1}, {"prompt": "Where should important project decisions live so every session respects them?", "options": ["In your head", "In written context: specs, CLAUDE.md or AGENTS.md, ADRs", "In the first message only"], "answer": 1}]
---
# Same Prompt, Different Result

Ask an agent the same thing twice and you can get two different solutions. Models **sample** their output, so there's randomness, and small differences early on (which file was read first, say) send the work down different paths.

That has consequences for how you work:
- **Never treat one successful run as proof.** "It worked when I tried it" is an anecdote. The tests passing is evidence.
- **Make success checkable.** Clear acceptance criteria and tests turn a fuzzy output into a pass or fail.
- **Retrying is cheap.** If an attempt goes sideways, it's often faster to reset (`git checkout .`) and re-prompt with a better spec than to argue the agent back on track.
- **Lock down what must be consistent**: formatting by Prettier, lint rules by ESLint, types by `tsc`. Deterministic tools enforce standards better than asking nicely every time.
- **Write down decisions** (in specs, `CLAUDE.md`, ADRs), so each run starts from the same constraints.
