---
slug: "sd05-workers-58"
title: "Design Drill: How many workers? #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **8/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["16","32","4","8"],"answer":0},{"prompt":"Jobs arrive at **260/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["260","2600","1300","52"],"answer":2},{"prompt":"Jobs arrive at **11/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["33","4","11","66"],"answer":0},{"prompt":"Jobs arrive at **20/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["20","40","1"],"answer":0},{"prompt":"Jobs arrive at **32/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["320","32","7","160"],"answer":3}]
---
# Design Drill: How many workers? #58

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
