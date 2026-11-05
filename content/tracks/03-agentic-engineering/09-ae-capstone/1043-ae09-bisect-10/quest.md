---
slug: "ae09-bisect-10"
title: "Agent Drill: How many bisect steps? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1480 commits**. About how many test runs does `git bisect` need to find it?","options":["1476","738","11","22"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3070 commits**. About how many test runs does `git bisect` need to find it?","options":["12","3069","1535","24"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1650 commits**. About how many test runs does `git bisect` need to find it?","options":["826","1652","22","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **4440 commits**. About how many test runs does `git bisect` need to find it?","options":["4436","26","13","2218"],"answer":2},{"prompt":"A regression appeared somewhere in the last **648 commits**. About how many test runs does `git bisect` need to find it?","options":["10","648","324","20"],"answer":0}]
---
# Agent Drill: How many bisect steps? #10

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
