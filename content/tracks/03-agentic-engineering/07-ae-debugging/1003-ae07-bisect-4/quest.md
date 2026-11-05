---
slug: "ae07-bisect-4"
title: "Agent Drill: How many bisect steps? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4910 commits**. About how many test runs does `git bisect` need to find it?","options":["2453","4905","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1390 commits**. About how many test runs does `git bisect` need to find it?","options":["11","22","697","1393"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2490 commits**. About how many test runs does `git bisect` need to find it?","options":["1244","24","2488","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1990 commits**. About how many test runs does `git bisect` need to find it?","options":["11","22","996","1992"],"answer":0},{"prompt":"A regression appeared somewhere in the last **5260 commits**. About how many test runs does `git bisect` need to find it?","options":["26","2628","5255","13"],"answer":3}]
---
# Agent Drill: How many bisect steps? #4

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
