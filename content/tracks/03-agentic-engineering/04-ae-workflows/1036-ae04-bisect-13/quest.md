---
slug: "ae04-bisect-13"
title: "Agent Drill: How many bisect steps? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **652 commits**. About how many test runs does `git bisect` need to find it?","options":["326","10","652","20"],"answer":1},{"prompt":"A regression appeared somewhere in the last **1070 commits**. About how many test runs does `git bisect` need to find it?","options":["11","1068","534","22"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1940 commits**. About how many test runs does `git bisect` need to find it?","options":["971","11","22","1942"],"answer":1},{"prompt":"A regression appeared somewhere in the last **580 commits**. About how many test runs does `git bisect` need to find it?","options":["10","20","580","290"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2200 commits**. About how many test runs does `git bisect` need to find it?","options":["12","2204","1102","24"],"answer":0}]
---
# Agent Drill: How many bisect steps? #13

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
