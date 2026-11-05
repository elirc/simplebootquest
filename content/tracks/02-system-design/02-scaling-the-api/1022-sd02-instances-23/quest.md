---
slug: "sd02-instances-23"
title: "Design Drill: How many instances? #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **4600 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","3","5","8"],"answer":0,"explanation":"ceil(4600 ÷ (1800 × 0.6)) + 1 = 6."},{"prompt":"Peak load is **3800 req/s**. One instance handles **400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["22","19","20","10"],"answer":2,"explanation":"ceil(3800 ÷ (400 × 0.5)) + 1 = 20."},{"prompt":"Peak load is **5100 req/s**. One instance handles **500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["11","18","15","16"],"answer":3,"explanation":"ceil(5100 ÷ (500 × 0.7)) + 1 = 16."},{"prompt":"Peak load is **4500 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","7","9","6"],"answer":1,"explanation":"ceil(4500 ÷ (1500 × 0.5)) + 1 = 7."},{"prompt":"Peak load is **2600 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","5","3","8"],"answer":0,"explanation":"ceil(2600 ÷ (1200 × 0.5)) + 1 = 6."}]
---
# Design Drill: How many instances? #23

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
