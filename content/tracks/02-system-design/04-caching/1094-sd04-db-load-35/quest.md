---
slug: "sd04-db-load-35"
title: "Design Drill: Database load behind a cache #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**22,500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["675","22,500","21,825","6750"],"answer":0},{"prompt":"**47,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["47,500","475","4750","42,750"],"answer":2},{"prompt":"**7000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["560","5600","7000","6440"],"answer":0},{"prompt":"**23,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["23,500","11,750","22,325","1180"],"answer":3},{"prompt":"**40,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["40,000","4000","400","36,000"],"answer":1}]
---
# Design Drill: Database load behind a cache #35

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
