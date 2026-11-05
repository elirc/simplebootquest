---
slug: "ae04-bisect-20"
title: "Agent Drill: How many bisect steps? #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2810 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1405","12","2810"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1500 commits**. About how many test runs does `git bisect` need to find it?","options":["22","11","1502","751"],"answer":1},{"prompt":"A regression appeared somewhere in the last **470 commits**. About how many test runs does `git bisect` need to find it?","options":["9","470","18","235"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3930 commits**. About how many test runs does `git bisect` need to find it?","options":["12","1965","3930","24"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4830 commits**. About how many test runs does `git bisect` need to find it?","options":["26","4827","2414","13"],"answer":3}]
---
# Agent Drill: How many bisect steps? #20

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
