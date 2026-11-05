---
slug: "ae04-bisect-9"
title: "Agent Drill: How many bisect steps? #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **244 commits**. About how many test runs does `git bisect` need to find it?","options":["122","16","8","244"],"answer":2},{"prompt":"A regression appeared somewhere in the last **1420 commits**. About how many test runs does `git bisect` need to find it?","options":["711","22","1421","11"],"answer":3},{"prompt":"A regression appeared somewhere in the last **4620 commits**. About how many test runs does `git bisect` need to find it?","options":["4623","26","13","2312"],"answer":2},{"prompt":"A regression appeared somewhere in the last **5290 commits**. About how many test runs does `git bisect` need to find it?","options":["2647","26","13","5294"],"answer":2},{"prompt":"A regression appeared somewhere in the last **3350 commits**. About how many test runs does `git bisect` need to find it?","options":["1673","3346","24","12"],"answer":3}]
---
# Agent Drill: How many bisect steps? #9

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
