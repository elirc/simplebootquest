---
slug: "ae07-bisect-28"
title: "Agent Drill: How many bisect steps? #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2920 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","1459","2918"],"answer":1},{"prompt":"A regression appeared somewhere in the last **981 commits**. About how many test runs does `git bisect` need to find it?","options":["20","491","981","10"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1520 commits**. About how many test runs does `git bisect` need to find it?","options":["11","1523","22","762"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4730 commits**. About how many test runs does `git bisect` need to find it?","options":["13","26","2366","4732"],"answer":0},{"prompt":"A regression appeared somewhere in the last **5340 commits**. About how many test runs does `git bisect` need to find it?","options":["2670","13","5340","26"],"answer":1}]
---
# Agent Drill: How many bisect steps? #28

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
