---
slug: "sd05-workers-39"
title: "Design Drill: How many workers? #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **241/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["241","362","724","161"],"answer":1},{"prompt":"Jobs arrive at **213/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["213","320","640","142"],"answer":1},{"prompt":"Jobs arrive at **103/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["21","515","42","103"],"answer":0},{"prompt":"Jobs arrive at **73/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["73","584","10","1168"],"answer":1},{"prompt":"Jobs arrive at **95/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["95","1","190"],"answer":0}]
---
# Design Drill: How many workers? #39

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
