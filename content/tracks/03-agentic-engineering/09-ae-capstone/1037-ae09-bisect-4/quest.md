---
slug: "ae09-bisect-4"
title: "Agent Drill: How many bisect steps? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **759 commits**. About how many test runs does `git bisect` need to find it?","options":["10","380","759","20"],"answer":0},{"prompt":"A regression appeared somewhere in the last **570 commits**. About how many test runs does `git bisect` need to find it?","options":["20","10","570","285"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2750 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","1377","2753"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2780 commits**. About how many test runs does `git bisect` need to find it?","options":["1392","2784","12","24"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4370 commits**. About how many test runs does `git bisect` need to find it?","options":["13","4369","2185","26"],"answer":0}]
---
# Agent Drill: How many bisect steps? #4

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
