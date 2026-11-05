---
slug: "sd04-db-load-41"
title: "Design Drill: Database load behind a cache #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**12,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["10,200","1800","12,000","18,000"],"answer":1},{"prompt":"**17,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["17,000","16,150","850","8500"],"answer":2},{"prompt":"**42,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["42,000","2100","21,000","39,900"],"answer":1},{"prompt":"**9000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["720","8280","7200","9000"],"answer":0},{"prompt":"**16,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["16,500","16,170","3300","330"],"answer":3}]
---
# Design Drill: Database load behind a cache #41

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
