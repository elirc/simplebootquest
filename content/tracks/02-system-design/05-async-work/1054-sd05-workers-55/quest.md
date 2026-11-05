---
slug: "sd05-workers-55"
title: "Design Drill: How many workers? #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **229/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1145","46","229","2290"],"answer":0},{"prompt":"Jobs arrive at **113/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["113","23","1130","565"],"answer":3},{"prompt":"Jobs arrive at **56/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["224","56","28","112"],"answer":3},{"prompt":"Jobs arrive at **231/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","231","462"],"answer":1},{"prompt":"Jobs arrive at **97/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["20","970","485","97"],"answer":2}]
---
# Design Drill: How many workers? #55

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
