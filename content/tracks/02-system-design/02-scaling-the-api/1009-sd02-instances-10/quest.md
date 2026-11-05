---
slug: "sd02-instances-10"
title: "Design Drill: How many instances? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **5000 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","10","4","8"],"answer":3,"explanation":"ceil(5000 ÷ (1500 × 0.5)) + 1 = 8."},{"prompt":"Peak load is **1300 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","2","3","1"],"answer":2,"explanation":"ceil(1300 ÷ (1800 × 0.7)) + 1 = 3."},{"prompt":"Peak load is **1100 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","3","2","1"],"answer":1,"explanation":"ceil(1100 ÷ (1700 × 0.5)) + 1 = 3."},{"prompt":"Peak load is **7800 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","10","5","8"],"answer":3,"explanation":"ceil(7800 ÷ (1900 × 0.6)) + 1 = 8."},{"prompt":"Peak load is **10,600 req/s**. One instance handles **800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["28","30","14","27"],"answer":0,"explanation":"ceil(10600 ÷ (800 × 0.5)) + 1 = 28."}]
---
# Design Drill: How many instances? #10

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
