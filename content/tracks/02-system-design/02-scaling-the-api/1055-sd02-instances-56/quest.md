---
slug: "sd02-instances-56"
title: "Design Drill: How many instances? #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **5100 req/s**. One instance handles **200 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["43","46","44","26"],"answer":2,"explanation":"ceil(5100 ÷ (200 × 0.6)) + 1 = 44."},{"prompt":"Peak load is **6400 req/s**. One instance handles **700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["20","10","22","19"],"answer":0,"explanation":"ceil(6400 ÷ (700 × 0.5)) + 1 = 20."},{"prompt":"Peak load is **2700 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","6","5","3"],"answer":1,"explanation":"ceil(2700 ÷ (1100 × 0.5)) + 1 = 6."},{"prompt":"Peak load is **10,600 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["11","25","23","22"],"answer":2,"explanation":"ceil(10600 ÷ (1000 × 0.5)) + 1 = 23."},{"prompt":"Peak load is **1400 req/s**. One instance handles **500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","3","8","5"],"answer":0,"explanation":"ceil(1400 ÷ (500 × 0.6)) + 1 = 6."}]
---
# Design Drill: How many instances? #56

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
