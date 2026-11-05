---
slug: "sd02-instances-29"
title: "Design Drill: How many instances? #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **11,200 req/s**. One instance handles **300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["64","63","38","66"],"answer":0,"explanation":"ceil(11200 ÷ (300 × 0.6)) + 1 = 64."},{"prompt":"Peak load is **1700 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","5","1","2"],"answer":0,"explanation":"ceil(1700 ÷ (1800 × 0.5)) + 1 = 3."},{"prompt":"Peak load is **8700 req/s**. One instance handles **400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["35","22","32","33"],"answer":3,"explanation":"ceil(8700 ÷ (400 × 0.7)) + 1 = 33."},{"prompt":"Peak load is **10,600 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","16","14","13"],"answer":2,"explanation":"ceil(10600 ÷ (1200 × 0.7)) + 1 = 14."},{"prompt":"Peak load is **2600 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","3","7","4"],"answer":0,"explanation":"ceil(2600 ÷ (1100 × 0.6)) + 1 = 5."}]
---
# Design Drill: How many instances? #29

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
