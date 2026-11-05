---
slug: "ae04-bisect-17"
title: "Agent Drill: How many bisect steps? #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2790 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","1394","2787"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3730 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","1864","3727"],"answer":1},{"prompt":"A regression appeared somewhere in the last **1020 commits**. About how many test runs does `git bisect` need to find it?","options":["1018","10","20","509"],"answer":1},{"prompt":"A regression appeared somewhere in the last **4870 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2436","26","4872"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2520 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","2519","1260"],"answer":1}]
---
# Agent Drill: How many bisect steps? #17

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
