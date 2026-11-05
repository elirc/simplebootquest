---
slug: "sd04-db-load-34"
title: "Design Drill: Database load behind a cache #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**7500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["7130","7500","3750","375"],"answer":3},{"prompt":"**8000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["8000","640","6400","7360"],"answer":1},{"prompt":"**500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["400","1000","500","100"],"answer":3},{"prompt":"**36,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["1800","36,000","18,000","34,200"],"answer":0},{"prompt":"**29,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["73,750","29,500","7380","22,125"],"answer":2}]
---
# Design Drill: Database load behind a cache #34

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
