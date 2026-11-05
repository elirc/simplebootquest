---
slug: "sd05-workers-42"
title: "Design Drill: How many workers? #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **204/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1224","204","68","612"],"answer":3},{"prompt":"Jobs arrive at **299/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["598","299","1"],"answer":1},{"prompt":"Jobs arrive at **11/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["11","22","1"],"answer":0},{"prompt":"Jobs arrive at **95/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["760","1520","95","12"],"answer":0},{"prompt":"Jobs arrive at **245/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["368","164","245","736"],"answer":0}]
---
# Design Drill: How many workers? #42

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
