---
slug: "sd02-instances-57"
title: "Design Drill: How many instances? #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **9800 req/s**. One instance handles **600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["28","29","31","17"],"answer":1,"explanation":"ceil(9800 ÷ (600 × 0.6)) + 1 = 29."},{"prompt":"Peak load is **10,600 req/s**. One instance handles **900 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["20","18","17","12"],"answer":1,"explanation":"ceil(10600 ÷ (900 × 0.7)) + 1 = 18."},{"prompt":"Peak load is **5300 req/s**. One instance handles **500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["11","17","19","16"],"answer":1,"explanation":"ceil(5300 ÷ (500 × 0.7)) + 1 = 17."},{"prompt":"Peak load is **1200 req/s**. One instance handles **400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","6","9","7"],"answer":3,"explanation":"ceil(1200 ÷ (400 × 0.5)) + 1 = 7."},{"prompt":"Peak load is **1400 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["1","2","5","3"],"answer":3,"explanation":"ceil(1400 ÷ (1700 × 0.5)) + 1 = 3."}]
---
# Design Drill: How many instances? #57

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
