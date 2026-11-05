---
slug: "sd04-db-load-20"
title: "Design Drill: Database load behind a cache #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**37,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["29,600","37,000","74,000","7400"],"answer":3},{"prompt":"**47,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["71,250","7130","47,500","40,375"],"answer":1},{"prompt":"**3500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["3500","700","7000","2800"],"answer":1},{"prompt":"**40,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["60,000","6000","34,000","40,000"],"answer":1},{"prompt":"**49,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["45,080","3920","39,200","49,000"],"answer":1}]
---
# Design Drill: Database load behind a cache #20

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
