---
slug: "sd04-db-load-58"
title: "Design Drill: Database load behind a cache #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**10,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["9200","10,000","8000","800"],"answer":3},{"prompt":"**35,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["70,000","35,000","7000","28,000"],"answer":2},{"prompt":"**14,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["36,250","10,875","3630","14,500"],"answer":2},{"prompt":"**17,000 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["16,490","17,000","5100","510"],"answer":3},{"prompt":"**14,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["14,000","11,200","1120","12,880"],"answer":2}]
---
# Design Drill: Database load behind a cache #58

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
