---
slug: "sd05-workers-54"
title: "Design Drill: How many workers? #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **26/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["260","6","26","130"],"answer":3},{"prompt":"Jobs arrive at **21/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["21","252","504","2"],"answer":1},{"prompt":"Jobs arrive at **282/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["141","1128","282","564"],"answer":3},{"prompt":"Jobs arrive at **180/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["90","360","720","180"],"answer":1},{"prompt":"Jobs arrive at **193/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["194","386","97","193"],"answer":2}]
---
# Design Drill: How many workers? #54

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
