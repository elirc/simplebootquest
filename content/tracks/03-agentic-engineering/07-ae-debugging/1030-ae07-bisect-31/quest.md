---
slug: "ae07-bisect-31"
title: "Agent Drill: How many bisect steps? #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **4410 commits**. About how many test runs does `git bisect` need to find it?","options":["26","2205","4410","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **4520 commits**. About how many test runs does `git bisect` need to find it?","options":["2260","4519","26","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **3970 commits**. About how many test runs does `git bisect` need to find it?","options":["12","24","1986","3971"],"answer":0},{"prompt":"A regression appeared somewhere in the last **949 commits**. About how many test runs does `git bisect` need to find it?","options":["475","949","10","20"],"answer":2},{"prompt":"A regression appeared somewhere in the last **2270 commits**. About how many test runs does `git bisect` need to find it?","options":["2271","1136","12","24"],"answer":2}]
---
# Agent Drill: How many bisect steps? #31

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
