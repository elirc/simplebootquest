---
slug: "sd05-workers-60"
title: "Design Drill: How many workers? #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **76/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["76","912","1824","7"],"answer":1},{"prompt":"Jobs arrive at **85/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["2040","85","1020","8"],"answer":2},{"prompt":"Jobs arrive at **256/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["4096","2048","32","256"],"answer":1},{"prompt":"Jobs arrive at **223/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["112","223","224","446"],"answer":0},{"prompt":"Jobs arrive at **10/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["80","2","160","10"],"answer":0}]
---
# Design Drill: How many workers? #60

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
