---
slug: "sd05-workers-32"
title: "Design Drill: How many workers? #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **16/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","32","8","16"],"answer":2},{"prompt":"Jobs arrive at **198/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["2376","198","17","4752"],"answer":0},{"prompt":"Jobs arrive at **85/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["5","85","3400","1700"],"answer":3},{"prompt":"Jobs arrive at **297/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["7128","297","25","3564"],"answer":3},{"prompt":"Jobs arrive at **91/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["182","91","46","92"],"answer":2}]
---
# Design Drill: How many workers? #32

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
