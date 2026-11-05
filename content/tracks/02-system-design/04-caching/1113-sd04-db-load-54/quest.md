---
slug: "sd04-db-load-54"
title: "Design Drill: Database load behind a cache #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**49,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["49,500","49,005","4950","495"],"answer":3},{"prompt":"**38,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["770","7700","38,500","37,730"],"answer":0},{"prompt":"**17,000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["17,000","4250","12,750","42,500"],"answer":1},{"prompt":"**35,500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["1070","35,500","34,435","10,650"],"answer":0},{"prompt":"**7500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["7500","6900","600","6000"],"answer":2}]
---
# Design Drill: Database load behind a cache #54

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
