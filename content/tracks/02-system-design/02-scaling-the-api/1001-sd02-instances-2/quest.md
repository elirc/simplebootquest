---
slug: "sd02-instances-2"
title: "Design Drill: How many instances? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **9300 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["15","13","12","8"],"answer":1,"explanation":"ceil(9300 ÷ (1300 × 0.6)) + 1 = 13."},{"prompt":"Peak load is **4800 req/s**. One instance handles **300 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["16","24","26","23"],"answer":1,"explanation":"ceil(4800 ÷ (300 × 0.7)) + 1 = 24."},{"prompt":"Peak load is **11,100 req/s**. One instance handles **200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["83","81","80","56"],"answer":1,"explanation":"ceil(11100 ÷ (200 × 0.7)) + 1 = 81."},{"prompt":"Peak load is **7200 req/s**. One instance handles **400 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["31","33","18","30"],"answer":0,"explanation":"ceil(7200 ÷ (400 × 0.6)) + 1 = 31."},{"prompt":"Peak load is **6900 req/s**. One instance handles **1800 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","9","7","4"],"answer":2,"explanation":"ceil(6900 ÷ (1800 × 0.7)) + 1 = 7."}]
---
# Design Drill: How many instances? #2

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
