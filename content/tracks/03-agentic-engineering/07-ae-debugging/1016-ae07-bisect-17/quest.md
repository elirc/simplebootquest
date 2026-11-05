---
slug: "ae07-bisect-17"
title: "Agent Drill: How many bisect steps? #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1780 commits**. About how many test runs does `git bisect` need to find it?","options":["890","11","22","1780"],"answer":1},{"prompt":"A regression appeared somewhere in the last **3260 commits**. About how many test runs does `git bisect` need to find it?","options":["3259","12","1630","24"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5780 commits**. About how many test runs does `git bisect` need to find it?","options":["2892","26","13","5783"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3150 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1575","3150","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1570 commits**. About how many test runs does `git bisect` need to find it?","options":["1572","786","11","22"],"answer":2}]
---
# Agent Drill: How many bisect steps? #17

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
