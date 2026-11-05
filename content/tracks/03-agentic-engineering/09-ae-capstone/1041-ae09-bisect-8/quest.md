---
slug: "ae09-bisect-8"
title: "Agent Drill: How many bisect steps? #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2540 commits**. About how many test runs does `git bisect` need to find it?","options":["1269","12","24","2538"],"answer":1},{"prompt":"A regression appeared somewhere in the last **1810 commits**. About how many test runs does `git bisect` need to find it?","options":["1813","907","22","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **888 commits**. About how many test runs does `git bisect` need to find it?","options":["888","10","444","20"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2420 commits**. About how many test runs does `git bisect` need to find it?","options":["1212","12","2424","24"],"answer":1},{"prompt":"A regression appeared somewhere in the last **777 commits**. About how many test runs does `git bisect` need to find it?","options":["10","20","389","777"],"answer":0}]
---
# Agent Drill: How many bisect steps? #8

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
