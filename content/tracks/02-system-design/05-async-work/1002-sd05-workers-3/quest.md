---
slug: "sd05-workers-3"
title: "Design Drill: How many workers? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **183/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","366","183"],"answer":2},{"prompt":"Jobs arrive at **38/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["38","13","228","114"],"answer":3},{"prompt":"Jobs arrive at **19/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["19","2","228","456"],"answer":2},{"prompt":"Jobs arrive at **110/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["37","660","110","330"],"answer":3},{"prompt":"Jobs arrive at **270/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["3240","270","6480","23"],"answer":0}]
---
# Design Drill: How many workers? #3

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
