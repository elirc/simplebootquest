---
slug: "ae04-bisect-7"
title: "Agent Drill: How many bisect steps? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2670 commits**. About how many test runs does `git bisect` need to find it?","options":["12","2674","1337","24"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3170 commits**. About how many test runs does `git bisect` need to find it?","options":["3167","1584","12","24"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5470 commits**. About how many test runs does `git bisect` need to find it?","options":["2733","26","5465","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5700 commits**. About how many test runs does `git bisect` need to find it?","options":["5695","13","26","2848"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5080 commits**. About how many test runs does `git bisect` need to find it?","options":["2539","13","5077","26"],"answer":1}]
---
# Agent Drill: How many bisect steps? #7

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
