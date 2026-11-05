---
slug: "sd05-workers-10"
title: "Design Drill: How many workers? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **159/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["318","1","159"],"answer":2},{"prompt":"Jobs arrive at **2/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["4","2","1"],"answer":1},{"prompt":"Jobs arrive at **203/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["609","203","68","1218"],"answer":0},{"prompt":"Jobs arrive at **282/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["282","2820","1410","57"],"answer":2},{"prompt":"Jobs arrive at **224/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["3584","1792","28","224"],"answer":1}]
---
# Design Drill: How many workers? #10

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
