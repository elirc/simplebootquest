---
slug: "sd04-db-load-31"
title: "Design Drill: Database load behind a cache #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**23,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["3530","35,250","23,500","19,975"],"answer":0},{"prompt":"**6000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["6000","1200","5880","120"],"answer":3},{"prompt":"**11,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["11,000","22,000","8800","2200"],"answer":3},{"prompt":"**47,500 reads/s** go through a cache with a **99%** hit ratio. How many reads/s reach the database?","options":["47,025","475","47,500","4750"],"answer":1},{"prompt":"**45,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["22,750","2280","43,225","45,500"],"answer":1}]
---
# Design Drill: Database load behind a cache #31

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
