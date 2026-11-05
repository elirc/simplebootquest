---
slug: "sd05-workers-17"
title: "Design Drill: How many workers? #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **55/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["11","275","22","55"],"answer":0},{"prompt":"Jobs arrive at **122/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["122","7","4880","2440"],"answer":3},{"prompt":"Jobs arrive at **109/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["109","327","37","654"],"answer":1},{"prompt":"Jobs arrive at **192/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","192","384"],"answer":1},{"prompt":"Jobs arrive at **111/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["555","111","46","23"],"answer":3}]
---
# Design Drill: How many workers? #17

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
