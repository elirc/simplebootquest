---
slug: "sd05-workers-19"
title: "Design Drill: How many workers? #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **31/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["124","16","31","62"],"answer":3},{"prompt":"Jobs arrive at **212/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["11","212","8480","4240"],"answer":3},{"prompt":"Jobs arrive at **174/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["174","1","348"],"answer":0},{"prompt":"Jobs arrive at **284/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["11360","15","284","5680"],"answer":3},{"prompt":"Jobs arrive at **168/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1344","168","21","2688"],"answer":0}]
---
# Design Drill: How many workers? #19

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
