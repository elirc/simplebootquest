---
slug: "ae07-bisect-6"
title: "Agent Drill: How many bisect steps? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1360 commits**. About how many test runs does `git bisect` need to find it?","options":["22","1361","11","681"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2390 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","1194","2387"],"answer":1},{"prompt":"A regression appeared somewhere in the last **650 commits**. About how many test runs does `git bisect` need to find it?","options":["20","650","10","325"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1280 commits**. About how many test runs does `git bisect` need to find it?","options":["1281","641","22","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5520 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2762","5523","26"],"answer":0}]
---
# Agent Drill: How many bisect steps? #6

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
