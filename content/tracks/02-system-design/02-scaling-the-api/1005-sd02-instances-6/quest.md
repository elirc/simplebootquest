---
slug: "sd02-instances-6"
title: "Design Drill: How many instances? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **6700 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","6","9","7"],"answer":3,"explanation":"ceil(6700 ÷ (2000 × 0.6)) + 1 = 7."},{"prompt":"Peak load is **9000 req/s**. One instance handles **400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["45","48","23","46"],"answer":3,"explanation":"ceil(9000 ÷ (400 × 0.5)) + 1 = 46."},{"prompt":"Peak load is **2000 req/s**. One instance handles **700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","9","7","6"],"answer":2,"explanation":"ceil(2000 ÷ (700 × 0.5)) + 1 = 7."},{"prompt":"Peak load is **3400 req/s**. One instance handles **300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["19","20","22","12"],"answer":1,"explanation":"ceil(3400 ÷ (300 × 0.6)) + 1 = 20."},{"prompt":"Peak load is **2900 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","3","6","8"],"answer":2,"explanation":"ceil(2900 ÷ (1200 × 0.6)) + 1 = 6."}]
---
# Design Drill: How many instances? #6

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
