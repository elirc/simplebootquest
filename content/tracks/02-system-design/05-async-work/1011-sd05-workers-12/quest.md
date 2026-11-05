---
slug: "sd05-workers-12"
title: "Design Drill: How many workers? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **293/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["196","880","293","440"],"answer":3},{"prompt":"Jobs arrive at **62/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["62","1240","2480","4"],"answer":1},{"prompt":"Jobs arrive at **114/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["15","114","912","1824"],"answer":2},{"prompt":"Jobs arrive at **201/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1608","26","3216","201"],"answer":0},{"prompt":"Jobs arrive at **190/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["190","64","570","1140"],"answer":2}]
---
# Design Drill: How many workers? #12

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
