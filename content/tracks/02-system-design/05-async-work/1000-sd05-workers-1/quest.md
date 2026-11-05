---
slug: "sd05-workers-1"
title: "Design Drill: How many workers? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **300/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["300","200","450","900"],"answer":2},{"prompt":"Jobs arrive at **264/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["264","1","528"],"answer":0},{"prompt":"Jobs arrive at **263/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["132","264","526","263"],"answer":0},{"prompt":"Jobs arrive at **113/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1808","15","904","113"],"answer":2},{"prompt":"Jobs arrive at **16/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["4","16","80","160"],"answer":2}]
---
# Design Drill: How many workers? #1

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
