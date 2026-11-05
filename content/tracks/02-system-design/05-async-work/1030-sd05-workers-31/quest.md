---
slug: "sd05-workers-31"
title: "Design Drill: How many workers? #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **200/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["200","300","600","134"],"answer":1},{"prompt":"Jobs arrive at **67/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["4","2680","1340","67"],"answer":2},{"prompt":"Jobs arrive at **46/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["230","20","10","46"],"answer":2},{"prompt":"Jobs arrive at **55/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["55","56","28","110"],"answer":2},{"prompt":"Jobs arrive at **170/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["170","68","34","850"],"answer":2}]
---
# Design Drill: How many workers? #31

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
