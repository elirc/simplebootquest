---
slug: "sd05-workers-2"
title: "Design Drill: How many workers? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **95/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1900","3800","5","95"],"answer":0},{"prompt":"Jobs arrive at **166/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["996","166","498","56"],"answer":2},{"prompt":"Jobs arrive at **198/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["198","40","990","80"],"answer":1},{"prompt":"Jobs arrive at **11/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["88","2","176","11"],"answer":0},{"prompt":"Jobs arrive at **8/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["4","16","8","1"],"answer":0}]
---
# Design Drill: How many workers? #2

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
