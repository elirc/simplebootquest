---
slug: "ae09-bisect-3"
title: "Agent Drill: How many bisect steps? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **5250 commits**. About how many test runs does `git bisect` need to find it?","options":["5248","2624","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2400 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1199","12","2397"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1800 commits**. About how many test runs does `git bisect` need to find it?","options":["11","22","1800","900"],"answer":0},{"prompt":"A regression appeared somewhere in the last **5120 commits**. About how many test runs does `git bisect` need to find it?","options":["26","13","5115","2558"],"answer":1},{"prompt":"A regression appeared somewhere in the last **4980 commits**. About how many test runs does `git bisect` need to find it?","options":["13","4980","2490","26"],"answer":0}]
---
# Agent Drill: How many bisect steps? #3

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
