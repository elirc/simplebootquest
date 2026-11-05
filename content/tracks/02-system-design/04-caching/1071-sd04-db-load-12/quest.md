---
slug: "sd04-db-load-12"
title: "Design Drill: Database load behind a cache #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**28,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["28,000","2800","280","25,200"],"answer":1},{"prompt":"**46,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["46,000","9200","920","45,080"],"answer":2},{"prompt":"**19,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["15,200","38,000","3800","19,000"],"answer":2},{"prompt":"**21,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["430","4300","21,070","21,500"],"answer":0},{"prompt":"**35,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["35,000","32,200","28,000","2800"],"answer":3}]
---
# Design Drill: Database load behind a cache #12

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
