---
slug: "ae04-bisect-18"
title: "Agent Drill: How many bisect steps? #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **5020 commits**. About how many test runs does `git bisect` need to find it?","options":["2512","13","5023","26"],"answer":1},{"prompt":"A regression appeared somewhere in the last **541 commits**. About how many test runs does `git bisect` need to find it?","options":["271","20","541","10"],"answer":3},{"prompt":"A regression appeared somewhere in the last **5580 commits**. About how many test runs does `git bisect` need to find it?","options":["5575","13","2788","26"],"answer":1},{"prompt":"A regression appeared somewhere in the last **256 commits**. About how many test runs does `git bisect` need to find it?","options":["16","8","128","256"],"answer":1},{"prompt":"A regression appeared somewhere in the last **4800 commits**. About how many test runs does `git bisect` need to find it?","options":["4800","26","13","2400"],"answer":2}]
---
# Agent Drill: How many bisect steps? #18

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
