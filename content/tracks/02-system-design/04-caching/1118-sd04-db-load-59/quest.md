---
slug: "sd04-db-load-59"
title: "Design Drill: Database load behind a cache #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**20,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["5130","51,250","20,500","15,375"],"answer":0},{"prompt":"**5000 reads/s** go through a cache with a **92%** hit ratio. How many reads/s reach the database?","options":["4000","400","5000","4600"],"answer":1},{"prompt":"**25,500 reads/s** go through a cache with a **75%** hit ratio. How many reads/s reach the database?","options":["63,750","25,500","19,125","6380"],"answer":3},{"prompt":"**35,500 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["35,500","31,950","3550","355"],"answer":2},{"prompt":"**39,000 reads/s** go through a cache with a **90%** hit ratio. How many reads/s reach the database?","options":["3900","39,000","35,100","390"],"answer":0}]
---
# Design Drill: Database load behind a cache #59

Only misses reach the database: DB reads/s = read rate × (1 − hit ratio). Going from 90% to 99% hits cuts database load **10×**.
