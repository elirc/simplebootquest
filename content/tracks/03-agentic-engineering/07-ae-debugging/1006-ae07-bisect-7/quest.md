---
slug: "ae07-bisect-7"
title: "Agent Drill: How many bisect steps? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **5020 commits**. About how many test runs does `git bisect` need to find it?","options":["5019","2510","26","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **493 commits**. About how many test runs does `git bisect` need to find it?","options":["18","493","9","247"],"answer":2},{"prompt":"A regression appeared somewhere in the last **847 commits**. About how many test runs does `git bisect` need to find it?","options":["10","847","424","20"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2800 commits**. About how many test runs does `git bisect` need to find it?","options":["1399","12","2797","24"],"answer":1},{"prompt":"A regression appeared somewhere in the last **154 commits**. About how many test runs does `git bisect` need to find it?","options":["16","154","8","77"],"answer":2}]
---
# Agent Drill: How many bisect steps? #7

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
