---
slug: "ae04-bisect-5"
title: "Agent Drill: How many bisect steps? #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1400 commits**. About how many test runs does `git bisect` need to find it?","options":["22","11","701","1402"],"answer":1},{"prompt":"A regression appeared somewhere in the last **3840 commits**. About how many test runs does `git bisect` need to find it?","options":["12","1918","24","3835"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1550 commits**. About how many test runs does `git bisect` need to find it?","options":["11","1546","773","22"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3240 commits**. About how many test runs does `git bisect` need to find it?","options":["1618","24","12","3236"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1230 commits**. About how many test runs does `git bisect` need to find it?","options":["22","11","1230","615"],"answer":1}]
---
# Agent Drill: How many bisect steps? #5

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
