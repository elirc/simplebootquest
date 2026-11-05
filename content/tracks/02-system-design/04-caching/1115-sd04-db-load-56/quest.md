---
slug: "sd04-db-load-56"
title: "Design Drill: Database load behind a cache #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**42,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["425","42,500","4250","38,250"],"answer":2},{"prompt":"**500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["10","500","100","490"],"answer":0},{"prompt":"**42,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["33,600","38,640","42,000","3360"],"answer":3},{"prompt":"**4000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["8000","800","3200","4000"],"answer":1},{"prompt":"**43,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["42,140","43,000","8600","860"],"answer":3}]
---
# Design Drill: Database load behind a cache #56

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
