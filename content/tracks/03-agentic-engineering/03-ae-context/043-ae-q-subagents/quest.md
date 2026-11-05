---
slug: "ae-q-subagents"
title: "Subagents and Context Isolation"
type: "quiz"
xp: 15
questions: [{"prompt": "What is the main benefit of a search subagent?", "options": ["It is always cheaper", "Its exploration happens in a separate context, and only a concise answer comes back", "It has internet access"], "answer": 1}, {"prompt": "What must a subagent prompt include?", "options": ["Nothing, it knows the conversation", "A complete brief, because it starts with no knowledge of your session", "Only one word"], "answer": 1}, {"prompt": "Why might a fresh reviewer subagent catch more issues?", "options": ["It is a better model", "It is not anchored on the reasoning that produced the code, and sees the diff with fresh eyes", "It runs the code faster"], "answer": 1}, {"prompt": "What should you ask subagents to include in their results?", "options": ["Only \"done\"", "Concrete references, such as file paths and line numbers, so you can verify", "Emojis"], "answer": 1}, {"prompt": "When is a subagent overkill?", "options": ["Searching a large unfamiliar codebase", "Reading one known file", "Reviewing a large diff"], "answer": 1}]
---
# Subagents and Context Isolation

Some agents can start **subagents**: a helper with its **own fresh context** that does a focused job (search the codebase, review a diff, run an investigation) and returns a **short summary**.

Why that helps:
- **It keeps the main context clean.** Searching 200 files to find "where do we send emails?" fills a subagent's context, not yours. You only get the answer back.
- **Focus**: a reviewer subagent that sees *only* the diff and the spec isn't anchored on the reasoning that produced the code.
- **Parallelism**: independent investigations can run at the same time.

Costs and pitfalls:
- Each subagent **starts cold**. It doesn't know what you discussed unless you tell it, so give it a complete brief.
- **Summaries lose detail**. Ask for file paths and line numbers, not just conclusions.
- They cost extra tokens, so don't spawn them for a one-file lookup.
- Treat subagent findings like any other claim: **verify** the important ones.
