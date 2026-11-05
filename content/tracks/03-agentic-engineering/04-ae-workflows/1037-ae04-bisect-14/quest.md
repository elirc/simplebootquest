---
slug: "ae04-bisect-14"
title: "Agent Drill: How many bisect steps? #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3580 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","3581","1791"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1390 commits**. About how many test runs does `git bisect` need to find it?","options":["1390","11","695","22"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5210 commits**. About how many test runs does `git bisect` need to find it?","options":["5213","2607","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4820 commits**. About how many test runs does `git bisect` need to find it?","options":["26","4824","13","2412"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3860 commits**. About how many test runs does `git bisect` need to find it?","options":["12","1932","24","3863"],"answer":0}]
---
# Agent Drill: How many bisect steps? #14

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
