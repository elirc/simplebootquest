---
slug: "sd04-db-load-38"
title: "Design Drill: Database load behind a cache #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**24,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["24,010","24,500","490","4900"],"answer":2},{"prompt":"**37,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["75,000","7500","37,500","30,000"],"answer":1},{"prompt":"**1500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["1500","1470","300","30"],"answer":3},{"prompt":"**34,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["86,250","8630","25,875","34,500"],"answer":1},{"prompt":"**23,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["230","23,000","2300","20,700"],"answer":2}]
---
# Design Drill: Database load behind a cache #38

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
