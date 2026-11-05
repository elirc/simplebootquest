---
slug: "sd02-instances-55"
title: "Design Drill: How many instances? #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **3900 req/s**. One instance handles **900 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["10","8","7","5"],"answer":1,"explanation":"ceil(3900 ÷ (900 × 0.7)) + 1 = 8."},{"prompt":"Peak load is **1200 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["1","2","3","5"],"answer":2,"explanation":"ceil(1200 ÷ (1900 × 0.5)) + 1 = 3."},{"prompt":"Peak load is **12,000 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["23","22","11","25"],"answer":0,"explanation":"ceil(12000 ÷ (1100 × 0.5)) + 1 = 23."},{"prompt":"Peak load is **11,600 req/s**. One instance handles **900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["27","29","26","13"],"answer":0,"explanation":"ceil(11600 ÷ (900 × 0.5)) + 1 = 27."},{"prompt":"Peak load is **10,400 req/s**. One instance handles **400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["53","55","52","26"],"answer":0,"explanation":"ceil(10400 ÷ (400 × 0.5)) + 1 = 53."}]
---
# Design Drill: How many instances? #55

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
