---
slug: "sd05-workers-14"
title: "Design Drill: How many workers? #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **37/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["13","37","111","222"],"answer":2},{"prompt":"Jobs arrive at **13/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["78","13","39","5"],"answer":2},{"prompt":"Jobs arrive at **263/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["263","106","1315","53"],"answer":3},{"prompt":"Jobs arrive at **277/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["277","1385","2770","56"],"answer":1},{"prompt":"Jobs arrive at **62/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["310","62","13","26"],"answer":2}]
---
# Design Drill: How many workers? #14

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
