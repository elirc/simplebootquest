---
slug: "sd02-instances-53"
title: "Design Drill: How many instances? #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **6700 req/s**. One instance handles **800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["17","20","18","9"],"answer":2,"explanation":"ceil(6700 ÷ (800 × 0.5)) + 1 = 18."},{"prompt":"Peak load is **5600 req/s**. One instance handles **400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["29","28","14","31"],"answer":0,"explanation":"ceil(5600 ÷ (400 × 0.5)) + 1 = 29."},{"prompt":"Peak load is **9100 req/s**. One instance handles **800 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["26","23","24","12"],"answer":2,"explanation":"ceil(9100 ÷ (800 × 0.5)) + 1 = 24."},{"prompt":"Peak load is **10,800 req/s**. One instance handles **700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["34","16","31","32"],"answer":3,"explanation":"ceil(10800 ÷ (700 × 0.5)) + 1 = 32."},{"prompt":"Peak load is **8300 req/s**. One instance handles **300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["28","50","47","48"],"answer":3,"explanation":"ceil(8300 ÷ (300 × 0.6)) + 1 = 48."}]
---
# Design Drill: How many instances? #53

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
