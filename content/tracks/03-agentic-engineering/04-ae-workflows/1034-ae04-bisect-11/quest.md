---
slug: "ae04-bisect-11"
title: "Agent Drill: How many bisect steps? #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1560 commits**. About how many test runs does `git bisect` need to find it?","options":["1560","780","11","22"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3680 commits**. About how many test runs does `git bisect` need to find it?","options":["12","1838","24","3676"],"answer":0},{"prompt":"A regression appeared somewhere in the last **730 commits**. About how many test runs does `git bisect` need to find it?","options":["730","20","365","10"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5940 commits**. About how many test runs does `git bisect` need to find it?","options":["13","5943","2972","26"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2730 commits**. About how many test runs does `git bisect` need to find it?","options":["2728","12","1364","24"],"answer":1}]
---
# Agent Drill: How many bisect steps? #11

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
