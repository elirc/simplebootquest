---
slug: "sd02-instances-5"
title: "Design Drill: How many instances? #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **500 req/s**. One instance handles **500 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["1","5","2","3"],"answer":3,"explanation":"ceil(500 ÷ (500 × 0.6)) + 1 = 3."},{"prompt":"Peak load is **6400 req/s**. One instance handles **900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["16","15","18","8"],"answer":0,"explanation":"ceil(6400 ÷ (900 × 0.5)) + 1 = 16."},{"prompt":"Peak load is **7300 req/s**. One instance handles **400 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["31","32","19","34"],"answer":1,"explanation":"ceil(7300 ÷ (400 × 0.6)) + 1 = 32."},{"prompt":"Peak load is **10,500 req/s**. One instance handles **300 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["51","35","50","53"],"answer":0,"explanation":"ceil(10500 ÷ (300 × 0.7)) + 1 = 51."},{"prompt":"Peak load is **7000 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","15","13","6"],"answer":2,"explanation":"ceil(7000 ÷ (1200 × 0.5)) + 1 = 13."}]
---
# Design Drill: How many instances? #5

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
