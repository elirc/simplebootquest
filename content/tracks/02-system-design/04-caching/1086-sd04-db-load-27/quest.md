---
slug: "sd04-db-load-27"
title: "Design Drill: Database load behind a cache #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**10,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["20,000","8000","2000","10,000"],"answer":2},{"prompt":"**32,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["32,000","6400","64,000","25,600"],"answer":1},{"prompt":"**13,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["10,800","13,500","27,000","2700"],"answer":3},{"prompt":"**26,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["1330","13,250","25,175","26,500"],"answer":0},{"prompt":"**12,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["12,000","9600","960","11,040"],"answer":2}]
---
# Design Drill: Database load behind a cache #27

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
