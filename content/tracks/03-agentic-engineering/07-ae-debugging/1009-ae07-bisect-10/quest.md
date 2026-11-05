---
slug: "ae07-bisect-10"
title: "Agent Drill: How many bisect steps? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4250 commits**. About how many test runs does `git bisect` need to find it?","options":["4249","13","2125","26"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2000 commits**. About how many test runs does `git bisect` need to find it?","options":["22","1998","999","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **4190 commits**. About how many test runs does `git bisect` need to find it?","options":["26","13","2097","4193"],"answer":1},{"prompt":"A regression appeared somewhere in the last **1870 commits**. About how many test runs does `git bisect` need to find it?","options":["1871","22","11","936"],"answer":2},{"prompt":"A regression appeared somewhere in the last **926 commits**. About how many test runs does `git bisect` need to find it?","options":["926","10","20","463"],"answer":1}]
---
# Agent Drill: How many bisect steps? #10

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
