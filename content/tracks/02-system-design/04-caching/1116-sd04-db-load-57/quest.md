---
slug: "sd04-db-load-57"
title: "Design Drill: Database load behind a cache #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**49,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["74,250","49,500","7430","42,075"],"answer":2},{"prompt":"**10,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["10,000","8500","15,000","1500"],"answer":3},{"prompt":"**33,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["31,350","16,500","33,000","1650"],"answer":3},{"prompt":"**30,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["61,000","6100","30,500","24,400"],"answer":1},{"prompt":"**18,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["185","18,500","1850","18,315"],"answer":0}]
---
# Design Drill: Database load behind a cache #57

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
