---
slug: "ae07-bisect-24"
title: "Agent Drill: How many bisect steps? #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **5970 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2987","26","5973"],"answer":0},{"prompt":"A regression appeared somewhere in the last **5070 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2533","5066","26"],"answer":0},{"prompt":"A regression appeared somewhere in the last **1250 commits**. About how many test runs does `git bisect` need to find it?","options":["11","625","1250","22"],"answer":0},{"prompt":"A regression appeared somewhere in the last **999 commits**. About how many test runs does `git bisect` need to find it?","options":["500","999","10","20"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5000 commits**. About how many test runs does `git bisect` need to find it?","options":["4995","2498","13","26"],"answer":2}]
---
# Agent Drill: How many bisect steps? #24

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
