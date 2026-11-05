---
slug: "sd05-workers-20"
title: "Design Drill: How many workers? #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **244/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["244","1220","2440","49"],"answer":1},{"prompt":"Jobs arrive at **44/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["44","88","1","22"],"answer":3},{"prompt":"Jobs arrive at **89/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["12","89","712","1424"],"answer":2},{"prompt":"Jobs arrive at **45/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["45","1080","540","4"],"answer":2},{"prompt":"Jobs arrive at **165/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["9","165","6600","3300"],"answer":3}]
---
# Design Drill: How many workers? #20

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
