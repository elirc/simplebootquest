---
slug: "sd04-db-load-13"
title: "Design Drill: Database load behind a cache #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**14,500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["11,600","14,500","1160","13,340"],"answer":2},{"prompt":"**16,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["1600","16,000","160","14,400"],"answer":0},{"prompt":"**12,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["18,750","1880","10,625","12,500"],"answer":1},{"prompt":"**46,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["69,000","6900","46,000","39,100"],"answer":1},{"prompt":"**5500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["13,750","5500","1380","4130"],"answer":2}]
---
# Design Drill: Database load behind a cache #13

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
