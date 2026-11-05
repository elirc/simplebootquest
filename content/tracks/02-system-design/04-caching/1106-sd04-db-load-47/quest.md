---
slug: "sd04-db-load-47"
title: "Design Drill: Database load behind a cache #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**39,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["79,000","39,500","31,600","7900"],"answer":3},{"prompt":"**31,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["4650","31,000","26,350","46,500"],"answer":0},{"prompt":"**10,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["9450","105","1050","10,500"],"answer":2},{"prompt":"**31,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["31,500","63,000","6300","25,200"],"answer":2},{"prompt":"**7000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["1750","5250","17,500","7000"],"answer":0}]
---
# Design Drill: Database load behind a cache #47

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
