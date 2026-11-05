---
slug: "sd04-db-load-45"
title: "Design Drill: Database load behind a cache #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**6000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["900","9000","5100","6000"],"answer":0},{"prompt":"**33,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["33,000","29,700","3300","330"],"answer":2},{"prompt":"**31,000 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["310","3100","30,690","31,000"],"answer":0},{"prompt":"**22,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["22,000","1760","20,240","17,600"],"answer":1},{"prompt":"**4500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["900","4500","9000","3600"],"answer":0}]
---
# Design Drill: Database load behind a cache #45

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
