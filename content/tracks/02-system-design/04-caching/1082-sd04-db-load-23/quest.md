---
slug: "sd04-db-load-23"
title: "Design Drill: Database load behind a cache #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**28,000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["70,000","28,000","7000","21,000"],"answer":2},{"prompt":"**5000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["250","4750","5000","2500"],"answer":0},{"prompt":"**50,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["100,000","40,000","10000","50,000"],"answer":2},{"prompt":"**45,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["1350","45,000","13,500","43,650"],"answer":0},{"prompt":"**7500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["1880","18,750","5630","7500"],"answer":0}]
---
# Design Drill: Database load behind a cache #23

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
