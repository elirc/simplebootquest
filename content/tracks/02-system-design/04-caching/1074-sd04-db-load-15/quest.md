---
slug: "sd04-db-load-15"
title: "Design Drill: Database load behind a cache #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**49,000 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["49,000","2450","24,500","46,550"],"answer":1},{"prompt":"**36,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["27,375","36,500","91,250","9130"],"answer":3},{"prompt":"**37,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["28,125","9380","93,750","37,500"],"answer":1},{"prompt":"**2500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["2250","250","2500","25"],"answer":1},{"prompt":"**27,000 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["40,500","22,950","27,000","4050"],"answer":3}]
---
# Design Drill: Database load behind a cache #15

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
