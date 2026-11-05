---
slug: "ae09-bisect-14"
title: "Agent Drill: How many bisect steps? #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **383 commits**. About how many test runs does `git bisect` need to find it?","options":["383","18","192","9"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1550 commits**. About how many test runs does `git bisect` need to find it?","options":["1547","774","22","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **4080 commits**. About how many test runs does `git bisect` need to find it?","options":["24","2039","12","4078"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5540 commits**. About how many test runs does `git bisect` need to find it?","options":["2768","5535","26","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **313 commits**. About how many test runs does `git bisect` need to find it?","options":["18","313","157","9"],"answer":3}]
---
# Agent Drill: How many bisect steps? #14

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
