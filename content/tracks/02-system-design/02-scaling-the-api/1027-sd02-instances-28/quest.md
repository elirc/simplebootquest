---
slug: "sd02-instances-28"
title: "Design Drill: How many instances? #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **5700 req/s**. One instance handles **600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["16","19","10","17"],"answer":3,"explanation":"ceil(5700 ÷ (600 × 0.6)) + 1 = 17."},{"prompt":"Peak load is **11,100 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","6","13","15"],"answer":2,"explanation":"ceil(11100 ÷ (2000 × 0.5)) + 1 = 13."},{"prompt":"Peak load is **11,800 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["24","25","27","12"],"answer":1,"explanation":"ceil(11800 ÷ (1000 × 0.5)) + 1 = 25."},{"prompt":"Peak load is **4600 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","9","5","10"],"answer":3,"explanation":"ceil(4600 ÷ (1100 × 0.5)) + 1 = 10."},{"prompt":"Peak load is **5400 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","6","9","7"],"answer":3,"explanation":"ceil(5400 ÷ (1500 × 0.6)) + 1 = 7."}]
---
# Design Drill: How many instances? #28

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
