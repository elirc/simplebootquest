---
slug: "ae04-bisect-19"
title: "Agent Drill: How many bisect steps? #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **26 commits**. About how many test runs does `git bisect` need to find it?","options":["13","10","26","5"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1850 commits**. About how many test runs does `git bisect` need to find it?","options":["22","925","11","1849"],"answer":2},{"prompt":"A regression appeared somewhere in the last **917 commits**. About how many test runs does `git bisect` need to find it?","options":["459","917","20","10"],"answer":3},{"prompt":"A regression appeared somewhere in the last **3700 commits**. About how many test runs does `git bisect` need to find it?","options":["3699","1850","24","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **3010 commits**. About how many test runs does `git bisect` need to find it?","options":["3008","1504","24","12"],"answer":3}]
---
# Agent Drill: How many bisect steps? #19

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
