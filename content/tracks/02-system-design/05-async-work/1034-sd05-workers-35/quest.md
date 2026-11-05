---
slug: "sd05-workers-35"
title: "Design Drill: How many workers? #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **268/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["108","1340","268","54"],"answer":3},{"prompt":"Jobs arrive at **91/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["91","38","19","455"],"answer":2},{"prompt":"Jobs arrive at **138/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["28","690","138","56"],"answer":0},{"prompt":"Jobs arrive at **39/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["78","39","40","20"],"answer":3},{"prompt":"Jobs arrive at **36/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["720","1440","2","36"],"answer":0}]
---
# Design Drill: How many workers? #35

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
