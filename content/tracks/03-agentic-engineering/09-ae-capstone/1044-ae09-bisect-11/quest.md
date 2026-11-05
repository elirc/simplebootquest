---
slug: "ae09-bisect-11"
title: "Agent Drill: How many bisect steps? #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **1280 commits**. About how many test runs does `git bisect` need to find it?","options":["640","1279","22","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **4940 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2472","26","4944"],"answer":0},{"prompt":"A regression appeared somewhere in the last **2280 commits**. About how many test runs does `git bisect` need to find it?","options":["1142","24","2284","12"],"answer":3},{"prompt":"A regression appeared somewhere in the last **1250 commits**. About how many test runs does `git bisect` need to find it?","options":["22","1248","624","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **565 commits**. About how many test runs does `git bisect` need to find it?","options":["20","283","565","10"],"answer":3}]
---
# Agent Drill: How many bisect steps? #11

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
