---
slug: "ae04-bisect-4"
title: "Agent Drill: How many bisect steps? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3720 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","3716","1858"],"answer":1},{"prompt":"A regression appeared somewhere in the last **242 commits**. About how many test runs does `git bisect` need to find it?","options":["242","121","8","16"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3100 commits**. About how many test runs does `git bisect` need to find it?","options":["24","3100","1550","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5410 commits**. About how many test runs does `git bisect` need to find it?","options":["2703","5406","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5750 commits**. About how many test runs does `git bisect` need to find it?","options":["2875","26","5750","13"],"answer":3}]
---
# Agent Drill: How many bisect steps? #4

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
