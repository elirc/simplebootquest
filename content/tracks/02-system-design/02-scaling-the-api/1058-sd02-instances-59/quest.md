---
slug: "sd02-instances-59"
title: "Design Drill: How many instances? #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **11,400 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","11","12","14"],"answer":2,"explanation":"ceil(11400 ÷ (1600 × 0.7)) + 1 = 12."},{"prompt":"Peak load is **5000 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["4","7","6","9"],"answer":1,"explanation":"ceil(5000 ÷ (1300 × 0.7)) + 1 = 7."},{"prompt":"Peak load is **11,600 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["17","12","20","18"],"answer":3,"explanation":"ceil(11600 ÷ (1000 × 0.7)) + 1 = 18."},{"prompt":"Peak load is **11,000 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["11","6","13","10"],"answer":0,"explanation":"ceil(11000 ÷ (1900 × 0.6)) + 1 = 11."},{"prompt":"Peak load is **7100 req/s**. One instance handles **700 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["20","18","17","11"],"answer":1,"explanation":"ceil(7100 ÷ (700 × 0.6)) + 1 = 18."}]
---
# Design Drill: How many instances? #59

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
