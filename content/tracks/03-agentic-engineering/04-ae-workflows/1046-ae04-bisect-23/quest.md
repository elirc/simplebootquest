---
slug: "ae04-bisect-23"
title: "Agent Drill: How many bisect steps? #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1900 commits**. About how many test runs does `git bisect` need to find it?","options":["11","1902","22","951"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3280 commits**. About how many test runs does `git bisect` need to find it?","options":["3278","12","24","1639"],"answer":1},{"prompt":"A regression appeared somewhere in the last **473 commits**. About how many test runs does `git bisect` need to find it?","options":["18","9","473","237"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5740 commits**. About how many test runs does `git bisect` need to find it?","options":["2869","5738","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4360 commits**. About how many test runs does `git bisect` need to find it?","options":["2180","26","13","4360"],"answer":2}]
---
# Agent Drill: How many bisect steps? #23

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
