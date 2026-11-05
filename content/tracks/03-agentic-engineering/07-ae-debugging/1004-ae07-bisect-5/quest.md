---
slug: "ae07-bisect-5"
title: "Agent Drill: How many bisect steps? #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1320 commits**. About how many test runs does `git bisect` need to find it?","options":["660","22","11","1319"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1680 commits**. About how many test runs does `git bisect` need to find it?","options":["1682","11","841","22"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5060 commits**. About how many test runs does `git bisect` need to find it?","options":["5058","13","2529","26"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5150 commits**. About how many test runs does `git bisect` need to find it?","options":["13","5147","2574","26"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2380 commits**. About how many test runs does `git bisect` need to find it?","options":["1188","2375","12","24"],"answer":2}]
---
# Agent Drill: How many bisect steps? #5

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
