---
slug: "sd02-instances-58"
title: "Design Drill: How many instances? #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **8100 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","5","9","10"],"answer":3,"explanation":"ceil(8100 ÷ (1800 × 0.5)) + 1 = 10."},{"prompt":"Peak load is **9600 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["20","23","10","21"],"answer":3,"explanation":"ceil(9600 ÷ (1000 × 0.5)) + 1 = 21."},{"prompt":"Peak load is **2600 req/s**. One instance handles **300 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["13","9","16","14"],"answer":3,"explanation":"ceil(2600 ÷ (300 × 0.7)) + 1 = 14."},{"prompt":"Peak load is **8200 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["17","18","9","20"],"answer":1,"explanation":"ceil(8200 ÷ (1000 × 0.5)) + 1 = 18."},{"prompt":"Peak load is **500 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","1","2"],"answer":2,"explanation":"ceil(500 ÷ (1200 × 0.6)) + 1 = 2."}]
---
# Design Drill: How many instances? #58

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
