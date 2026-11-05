---
slug: "ae07-bisect-11"
title: "Agent Drill: How many bisect steps? #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4370 commits**. About how many test runs does `git bisect` need to find it?","options":["4365","26","13","2183"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5990 commits**. About how many test runs does `git bisect` need to find it?","options":["13","26","2995","5990"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4820 commits**. About how many test runs does `git bisect` need to find it?","options":["4815","13","26","2408"],"answer":1},{"prompt":"A regression appeared somewhere in the last **1140 commits**. About how many test runs does `git bisect` need to find it?","options":["568","11","1135","22"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5470 commits**. About how many test runs does `git bisect` need to find it?","options":["13","26","5473","2737"],"answer":0}]
---
# Agent Drill: How many bisect steps? #11

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
