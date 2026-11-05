---
slug: "sd02-instances-36"
title: "Design Drill: How many instances? #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **2400 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","3","5","7"],"answer":2,"explanation":"ceil(2400 ÷ (1100 × 0.6)) + 1 = 5."},{"prompt":"Peak load is **7500 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","7","4","9"],"answer":1,"explanation":"ceil(7500 ÷ (2000 × 0.7)) + 1 = 7."},{"prompt":"Peak load is **2800 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","4","2","3"],"answer":1,"explanation":"ceil(2800 ÷ (1800 × 0.6)) + 1 = 4."},{"prompt":"Peak load is **2500 req/s**. One instance handles **500 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["10","13","5","11"],"answer":3,"explanation":"ceil(2500 ÷ (500 × 0.5)) + 1 = 11."},{"prompt":"Peak load is **7600 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","12","14","11"],"answer":1,"explanation":"ceil(7600 ÷ (1400 × 0.5)) + 1 = 12."}]
---
# Design Drill: How many instances? #36

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
