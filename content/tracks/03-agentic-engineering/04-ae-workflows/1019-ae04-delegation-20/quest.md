---
slug: "ae04-delegation-20"
title: "Agent Drill: Delegate, pair, or do it yourself? #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"How should you approach this: **add rate limiting to the tasks login endpoint**?","options":["Keep the decision human; use the agent to research trade-offs","Delegate (autonomous in a branch); the type-checker and tests verify it","Pair: plan first, review every step, test the limits yourself","Delegate, then review that the tests can actually fail"],"answer":2},{"prompt":"How should you approach this: **add rate limiting to the courses login endpoint**?","options":["Delegate (autonomous in a branch); the type-checker and tests verify it","Keep the decision human; use the agent to research trade-offs","Delegate, then review that the tests can actually fail","Pair: plan first, review every step, test the limits yourself"],"answer":3},{"prompt":"How should you approach this: **rename `getBook` to `findBook` across 60 files**?","options":["Pair: plan first, review every step, test the limits yourself","Delegate (autonomous in a branch); the type-checker and tests verify it","Keep the decision human; use the agent to research trade-offs","Delegate, then review that the tests can actually fail"],"answer":1},{"prompt":"How should you approach this: **add rate limiting to the books login endpoint**?","options":["Keep the decision human; use the agent to research trade-offs","Pair: plan first, review every step, test the limits yourself","Delegate (autonomous in a branch); the type-checker and tests verify it","Delegate, then review that the tests can actually fail"],"answer":1},{"prompt":"How should you approach this: **rename `getStudent` to `findStudent` across 60 files**?","options":["Delegate (autonomous in a branch); the type-checker and tests verify it","Pair: plan first, review every step, test the limits yourself","Delegate, then review that the tests can actually fail","Keep the decision human; use the agent to research trade-offs"],"answer":0}]
---
# Agent Drill: Delegate, pair, or do it yourself? #20

Delegate tasks that are well-specified and **cheap to verify** (strong tests, a type-checker, mechanical changes). Pair closely on security-sensitive or subtle work. Keep judgment calls (architecture, product, money) with humans, using the agent for research.
