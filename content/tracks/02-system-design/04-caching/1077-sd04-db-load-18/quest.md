---
slug: "sd04-db-load-18"
title: "Design Drill: Database load behind a cache #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**42,500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["42,500","34,000","39,100","3400"],"answer":3},{"prompt":"**18,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["18,000","5400","17,460","540"],"answer":3},{"prompt":"**41,500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["40,255","12,450","41,500","1250"],"answer":3},{"prompt":"**41,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["39,425","20,750","41,500","2080"],"answer":3},{"prompt":"**41,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["6150","34,850","61,500","41,000"],"answer":0}]
---
# Design Drill: Database load behind a cache #18

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
