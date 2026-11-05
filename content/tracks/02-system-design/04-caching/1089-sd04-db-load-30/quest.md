---
slug: "sd04-db-load-30"
title: "Design Drill: Database load behind a cache #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**22,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["5630","56,250","22,500","16,875"],"answer":0},{"prompt":"**20,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["1000","19,000","10,000","20,000"],"answer":0},{"prompt":"**8000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["2000","6000","8000","20,000"],"answer":0},{"prompt":"**38,000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["28,500","38,000","95,000","9500"],"answer":3},{"prompt":"**50,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["49,000","10,000","1000","50,000"],"answer":2}]
---
# Design Drill: Database load behind a cache #30

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
