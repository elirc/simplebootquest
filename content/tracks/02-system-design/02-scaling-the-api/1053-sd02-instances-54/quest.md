---
slug: "sd02-instances-54"
title: "Design Drill: How many instances? #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **700 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["1","2","4"],"answer":1,"explanation":"ceil(700 ÷ (1100 × 0.7)) + 1 = 2."},{"prompt":"Peak load is **3500 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","5","3","6"],"answer":3,"explanation":"ceil(3500 ÷ (1200 × 0.7)) + 1 = 6."},{"prompt":"Peak load is **11,900 req/s**. One instance handles **500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["37","34","24","35"],"answer":3,"explanation":"ceil(11900 ÷ (500 × 0.7)) + 1 = 35."},{"prompt":"Peak load is **11,900 req/s**. One instance handles **600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["37","20","34","35"],"answer":3,"explanation":"ceil(11900 ÷ (600 × 0.6)) + 1 = 35."},{"prompt":"Peak load is **9300 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","12","6","11"],"answer":1,"explanation":"ceil(9300 ÷ (1800 × 0.5)) + 1 = 12."}]
---
# Design Drill: How many instances? #54

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
