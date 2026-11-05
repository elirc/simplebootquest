---
slug: "sd02-instances-18"
title: "Design Drill: How many instances? #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **7200 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","11","8","5"],"answer":0,"explanation":"ceil(7200 ÷ (1600 × 0.6)) + 1 = 9."},{"prompt":"Peak load is **4800 req/s**. One instance handles **700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","15","17","7"],"answer":1,"explanation":"ceil(4800 ÷ (700 × 0.5)) + 1 = 15."},{"prompt":"Peak load is **7900 req/s**. One instance handles **300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["27","47","45","44"],"answer":2,"explanation":"ceil(7900 ÷ (300 × 0.6)) + 1 = 45."},{"prompt":"Peak load is **6700 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","6","7","9"],"answer":2,"explanation":"ceil(6700 ÷ (1700 × 0.7)) + 1 = 7."},{"prompt":"Peak load is **1600 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","1","2","3"],"answer":3,"explanation":"ceil(1600 ÷ (1400 × 0.7)) + 1 = 3."}]
---
# Design Drill: How many instances? #18

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
