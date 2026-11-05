---
slug: "sd02-instances-40"
title: "Design Drill: How many instances? #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **3200 req/s**. One instance handles **200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["26","24","16","23"],"answer":1,"explanation":"ceil(3200 ÷ (200 × 0.7)) + 1 = 24."},{"prompt":"Peak load is **6000 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","4","8","6"],"answer":3,"explanation":"ceil(6000 ÷ (1800 × 0.7)) + 1 = 6."},{"prompt":"Peak load is **5400 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","7","3","6"],"answer":1,"explanation":"ceil(5400 ÷ (1800 × 0.5)) + 1 = 7."},{"prompt":"Peak load is **6400 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","4","6","7"],"answer":3,"explanation":"ceil(6400 ÷ (1800 × 0.6)) + 1 = 7."},{"prompt":"Peak load is **11,300 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["15","13","12","6"],"answer":1,"explanation":"ceil(11300 ÷ (1900 × 0.5)) + 1 = 13."}]
---
# Design Drill: How many instances? #40

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
