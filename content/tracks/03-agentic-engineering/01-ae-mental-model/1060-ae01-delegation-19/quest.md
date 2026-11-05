---
slug: "ae01-delegation-19"
title: "Agent Drill: Delegate, pair, or do it yourself? #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"How should you approach this: **add rate limiting to the employees login endpoint**?","options":["Delegate, then review that the tests can actually fail","Delegate (autonomous in a branch); the type-checker and tests verify it","Keep the decision human; use the agent to research trade-offs","Pair: plan first, review every step, test the limits yourself"],"answer":3},{"prompt":"How should you approach this: **rename `getCar` to `findCar` across 60 files**?","options":["Keep the decision human; use the agent to research trade-offs","Delegate, then review that the tests can actually fail","Delegate (autonomous in a branch); the type-checker and tests verify it","Pair: plan first, review every step, test the limits yourself"],"answer":2},{"prompt":"How should you approach this: **change how flights are charged for (billing logic)**?","options":["Pair: plan first, review every step, test the limits yourself","Keep the decision human; use the agent to research trade-offs","Delegate, then review that the tests can actually fail","Delegate (autonomous in a branch); the type-checker and tests verify it"],"answer":0},{"prompt":"How should you approach this: **change how cars are charged for (billing logic)**?","options":["Keep the decision human; use the agent to research trade-offs","Pair: plan first, review every step, test the limits yourself","Delegate, then review that the tests can actually fail","Delegate (autonomous in a branch); the type-checker and tests verify it"],"answer":1},{"prompt":"How should you approach this: **rename `getEvent` to `findEvent` across 60 files**?","options":["Keep the decision human; use the agent to research trade-offs","Pair: plan first, review every step, test the limits yourself","Delegate (autonomous in a branch); the type-checker and tests verify it","Delegate, then review that the tests can actually fail"],"answer":2}]
---
# Agent Drill: Delegate, pair, or do it yourself? #19

Delegate tasks that are well-specified and **cheap to verify** (strong tests, a type-checker, mechanical changes). Pair closely on security-sensitive or subtle work. Keep judgment calls (architecture, product, money) with humans, using the agent for research.
