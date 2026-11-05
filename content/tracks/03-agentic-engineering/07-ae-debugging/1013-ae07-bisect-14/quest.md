---
slug: "ae07-bisect-14"
title: "Agent Drill: How many bisect steps? #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **324 commits**. About how many test runs does `git bisect` need to find it?","options":["9","324","162","18"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1860 commits**. About how many test runs does `git bisect` need to find it?","options":["22","930","11","1859"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4610 commits**. About how many test runs does `git bisect` need to find it?","options":["4606","13","26","2303"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5440 commits**. About how many test runs does `git bisect` need to find it?","options":["5435","26","13","2718"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5310 commits**. About how many test runs does `git bisect` need to find it?","options":["26","2655","13","5310"],"answer":2}]
---
# Agent Drill: How many bisect steps? #14

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
