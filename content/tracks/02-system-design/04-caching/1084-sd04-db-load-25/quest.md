---
slug: "sd04-db-load-25"
title: "Design Drill: Database load behind a cache #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**27,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["27,500","26,125","13,750","1380"],"answer":3},{"prompt":"**24,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["2450","24,500","245","24,255"],"answer":2},{"prompt":"**7000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["70","700","6300","7000"],"answer":1},{"prompt":"**7500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["750","7430","75","7500"],"answer":2},{"prompt":"**48,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["2400","24,000","45,600","48,000"],"answer":0}]
---
# Design Drill: Database load behind a cache #25

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
