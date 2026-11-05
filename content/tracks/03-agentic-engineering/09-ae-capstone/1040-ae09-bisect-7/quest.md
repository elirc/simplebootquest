---
slug: "ae09-bisect-7"
title: "Agent Drill: How many bisect steps? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1440 commits**. About how many test runs does `git bisect` need to find it?","options":["720","1440","11","22"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4970 commits**. About how many test runs does `git bisect` need to find it?","options":["4965","2483","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2960 commits**. About how many test runs does `git bisect` need to find it?","options":["2955","1478","12","24"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3080 commits**. About how many test runs does `git bisect` need to find it?","options":["3075","24","12","1538"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3640 commits**. About how many test runs does `git bisect` need to find it?","options":["3638","1819","24","12"],"answer":3}]
---
# Agent Drill: How many bisect steps? #7

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
