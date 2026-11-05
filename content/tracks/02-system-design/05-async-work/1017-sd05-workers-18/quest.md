---
slug: "sd05-workers-18"
title: "Design Drill: How many workers? #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **11/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["12","6","22","11"],"answer":1},{"prompt":"Jobs arrive at **60/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["30","60","120","1"],"answer":0},{"prompt":"Jobs arrive at **181/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["61","181","1086","543"],"answer":3},{"prompt":"Jobs arrive at **285/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["15","5700","11400","285"],"answer":1},{"prompt":"Jobs arrive at **32/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["14","32","7","160"],"answer":2}]
---
# Design Drill: How many workers? #18

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
