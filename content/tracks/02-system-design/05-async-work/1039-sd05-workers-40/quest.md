---
slug: "sd05-workers-40"
title: "Design Drill: How many workers? #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **63/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["378","21","189","63"],"answer":2},{"prompt":"Jobs arrive at **190/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["950","38","76","190"],"answer":1},{"prompt":"Jobs arrive at **147/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["147","19","1176","2352"],"answer":2},{"prompt":"Jobs arrive at **173/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["58","173","519","1038"],"answer":2},{"prompt":"Jobs arrive at **70/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["9","560","70","1120"],"answer":1}]
---
# Design Drill: How many workers? #40

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
