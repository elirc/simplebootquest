---
slug: "ae07-bisect-34"
title: "Agent Drill: How many bisect steps? #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1430 commits**. About how many test runs does `git bisect` need to find it?","options":["22","1431","11","716"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4270 commits**. About how many test runs does `git bisect` need to find it?","options":["4265","2133","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5580 commits**. About how many test runs does `git bisect` need to find it?","options":["5581","2791","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4290 commits**. About how many test runs does `git bisect` need to find it?","options":["4289","26","13","2145"],"answer":2},{"prompt":"A regression appeared somewhere in the last **760 commits**. About how many test runs does `git bisect` need to find it?","options":["380","20","760","10"],"answer":3}]
---
# Agent Drill: How many bisect steps? #34

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
