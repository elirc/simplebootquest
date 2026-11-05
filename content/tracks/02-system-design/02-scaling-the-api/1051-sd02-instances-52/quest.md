---
slug: "sd02-instances-52"
title: "Design Drill: How many instances? #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **5600 req/s**. One instance handles **200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["28","40","41","43"],"answer":2,"explanation":"ceil(5600 ÷ (200 × 0.7)) + 1 = 41."},{"prompt":"Peak load is **8900 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","11","8","12"],"answer":3,"explanation":"ceil(8900 ÷ (1200 × 0.7)) + 1 = 12."},{"prompt":"Peak load is **2800 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["2","4","3","6"],"answer":1,"explanation":"ceil(2800 ÷ (2000 × 0.6)) + 1 = 4."},{"prompt":"Peak load is **3000 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","5","8","3"],"answer":0,"explanation":"ceil(3000 ÷ (1300 × 0.5)) + 1 = 6."},{"prompt":"Peak load is **5000 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","3","5","6"],"answer":3,"explanation":"ceil(5000 ÷ (1700 × 0.6)) + 1 = 6."}]
---
# Design Drill: How many instances? #52

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
