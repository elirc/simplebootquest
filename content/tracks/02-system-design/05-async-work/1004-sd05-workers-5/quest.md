---
slug: "sd05-workers-5"
title: "Design Drill: How many workers? #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **288/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["3456","24","6912","288"],"answer":0},{"prompt":"Jobs arrive at **86/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["129","58","258","86"],"answer":0},{"prompt":"Jobs arrive at **30/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["30","150","12","6"],"answer":3},{"prompt":"Jobs arrive at **228/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["228","1824","3648","29"],"answer":1},{"prompt":"Jobs arrive at **85/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["85","680","11","1360"],"answer":1}]
---
# Design Drill: How many workers? #5

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
