---
slug: "sd04-db-load-55"
title: "Design Drill: Database load behind a cache #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**43,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["21,750","41,325","43,500","2180"],"answer":3},{"prompt":"**36,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["31,025","5480","36,500","54,750"],"answer":1},{"prompt":"**3000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["450","2550","4500","3000"],"answer":0},{"prompt":"**16,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["13,200","3300","16,500","33,000"],"answer":1},{"prompt":"**33,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["3350","335","33,165","33,500"],"answer":1}]
---
# Design Drill: Database load behind a cache #55

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
