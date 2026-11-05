---
slug: "sd05-workers-25"
title: "Design Drill: How many workers? #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **21/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["11","21","84","42"],"answer":3},{"prompt":"Jobs arrive at **108/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["540","22","108","1080"],"answer":0},{"prompt":"Jobs arrive at **13/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["9","20","13","40"],"answer":1},{"prompt":"Jobs arrive at **94/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["940","94","19","470"],"answer":3},{"prompt":"Jobs arrive at **169/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["2028","15","4056","169"],"answer":0}]
---
# Design Drill: How many workers? #25

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
