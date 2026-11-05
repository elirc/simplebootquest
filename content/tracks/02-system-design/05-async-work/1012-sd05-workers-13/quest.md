---
slug: "sd05-workers-13"
title: "Design Drill: How many workers? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **188/s** and each takes **0.2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["188","38","76","940"],"answer":1},{"prompt":"Jobs arrive at **76/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["76","456","26","228"],"answer":3},{"prompt":"Jobs arrive at **147/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["49","882","147","441"],"answer":3},{"prompt":"Jobs arrive at **163/s** and each takes **1.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["490","163","109","245"],"answer":3},{"prompt":"Jobs arrive at **166/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","332","166"],"answer":2}]
---
# Design Drill: How many workers? #13

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
