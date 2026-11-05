---
slug: "ae09-bisect-6"
title: "Agent Drill: How many bisect steps? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4110 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2053","26","4105"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3900 commits**. About how many test runs does `git bisect` need to find it?","options":["3900","1950","24","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1420 commits**. About how many test runs does `git bisect` need to find it?","options":["11","708","1416","22"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2160 commits**. About how many test runs does `git bisect` need to find it?","options":["1079","24","12","2157"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4820 commits**. About how many test runs does `git bisect` need to find it?","options":["26","2409","13","4818"],"answer":2}]
---
# Agent Drill: How many bisect steps? #6

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
