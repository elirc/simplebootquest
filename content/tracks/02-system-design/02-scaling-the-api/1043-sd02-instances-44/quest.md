---
slug: "sd02-instances-44"
title: "Design Drill: How many instances? #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **4400 req/s**. One instance handles **900 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["10","12","5","9"],"answer":0,"explanation":"ceil(4400 ÷ (900 × 0.6)) + 1 = 10."},{"prompt":"Peak load is **10,900 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["16","15","10","18"],"answer":0,"explanation":"ceil(10900 ÷ (1100 × 0.7)) + 1 = 16."},{"prompt":"Peak load is **10,500 req/s**. One instance handles **800 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","23","22","25"],"answer":1,"explanation":"ceil(10500 ÷ (800 × 0.6)) + 1 = 23."},{"prompt":"Peak load is **10,300 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["16","10","17","19"],"answer":2,"explanation":"ceil(10300 ÷ (1100 × 0.6)) + 1 = 17."},{"prompt":"Peak load is **6800 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","16","13","7"],"answer":0,"explanation":"ceil(6800 ÷ (1100 × 0.5)) + 1 = 14."}]
---
# Design Drill: How many instances? #44

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
