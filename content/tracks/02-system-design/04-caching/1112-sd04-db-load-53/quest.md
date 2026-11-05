---
slug: "sd04-db-load-53"
title: "Design Drill: Database load behind a cache #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**36,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["1830","34,675","18,250","36,500"],"answer":0},{"prompt":"**38,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["5700","38,000","32,300","57,000"],"answer":0},{"prompt":"**21,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["31,500","3150","21,000","17,850"],"answer":1},{"prompt":"**24,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["24,000","720","7200","23,280"],"answer":1},{"prompt":"**13,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["12,350","13,000","6500","650"],"answer":3}]
---
# Design Drill: Database load behind a cache #53

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
