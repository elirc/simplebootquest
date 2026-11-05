---
slug: "sd04-db-load-8"
title: "Design Drill: Database load behind a cache #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**9000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["90","8100","900","9000"],"answer":2},{"prompt":"**39,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["395","39,500","3950","39,105"],"answer":0},{"prompt":"**31,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["27,900","31,000","3100","310"],"answer":2},{"prompt":"**48,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["38,400","48,000","9600","96,000"],"answer":2},{"prompt":"**44,500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["1340","13,350","43,165","44,500"],"answer":0}]
---
# Design Drill: Database load behind a cache #8

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
