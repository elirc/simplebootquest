---
slug: "sd02-instances-25"
title: "Design Drill: How many instances? #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **7300 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","8","7","10"],"answer":1,"explanation":"ceil(7300 ÷ (1500 × 0.7)) + 1 = 8."},{"prompt":"Peak load is **7600 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","16","13","8"],"answer":0,"explanation":"ceil(7600 ÷ (1000 × 0.6)) + 1 = 14."},{"prompt":"Peak load is **7200 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["13","10","6","11"],"answer":3,"explanation":"ceil(7200 ÷ (1200 × 0.6)) + 1 = 11."},{"prompt":"Peak load is **4400 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","8","5","4"],"answer":0,"explanation":"ceil(4400 ÷ (1400 × 0.7)) + 1 = 6."},{"prompt":"Peak load is **2200 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","2","4","3"],"answer":2,"explanation":"ceil(2200 ÷ (1700 × 0.5)) + 1 = 4."}]
---
# Design Drill: How many instances? #25

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
