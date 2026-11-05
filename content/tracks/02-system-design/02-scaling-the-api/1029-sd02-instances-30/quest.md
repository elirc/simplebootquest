---
slug: "sd02-instances-30"
title: "Design Drill: How many instances? #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **1100 req/s**. One instance handles **800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","2","6","3"],"answer":0,"explanation":"ceil(1100 ÷ (800 × 0.5)) + 1 = 4."},{"prompt":"Peak load is **11,500 req/s**. One instance handles **900 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["20","13","22","19"],"answer":0,"explanation":"ceil(11500 ÷ (900 × 0.7)) + 1 = 20."},{"prompt":"Peak load is **9900 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["10","21","20","23"],"answer":1,"explanation":"ceil(9900 ÷ (1000 × 0.5)) + 1 = 21."},{"prompt":"Peak load is **8000 req/s**. One instance handles **800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["21","10","20","23"],"answer":0,"explanation":"ceil(8000 ÷ (800 × 0.5)) + 1 = 21."},{"prompt":"Peak load is **2300 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","4","2","6"],"answer":1,"explanation":"ceil(2300 ÷ (1500 × 0.7)) + 1 = 4."}]
---
# Design Drill: How many instances? #30

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
