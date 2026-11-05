---
slug: "sd04-db-load-4"
title: "Design Drill: Database load behind a cache #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["40","500","460","400"],"answer":0},{"prompt":"**46,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["116,250","34,875","11,625","46,500"],"answer":2},{"prompt":"**45,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["68,250","45,500","6830","38,675"],"answer":2},{"prompt":"**13,500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["13,095","4050","13,500","405"],"answer":3},{"prompt":"**28,500 reads/s** go through a cache with a **97%** hit ratio. How many reads/s reach the database?","options":["27,645","8550","855","28,500"],"answer":2}]
---
# Design Drill: Database load behind a cache #4

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
