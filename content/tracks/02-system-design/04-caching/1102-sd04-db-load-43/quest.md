---
slug: "sd04-db-load-43"
title: "Design Drill: Database load behind a cache #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**1000 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["10","1000","990","100"],"answer":0},{"prompt":"**28,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["5600","560","28,000","27,440"],"answer":1},{"prompt":"**3500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["525","2980","5250","3500"],"answer":0},{"prompt":"**3500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["3400","105","1050","3500"],"answer":1},{"prompt":"**28,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["2850","28,500","28,215","285"],"answer":3}]
---
# Design Drill: Database load behind a cache #43

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
