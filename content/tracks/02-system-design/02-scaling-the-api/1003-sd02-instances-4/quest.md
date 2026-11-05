---
slug: "sd02-instances-4"
title: "Design Drill: How many instances? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **2500 req/s**. One instance handles **600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","5","8","10"],"answer":2,"explanation":"ceil(2500 ÷ (600 × 0.6)) + 1 = 8."},{"prompt":"Peak load is **1800 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","2","6","4"],"answer":3,"explanation":"ceil(1800 ÷ (1200 × 0.7)) + 1 = 4."},{"prompt":"Peak load is **11,200 req/s**. One instance handles **200 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["94","97","95","56"],"answer":2,"explanation":"ceil(11200 ÷ (200 × 0.6)) + 1 = 95."},{"prompt":"Peak load is **1700 req/s**. One instance handles **800 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","4","7","5"],"answer":3,"explanation":"ceil(1700 ÷ (800 × 0.6)) + 1 = 5."},{"prompt":"Peak load is **7800 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["10","13","6","11"],"answer":3,"explanation":"ceil(7800 ÷ (1400 × 0.6)) + 1 = 11."}]
---
# Design Drill: How many instances? #4

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
