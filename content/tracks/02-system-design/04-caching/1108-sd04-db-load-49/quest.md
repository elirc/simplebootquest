---
slug: "sd04-db-load-49"
title: "Design Drill: Database load behind a cache #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**29,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["4430","25,075","29,500","44,250"],"answer":0},{"prompt":"**21,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["21,000","19,320","16,800","1680"],"answer":3},{"prompt":"**33,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["31,825","16,750","33,500","1680"],"answer":3},{"prompt":"**41,000 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["8200","82,000","32,800","41,000"],"answer":0},{"prompt":"**29,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["29,000","27,550","14,500","1450"],"answer":3}]
---
# Design Drill: Database load behind a cache #49

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
