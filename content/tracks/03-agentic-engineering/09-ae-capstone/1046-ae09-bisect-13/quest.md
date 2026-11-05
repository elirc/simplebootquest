---
slug: "ae09-bisect-13"
title: "Agent Drill: How many bisect steps? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **3790 commits**. About how many test runs does `git bisect` need to find it?","options":["3791","12","1896","24"],"answer":1},{"prompt":"A regression appeared somewhere in the last **5090 commits**. About how many test runs does `git bisect` need to find it?","options":["2546","5092","26","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **374 commits**. About how many test runs does `git bisect` need to find it?","options":["9","374","18","187"],"answer":0},{"prompt":"A regression appeared somewhere in the last **4910 commits**. About how many test runs does `git bisect` need to find it?","options":["2456","13","26","4912"],"answer":1},{"prompt":"A regression appeared somewhere in the last **4290 commits**. About how many test runs does `git bisect` need to find it?","options":["26","13","2147","4293"],"answer":1}]
---
# Agent Drill: How many bisect steps? #13

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
