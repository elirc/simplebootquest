---
slug: "sd02-instances-19"
title: "Design Drill: How many instances? #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **11,600 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["13","16","7","14"],"answer":3,"explanation":"ceil(11600 ÷ (1800 × 0.5)) + 1 = 14."},{"prompt":"Peak load is **4100 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","5","8","3"],"answer":0,"explanation":"ceil(4100 ÷ (1400 × 0.7)) + 1 = 6."},{"prompt":"Peak load is **9900 req/s**. One instance handles **500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["33","34","20","36"],"answer":1,"explanation":"ceil(9900 ÷ (500 × 0.6)) + 1 = 34."},{"prompt":"Peak load is **6300 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","7","6","9"],"answer":1,"explanation":"ceil(6300 ÷ (2000 × 0.6)) + 1 = 7."},{"prompt":"Peak load is **7800 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","14","8","11"],"answer":0,"explanation":"ceil(7800 ÷ (1100 × 0.7)) + 1 = 12."}]
---
# Design Drill: How many instances? #19

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
