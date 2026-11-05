---
slug: "ae04-bisect-1"
title: "Agent Drill: How many bisect steps? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **599 commits**. About how many test runs does `git bisect` need to find it?","options":["10","599","300","20"],"answer":0},{"prompt":"A regression appeared somewhere in the last **5600 commits**. About how many test runs does `git bisect` need to find it?","options":["26","5604","2802","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1100 commits**. About how many test runs does `git bisect` need to find it?","options":["552","1103","11","22"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5900 commits**. About how many test runs does `git bisect` need to find it?","options":["13","26","5898","2949"],"answer":0},{"prompt":"A regression appeared somewhere in the last **5220 commits**. About how many test runs does `git bisect` need to find it?","options":["2609","5218","13","26"],"answer":2}]
---
# Agent Drill: How many bisect steps? #1

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
