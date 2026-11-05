---
slug: "sd05-workers-49"
title: "Design Drill: How many workers? #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **78/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["234","117","52","78"],"answer":1},{"prompt":"Jobs arrive at **67/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["67","1","134"],"answer":0},{"prompt":"Jobs arrive at **40/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["80","40","1"],"answer":1},{"prompt":"Jobs arrive at **198/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","198","396"],"answer":1},{"prompt":"Jobs arrive at **64/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["320","13","26","64"],"answer":1}]
---
# Design Drill: How many workers? #49

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
