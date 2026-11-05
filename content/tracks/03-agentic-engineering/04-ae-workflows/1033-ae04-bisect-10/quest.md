---
slug: "ae04-bisect-10"
title: "Agent Drill: How many bisect steps? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3570 commits**. About how many test runs does `git bisect` need to find it?","options":["24","3566","12","1783"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1630 commits**. About how many test runs does `git bisect` need to find it?","options":["815","22","11","1629"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3630 commits**. About how many test runs does `git bisect` need to find it?","options":["1815","12","24","3629"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5960 commits**. About how many test runs does `git bisect` need to find it?","options":["26","13","2982","5963"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5440 commits**. About how many test runs does `git bisect` need to find it?","options":["5440","26","2720","13"],"answer":3}]
---
# Agent Drill: How many bisect steps? #10

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
