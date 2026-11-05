---
slug: "ae04-bisect-22"
title: "Agent Drill: How many bisect steps? #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3340 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","3343","1672"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2850 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","2845","1423"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3380 commits**. About how many test runs does `git bisect` need to find it?","options":["24","3377","1689","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1800 commits**. About how many test runs does `git bisect` need to find it?","options":["899","1797","22","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **3230 commits**. About how many test runs does `git bisect` need to find it?","options":["1613","24","12","3226"],"answer":2}]
---
# Agent Drill: How many bisect steps? #22

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
