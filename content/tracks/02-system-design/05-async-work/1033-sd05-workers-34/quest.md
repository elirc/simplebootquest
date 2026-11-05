---
slug: "sd05-workers-34"
title: "Design Drill: How many workers? #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **48/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["48","96","1"],"answer":0},{"prompt":"Jobs arrive at **225/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["75","1350","675","225"],"answer":2},{"prompt":"Jobs arrive at **241/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["5784","241","21","2892"],"answer":3},{"prompt":"Jobs arrive at **247/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["741","247","83","1482"],"answer":0},{"prompt":"Jobs arrive at **82/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["246","492","28","82"],"answer":0}]
---
# Design Drill: How many workers? #34

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
