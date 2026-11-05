---
slug: "sd02-instances-39"
title: "Design Drill: How many instances? #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **11,000 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","12","14","11"],"answer":1,"explanation":"ceil(11000 ÷ (1700 × 0.6)) + 1 = 12."},{"prompt":"Peak load is **2800 req/s**. One instance handles **700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","8","11","9"],"answer":3,"explanation":"ceil(2800 ÷ (700 × 0.5)) + 1 = 9."},{"prompt":"Peak load is **6600 req/s**. One instance handles **800 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["13","15","12","9"],"answer":0,"explanation":"ceil(6600 ÷ (800 × 0.7)) + 1 = 13."},{"prompt":"Peak load is **6400 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","8","4","6"],"answer":3,"explanation":"ceil(6400 ÷ (1900 × 0.7)) + 1 = 6."},{"prompt":"Peak load is **1500 req/s**. One instance handles **900 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","2","6","3"],"answer":0,"explanation":"ceil(1500 ÷ (900 × 0.7)) + 1 = 4."}]
---
# Design Drill: How many instances? #39

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
