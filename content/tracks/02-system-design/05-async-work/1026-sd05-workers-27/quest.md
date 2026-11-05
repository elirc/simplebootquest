---
slug: "sd05-workers-27"
title: "Design Drill: How many workers? #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **79/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["53","119","79","238"],"answer":1},{"prompt":"Jobs arrive at **14/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["14","28","1"],"answer":0},{"prompt":"Jobs arrive at **262/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["524","1","131","262"],"answer":2},{"prompt":"Jobs arrive at **25/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["5","10","125","25"],"answer":0},{"prompt":"Jobs arrive at **85/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["34","85","425","17"],"answer":3}]
---
# Design Drill: How many workers? #27

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
