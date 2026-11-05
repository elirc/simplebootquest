---
slug: "sd04-db-load-7"
title: "Design Drill: Database load behind a cache #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**49,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["24,750","49,500","47,025","2480"],"answer":3},{"prompt":"**47,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["47,000","9400","94,000","37,600"],"answer":1},{"prompt":"**9000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["9000","2250","6750","22,500"],"answer":1},{"prompt":"**42,500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["1280","12,750","42,500","41,225"],"answer":0},{"prompt":"**11,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["880","10,120","11,000","8800"],"answer":0}]
---
# Design Drill: Database load behind a cache #7

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
