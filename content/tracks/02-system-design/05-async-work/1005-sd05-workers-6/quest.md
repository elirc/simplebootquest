---
slug: "sd05-workers-6"
title: "Design Drill: How many workers? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **200/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1000","40","80","200"],"answer":1},{"prompt":"Jobs arrive at **220/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","440","220"],"answer":2},{"prompt":"Jobs arrive at **219/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["28","1752","219","3504"],"answer":1},{"prompt":"Jobs arrive at **110/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["6","2200","4400","110"],"answer":1},{"prompt":"Jobs arrive at **84/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["42","336","168","84"],"answer":2}]
---
# Design Drill: How many workers? #6

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
