---
slug: "sd04-db-load-33"
title: "Design Drill: Database load behind a cache #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**50,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["50,000","2500","47,500","25,000"],"answer":1},{"prompt":"**27,000 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["2700","27,000","26,730","270"],"answer":3},{"prompt":"**27,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["2160","27,000","24,840","21,600"],"answer":0},{"prompt":"**23,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["23,000","690","6900","22,310"],"answer":1},{"prompt":"**14,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["14,000","2800","28,000","11,200"],"answer":1}]
---
# Design Drill: Database load behind a cache #33

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
