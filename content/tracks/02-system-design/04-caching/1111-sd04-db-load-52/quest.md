---
slug: "sd04-db-load-52"
title: "Design Drill: Database load behind a cache #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**1500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["15","1490","1500","150"],"answer":0},{"prompt":"**18,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["2700","15,300","27,000","18,000"],"answer":0},{"prompt":"**48,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["4800","43,200","480","48,000"],"answer":0},{"prompt":"**37,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["375","37,125","37,500","3750"],"answer":0},{"prompt":"**31,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["1580","15,750","29,925","31,500"],"answer":0}]
---
# Design Drill: Database load behind a cache #52

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
