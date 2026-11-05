---
slug: "sd05-workers-56"
title: "Design Drill: How many workers? #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **201/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["2412","201","4824","17"],"answer":0},{"prompt":"Jobs arrive at **151/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["151","51","906","453"],"answer":3},{"prompt":"Jobs arrive at **132/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1584","132","11","3168"],"answer":0},{"prompt":"Jobs arrive at **196/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["196","3920","7840","10"],"answer":1},{"prompt":"Jobs arrive at **109/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","109","218"],"answer":1}]
---
# Design Drill: How many workers? #56

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
