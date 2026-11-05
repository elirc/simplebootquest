---
slug: "ae04-bisect-21"
title: "Agent Drill: How many bisect steps? #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3070 commits**. About how many test runs does `git bisect` need to find it?","options":["12","3069","1535","24"],"answer":0},{"prompt":"A regression appeared somewhere in the last **491 commits**. About how many test runs does `git bisect` need to find it?","options":["491","246","18","9"],"answer":3},{"prompt":"A regression appeared somewhere in the last **4890 commits**. About how many test runs does `git bisect` need to find it?","options":["26","13","4887","2444"],"answer":1},{"prompt":"A regression appeared somewhere in the last **95 commits**. About how many test runs does `git bisect` need to find it?","options":["48","95","7","14"],"answer":2},{"prompt":"A regression appeared somewhere in the last **265 commits**. About how many test runs does `git bisect` need to find it?","options":["9","265","133","18"],"answer":0}]
---
# Agent Drill: How many bisect steps? #21

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
