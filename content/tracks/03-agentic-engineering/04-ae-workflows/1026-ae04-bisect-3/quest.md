---
slug: "ae04-bisect-3"
title: "Agent Drill: How many bisect steps? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1680 commits**. About how many test runs does `git bisect` need to find it?","options":["841","11","22","1681"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2690 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","2686","1343"],"answer":1},{"prompt":"A regression appeared somewhere in the last **88 commits**. About how many test runs does `git bisect` need to find it?","options":["7","88","44","14"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2900 commits**. About how many test runs does `git bisect` need to find it?","options":["24","2897","1449","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5100 commits**. About how many test runs does `git bisect` need to find it?","options":["26","2549","13","5098"],"answer":2}]
---
# Agent Drill: How many bisect steps? #3

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
