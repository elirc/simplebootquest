---
slug: "sd02-instances-31"
title: "Design Drill: How many instances? #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **2200 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","4","2","6"],"answer":1,"explanation":"ceil(2200 ÷ (1800 × 0.6)) + 1 = 4."},{"prompt":"Peak load is **5300 req/s**. One instance handles **600 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["18","21","19","9"],"answer":2,"explanation":"ceil(5300 ÷ (600 × 0.5)) + 1 = 19."},{"prompt":"Peak load is **8800 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","14","6","11"],"answer":0,"explanation":"ceil(8800 ÷ (1700 × 0.5)) + 1 = 12."},{"prompt":"Peak load is **10,300 req/s**. One instance handles **800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["26","29","13","27"],"answer":3,"explanation":"ceil(10300 ÷ (800 × 0.5)) + 1 = 27."},{"prompt":"Peak load is **12,000 req/s**. One instance handles **600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["34","35","20","37"],"answer":1,"explanation":"ceil(12000 ÷ (600 × 0.6)) + 1 = 35."}]
---
# Design Drill: How many instances? #31

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
