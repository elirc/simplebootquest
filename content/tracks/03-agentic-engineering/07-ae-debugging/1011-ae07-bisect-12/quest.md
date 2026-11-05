---
slug: "ae07-bisect-12"
title: "Agent Drill: How many bisect steps? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **927 commits**. About how many test runs does `git bisect` need to find it?","options":["20","10","464","927"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5530 commits**. About how many test runs does `git bisect` need to find it?","options":["5533","2767","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1620 commits**. About how many test runs does `git bisect` need to find it?","options":["11","22","1622","811"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3270 commits**. About how many test runs does `git bisect` need to find it?","options":["12","1637","3273","24"],"answer":0},{"prompt":"A regression appeared somewhere in the last **819 commits**. About how many test runs does `git bisect` need to find it?","options":["20","819","410","10"],"answer":3}]
---
# Agent Drill: How many bisect steps? #12

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
