---
slug: "sd02-instances-46"
title: "Design Drill: How many instances? #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **500 req/s**. One instance handles **700 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","1","2","3"],"answer":3,"explanation":"ceil(500 ÷ (700 × 0.6)) + 1 = 3."},{"prompt":"Peak load is **9700 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["16","18","15","8"],"answer":0,"explanation":"ceil(9700 ÷ (1300 × 0.5)) + 1 = 16."},{"prompt":"Peak load is **8700 req/s**. One instance handles **700 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["22","21","13","24"],"answer":0,"explanation":"ceil(8700 ÷ (700 × 0.6)) + 1 = 22."},{"prompt":"Peak load is **10,800 req/s**. One instance handles **400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["39","27","40","42"],"answer":2,"explanation":"ceil(10800 ÷ (400 × 0.7)) + 1 = 40."},{"prompt":"Peak load is **5100 req/s**. One instance handles **800 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["11","13","7","10"],"answer":0,"explanation":"ceil(5100 ÷ (800 × 0.7)) + 1 = 11."}]
---
# Design Drill: How many instances? #46

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
