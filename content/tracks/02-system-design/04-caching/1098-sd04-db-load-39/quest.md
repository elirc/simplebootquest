---
slug: "sd04-db-load-39"
title: "Design Drill: Database load behind a cache #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**37,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["31,875","37,500","56,250","5630"],"answer":3},{"prompt":"**22,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["450","4500","22,050","22,500"],"answer":0},{"prompt":"**41,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["36,900","41,000","410","4100"],"answer":3},{"prompt":"**13,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["1350","135","13,500","12,150"],"answer":0},{"prompt":"**21,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["21,000","16,800","4200","42,000"],"answer":2}]
---
# Design Drill: Database load behind a cache #39

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
