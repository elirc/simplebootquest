---
slug: "sd02-instances-27"
title: "Design Drill: How many instances? #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **10,800 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["15","7","13","12"],"answer":2,"explanation":"ceil(10800 ÷ (1600 × 0.6)) + 1 = 13."},{"prompt":"Peak load is **6700 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","9","4","7"],"answer":3,"explanation":"ceil(6700 ÷ (1800 × 0.7)) + 1 = 7."},{"prompt":"Peak load is **2100 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","6","2","4"],"answer":3,"explanation":"ceil(2100 ÷ (1200 × 0.6)) + 1 = 4."},{"prompt":"Peak load is **10,100 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","7","12","11"],"answer":2,"explanation":"ceil(10100 ÷ (1600 × 0.6)) + 1 = 12."},{"prompt":"Peak load is **5500 req/s**. One instance handles **200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["28","43","41","40"],"answer":2,"explanation":"ceil(5500 ÷ (200 × 0.7)) + 1 = 41."}]
---
# Design Drill: How many instances? #27

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
