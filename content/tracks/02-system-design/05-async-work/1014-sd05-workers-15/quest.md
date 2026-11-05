---
slug: "sd05-workers-15"
title: "Design Drill: How many workers? #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **65/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","130","65"],"answer":2},{"prompt":"Jobs arrive at **249/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["748","374","249","166"],"answer":1},{"prompt":"Jobs arrive at **56/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["448","7","896","56"],"answer":0},{"prompt":"Jobs arrive at **278/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["14","278","5560","11120"],"answer":2},{"prompt":"Jobs arrive at **123/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["615","123","25","50"],"answer":2}]
---
# Design Drill: How many workers? #15

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
