---
slug: "ae07-bisect-26"
title: "Agent Drill: How many bisect steps? #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3170 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","3170","1585"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1850 commits**. About how many test runs does `git bisect` need to find it?","options":["11","22","926","1852"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3960 commits**. About how many test runs does `git bisect` need to find it?","options":["3964","12","24","1982"],"answer":1},{"prompt":"A regression appeared somewhere in the last **4740 commits**. About how many test runs does `git bisect` need to find it?","options":["13","4742","2371","26"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2220 commits**. About how many test runs does `git bisect` need to find it?","options":["2224","24","12","1112"],"answer":2}]
---
# Agent Drill: How many bisect steps? #26

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
