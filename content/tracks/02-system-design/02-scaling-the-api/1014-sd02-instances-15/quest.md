---
slug: "sd02-instances-15"
title: "Design Drill: How many instances? #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **10,000 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","11","10","13"],"answer":1,"explanation":"ceil(10000 ÷ (1500 × 0.7)) + 1 = 11."},{"prompt":"Peak load is **10,000 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","11","14","7"],"answer":0,"explanation":"ceil(10000 ÷ (1600 × 0.6)) + 1 = 12."},{"prompt":"Peak load is **4200 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","3","5","4"],"answer":2,"explanation":"ceil(4200 ÷ (1900 × 0.6)) + 1 = 5."},{"prompt":"Peak load is **11,700 req/s**. One instance handles **600 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["20","28","31","29"],"answer":3,"explanation":"ceil(11700 ÷ (600 × 0.7)) + 1 = 29."},{"prompt":"Peak load is **6900 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","10","12","7"],"answer":1,"explanation":"ceil(6900 ÷ (1100 × 0.7)) + 1 = 10."}]
---
# Design Drill: How many instances? #15

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
