---
slug: "ae07-bisect-3"
title: "Agent Drill: How many bisect steps? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1830 commits**. About how many test runs does `git bisect` need to find it?","options":["22","914","1828","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5350 commits**. About how many test runs does `git bisect` need to find it?","options":["13","26","2673","5346"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4000 commits**. About how many test runs does `git bisect` need to find it?","options":["2001","12","4002","24"],"answer":1},{"prompt":"A regression appeared somewhere in the last **4570 commits**. About how many test runs does `git bisect` need to find it?","options":["26","4569","13","2285"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1720 commits**. About how many test runs does `git bisect` need to find it?","options":["11","1719","22","860"],"answer":0}]
---
# Agent Drill: How many bisect steps? #3

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
