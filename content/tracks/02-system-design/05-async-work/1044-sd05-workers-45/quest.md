---
slug: "sd05-workers-45"
title: "Design Drill: How many workers? #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **83/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["498","83","249","28"],"answer":2},{"prompt":"Jobs arrive at **76/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["4","1520","76","3040"],"answer":1},{"prompt":"Jobs arrive at **140/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["140","3360","12","1680"],"answer":3},{"prompt":"Jobs arrive at **134/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["670","27","1340","134"],"answer":0},{"prompt":"Jobs arrive at **140/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["140","1","280"],"answer":0}]
---
# Design Drill: How many workers? #45

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
