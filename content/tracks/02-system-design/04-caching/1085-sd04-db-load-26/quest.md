---
slug: "sd04-db-load-26"
title: "Design Drill: Database load behind a cache #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**48,000 reads/s** go through a cache with a **98%** hit ratio. How many reads/s reach the database?","options":["960","48,000","9600","47,040"],"answer":0},{"prompt":"**10,500 reads/s** go through a cache with a **80%** hit ratio. How many reads/s reach the database?","options":["10,500","8400","2100","21,000"],"answer":2},{"prompt":"**46,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["36,800","42,320","46,000","3680"],"answer":3},{"prompt":"**41,000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["41,000","37,720","3280","32,800"],"answer":2},{"prompt":"**36,500 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["36,500","29,200","2920","33,580"],"answer":2}]
---
# Design Drill: Database load behind a cache #26

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
