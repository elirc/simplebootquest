---
slug: "sd02-instances-47"
title: "Design Drill: How many instances? #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **700 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["1","5","2","3"],"answer":3,"explanation":"ceil(700 ÷ (1000 × 0.6)) + 1 = 3."},{"prompt":"Peak load is **6200 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","14","13","16"],"answer":1,"explanation":"ceil(6200 ÷ (1000 × 0.5)) + 1 = 14."},{"prompt":"Peak load is **5800 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","4","10","7"],"answer":0,"explanation":"ceil(5800 ÷ (1800 × 0.5)) + 1 = 8."},{"prompt":"Peak load is **3800 req/s**. One instance handles **200 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["41","39","19","38"],"answer":1,"explanation":"ceil(3800 ÷ (200 × 0.5)) + 1 = 39."},{"prompt":"Peak load is **5600 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","5","8","3"],"answer":0,"explanation":"ceil(5600 ÷ (1900 × 0.7)) + 1 = 6."}]
---
# Design Drill: How many instances? #47

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
