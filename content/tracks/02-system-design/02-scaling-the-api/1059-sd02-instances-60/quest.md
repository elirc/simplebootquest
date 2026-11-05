---
slug: "sd02-instances-60"
title: "Design Drill: How many instances? #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **8000 req/s**. One instance handles **500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["23","16","24","26"],"answer":2,"explanation":"ceil(8000 ÷ (500 × 0.7)) + 1 = 24."},{"prompt":"Peak load is **8500 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","13","14","16"],"answer":2,"explanation":"ceil(8500 ÷ (1000 × 0.7)) + 1 = 14."},{"prompt":"Peak load is **9700 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","15","7","17"],"answer":1,"explanation":"ceil(9700 ÷ (1400 × 0.5)) + 1 = 15."},{"prompt":"Peak load is **2600 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","3","2","6"],"answer":0,"explanation":"ceil(2600 ÷ (1500 × 0.7)) + 1 = 4."},{"prompt":"Peak load is **8600 req/s**. One instance handles **400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["31","32","22","34"],"answer":1,"explanation":"ceil(8600 ÷ (400 × 0.7)) + 1 = 32."}]
---
# Design Drill: How many instances? #60

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
