---
slug: "sd02-instances-3"
title: "Design Drill: How many instances? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **4800 req/s**. One instance handles **700 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","13","7","15"],"answer":1,"explanation":"ceil(4800 ÷ (700 × 0.6)) + 1 = 13."},{"prompt":"Peak load is **2900 req/s**. One instance handles **400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["18","16","8","15"],"answer":1,"explanation":"ceil(2900 ÷ (400 × 0.5)) + 1 = 16."},{"prompt":"Peak load is **900 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["2","5","1","3"],"answer":3,"explanation":"ceil(900 ÷ (1500 × 0.5)) + 1 = 3."},{"prompt":"Peak load is **2900 req/s**. One instance handles **800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","11","8","9"],"answer":3,"explanation":"ceil(2900 ÷ (800 × 0.5)) + 1 = 9."},{"prompt":"Peak load is **7500 req/s**. One instance handles **200 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["75","78","76","38"],"answer":2,"explanation":"ceil(7500 ÷ (200 × 0.5)) + 1 = 76."}]
---
# Design Drill: How many instances? #3

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
