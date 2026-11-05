---
slug: "sd05-workers-57"
title: "Design Drill: How many workers? #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **29/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["29","10","174","87"],"answer":3},{"prompt":"Jobs arrive at **222/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","222","444"],"answer":1},{"prompt":"Jobs arrive at **165/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["330","165","83","166"],"answer":2},{"prompt":"Jobs arrive at **156/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["156","1","312"],"answer":0},{"prompt":"Jobs arrive at **202/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","404","101","202"],"answer":2}]
---
# Design Drill: How many workers? #57

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
