---
slug: "sd05-workers-46"
title: "Design Drill: How many workers? #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **81/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["162","1","81"],"answer":2},{"prompt":"Jobs arrive at **115/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["6","4600","115","2300"],"answer":3},{"prompt":"Jobs arrive at **120/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["15","1920","120","960"],"answer":3},{"prompt":"Jobs arrive at **139/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["47","417","139","834"],"answer":1},{"prompt":"Jobs arrive at **243/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["243","98","1215","49"],"answer":3}]
---
# Design Drill: How many workers? #46

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
