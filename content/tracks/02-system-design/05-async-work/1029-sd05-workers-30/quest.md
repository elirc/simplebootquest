---
slug: "sd05-workers-30"
title: "Design Drill: How many workers? #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **258/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","516","258"],"answer":2},{"prompt":"Jobs arrive at **63/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["315","13","63","26"],"answer":1},{"prompt":"Jobs arrive at **5/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["2","25","1","5"],"answer":2},{"prompt":"Jobs arrive at **152/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["228","456","152","102"],"answer":0},{"prompt":"Jobs arrive at **208/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["4992","208","2496","18"],"answer":2}]
---
# Design Drill: How many workers? #30

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
