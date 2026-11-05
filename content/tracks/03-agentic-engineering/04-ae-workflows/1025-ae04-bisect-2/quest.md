---
slug: "ae04-bisect-2"
title: "Agent Drill: How many bisect steps? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **5090 commits**. About how many test runs does `git bisect` need to find it?","options":["26","2545","5090","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **2340 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","1172","2343"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2540 commits**. About how many test runs does `git bisect` need to find it?","options":["1270","24","12","2539"],"answer":2},{"prompt":"A regression appeared somewhere in the last **234 commits**. About how many test runs does `git bisect` need to find it?","options":["117","8","234","16"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2240 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","2242","1121"],"answer":0}]
---
# Agent Drill: How many bisect steps? #2

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
