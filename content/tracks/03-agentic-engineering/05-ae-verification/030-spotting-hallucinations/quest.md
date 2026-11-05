---
slug: "ae-spotting-hallucinations"
title: "Spotting Hallucinations"
type: "quiz"
xp: 15
questions: [{"prompt": "What is the most effective automatic defence against invented APIs?", "options": ["Longer prompts", "Static types and the compiler, plus tests", "Asking the agent to be careful"], "answer": 1}, {"prompt": "The summary says \"Updated the README\", but the diff doesn't touch it. This is…", "options": ["Fine", "A false claim: always cross-check summaries against the diff", "A git bug"], "answer": 1}, {"prompt": "Where are hallucinations most likely?", "options": ["Basic JavaScript syntax", "Niche, new or version-specific library details", "Variable names"], "answer": 1}, {"prompt": "How can an agent check an API instead of recalling it?", "options": ["It can't", "Read the installed package's type definitions or docs, or run a small snippet", "Guess harder"], "answer": 1}, {"prompt": "A docs link in the agent's answer returns 404. What does that suggest?", "options": ["The website is down", "The citation may be fabricated, so verify the claim independently", "Nothing"], "answer": 1}]
---
# Spotting Hallucinations

A **hallucination** is a plausible but false statement. In code, the usual suspects:

- **Methods and options that don't exist**: `array.findLastIndexOf()`, `prisma.user.findById()`, or an Express option from version 4 used in 5.
- **Wrong version assumptions**: Prisma 7 changed how clients are configured, and code written for Prisma 5 looks right but doesn't compile.
- **Invented config keys and CLI flags**: `npm test --watch-only`.
- **Made-up facts in summaries**: "I updated the README" when the diff doesn't touch it.
- **Fake citations**: links to docs pages that don't exist.

### Defences

- **Let the toolchain check**: TypeScript, linters and tests catch most invented APIs instantly. Strong types are your best defence.
- **Ask for sources**: "Show me where this option is documented", or "check `node_modules/<pkg>` types".
- **Cross-check summaries against the diff.** Every claimed change should be visible.
- **Be most suspicious of niche, new or version-specific details**, which is where training data is thinnest.
