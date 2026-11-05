---
slug: "sd05-workers-11"
title: "Design Drill: How many workers? #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **174/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["174","696","348","87"],"answer":2},{"prompt":"Jobs arrive at **109/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["6","2180","109","4360"],"answer":1},{"prompt":"Jobs arrive at **47/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["142","32","47","71"],"answer":3},{"prompt":"Jobs arrive at **199/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["17","199","2388","4776"],"answer":2},{"prompt":"Jobs arrive at **247/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["247","50","1235","100"],"answer":1}]
---
# Design Drill: How many workers? #11

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
