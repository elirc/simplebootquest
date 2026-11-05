---
slug: "ae07-bisect-2"
title: "Agent Drill: How many bisect steps? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **700 commits**. About how many test runs does `git bisect` need to find it?","options":["700","350","20","10"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5900 commits**. About how many test runs does `git bisect` need to find it?","options":["26","13","5896","2948"],"answer":1},{"prompt":"A regression appeared somewhere in the last **4790 commits**. About how many test runs does `git bisect` need to find it?","options":["26","4785","13","2393"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1330 commits**. About how many test runs does `git bisect` need to find it?","options":["1327","664","11","22"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5650 commits**. About how many test runs does `git bisect` need to find it?","options":["2823","13","5645","26"],"answer":1}]
---
# Agent Drill: How many bisect steps? #2

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
