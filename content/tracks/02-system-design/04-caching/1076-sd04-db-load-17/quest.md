---
slug: "sd04-db-load-17"
title: "Design Drill: Database load behind a cache #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**1500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["1350","1500","15","150"],"answer":3},{"prompt":"**32,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["650","32,500","31,850","6500"],"answer":0},{"prompt":"**9500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["760","7600","9500","8740"],"answer":0},{"prompt":"**47,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["11,875","47,500","118,750","35,625"],"answer":0},{"prompt":"**20,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["18,450","20,500","205","2050"],"answer":3}]
---
# Design Drill: Database load behind a cache #17

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
