---
slug: "sd05-workers-33"
title: "Design Drill: How many workers? #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **294/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["588","294","1"],"answer":1},{"prompt":"Jobs arrive at **234/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["12","4680","234","9360"],"answer":1},{"prompt":"Jobs arrive at **268/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["54","1340","2680","268"],"answer":1},{"prompt":"Jobs arrive at **16/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["48","16","6","96"],"answer":0},{"prompt":"Jobs arrive at **296/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["592","296","148","1"],"answer":2}]
---
# Design Drill: How many workers? #33

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
