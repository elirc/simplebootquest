---
slug: "ae09-bisect-1"
title: "Agent Drill: How many bisect steps? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **443 commits**. About how many test runs does `git bisect` need to find it?","options":["18","443","222","9"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5530 commits**. About how many test runs does `git bisect` need to find it?","options":["13","5531","26","2766"],"answer":0},{"prompt":"A regression appeared somewhere in the last **259 commits**. About how many test runs does `git bisect` need to find it?","options":["130","18","9","259"],"answer":2},{"prompt":"A regression appeared somewhere in the last **4870 commits**. About how many test runs does `git bisect` need to find it?","options":["26","4868","13","2434"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2230 commits**. About how many test runs does `git bisect` need to find it?","options":["1116","2231","24","12"],"answer":3}]
---
# Agent Drill: How many bisect steps? #1

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
