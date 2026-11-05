---
slug: "ae09-bisect-15"
title: "Agent Drill: How many bisect steps? #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **847 commits**. About how many test runs does `git bisect` need to find it?","options":["847","10","20","424"],"answer":1},{"prompt":"A regression appeared somewhere in the last **1820 commits**. About how many test runs does `git bisect` need to find it?","options":["11","909","1818","22"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3390 commits**. About how many test runs does `git bisect` need to find it?","options":["3390","24","12","1695"],"answer":2},{"prompt":"A regression appeared somewhere in the last **832 commits**. About how many test runs does `git bisect` need to find it?","options":["20","10","416","832"],"answer":1},{"prompt":"A regression appeared somewhere in the last **3470 commits**. About how many test runs does `git bisect` need to find it?","options":["1734","24","12","3468"],"answer":2}]
---
# Agent Drill: How many bisect steps? #15

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
