---
slug: "sd02-instances-14"
title: "Design Drill: How many instances? #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **6300 req/s**. One instance handles **400 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["16","28","30","27"],"answer":1,"explanation":"ceil(6300 ÷ (400 × 0.6)) + 1 = 28."},{"prompt":"Peak load is **5500 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","9","6","3"],"answer":0,"explanation":"ceil(5500 ÷ (1900 × 0.5)) + 1 = 7."},{"prompt":"Peak load is **3700 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","10","7","4"],"answer":0,"explanation":"ceil(3700 ÷ (1100 × 0.5)) + 1 = 8."},{"prompt":"Peak load is **2100 req/s**. One instance handles **900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","8","6","3"],"answer":2,"explanation":"ceil(2100 ÷ (900 × 0.5)) + 1 = 6."},{"prompt":"Peak load is **8000 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["13","6","15","12"],"answer":0,"explanation":"ceil(8000 ÷ (1400 × 0.5)) + 1 = 13."}]
---
# Design Drill: How many instances? #14

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
