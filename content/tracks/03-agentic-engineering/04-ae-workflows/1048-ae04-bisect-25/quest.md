---
slug: "ae04-bisect-25"
title: "Agent Drill: How many bisect steps? #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **2400 commits**. About how many test runs does `git bisect` need to find it?","options":["24","1201","12","2401"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5810 commits**. About how many test runs does `git bisect` need to find it?","options":["5810","2905","26","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **2320 commits**. About how many test runs does `git bisect` need to find it?","options":["12","1162","24","2323"],"answer":0},{"prompt":"A regression appeared somewhere in the last **886 commits**. About how many test runs does `git bisect` need to find it?","options":["20","886","443","10"],"answer":3},{"prompt":"A regression appeared somewhere in the last **944 commits**. About how many test runs does `git bisect` need to find it?","options":["472","944","20","10"],"answer":3}]
---
# Agent Drill: How many bisect steps? #25

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
