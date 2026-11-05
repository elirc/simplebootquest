---
slug: "sd05-workers-7"
title: "Design Drill: How many workers? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **9/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["28","14","6","9"],"answer":1},{"prompt":"Jobs arrive at **53/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["265","53","22","11"],"answer":3},{"prompt":"Jobs arrive at **37/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["37","4","888","444"],"answer":3},{"prompt":"Jobs arrive at **231/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["94","47","231","1155"],"answer":1},{"prompt":"Jobs arrive at **47/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["47","4","1128","564"],"answer":3}]
---
# Design Drill: How many workers? #7

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
