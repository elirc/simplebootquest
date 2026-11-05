---
slug: "sd05-workers-43"
title: "Design Drill: How many workers? #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **81/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["11","648","1296","81"],"answer":1},{"prompt":"Jobs arrive at **138/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["276","138","552","69"],"answer":0},{"prompt":"Jobs arrive at **97/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["194","49","97","98"],"answer":1},{"prompt":"Jobs arrive at **257/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["257","104","1285","52"],"answer":3},{"prompt":"Jobs arrive at **130/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["17","1040","130","2080"],"answer":1}]
---
# Design Drill: How many workers? #43

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
