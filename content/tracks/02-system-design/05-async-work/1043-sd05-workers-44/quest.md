---
slug: "sd05-workers-44"
title: "Design Drill: How many workers? #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **136/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["68","136","1","272"],"answer":0},{"prompt":"Jobs arrive at **221/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1768","221","3536","28"],"answer":0},{"prompt":"Jobs arrive at **277/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["277","1","554"],"answer":0},{"prompt":"Jobs arrive at **130/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["260","130","65","1"],"answer":2},{"prompt":"Jobs arrive at **20/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["320","160","3","20"],"answer":1}]
---
# Design Drill: How many workers? #44

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
