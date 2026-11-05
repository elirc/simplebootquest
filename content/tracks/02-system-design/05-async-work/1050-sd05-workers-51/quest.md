---
slug: "sd05-workers-51"
title: "Design Drill: How many workers? #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **128/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["5120","2560","128","7"],"answer":1},{"prompt":"Jobs arrive at **5/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["30","2","15","5"],"answer":2},{"prompt":"Jobs arrive at **158/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["158","106","237","474"],"answer":2},{"prompt":"Jobs arrive at **115/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["115","230","1"],"answer":0},{"prompt":"Jobs arrive at **40/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["40","4","480","960"],"answer":2}]
---
# Design Drill: How many workers? #51

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
