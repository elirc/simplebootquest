---
slug: "sd04-db-load-21"
title: "Design Drill: Database load behind a cache #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**42,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["420","37,800","42,000","4200"],"answer":3},{"prompt":"**19,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["15,200","17,480","1520","19,000"],"answer":2},{"prompt":"**12,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["12,000","2400","11,760","240"],"answer":3},{"prompt":"**39,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["395","3950","35,550","39,500"],"answer":1},{"prompt":"**11,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["11,000","110","9900","1100"],"answer":3}]
---
# Design Drill: Database load behind a cache #21

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
