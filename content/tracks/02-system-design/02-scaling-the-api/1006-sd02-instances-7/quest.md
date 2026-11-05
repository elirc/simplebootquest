---
slug: "sd02-instances-7"
title: "Design Drill: How many instances? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **1400 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","6","3","2"],"answer":0,"explanation":"ceil(1400 ÷ (1200 × 0.5)) + 1 = 4."},{"prompt":"Peak load is **1900 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","1","2","3"],"answer":3,"explanation":"ceil(1900 ÷ (1900 × 0.5)) + 1 = 3."},{"prompt":"Peak load is **900 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["1","4","2"],"answer":2,"explanation":"ceil(900 ÷ (1600 × 0.7)) + 1 = 2."},{"prompt":"Peak load is **10,900 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["22","19","11","20"],"answer":3,"explanation":"ceil(10900 ÷ (1000 × 0.6)) + 1 = 20."},{"prompt":"Peak load is **400 req/s**. One instance handles **600 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["2","1","5","3"],"answer":3,"explanation":"ceil(400 ÷ (600 × 0.5)) + 1 = 3."}]
---
# Design Drill: How many instances? #7

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
