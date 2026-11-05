---
slug: "ae-q-modes"
title: "Modes: Ask, Plan, Act"
type: "quiz"
xp: 15
questions: [{"prompt": "You are new to a codebase and need to add a feature to the billing module. Which mode first?", "options": ["Fully autonomous", "Plan (or ask), then review before any edits", "No agent at all"], "answer": 1}, {"prompt": "What must be in place before running an agent autonomously?", "options": ["Nothing", "A sandbox, no production credentials, version control and meaningful tests", "A faster laptop"], "answer": 1}, {"prompt": "Why is reviewing a plan worthwhile?", "options": ["It is not", "Catching a wrong approach before code is written is much cheaper than unwinding a big diff", "Plans compile faster"], "answer": 1}, {"prompt": "Your goal is to learn React hooks. Which use of the agent helps most?", "options": ["Have it write everything", "Ask it to explain concepts and review your code while you write it", "Do not read its output"], "answer": 1}, {"prompt": "Which task is a reasonable candidate for autonomous mode?", "options": ["Redesign the auth system", "Fix all lint errors of one rule across the repo, with CI checking the result", "Rotate production secrets"], "answer": 1}]
---
# Modes: Ask, Plan, Act

Most coding agents can work at different levels of **initiative**, and choosing the right one per task saves a lot of rework:

| Mode | The agent… | Use when |
|------|-----------|----------|
| **Ask / explain** | Reads and answers, changes nothing | Learning a codebase, or "how does auth work here?" |
| **Plan** | Investigates and proposes a plan, waits for approval | Anything non-trivial, unfamiliar or risky |
| **Act with approvals** | Edits, and asks before commands or sensitive actions | Normal feature work |
| **Autonomous** | Runs without asking, inside a sandbox | Well-specified tasks with strong tests, in an isolated environment |

Rules of thumb:
- **The less you know about the area, the more you should plan first.**
- **Planning is cheap; undoing a wrong 30-file change is expensive.** Reviewing a plan takes two minutes.
- **Autonomy requires guard rails**: a sandbox or container, no production credentials, version control, and tests that actually check behaviour.
- **Learning mode matters for juniors**: ask the agent to *explain* and let *you* write the code when the goal is your own skill.
