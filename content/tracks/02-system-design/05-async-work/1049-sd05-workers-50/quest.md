---
slug: "sd05-workers-50"
title: "Design Drill: How many workers? #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **237/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1422","79","237","711"],"answer":3},{"prompt":"Jobs arrive at **288/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["5760","11520","15","288"],"answer":0},{"prompt":"Jobs arrive at **292/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["15","11680","292","5840"],"answer":3},{"prompt":"Jobs arrive at **141/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["282","141","564","71"],"answer":0},{"prompt":"Jobs arrive at **65/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["13","65","325","26"],"answer":0}]
---
# Design Drill: How many workers? #50

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
