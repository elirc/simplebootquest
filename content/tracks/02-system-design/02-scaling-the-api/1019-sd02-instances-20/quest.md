---
slug: "sd02-instances-20"
title: "Design Drill: How many instances? #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **7700 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","9","11","8"],"answer":1,"explanation":"ceil(7700 ÷ (2000 × 0.5)) + 1 = 9."},{"prompt":"Peak load is **10,900 req/s**. One instance handles **600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["19","32","31","34"],"answer":1,"explanation":"ceil(10900 ÷ (600 × 0.6)) + 1 = 32."},{"prompt":"Peak load is **2200 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["2","1","3","5"],"answer":2,"explanation":"ceil(2200 ÷ (1600 × 0.7)) + 1 = 3."},{"prompt":"Peak load is **3000 req/s**. One instance handles **500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["13","11","10","6"],"answer":1,"explanation":"ceil(3000 ÷ (500 × 0.6)) + 1 = 11."},{"prompt":"Peak load is **3100 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","5","8","4"],"answer":0,"explanation":"ceil(3100 ÷ (1000 × 0.7)) + 1 = 6."}]
---
# Design Drill: How many instances? #20

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
