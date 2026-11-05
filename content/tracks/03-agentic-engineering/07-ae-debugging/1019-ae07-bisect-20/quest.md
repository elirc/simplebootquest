---
slug: "ae07-bisect-20"
title: "Agent Drill: How many bisect steps? #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **692 commits**. About how many test runs does `git bisect` need to find it?","options":["20","692","10","346"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4920 commits**. About how many test runs does `git bisect` need to find it?","options":["26","4916","2458","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **4470 commits**. About how many test runs does `git bisect` need to find it?","options":["13","4468","2234","26"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1530 commits**. About how many test runs does `git bisect` need to find it?","options":["22","763","1526","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **2010 commits**. About how many test runs does `git bisect` need to find it?","options":["22","11","2014","1007"],"answer":1}]
---
# Agent Drill: How many bisect steps? #20

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
