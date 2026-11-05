---
slug: "sd05-workers-28"
title: "Design Drill: How many workers? #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **267/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["267","1","534"],"answer":0},{"prompt":"Jobs arrive at **53/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["265","11","530","53"],"answer":0},{"prompt":"Jobs arrive at **90/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["90","18","900","450"],"answer":3},{"prompt":"Jobs arrive at **43/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["344","688","43","6"],"answer":0},{"prompt":"Jobs arrive at **85/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["256","57","85","128"],"answer":3}]
---
# Design Drill: How many workers? #28

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
