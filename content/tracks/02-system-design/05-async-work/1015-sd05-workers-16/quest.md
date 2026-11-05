---
slug: "sd05-workers-16"
title: "Design Drill: How many workers? #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **163/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["3260","163","9","6520"],"answer":0},{"prompt":"Jobs arrive at **107/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["107","1","214"],"answer":0},{"prompt":"Jobs arrive at **92/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["184","1","46","92"],"answer":2},{"prompt":"Jobs arrive at **249/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["249","125","498","996"],"answer":2},{"prompt":"Jobs arrive at **50/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["250","50","10","20"],"answer":2}]
---
# Design Drill: How many workers? #16

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
