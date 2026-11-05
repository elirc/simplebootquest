---
slug: "sd04-db-load-9"
title: "Design Drill: Database load behind a cache #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**37,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["37,000","36,260","7400","740"],"answer":3},{"prompt":"**24,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["20,825","36,750","24,500","3680"],"answer":3},{"prompt":"**8000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["16,000","1600","6400","8000"],"answer":1},{"prompt":"**4000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["1200","120","4000","3880"],"answer":1},{"prompt":"**22,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["11,000","1100","22,000","20,900"],"answer":1}]
---
# Design Drill: Database load behind a cache #9

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
