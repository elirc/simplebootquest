---
slug: "ae07-bisect-25"
title: "Agent Drill: How many bisect steps? #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4490 commits**. About how many test runs does `git bisect` need to find it?","options":["13","4487","2244","26"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2680 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","2675","1338"],"answer":1},{"prompt":"A regression appeared somewhere in the last **3010 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1504","3007","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5690 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2847","26","5693"],"answer":0},{"prompt":"A regression appeared somewhere in the last **125 commits**. About how many test runs does `git bisect` need to find it?","options":["7","125","63","14"],"answer":0}]
---
# Agent Drill: How many bisect steps? #25

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
