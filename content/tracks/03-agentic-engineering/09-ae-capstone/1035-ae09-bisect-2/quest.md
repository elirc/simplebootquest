---
slug: "ae09-bisect-2"
title: "Agent Drill: How many bisect steps? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **5010 commits**. About how many test runs does `git bisect` need to find it?","options":["5014","26","13","2507"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2530 commits**. About how many test runs does `git bisect` need to find it?","options":["2529","24","1265","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **4520 commits**. About how many test runs does `git bisect` need to find it?","options":["2262","26","13","4524"],"answer":2},{"prompt":"A regression appeared somewhere in the last **701 commits**. About how many test runs does `git bisect` need to find it?","options":["20","10","701","351"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5980 commits**. About how many test runs does `git bisect` need to find it?","options":["2991","13","26","5981"],"answer":1}]
---
# Agent Drill: How many bisect steps? #2

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
