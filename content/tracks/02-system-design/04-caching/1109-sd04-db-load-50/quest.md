---
slug: "sd04-db-load-50"
title: "Design Drill: Database load behind a cache #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**38,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["3040","30,400","34,960","38,000"],"answer":0},{"prompt":"**2500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["2480","25","250","2500"],"answer":1},{"prompt":"**37,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["11,100","37,000","1110","35,890"],"answer":2},{"prompt":"**12,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["6000","600","12,000","11,400"],"answer":1},{"prompt":"**34,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["33,320","680","6800","34,000"],"answer":1}]
---
# Design Drill: Database load behind a cache #50

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
