---
slug: "sd02-instances-41"
title: "Design Drill: How many instances? #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **6500 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","7","4","10"],"answer":0,"explanation":"ceil(6500 ÷ (1700 × 0.6)) + 1 = 8."},{"prompt":"Peak load is **3100 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","2","4","6"],"answer":2,"explanation":"ceil(3100 ÷ (1700 × 0.7)) + 1 = 4."},{"prompt":"Peak load is **8900 req/s**. One instance handles **800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["23","12","24","26"],"answer":2,"explanation":"ceil(8900 ÷ (800 × 0.5)) + 1 = 24."},{"prompt":"Peak load is **3300 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","3","2","4"],"answer":3,"explanation":"ceil(3300 ÷ (2000 × 0.6)) + 1 = 4."},{"prompt":"Peak load is **1800 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","1","5","2"],"answer":0,"explanation":"ceil(1800 ÷ (2000 × 0.6)) + 1 = 3."}]
---
# Design Drill: How many instances? #41

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
