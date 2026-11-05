---
slug: "sd02-instances-35"
title: "Design Drill: How many instances? #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **5300 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","11","6","9"],"answer":3,"explanation":"ceil(5300 ÷ (1000 × 0.7)) + 1 = 9."},{"prompt":"Peak load is **10,900 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","6","12","10"],"answer":3,"explanation":"ceil(10900 ÷ (1900 × 0.7)) + 1 = 10."},{"prompt":"Peak load is **4900 req/s**. One instance handles **800 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","14","12","11"],"answer":2,"explanation":"ceil(4900 ÷ (800 × 0.6)) + 1 = 12."},{"prompt":"Peak load is **7900 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","16","15","18"],"answer":1,"explanation":"ceil(7900 ÷ (1100 × 0.5)) + 1 = 16."},{"prompt":"Peak load is **1700 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","2","1","3"],"answer":3,"explanation":"ceil(1700 ÷ (1900 × 0.5)) + 1 = 3."}]
---
# Design Drill: How many instances? #35

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
