---
slug: "ae07-bisect-16"
title: "Agent Drill: How many bisect steps? #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2260 commits**. About how many test runs does `git bisect` need to find it?","options":["12","2256","24","1128"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1500 commits**. About how many test runs does `git bisect` need to find it?","options":["1495","22","11","748"],"answer":2},{"prompt":"A regression appeared somewhere in the last **936 commits**. About how many test runs does `git bisect` need to find it?","options":["10","936","468","20"],"answer":0},{"prompt":"A regression appeared somewhere in the last **686 commits**. About how many test runs does `git bisect` need to find it?","options":["10","343","686","20"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3900 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","1952","3904"],"answer":0}]
---
# Agent Drill: How many bisect steps? #16

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
