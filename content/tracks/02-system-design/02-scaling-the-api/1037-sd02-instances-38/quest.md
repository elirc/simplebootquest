---
slug: "sd02-instances-38"
title: "Design Drill: How many instances? #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **5000 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","7","5","3"],"answer":2,"explanation":"ceil(5000 ÷ (2000 × 0.7)) + 1 = 5."},{"prompt":"Peak load is **9000 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","5","10","12"],"answer":2,"explanation":"ceil(9000 ÷ (2000 × 0.5)) + 1 = 10."},{"prompt":"Peak load is **1700 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","1","2","5"],"answer":0,"explanation":"ceil(1700 ÷ (2000 × 0.7)) + 1 = 3."},{"prompt":"Peak load is **2700 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["2","7","4","5"],"answer":3,"explanation":"ceil(2700 ÷ (1500 × 0.5)) + 1 = 5."},{"prompt":"Peak load is **2900 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","5","7","2"],"answer":1,"explanation":"ceil(2900 ÷ (1900 × 0.5)) + 1 = 5."}]
---
# Design Drill: How many instances? #38

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
