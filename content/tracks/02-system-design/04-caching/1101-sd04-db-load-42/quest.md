---
slug: "sd04-db-load-42"
title: "Design Drill: Database load behind a cache #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**37,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["33,300","3700","370","37,000"],"answer":1},{"prompt":"**36,000 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["360","3600","35,640","36,000"],"answer":0},{"prompt":"**35,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["30,175","5330","53,250","35,500"],"answer":1},{"prompt":"**1500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["1500","1200","120","1380"],"answer":2},{"prompt":"**17,500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["1400","16,100","14,000","17,500"],"answer":0}]
---
# Design Drill: Database load behind a cache #42

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
