---
slug: "sd02-instances-34"
title: "Design Drill: How many instances? #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **5700 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","6","4","7"],"answer":3,"explanation":"ceil(5700 ÷ (1800 × 0.6)) + 1 = 7."},{"prompt":"Peak load is **900 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["1","2","5","3"],"answer":3,"explanation":"ceil(900 ÷ (1100 × 0.5)) + 1 = 3."},{"prompt":"Peak load is **8700 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["11","12","14","7"],"answer":1,"explanation":"ceil(8700 ÷ (1400 × 0.6)) + 1 = 12."},{"prompt":"Peak load is **3900 req/s**. One instance handles **700 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","6","11","9"],"answer":3,"explanation":"ceil(3900 ÷ (700 × 0.7)) + 1 = 9."},{"prompt":"Peak load is **4200 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","4","6","9"],"answer":0,"explanation":"ceil(4200 ÷ (1100 × 0.7)) + 1 = 7."}]
---
# Design Drill: How many instances? #34

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
