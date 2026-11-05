---
slug: "sd05-workers-52"
title: "Design Drill: How many workers? #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **178/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["178","36","890","1780"],"answer":2},{"prompt":"Jobs arrive at **254/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["254","10160","5080","13"],"answer":2},{"prompt":"Jobs arrive at **143/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["715","29","58","143"],"answer":1},{"prompt":"Jobs arrive at **125/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["125","126","63","250"],"answer":2},{"prompt":"Jobs arrive at **44/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["22","44","176","88"],"answer":3}]
---
# Design Drill: How many workers? #52

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
