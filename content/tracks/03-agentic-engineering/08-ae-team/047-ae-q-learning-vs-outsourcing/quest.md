---
slug: "ae-q-learning-vs-outsourcing"
title: "Learning vs Outsourcing Your Thinking"
type: "quiz"
xp: 15
questions: [{"prompt": "What is a learning-friendly way to use an agent on a new topic?", "options": ["Have it write everything and paste it", "Try first, then ask it to explain and review your approach", "Avoid agents completely"], "answer": 1}, {"prompt": "Why do fundamentals matter more with coding agents?", "options": ["They do not", "You need them to judge, review and correct what the agent produces", "Agents test you"], "answer": 1}, {"prompt": "You cannot explain how the code in your PR works. What should you do?", "options": ["Submit it anyway", "Study it (ask the agent to explain, read the docs) until you can, or simplify it", "Delete the tests"], "answer": 1}, {"prompt": "Which prompt builds the most understanding?", "options": ["\"Write it for me\"", "\"What edge cases does my implementation miss, and why?\"", "\"Make it work\""], "answer": 1}, {"prompt": "What does \"rebuild from memory\" mean?", "options": ["Restore a backup", "After seeing a pattern, write it again yourself without looking", "Use git reflog"], "answer": 1}]
---
# Learning vs Outsourcing Your Thinking

For a junior engineer, an agent can be the best tutor you've ever had, or a way to **skip the learning** and stay junior. The difference is how you use it.

Learning-oriented habits:
- **Try first, then ask.** Spend 15–30 minutes on a problem before asking the agent. The struggle is where the learning happens.
- **Ask "why", not just "how"**: "Explain why this query needs an index", "What would break if I removed this `await`?"
- **Have it review your code** instead of writing it: "What edge cases does my function miss?"
- **Rebuild from memory**: after the agent shows you a pattern, close the chat and write it yourself.
- **Read the docs it cites**, and check them yourself.
- **Explain it back**: if you can't explain the code in your PR, you don't understand it yet.

Fundamentals matter *more* with agents, not less: to review AI code you have to know what correct code looks like, spot the subtle bug, and ask the right question. The engineers who get the most out of agents are the ones who could do the work without them.
