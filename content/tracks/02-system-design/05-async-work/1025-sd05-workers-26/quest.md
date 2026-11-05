---
slug: "sd05-workers-26"
title: "Design Drill: How many workers? #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **224/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["4480","12","224","8960"],"answer":0},{"prompt":"Jobs arrive at **246/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["123","1","492","246"],"answer":0},{"prompt":"Jobs arrive at **251/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["251","6024","21","3012"],"answer":3},{"prompt":"Jobs arrive at **210/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["210","42","84","1050"],"answer":1},{"prompt":"Jobs arrive at **30/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["6","150","300","30"],"answer":1}]
---
# Design Drill: How many workers? #26

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
