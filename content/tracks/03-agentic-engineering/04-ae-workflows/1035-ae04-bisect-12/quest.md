---
slug: "ae04-bisect-12"
title: "Agent Drill: How many bisect steps? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1050 commits**. About how many test runs does `git bisect` need to find it?","options":["1049","525","22","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **3820 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","3818","1909"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1180 commits**. About how many test runs does `git bisect` need to find it?","options":["11","22","1182","591"],"answer":0},{"prompt":"A regression appeared somewhere in the last **5610 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2805","26","5609"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2560 commits**. About how many test runs does `git bisect` need to find it?","options":["2560","1280","24","12"],"answer":3}]
---
# Agent Drill: How many bisect steps? #12

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
