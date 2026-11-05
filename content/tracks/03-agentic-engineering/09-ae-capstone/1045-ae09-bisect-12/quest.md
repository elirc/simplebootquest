---
slug: "ae09-bisect-12"
title: "Agent Drill: How many bisect steps? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4510 commits**. About how many test runs does `git bisect` need to find it?","options":["2257","13","4514","26"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2190 commits**. About how many test runs does `git bisect` need to find it?","options":["1097","12","24","2193"],"answer":1},{"prompt":"A regression appeared somewhere in the last **4810 commits**. About how many test runs does `git bisect` need to find it?","options":["2403","4805","26","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **3940 commits**. About how many test runs does `git bisect` need to find it?","options":["12","3942","1971","24"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2610 commits**. About how many test runs does `git bisect` need to find it?","options":["12","1307","2614","24"],"answer":0}]
---
# Agent Drill: How many bisect steps? #12

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
