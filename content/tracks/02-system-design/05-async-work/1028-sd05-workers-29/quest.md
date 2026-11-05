---
slug: "sd05-workers-29"
title: "Design Drill: How many workers? #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Jobs arrive at **97/s** and each takes **8 s** of work, one job per worker at a time. At least how many workers keep up?","options":["13","776","1552","97"],"answer":1},{"prompt":"Jobs arrive at **19/s** and each takes **20 s** of work, one job per worker at a time. At least how many workers keep up?","options":["1","19","380","760"],"answer":2},{"prompt":"Jobs arrive at **212/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["848","106","212","424"],"answer":3},{"prompt":"Jobs arrive at **232/s** and each takes **3 s** of work, one job per worker at a time. At least how many workers keep up?","options":["232","1392","696","78"],"answer":2},{"prompt":"Jobs arrive at **202/s** and each takes **2 s** of work, one job per worker at a time. At least how many workers keep up?","options":["404","808","101","202"],"answer":0}]
---
# Design Drill: How many workers? #29

Workers needed ≈ arrival rate × processing time per job (Little's law), plus headroom. If jobs arrive faster than you finish them, the backlog grows without limit.
