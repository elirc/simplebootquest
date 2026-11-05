---
slug: "ae04-bisect-8"
title: "Agent Drill: How many bisect steps? #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **145 commits**. About how many test runs does `git bisect` need to find it?","options":["73","8","16","145"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2660 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","2657","1329"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4030 commits**. About how many test runs does `git bisect` need to find it?","options":["4027","12","24","2014"],"answer":1},{"prompt":"A regression appeared somewhere in the last **284 commits**. About how many test runs does `git bisect` need to find it?","options":["18","284","9","142"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1300 commits**. About how many test runs does `git bisect` need to find it?","options":["11","22","648","1295"],"answer":0}]
---
# Agent Drill: How many bisect steps? #8

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
