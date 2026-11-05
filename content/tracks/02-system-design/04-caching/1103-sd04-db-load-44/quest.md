---
slug: "sd04-db-load-44"
title: "Design Drill: Database load behind a cache #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**4000 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["4000","1000","10,000","3000"],"answer":1},{"prompt":"**45,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["91,000","36,400","9100","45,500"],"answer":2},{"prompt":"**24,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["49,000","19,600","24,500","4900"],"answer":3},{"prompt":"**46,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["43,700","23,000","46,000","2300"],"answer":3},{"prompt":"**32,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["4800","27,200","32,000","48,000"],"answer":0}]
---
# Design Drill: Database load behind a cache #44

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
