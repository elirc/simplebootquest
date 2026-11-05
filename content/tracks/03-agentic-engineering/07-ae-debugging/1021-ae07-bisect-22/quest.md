---
slug: "ae07-bisect-22"
title: "Agent Drill: How many bisect steps? #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2500 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","1249","2497"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2050 commits**. About how many test runs does `git bisect` need to find it?","options":["24","2054","1027","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1230 commits**. About how many test runs does `git bisect` need to find it?","options":["11","22","1228","614"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1070 commits**. About how many test runs does `git bisect` need to find it?","options":["22","1071","11","536"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2240 commits**. About how many test runs does `git bisect` need to find it?","options":["1121","2242","24","12"],"answer":3}]
---
# Agent Drill: How many bisect steps? #22

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
