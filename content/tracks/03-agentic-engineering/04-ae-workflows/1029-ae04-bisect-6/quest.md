---
slug: "ae04-bisect-6"
title: "Agent Drill: How many bisect steps? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4920 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2461","26","4921"],"answer":0},{"prompt":"A regression appeared somewhere in the last **5820 commits**. About how many test runs does `git bisect` need to find it?","options":["26","2909","13","5818"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3020 commits**. About how many test runs does `git bisect` need to find it?","options":["1512","12","3024","24"],"answer":1},{"prompt":"A regression appeared somewhere in the last **146 commits**. About how many test runs does `git bisect` need to find it?","options":["8","73","16","146"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4560 commits**. About how many test runs does `git bisect` need to find it?","options":["26","13","2278","4555"],"answer":1}]
---
# Agent Drill: How many bisect steps? #6

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
