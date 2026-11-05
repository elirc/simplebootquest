---
slug: "sd04-db-load-37"
title: "Design Drill: Database load behind a cache #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**8500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["8500","21,250","6380","2130"],"answer":3},{"prompt":"**33,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["335","33,500","30,150","3350"],"answer":3},{"prompt":"**42,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["840","8400","41,160","42,000"],"answer":0},{"prompt":"**43,000 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["430","42,570","43,000","4300"],"answer":0},{"prompt":"**43,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["43,065","435","43,500","4350"],"answer":1}]
---
# Design Drill: Database load behind a cache #37

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
