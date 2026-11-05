---
slug: "sd04-db-load-5"
title: "Design Drill: Database load behind a cache #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**48,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["48,000","14,400","1440","46,560"],"answer":2},{"prompt":"**48,000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["120,000","12,000","48,000","36,000"],"answer":1},{"prompt":"**500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["500","495","50","5"],"answer":3},{"prompt":"**24,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["24,500","22,050","2450","245"],"answer":2},{"prompt":"**23,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["23,500","2350","235","23,265"],"answer":2}]
---
# Design Drill: Database load behind a cache #5

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
