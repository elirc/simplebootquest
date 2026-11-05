---
slug: "sd02-instances-37"
title: "Design Drill: How many instances? #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **11,000 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["20","11","19","22"],"answer":0,"explanation":"ceil(11000 ÷ (1000 × 0.6)) + 1 = 20."},{"prompt":"Peak load is **8600 req/s**. One instance handles **800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["22","11","25","23"],"answer":3,"explanation":"ceil(8600 ÷ (800 × 0.5)) + 1 = 23."},{"prompt":"Peak load is **8200 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","10","13","11"],"answer":3,"explanation":"ceil(8200 ÷ (1500 × 0.6)) + 1 = 11."},{"prompt":"Peak load is **6200 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","7","10","4"],"answer":0,"explanation":"ceil(6200 ÷ (1900 × 0.5)) + 1 = 8."},{"prompt":"Peak load is **4700 req/s**. One instance handles **300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["30","28","16","27"],"answer":1,"explanation":"ceil(4700 ÷ (300 × 0.6)) + 1 = 28."}]
---
# Design Drill: How many instances? #37

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
