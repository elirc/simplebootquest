---
slug: "sd04-db-load-28"
title: "Design Drill: Database load behind a cache #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**15,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["15,000","12,750","2250","22,500"],"answer":2},{"prompt":"**1500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["3750","1130","375","1500"],"answer":2},{"prompt":"**40,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["8100","40,500","81,000","32,400"],"answer":0},{"prompt":"**7000 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["6930","700","70","7000"],"answer":2},{"prompt":"**20,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["20,000","18,000","2000","200"],"answer":2}]
---
# Design Drill: Database load behind a cache #28

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
