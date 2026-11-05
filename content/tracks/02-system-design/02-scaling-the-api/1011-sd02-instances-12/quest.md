---
slug: "sd02-instances-12"
title: "Design Drill: How many instances? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **4000 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","5","3","7"],"answer":1,"explanation":"ceil(4000 ÷ (1900 × 0.6)) + 1 = 5."},{"prompt":"Peak load is **8800 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["17","16","8","19"],"answer":0,"explanation":"ceil(8800 ÷ (1100 × 0.5)) + 1 = 17."},{"prompt":"Peak load is **7500 req/s**. One instance handles **700 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["19","16","17","11"],"answer":2,"explanation":"ceil(7500 ÷ (700 × 0.7)) + 1 = 17."},{"prompt":"Peak load is **5300 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","7","4","6"],"answer":1,"explanation":"ceil(5300 ÷ (1400 × 0.7)) + 1 = 7."},{"prompt":"Peak load is **12,000 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["22","19","10","20"],"answer":3,"explanation":"ceil(12000 ÷ (1300 × 0.5)) + 1 = 20."}]
---
# Design Drill: How many instances? #12

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
