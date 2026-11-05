---
slug: "ae07-bisect-21"
title: "Agent Drill: How many bisect steps? #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **423 commits**. About how many test runs does `git bisect` need to find it?","options":["212","9","18","423"],"answer":1},{"prompt":"A regression appeared somewhere in the last **6000 commits**. About how many test runs does `git bisect` need to find it?","options":["3000","5999","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2340 commits**. About how many test runs does `git bisect` need to find it?","options":["1170","24","12","2339"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4620 commits**. About how many test runs does `git bisect` need to find it?","options":["26","2312","4623","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5280 commits**. About how many test runs does `git bisect` need to find it?","options":["13","5280","26","2640"],"answer":0}]
---
# Agent Drill: How many bisect steps? #21

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
