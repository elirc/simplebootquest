---
slug: "sd05-workers-21"
title: "Design Drill: How many workers? #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **201/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["4020","11","8040","201"],"answer":0},{"prompt":"Jobs arrive at **11/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["55","11","6","3"],"answer":3},{"prompt":"Jobs arrive at **53/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["848","53","424","7"],"answer":2},{"prompt":"Jobs arrive at **92/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["2208","92","1104","8"],"answer":2},{"prompt":"Jobs arrive at **221/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["221","1105","45","2210"],"answer":1}]
---
# Design Drill: How many workers? #21

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
