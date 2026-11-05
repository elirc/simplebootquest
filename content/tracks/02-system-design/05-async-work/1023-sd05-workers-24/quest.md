---
slug: "sd05-workers-24"
title: "Design Drill: How many workers? #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **144/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["144","1152","18","2304"],"answer":1},{"prompt":"Jobs arrive at **124/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["62","248","124","1"],"answer":0},{"prompt":"Jobs arrive at **63/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["63","64","32","126"],"answer":2},{"prompt":"Jobs arrive at **275/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["826","184","275","413"],"answer":3},{"prompt":"Jobs arrive at **170/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["680","170","340","85"],"answer":2}]
---
# Design Drill: How many workers? #24

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
