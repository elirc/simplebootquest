---
slug: "sd02-instances-43"
title: "Design Drill: How many instances? #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **11,500 req/s**. One instance handles **900 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["23","22","13","25"],"answer":0,"explanation":"ceil(11500 ÷ (900 × 0.6)) + 1 = 23."},{"prompt":"Peak load is **6300 req/s**. One instance handles **900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["15","14","7","17"],"answer":0,"explanation":"ceil(6300 ÷ (900 × 0.5)) + 1 = 15."},{"prompt":"Peak load is **5900 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","8","4","6"],"answer":3,"explanation":"ceil(5900 ÷ (1900 × 0.7)) + 1 = 6."},{"prompt":"Peak load is **11,100 req/s**. One instance handles **600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["31","19","34","32"],"answer":3,"explanation":"ceil(11100 ÷ (600 × 0.6)) + 1 = 32."},{"prompt":"Peak load is **11,200 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["19","17","16","8"],"answer":1,"explanation":"ceil(11200 ÷ (1400 × 0.5)) + 1 = 17."}]
---
# Design Drill: How many instances? #43

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
