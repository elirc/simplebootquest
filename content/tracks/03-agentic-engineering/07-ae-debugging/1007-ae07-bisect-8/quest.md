---
slug: "ae07-bisect-8"
title: "Agent Drill: How many bisect steps? #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2760 commits**. About how many test runs does `git bisect` need to find it?","options":["2759","1380","24","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5460 commits**. About how many test runs does `git bisect` need to find it?","options":["26","13","5464","2732"],"answer":1},{"prompt":"A regression appeared somewhere in the last **451 commits**. About how many test runs does `git bisect` need to find it?","options":["9","18","451","226"],"answer":0},{"prompt":"A regression appeared somewhere in the last **761 commits**. About how many test runs does `git bisect` need to find it?","options":["20","10","761","381"],"answer":1},{"prompt":"A regression appeared somewhere in the last **1740 commits**. About how many test runs does `git bisect` need to find it?","options":["1743","22","11","872"],"answer":2}]
---
# Agent Drill: How many bisect steps? #8

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
