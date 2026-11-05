---
slug: "sd05-workers-47"
title: "Design Drill: How many workers? #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **31/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["31","1","62"],"answer":0},{"prompt":"Jobs arrive at **216/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["216","18","5184","2592"],"answer":3},{"prompt":"Jobs arrive at **191/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["191","24","3056","1528"],"answer":3},{"prompt":"Jobs arrive at **53/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1060","3","2120","53"],"answer":0},{"prompt":"Jobs arrive at **170/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["22","1360","170","2720"],"answer":1}]
---
# Design Drill: How many workers? #47

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
