---
slug: "sd04-db-load-6"
title: "Design Drill: Database load behind a cache #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**32,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["31,360","6400","640","32,000"],"answer":2},{"prompt":"**42,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["42,500","425","42,075","4250"],"answer":1},{"prompt":"**14,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["21,000","14,000","11,900","2100"],"answer":3},{"prompt":"**20,500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["1640","20,500","16,400","18,860"],"answer":0},{"prompt":"**10,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["10,000","10000","1000","9000"],"answer":2}]
---
# Design Drill: Database load behind a cache #6

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
