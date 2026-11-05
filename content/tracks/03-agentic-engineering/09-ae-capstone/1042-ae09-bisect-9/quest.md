---
slug: "ae09-bisect-9"
title: "Agent Drill: How many bisect steps? #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2110 commits**. About how many test runs does `git bisect` need to find it?","options":["1054","12","24","2108"],"answer":1},{"prompt":"A regression appeared somewhere in the last **1700 commits**. About how many test runs does `git bisect` need to find it?","options":["11","1700","22","850"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4210 commits**. About how many test runs does `git bisect` need to find it?","options":["2104","13","26","4207"],"answer":1},{"prompt":"A regression appeared somewhere in the last **96 commits**. About how many test runs does `git bisect` need to find it?","options":["96","14","7","48"],"answer":2},{"prompt":"A regression appeared somewhere in the last **42 commits**. About how many test runs does `git bisect` need to find it?","options":["6","42","12","21"],"answer":0}]
---
# Agent Drill: How many bisect steps? #9

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
