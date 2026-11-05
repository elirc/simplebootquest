---
slug: "ae09-bisect-17"
title: "Agent Drill: How many bisect steps? #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **577 commits**. About how many test runs does `git bisect` need to find it?","options":["20","10","577","289"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2290 commits**. About how many test runs does `git bisect` need to find it?","options":["2286","1143","12","24"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5270 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2635","5269","26"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2350 commits**. About how many test runs does `git bisect` need to find it?","options":["12","1173","2346","24"],"answer":0},{"prompt":"A regression appeared somewhere in the last **5170 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2583","26","5166"],"answer":0}]
---
# Agent Drill: How many bisect steps? #17

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
