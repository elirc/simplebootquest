---
slug: "sd02-instances-48"
title: "Design Drill: How many instances? #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **2800 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","2","4","5"],"answer":3,"explanation":"ceil(2800 ÷ (1400 × 0.6)) + 1 = 5."},{"prompt":"Peak load is **900 req/s**. One instance handles **900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","1","3","2"],"answer":2,"explanation":"ceil(900 ÷ (900 × 0.5)) + 1 = 3."},{"prompt":"Peak load is **8500 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","19","16","17"],"answer":3,"explanation":"ceil(8500 ÷ (1100 × 0.5)) + 1 = 17."},{"prompt":"Peak load is **11,600 req/s**. One instance handles **200 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["58","97","100","98"],"answer":3,"explanation":"ceil(11600 ÷ (200 × 0.6)) + 1 = 98."},{"prompt":"Peak load is **8800 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","12","11","14"],"answer":1,"explanation":"ceil(8800 ÷ (1400 × 0.6)) + 1 = 12."}]
---
# Design Drill: How many instances? #48

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
