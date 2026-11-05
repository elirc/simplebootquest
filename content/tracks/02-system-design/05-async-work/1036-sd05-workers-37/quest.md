---
slug: "sd05-workers-37"
title: "Design Drill: How many workers? #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **291/s** and each takes **12 s** of work, one job per worker at a time. At least how many workers keep up?","options":["291","6984","25","3492"],"answer":3},{"prompt":"Jobs arrive at **4/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["12","6","3","4"],"answer":1},{"prompt":"Jobs arrive at **134/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["54","27","670","134"],"answer":1},{"prompt":"Jobs arrive at **226/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["113","452","1","226"],"answer":0},{"prompt":"Jobs arrive at **105/s** and each takes **5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1050","21","525","105"],"answer":2}]
---
# Design Drill: How many workers? #37

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
