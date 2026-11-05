---
slug: "ae09-bisect-16"
title: "Agent Drill: How many bisect steps? #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4130 commits**. About how many test runs does `git bisect` need to find it?","options":["26","4133","13","2067"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2300 commits**. About how many test runs does `git bisect` need to find it?","options":["1148","12","24","2295"],"answer":1},{"prompt":"A regression appeared somewhere in the last **136 commits**. About how many test runs does `git bisect` need to find it?","options":["136","68","8","16"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1360 commits**. About how many test runs does `git bisect` need to find it?","options":["681","11","22","1361"],"answer":1},{"prompt":"A regression appeared somewhere in the last **210 commits**. About how many test runs does `git bisect` need to find it?","options":["210","105","16","8"],"answer":3}]
---
# Agent Drill: How many bisect steps? #16

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
