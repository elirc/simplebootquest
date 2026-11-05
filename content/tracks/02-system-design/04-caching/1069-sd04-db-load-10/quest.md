---
slug: "sd04-db-load-10"
title: "Design Drill: Database load behind a cache #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**45,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["11,375","113,750","34,125","45,500"],"answer":0},{"prompt":"**23,500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["1880","18,800","23,500","21,620"],"answer":0},{"prompt":"**47,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["9400","940","46,060","47,000"],"answer":1},{"prompt":"**4000 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["4000","400","3960","40"],"answer":3},{"prompt":"**33,500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["10,050","33,500","1010","32,495"],"answer":2}]
---
# Design Drill: Database load behind a cache #10

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
