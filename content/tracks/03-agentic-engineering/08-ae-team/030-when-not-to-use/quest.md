---
slug: "ae-when-not-to-use"
title: "Cost, Latency & When Not to Use an Agent"
type: "quiz"
xp: 15
questions: [{"prompt": "When is doing it yourself usually faster than using an agent?", "options": ["Never", "For tiny, precise edits where explaining takes longer than doing", "For large refactors"], "answer": 1}, {"prompt": "You're learning SQL joins. Which use of an agent builds skill best?", "options": ["Have it write every query", "Write the query yourself, then ask the agent to review it and explain alternatives", "Skip SQL"], "answer": 1}, {"prompt": "What is skill atrophy?", "options": ["A tool bug", "Losing the ability to do (and therefore review) work you always delegate", "Faster typing"], "answer": 1}, {"prompt": "Which habit reduces both cost and error rate?", "options": ["One endless session with the whole repo loaded", "Scoped tasks, fresh sessions and focused file reads", "Always using maximum autonomy"], "answer": 1}, {"prompt": "Agents cost more than money. They also cost…", "options": ["Nothing else", "Review time and attention", "Disk space only"], "answer": 1}]
---
# Cost, Latency & When Not to Use an Agent

Agents aren't free. They cost money (tokens), time (waiting, reviewing) and attention (context switching, verification). Sometimes the best tool is your own keyboard.

### Often faster without an agent

- Tiny, precise edits you already know how to make (rename a variable, fix a typo).
- Work where **explaining it** takes longer than doing it.
- Highly sensitive changes where you'd have to review every character anyway.

### Learning vs outsourcing

If you're learning (this whole course!), delegating the exercise defeats the point. **Skill atrophy** is real: developers who never write SQL can't review AI-written SQL. Good patterns for learners:

- Do it yourself first, then ask the agent to **review** or suggest alternatives.
- Ask it to **explain** code, concepts or errors rather than writing the solution.
- Use it for **scaffolding and drudgery**, and keep the core thinking for yourself.

### Cost awareness

Large contexts and long autonomous runs cost more. Scoped tasks, fresh sessions and focused file reads are cheaper *and* usually better.
