---
slug: "sd04-db-load-2"
title: "Design Drill: Database load behind a cache #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**24,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["1230","23,275","12,250","24,500"],"answer":0},{"prompt":"**17,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["13,125","17,500","43,750","4380"],"answer":3},{"prompt":"**40,500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["12,150","39,285","1220","40,500"],"answer":2},{"prompt":"**44,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["3520","35,200","44,000","40,480"],"answer":0},{"prompt":"**2500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["2300","2000","200","2500"],"answer":2}]
---
# Design Drill: Database load behind a cache #2

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
