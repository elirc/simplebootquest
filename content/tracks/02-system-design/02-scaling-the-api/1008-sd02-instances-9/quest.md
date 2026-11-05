---
slug: "sd02-instances-9"
title: "Design Drill: How many instances? #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **4500 req/s**. One instance handles **700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","7","13","16"],"answer":0,"explanation":"ceil(4500 ÷ (700 × 0.5)) + 1 = 14."},{"prompt":"Peak load is **2100 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["2","3","6","4"],"answer":3,"explanation":"ceil(2100 ÷ (1400 × 0.5)) + 1 = 4."},{"prompt":"Peak load is **3600 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","7","9","3"],"answer":1,"explanation":"ceil(3600 ÷ (1200 × 0.5)) + 1 = 7."},{"prompt":"Peak load is **6700 req/s**. One instance handles **400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["34","17","35","37"],"answer":2,"explanation":"ceil(6700 ÷ (400 × 0.5)) + 1 = 35."},{"prompt":"Peak load is **10,600 req/s**. One instance handles **300 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["71","74","36","72"],"answer":3,"explanation":"ceil(10600 ÷ (300 × 0.5)) + 1 = 72."}]
---
# Design Drill: How many instances? #9

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
