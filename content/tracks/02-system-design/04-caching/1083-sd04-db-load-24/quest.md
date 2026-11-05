---
slug: "sd04-db-load-24"
title: "Design Drill: Database load behind a cache #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**24,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["18,375","61,250","6130","24,500"],"answer":2},{"prompt":"**32,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["32,000","1600","30,400","16,000"],"answer":1},{"prompt":"**38,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["1930","38,500","36,575","19,250"],"answer":0},{"prompt":"**26,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["780","26,000","7800","25,220"],"answer":0},{"prompt":"**46,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["36,800","92,000","46,000","9200"],"answer":3}]
---
# Design Drill: Database load behind a cache #24

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
