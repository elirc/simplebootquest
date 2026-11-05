---
slug: "sd05-workers-9"
title: "Design Drill: How many workers? #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **56/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["56","1","112","28"],"answer":3},{"prompt":"Jobs arrive at **223/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["112","446","892","223"],"answer":1},{"prompt":"Jobs arrive at **160/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["160","1600","800","32"],"answer":2},{"prompt":"Jobs arrive at **156/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["78","624","312","156"],"answer":2},{"prompt":"Jobs arrive at **215/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["2150","1075","215","43"],"answer":1}]
---
# Design Drill: How many workers? #9

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
