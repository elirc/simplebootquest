---
slug: "sd04-db-load-29"
title: "Design Drill: Database load behind a cache #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**5000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["4500","5000","50","500"],"answer":3},{"prompt":"**23,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["18,400","1840","23,000","21,160"],"answer":1},{"prompt":"**31,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["7880","23,625","31,500","78,750"],"answer":0},{"prompt":"**36,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["36,000","5400","30,600","54,000"],"answer":1},{"prompt":"**34,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["345","34,500","34,155","3450"],"answer":0}]
---
# Design Drill: Database load behind a cache #29

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
