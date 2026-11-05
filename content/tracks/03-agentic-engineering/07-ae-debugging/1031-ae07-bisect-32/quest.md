---
slug: "ae07-bisect-32"
title: "Agent Drill: How many bisect steps? #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1310 commits**. About how many test runs does `git bisect` need to find it?","options":["654","1308","11","22"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3680 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","3683","1842"],"answer":1},{"prompt":"A regression appeared somewhere in the last **1840 commits**. About how many test runs does `git bisect` need to find it?","options":["22","922","1844","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **3740 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","3740","1870"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2510 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1257","12","2514"],"answer":2}]
---
# Agent Drill: How many bisect steps? #32

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
