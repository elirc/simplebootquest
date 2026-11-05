---
slug: "sd05-workers-22"
title: "Design Drill: How many workers? #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **31/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["372","3","744","31"],"answer":0},{"prompt":"Jobs arrive at **126/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["756","42","126","378"],"answer":3},{"prompt":"Jobs arrive at **46/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["138","46","31","69"],"answer":3},{"prompt":"Jobs arrive at **125/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["2000","1000","125","16"],"answer":1},{"prompt":"Jobs arrive at **3/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["36","1","72","3"],"answer":0}]
---
# Design Drill: How many workers? #22

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
