---
slug: "ae07-bisect-1"
title: "Agent Drill: How many bisect steps? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3200 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1602","12","3203"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4120 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2059","26","4117"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1210 commits**. About how many test runs does `git bisect` need to find it?","options":["22","603","1205","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **3600 commits**. About how many test runs does `git bisect` need to find it?","options":["12","3600","24","1800"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2960 commits**. About how many test runs does `git bisect` need to find it?","options":["2964","1482","24","12"],"answer":3}]
---
# Agent Drill: How many bisect steps? #1

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
