---
slug: "ae07-bisect-29"
title: "Agent Drill: How many bisect steps? #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **289 commits**. About how many test runs does `git bisect` need to find it?","options":["145","18","9","289"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2360 commits**. About how many test runs does `git bisect` need to find it?","options":["24","12","2358","1179"],"answer":1},{"prompt":"A regression appeared somewhere in the last **2090 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1047","2094","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5910 commits**. About how many test runs does `git bisect` need to find it?","options":["5908","26","13","2954"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3700 commits**. About how many test runs does `git bisect` need to find it?","options":["1849","3698","24","12"],"answer":3}]
---
# Agent Drill: How many bisect steps? #29

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
