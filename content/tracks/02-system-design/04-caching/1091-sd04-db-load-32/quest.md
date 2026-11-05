---
slug: "sd04-db-load-32"
title: "Design Drill: Database load behind a cache #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**1500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["1500","750","75","1430"],"answer":2},{"prompt":"**14,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["14,500","11,600","2900","29,000"],"answer":2},{"prompt":"**20,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["20,000","18,400","16,000","1600"],"answer":3},{"prompt":"**36,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["36,500","365","32,850","3650"],"answer":3},{"prompt":"**38,000 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["37,620","38,000","380","3800"],"answer":2}]
---
# Design Drill: Database load behind a cache #32

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
