---
slug: "sd02-instances-42"
title: "Design Drill: How many instances? #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **10,700 req/s**. One instance handles **700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["16","32","34","31"],"answer":1,"explanation":"ceil(10700 ÷ (700 × 0.5)) + 1 = 32."},{"prompt":"Peak load is **8700 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["10","6","13","11"],"answer":3,"explanation":"ceil(8700 ÷ (1500 × 0.6)) + 1 = 11."},{"prompt":"Peak load is **3200 req/s**. One instance handles **200 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["33","16","32","35"],"answer":0,"explanation":"ceil(3200 ÷ (200 × 0.5)) + 1 = 33."},{"prompt":"Peak load is **11,600 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","11","14","8"],"answer":0,"explanation":"ceil(11600 ÷ (1600 × 0.7)) + 1 = 12."},{"prompt":"Peak load is **11,900 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["18","17","10","20"],"answer":0,"explanation":"ceil(11900 ÷ (1200 × 0.6)) + 1 = 18."}]
---
# Design Drill: How many instances? #42

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
