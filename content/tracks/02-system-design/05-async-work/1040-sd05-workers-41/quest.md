---
slug: "sd05-workers-41"
title: "Design Drill: How many workers? #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **54/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["648","54","1296","5"],"answer":0},{"prompt":"Jobs arrive at **19/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["38","19","1"],"answer":1},{"prompt":"Jobs arrive at **77/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["770","16","77","385"],"answer":3},{"prompt":"Jobs arrive at **59/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["590","59","12","295"],"answer":3},{"prompt":"Jobs arrive at **140/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["140","94","210","420"],"answer":2}]
---
# Design Drill: How many workers? #41

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
