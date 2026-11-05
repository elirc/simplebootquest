---
slug: "sd05-workers-4"
title: "Design Drill: How many workers? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **149/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["149","1","298"],"answer":0},{"prompt":"Jobs arrive at **239/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["239","478","1"],"answer":0},{"prompt":"Jobs arrive at **204/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["204","2448","4896","17"],"answer":1},{"prompt":"Jobs arrive at **38/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["76","1","38","19"],"answer":3},{"prompt":"Jobs arrive at **113/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["226","113","57","114"],"answer":2}]
---
# Design Drill: How many workers? #4

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
