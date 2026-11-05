---
slug: "sd02-instances-1"
title: "Design Drill: How many instances? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **3400 req/s**. One instance handles **600 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["10","9","6","12"],"answer":0,"explanation":"ceil(3400 ÷ (600 × 0.7)) + 1 = 10."},{"prompt":"Peak load is **4700 req/s**. One instance handles **400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["18","12","20","17"],"answer":0,"explanation":"ceil(4700 ÷ (400 × 0.7)) + 1 = 18."},{"prompt":"Peak load is **10,900 req/s**. One instance handles **900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["26","25","28","13"],"answer":0,"explanation":"ceil(10900 ÷ (900 × 0.5)) + 1 = 26."},{"prompt":"Peak load is **12,000 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["15","7","14","17"],"answer":0,"explanation":"ceil(12000 ÷ (1800 × 0.5)) + 1 = 15."},{"prompt":"Peak load is **11,100 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","23","24","26"],"answer":2,"explanation":"ceil(11100 ÷ (1000 × 0.5)) + 1 = 24."}]
---
# Design Drill: How many instances? #1

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
