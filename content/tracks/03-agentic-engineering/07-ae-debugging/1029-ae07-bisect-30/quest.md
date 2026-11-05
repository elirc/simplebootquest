---
slug: "ae07-bisect-30"
title: "Agent Drill: How many bisect steps? #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4750 commits**. About how many test runs does `git bisect` need to find it?","options":["4751","2376","26","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **562 commits**. About how many test runs does `git bisect` need to find it?","options":["281","10","20","562"],"answer":1},{"prompt":"A regression appeared somewhere in the last **662 commits**. About how many test runs does `git bisect` need to find it?","options":["20","331","662","10"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5750 commits**. About how many test runs does `git bisect` need to find it?","options":["13","5749","2875","26"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1440 commits**. About how many test runs does `git bisect` need to find it?","options":["1436","718","22","11"],"answer":3}]
---
# Agent Drill: How many bisect steps? #30

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
