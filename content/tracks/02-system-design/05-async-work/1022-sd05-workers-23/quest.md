---
slug: "sd05-workers-23"
title: "Design Drill: How many workers? #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **218/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["218","436","109","872"],"answer":1},{"prompt":"Jobs arrive at **191/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["64","573","1146","191"],"answer":1},{"prompt":"Jobs arrive at **67/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["536","1072","9","67"],"answer":0},{"prompt":"Jobs arrive at **139/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["18","2224","1112","139"],"answer":2},{"prompt":"Jobs arrive at **72/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["72","288","144","36"],"answer":2}]
---
# Design Drill: How many workers? #23

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
