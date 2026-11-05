---
slug: "sd04-db-load-11"
title: "Design Drill: Database load behind a cache #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**41,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["83,000","33,200","8300","41,500"],"answer":2},{"prompt":"**38,500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["38,500","37,345","11,550","1160"],"answer":3},{"prompt":"**26,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["13,000","26,000","1300","24,700"],"answer":2},{"prompt":"**50,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["500","45,000","50,000","5000"],"answer":3},{"prompt":"**35,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["71,000","28,400","35,500","7100"],"answer":3}]
---
# Design Drill: Database load behind a cache #11

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
