---
slug: "sd02-instances-17"
title: "Design Drill: How many instances? #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **5400 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","6","7","9"],"answer":2,"explanation":"ceil(5400 ÷ (1500 × 0.7)) + 1 = 7."},{"prompt":"Peak load is **2200 req/s**. One instance handles **700 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","4","7","6"],"answer":2,"explanation":"ceil(2200 ÷ (700 × 0.6)) + 1 = 7."},{"prompt":"Peak load is **500 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["1","4","2"],"answer":2,"explanation":"ceil(500 ÷ (1100 × 0.7)) + 1 = 2."},{"prompt":"Peak load is **3600 req/s**. One instance handles **300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["20","21","23","12"],"answer":1,"explanation":"ceil(3600 ÷ (300 × 0.6)) + 1 = 21."},{"prompt":"Peak load is **7300 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","13","11","10"],"answer":2,"explanation":"ceil(7300 ÷ (1600 × 0.5)) + 1 = 11."}]
---
# Design Drill: How many instances? #17

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
