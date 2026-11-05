---
slug: "sd05-workers-59"
title: "Design Drill: How many workers? #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **116/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["116","58","464","232"],"answer":3},{"prompt":"Jobs arrive at **229/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["229","230","458","115"],"answer":3},{"prompt":"Jobs arrive at **47/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["6","47","752","376"],"answer":3},{"prompt":"Jobs arrive at **112/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["112","2240","6","4480"],"answer":1},{"prompt":"Jobs arrive at **107/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["535","22","1070","107"],"answer":0}]
---
# Design Drill: How many workers? #59

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
