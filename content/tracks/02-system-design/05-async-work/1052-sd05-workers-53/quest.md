---
slug: "sd05-workers-53"
title: "Design Drill: How many workers? #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **187/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["94","374","748","187"],"answer":1},{"prompt":"Jobs arrive at **274/s** and each takes **0.5 s** of work, one job per worker at a time. At least how many workers keep up?","options":["548","274","137","1"],"answer":2},{"prompt":"Jobs arrive at **106/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["106","1","212"],"answer":0},{"prompt":"Jobs arrive at **78/s** and each takes **1 s** of work, one job per worker at a time. At least how many workers keep up?","options":["78","1","156"],"answer":0},{"prompt":"Jobs arrive at **36/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["288","5","576","36"],"answer":0}]
---
# Design Drill: How many workers? #53

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
