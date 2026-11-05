---
slug: "sd02-instances-32"
title: "Design Drill: How many instances? #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **8400 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","13","10","11"],"answer":3,"explanation":"ceil(8400 ÷ (1300 × 0.7)) + 1 = 11."},{"prompt":"Peak load is **6000 req/s**. One instance handles **200 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["63","30","60","61"],"answer":3,"explanation":"ceil(6000 ÷ (200 × 0.5)) + 1 = 61."},{"prompt":"Peak load is **10,100 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["22","24","11","21"],"answer":0,"explanation":"ceil(10100 ÷ (1000 × 0.5)) + 1 = 22."},{"prompt":"Peak load is **2700 req/s**. One instance handles **900 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","6","8","5"],"answer":1,"explanation":"ceil(2700 ÷ (900 × 0.7)) + 1 = 6."},{"prompt":"Peak load is **5200 req/s**. One instance handles **500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["15","16","11","18"],"answer":1,"explanation":"ceil(5200 ÷ (500 × 0.7)) + 1 = 16."}]
---
# Design Drill: How many instances? #32

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
