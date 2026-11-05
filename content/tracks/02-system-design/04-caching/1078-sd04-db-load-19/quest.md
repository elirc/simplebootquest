---
slug: "sd04-db-load-19"
title: "Design Drill: Database load behind a cache #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**6000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["4500","6000","1500","15,000"],"answer":2},{"prompt":"**2500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["125","2500","1250","2380"],"answer":0},{"prompt":"**21,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["21,500","21,285","2150","215"],"answer":3},{"prompt":"**1000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["50","950","1000","500"],"answer":0},{"prompt":"**48,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["970","9700","48,500","47,530"],"answer":0}]
---
# Design Drill: Database load behind a cache #19

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
