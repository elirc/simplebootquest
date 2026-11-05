---
slug: "sd02-instances-21"
title: "Design Drill: How many instances? #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **4600 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","9","7","3"],"answer":2,"explanation":"ceil(4600 ÷ (1800 × 0.5)) + 1 = 7."},{"prompt":"Peak load is **9200 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","15","13","12"],"answer":2,"explanation":"ceil(9200 ÷ (1300 × 0.6)) + 1 = 13."},{"prompt":"Peak load is **1900 req/s**. One instance handles **500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","7","10","4"],"answer":0,"explanation":"ceil(1900 ÷ (500 × 0.6)) + 1 = 8."},{"prompt":"Peak load is **11,100 req/s**. One instance handles **500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["23","38","40","37"],"answer":1,"explanation":"ceil(11100 ÷ (500 × 0.6)) + 1 = 38."},{"prompt":"Peak load is **1500 req/s**. One instance handles **400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","6","4","9"],"answer":0,"explanation":"ceil(1500 ÷ (400 × 0.7)) + 1 = 7."}]
---
# Design Drill: How many instances? #21

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
