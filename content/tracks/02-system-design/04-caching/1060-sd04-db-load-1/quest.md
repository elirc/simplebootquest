---
slug: "sd04-db-load-1"
title: "Design Drill: Database load behind a cache #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**16,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["320","16,000","15,680","3200"],"answer":0},{"prompt":"**1500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["2250","225","1500","1280"],"answer":1},{"prompt":"**2000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["60","1940","2000","600"],"answer":0},{"prompt":"**22,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["33,750","3380","22,500","19,125"],"answer":1},{"prompt":"**28,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["8400","28,000","27,160","840"],"answer":3}]
---
# Design Drill: Database load behind a cache #1

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
