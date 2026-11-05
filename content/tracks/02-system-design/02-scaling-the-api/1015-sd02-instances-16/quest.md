---
slug: "sd02-instances-16"
title: "Design Drill: How many instances? #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **10,600 req/s**. One instance handles **200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["76","79","77","53"],"answer":2,"explanation":"ceil(10600 ÷ (200 × 0.7)) + 1 = 77."},{"prompt":"Peak load is **9400 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","10","7","8"],"answer":3,"explanation":"ceil(9400 ÷ (2000 × 0.7)) + 1 = 8."},{"prompt":"Peak load is **10,800 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","13","15","8"],"answer":1,"explanation":"ceil(10800 ÷ (1500 × 0.6)) + 1 = 13."},{"prompt":"Peak load is **6100 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["15","12","13","6"],"answer":2,"explanation":"ceil(6100 ÷ (1100 × 0.5)) + 1 = 13."},{"prompt":"Peak load is **3200 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","8","5","6"],"answer":3,"explanation":"ceil(3200 ÷ (1200 × 0.6)) + 1 = 6."}]
---
# Design Drill: How many instances? #16

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
