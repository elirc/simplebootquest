---
slug: "ae07-bisect-27"
title: "Agent Drill: How many bisect steps? #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **5030 commits**. About how many test runs does `git bisect` need to find it?","options":["13","5033","26","2517"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2980 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","1488","2976"],"answer":0},{"prompt":"A regression appeared somewhere in the last **469 commits**. About how many test runs does `git bisect` need to find it?","options":["235","9","469","18"],"answer":1},{"prompt":"A regression appeared somewhere in the last **3370 commits**. About how many test runs does `git bisect` need to find it?","options":["3373","1687","12","24"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2210 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","2211","1106"],"answer":1}]
---
# Agent Drill: How many bisect steps? #27

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
