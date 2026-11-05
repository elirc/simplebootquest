---
slug: "ae07-bisect-18"
title: "Agent Drill: How many bisect steps? #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3720 commits**. About how many test runs does `git bisect` need to find it?","options":["3715","12","24","1858"],"answer":1},{"prompt":"A regression appeared somewhere in the last **317 commits**. About how many test runs does `git bisect` need to find it?","options":["159","9","317","18"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2470 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","1236","2472"],"answer":0},{"prompt":"A regression appeared somewhere in the last **530 commits**. About how many test runs does `git bisect` need to find it?","options":["265","530","10","20"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5560 commits**. About how many test runs does `git bisect` need to find it?","options":["2781","13","5562","26"],"answer":1}]
---
# Agent Drill: How many bisect steps? #18

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
