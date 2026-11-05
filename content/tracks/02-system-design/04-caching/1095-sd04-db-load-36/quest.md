---
slug: "sd04-db-load-36"
title: "Design Drill: Database load behind a cache #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**17,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["17,000","14,450","2550","25,500"],"answer":2},{"prompt":"**28,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["570","28,500","5700","27,930"],"answer":0},{"prompt":"**39,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["39,500","98,750","9880","29,625"],"answer":2},{"prompt":"**2500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["5000","500","2500","2000"],"answer":1},{"prompt":"**20,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["19,400","6000","600","20,000"],"answer":2}]
---
# Design Drill: Database load behind a cache #36

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
