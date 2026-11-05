---
slug: "sd04-db-load-16"
title: "Design Drill: Database load behind a cache #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**36,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["35,770","7300","36,500","730"],"answer":3},{"prompt":"**27,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["810","27,000","8100","26,190"],"answer":0},{"prompt":"**15,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["155","15,345","15,500","1550"],"answer":0},{"prompt":"**35,500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["28,400","35,500","32,660","2840"],"answer":3},{"prompt":"**8500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["7230","12,750","8500","1280"],"answer":3}]
---
# Design Drill: Database load behind a cache #16

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
