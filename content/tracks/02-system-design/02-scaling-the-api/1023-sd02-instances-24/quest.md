---
slug: "sd02-instances-24"
title: "Design Drill: How many instances? #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **4400 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","4","3","5"],"answer":3,"explanation":"ceil(4400 ÷ (2000 × 0.6)) + 1 = 5."},{"prompt":"Peak load is **11,000 req/s**. One instance handles **600 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["38","19","40","37"],"answer":0,"explanation":"ceil(11000 ÷ (600 × 0.5)) + 1 = 38."},{"prompt":"Peak load is **8700 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","6","13","15"],"answer":2,"explanation":"ceil(8700 ÷ (1500 × 0.5)) + 1 = 13."},{"prompt":"Peak load is **6800 req/s**. One instance handles **700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["23","10","21","20"],"answer":2,"explanation":"ceil(6800 ÷ (700 × 0.5)) + 1 = 21."},{"prompt":"Peak load is **9100 req/s**. One instance handles **300 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["45","47","31","44"],"answer":0,"explanation":"ceil(9100 ÷ (300 × 0.7)) + 1 = 45."}]
---
# Design Drill: How many instances? #24

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
