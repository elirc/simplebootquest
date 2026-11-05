---
slug: "ae07-bisect-19"
title: "Agent Drill: How many bisect steps? #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4280 commits**. About how many test runs does `git bisect` need to find it?","options":["26","2141","4282","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1340 commits**. About how many test runs does `git bisect` need to find it?","options":["22","671","11","1342"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2250 commits**. About how many test runs does `git bisect` need to find it?","options":["2245","24","12","1123"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2420 commits**. About how many test runs does `git bisect` need to find it?","options":["1211","12","2421","24"],"answer":1},{"prompt":"A regression appeared somewhere in the last **3440 commits**. About how many test runs does `git bisect` need to find it?","options":["3440","1720","12","24"],"answer":2}]
---
# Agent Drill: How many bisect steps? #19

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
