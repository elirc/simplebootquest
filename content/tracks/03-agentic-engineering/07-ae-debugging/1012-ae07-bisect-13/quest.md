---
slug: "ae07-bisect-13"
title: "Agent Drill: How many bisect steps? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"A regression appeared somewhere in the last **5360 commits**. About how many test runs does `git bisect` need to find it?","options":["13","2678","26","5355"],"answer":0},{"prompt":"A regression appeared somewhere in the last **806 commits**. About how many test runs does `git bisect` need to find it?","options":["10","806","20","403"],"answer":0},{"prompt":"A regression appeared somewhere in the last **3320 commits**. About how many test runs does `git bisect` need to find it?","options":["1662","12","3324","24"],"answer":1},{"prompt":"A regression appeared somewhere in the last **4180 commits**. About how many test runs does `git bisect` need to find it?","options":["2089","26","4177","13"],"answer":3},{"prompt":"A regression appeared somewhere in the last **2430 commits**. About how many test runs does `git bisect` need to find it?","options":["12","1216","2431","24"],"answer":0}]
---
# Agent Drill: How many bisect steps? #13

`git bisect` halves the range of suspect commits at every step, so finding the bad commit among N takes about ⌈log₂ N⌉ steps. Automate it with `git bisect run <test>` and let the agent drive.
