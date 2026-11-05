---
slug: "ae07-bisect-33"
title: "Agent Drill: How many bisect steps? #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4840 commits**. About how many test runs does `git bisect` need to find it?","options":["13","26","4843","2422"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4240 commits**. About how many test runs does `git bisect` need to find it?","options":["2121","26","4242","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5850 commits**. About how many test runs does `git bisect` need to find it?","options":["13","5845","2923","26"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2070 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","1037","2074"],"answer":1},{"prompt":"A regression appeared somewhere in the last **158 commits**. About how many test runs does `git bisect` need to find it?","options":["158","79","8","16"],"answer":2}]
---
# Agent Drill: How many bisect steps? #33

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
