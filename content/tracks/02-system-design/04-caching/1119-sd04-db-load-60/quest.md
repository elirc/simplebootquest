---
slug: "sd04-db-load-60"
title: "Design Drill: Database load behind a cache #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**21,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["210","2100","18,900","21,000"],"answer":1},{"prompt":"**8000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["2400","240","8000","7760"],"answer":1},{"prompt":"**29,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["29,000","58,000","5800","23,200"],"answer":2},{"prompt":"**39,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["7800","780","39,000","38,220"],"answer":1},{"prompt":"**46,500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["46,500","37,200","42,780","3720"],"answer":3}]
---
# Design Drill: Database load behind a cache #60

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
