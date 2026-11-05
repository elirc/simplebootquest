---
slug: "sd04-db-load-40"
title: "Design Drill: Database load behind a cache #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**21,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["20,425","1080","21,500","10,750"],"answer":1},{"prompt":"**29,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["2950","29,205","295","29,500"],"answer":2},{"prompt":"**22,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["22,500","2250","225","20,250"],"answer":1},{"prompt":"**10,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["2000","200","10,000","9800"],"answer":1},{"prompt":"**35,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["35,000","29,750","52,500","5250"],"answer":3}]
---
# Design Drill: Database load behind a cache #40

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
