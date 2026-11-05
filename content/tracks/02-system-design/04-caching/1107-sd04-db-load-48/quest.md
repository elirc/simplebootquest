---
slug: "sd04-db-load-48"
title: "Design Drill: Database load behind a cache #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**13,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["2030","20,250","13,500","11,475"],"answer":0},{"prompt":"**16,500 reads/s** go through a cache with a **95%** hit ratio. How many reads/s reach the database?","options":["8250","16,500","15,675","825"],"answer":3},{"prompt":"**25,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["25,500","24,990","5100","510"],"answer":3},{"prompt":"**23,500 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["23,030","23,500","4700","470"],"answer":3},{"prompt":"**26,500 reads/s** go through a cache with a **85%** hit ratio. How many reads/s reach the database?","options":["39,750","26,500","3980","22,525"],"answer":2}]
---
# Design Drill: Database load behind a cache #48

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
