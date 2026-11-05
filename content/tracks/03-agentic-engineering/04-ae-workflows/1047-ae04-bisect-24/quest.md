---
slug: "ae04-bisect-24"
title: "Agent Drill: How many bisect steps? #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **119 commits**. About how many test runs does `git bisect` need to find it?","options":["7","119","60","14"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4680 commits**. About how many test runs does `git bisect` need to find it?","options":["13","4681","26","2341"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3940 commits**. About how many test runs does `git bisect` need to find it?","options":["3935","12","1968","24"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2830 commits**. About how many test runs does `git bisect` need to find it?","options":["2832","12","24","1416"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5950 commits**. About how many test runs does `git bisect` need to find it?","options":["5954","2977","13","26"],"answer":2}]
---
# Agent Drill: How many bisect steps? #24

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
