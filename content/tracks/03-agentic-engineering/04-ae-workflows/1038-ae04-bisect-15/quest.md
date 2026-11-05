---
slug: "ae04-bisect-15"
title: "Agent Drill: How many bisect steps? #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1260 commits**. About how many test runs does `git bisect` need to find it?","options":["22","11","628","1256"],"answer":1},{"prompt":"A regression appeared somewhere in the last **3190 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1596","12","3192"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2930 commits**. About how many test runs does `git bisect` need to find it?","options":["1464","12","2927","24"],"answer":1},{"prompt":"A regression appeared somewhere in the last **3690 commits**. About how many test runs does `git bisect` need to find it?","options":["12","3692","1846","24"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3740 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1870","12","3740"],"answer":2}]
---
# Agent Drill: How many bisect steps? #15

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
