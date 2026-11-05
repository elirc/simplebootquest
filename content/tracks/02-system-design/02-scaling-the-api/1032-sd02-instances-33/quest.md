---
slug: "sd02-instances-33"
title: "Design Drill: How many instances? #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **2500 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","4","2","3"],"answer":1,"explanation":"ceil(2500 ÷ (1400 × 0.6)) + 1 = 4."},{"prompt":"Peak load is **2600 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","5","2","7"],"answer":1,"explanation":"ceil(2600 ÷ (1500 × 0.5)) + 1 = 5."},{"prompt":"Peak load is **9500 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","12","11","6"],"answer":1,"explanation":"ceil(9500 ÷ (1800 × 0.5)) + 1 = 12."},{"prompt":"Peak load is **3100 req/s**. One instance handles **700 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","7","5","10"],"answer":0,"explanation":"ceil(3100 ÷ (700 × 0.7)) + 1 = 8."},{"prompt":"Peak load is **2700 req/s**. One instance handles **400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","13","11","10"],"answer":2,"explanation":"ceil(2700 ÷ (400 × 0.7)) + 1 = 11."}]
---
# Design Drill: How many instances? #33

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
