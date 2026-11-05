---
slug: "sd05-workers-36"
title: "Design Drill: How many workers? #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **197/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["394","197","1"],"answer":1},{"prompt":"Jobs arrive at **274/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["92","1644","822","274"],"answer":2},{"prompt":"Jobs arrive at **126/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["3024","1512","11","126"],"answer":1},{"prompt":"Jobs arrive at **16/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["16","8","32","64"],"answer":2},{"prompt":"Jobs arrive at **161/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["242","484","161","108"],"answer":0}]
---
# Design Drill: How many workers? #36

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
