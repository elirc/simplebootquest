---
slug: "sd04-db-load-3"
title: "Design Drill: Database load behind a cache #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**36,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["28,800","72,000","7200","36,000"],"answer":2},{"prompt":"**42,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["31,875","106,250","10,625","42,500"],"answer":2},{"prompt":"**11,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["28,750","8630","2880","11,500"],"answer":2},{"prompt":"**15,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["14,250","750","15,000","7500"],"answer":1},{"prompt":"**39,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["1170","37,830","11,700","39,000"],"answer":0}]
---
# Design Drill: Database load behind a cache #3

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
