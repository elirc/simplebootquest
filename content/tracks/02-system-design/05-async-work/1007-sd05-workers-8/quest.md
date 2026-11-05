---
slug: "sd05-workers-8"
title: "Design Drill: How many workers? #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **9/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["2","45","9","90"],"answer":1},{"prompt":"Jobs arrive at **242/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["242","484","968","121"],"answer":1},{"prompt":"Jobs arrive at **28/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["168","84","10","28"],"answer":1},{"prompt":"Jobs arrive at **14/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["14","112","224","2"],"answer":1},{"prompt":"Jobs arrive at **95/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["190","380","48","95"],"answer":0}]
---
# Design Drill: How many workers? #8

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
