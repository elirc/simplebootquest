---
slug: "ae07-bisect-9"
title: "Agent Drill: How many bisect steps? #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **5840 commits**. About how many test runs does `git bisect` need to find it?","options":["2918","5836","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5010 commits**. About how many test runs does `git bisect` need to find it?","options":["5008","2504","13","26"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3820 commits**. About how many test runs does `git bisect` need to find it?","options":["12","3819","1910","24"],"answer":0},{"prompt":"A regression appeared somewhere in the last **197 commits**. About how many test runs does `git bisect` need to find it?","options":["8","99","16","197"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4260 commits**. About how many test runs does `git bisect` need to find it?","options":["2131","26","13","4261"],"answer":2}]
---
# Agent Drill: How many bisect steps? #9

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
