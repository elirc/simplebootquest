---
slug: "sd05-workers-48"
title: "Design Drill: How many workers? #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **23/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["920","23","2","460"],"answer":3},{"prompt":"Jobs arrive at **223/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1115","223","90","45"],"answer":3},{"prompt":"Jobs arrive at **295/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["885","1770","99","295"],"answer":0},{"prompt":"Jobs arrive at **271/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["271","181","407","814"],"answer":2},{"prompt":"Jobs arrive at **236/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["236","2832","20","5664"],"answer":1}]
---
# Design Drill: How many workers? #48

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
