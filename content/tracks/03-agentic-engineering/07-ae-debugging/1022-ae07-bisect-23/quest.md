---
slug: "ae07-bisect-23"
title: "Agent Drill: How many bisect steps? #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3110 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","3109","1555"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3790 commits**. About how many test runs does `git bisect` need to find it?","options":["3793","1897","12","24"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4460 commits**. About how many test runs does `git bisect` need to find it?","options":["26","13","2230","4459"],"answer":1},{"prompt":"A regression appeared somewhere in the last **925 commits**. About how many test runs does `git bisect` need to find it?","options":["463","20","925","10"],"answer":3},{"prompt":"A regression appeared somewhere in the last **725 commits**. About how many test runs does `git bisect` need to find it?","options":["10","725","363","20"],"answer":0}]
---
# Agent Drill: How many bisect steps? #23

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
