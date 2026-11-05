---
slug: "sd04-db-load-22"
title: "Design Drill: Database load behind a cache #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**38,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["57,750","5780","38,500","32,725"],"answer":1},{"prompt":"**47,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["3760","37,600","43,240","47,000"],"answer":0},{"prompt":"**21,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["5380","53,750","21,500","16,125"],"answer":0},{"prompt":"**13,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["675","6750","12,825","13,500"],"answer":0},{"prompt":"**39,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["7900","39,500","38,710","790"],"answer":3}]
---
# Design Drill: Database load behind a cache #22

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
