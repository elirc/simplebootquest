---
slug: "sd04-db-load-46"
title: "Design Drill: Database load behind a cache #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**1000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["200","800","1000","2000"],"answer":0},{"prompt":"**500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["450","5","500","50"],"answer":3},{"prompt":"**47,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["47,000","14,100","45,590","1410"],"answer":3},{"prompt":"**24,500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["24,500","19,600","22,540","1960"],"answer":3},{"prompt":"**5500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["440","5060","4400","5500"],"answer":0}]
---
# Design Drill: Database load behind a cache #46

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
