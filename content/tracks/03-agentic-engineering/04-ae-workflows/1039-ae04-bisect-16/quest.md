---
slug: "ae04-bisect-16"
title: "Agent Drill: How many bisect steps? #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2450 commits**. About how many test runs does `git bisect` need to find it?","options":["24","2452","12","1226"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2710 commits**. About how many test runs does `git bisect` need to find it?","options":["1357","2713","12","24"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2390 commits**. About how many test runs does `git bisect` need to find it?","options":["1194","12","24","2388"],"answer":1},{"prompt":"A regression appeared somewhere in the last **3140 commits**. About how many test runs does `git bisect` need to find it?","options":["1569","12","24","3137"],"answer":1},{"prompt":"A regression appeared somewhere in the last **3480 commits**. About how many test runs does `git bisect` need to find it?","options":["3475","24","1738","12"],"answer":3}]
---
# Agent Drill: How many bisect steps? #16

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
