---
slug: "sd04-db-load-51"
title: "Design Drill: Database load behind a cache #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**1000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["980","1000","200","20"],"answer":3},{"prompt":"**36,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["36,500","365","36,135","3650"],"answer":1},{"prompt":"**5000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["4250","7500","5000","750"],"answer":3},{"prompt":"**25,000 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["25,000","2500","250","24,750"],"answer":2},{"prompt":"**9000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["1350","9000","13,500","7650"],"answer":0}]
---
# Design Drill: Database load behind a cache #51

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
