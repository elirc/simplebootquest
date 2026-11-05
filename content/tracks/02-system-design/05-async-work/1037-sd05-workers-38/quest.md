---
slug: "sd05-workers-38"
title: "Design Drill: How many workers? #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **164/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1968","3936","164","14"],"answer":0},{"prompt":"Jobs arrive at **74/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["30","370","74","15"],"answer":3},{"prompt":"Jobs arrive at **84/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1344","672","11","84"],"answer":1},{"prompt":"Jobs arrive at **26/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["104","52","13","26"],"answer":1},{"prompt":"Jobs arrive at **90/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["36","450","18","90"],"answer":2}]
---
# Design Drill: How many workers? #38

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
