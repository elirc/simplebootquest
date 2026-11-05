---
slug: "ae07-bisect-15"
title: "Agent Drill: How many bisect steps? #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3710 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","3708","1854"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4930 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2465","26","4930"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1050 commits**. About how many test runs does `git bisect` need to find it?","options":["11","527","1053","22"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4510 commits**. About how many test runs does `git bisect` need to find it?","options":["13","26","2253","4505"],"answer":0},{"prompt":"A regression appeared somewhere in the last **754 commits**. About how many test runs does `git bisect` need to find it?","options":["754","20","10","377"],"answer":2}]
---
# Agent Drill: How many bisect steps? #15

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
