---
slug: "ae09-bisect-5"
title: "Agent Drill: How many bisect steps? #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **758 commits**. About how many test runs does `git bisect` need to find it?","options":["10","758","20","379"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3130 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1563","12","3126"],"answer":2},{"prompt":"A regression appeared somewhere in the last **206 commits**. About how many test runs does `git bisect` need to find it?","options":["16","8","206","103"],"answer":1},{"prompt":"A regression appeared somewhere in the last **4100 commits**. About how many test runs does `git bisect` need to find it?","options":["26","13","4101","2051"],"answer":1},{"prompt":"A regression appeared somewhere in the last **818 commits**. About how many test runs does `git bisect` need to find it?","options":["10","20","409","818"],"answer":0}]
---
# Agent Drill: How many bisect steps? #5

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
