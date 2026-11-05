---
slug: "sd04-db-load-14"
title: "Design Drill: Database load behind a cache #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**22,000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["55,000","5500","16,500","22,000"],"answer":1},{"prompt":"**42,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["1260","40,740","12,600","42,000"],"answer":0},{"prompt":"**25,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["23,000","2000","25,000","20,000"],"answer":1},{"prompt":"**12,000 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["120","1200","11,880","12,000"],"answer":0},{"prompt":"**21,000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["21,000","5250","52,500","15,750"],"answer":1}]
---
# Design Drill: Database load behind a cache #14

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
