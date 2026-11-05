---
slug: "sd02-instances-13"
title: "Design Drill: How many instances? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **10,700 req/s**. One instance handles **800 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["26","14","24","23"],"answer":2,"explanation":"ceil(10700 ÷ (800 × 0.6)) + 1 = 24."},{"prompt":"Peak load is **10,600 req/s**. One instance handles **700 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["16","23","25","22"],"answer":1,"explanation":"ceil(10600 ÷ (700 × 0.7)) + 1 = 23."},{"prompt":"Peak load is **11,800 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","8","12","11"],"answer":2,"explanation":"ceil(11800 ÷ (1600 × 0.7)) + 1 = 12."},{"prompt":"Peak load is **5200 req/s**. One instance handles **500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["19","18","21","11"],"answer":0,"explanation":"ceil(5200 ÷ (500 × 0.6)) + 1 = 19."},{"prompt":"Peak load is **2900 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","4","2","6"],"answer":1,"explanation":"ceil(2900 ÷ (2000 × 0.7)) + 1 = 4."}]
---
# Design Drill: How many instances? #13

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
