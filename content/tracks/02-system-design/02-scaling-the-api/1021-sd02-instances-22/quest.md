---
slug: "sd02-instances-22"
title: "Design Drill: How many instances? #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **4800 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","3","5","8"],"answer":0,"explanation":"ceil(4800 ÷ (1700 × 0.6)) + 1 = 6."},{"prompt":"Peak load is **4600 req/s**. One instance handles **1200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","4","7","6"],"answer":2,"explanation":"ceil(4600 ÷ (1200 × 0.7)) + 1 = 7."},{"prompt":"Peak load is **1300 req/s**. One instance handles **1400 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["2","3","5","1"],"answer":1,"explanation":"ceil(1300 ÷ (1400 × 0.7)) + 1 = 3."},{"prompt":"Peak load is **11,000 req/s**. One instance handles **900 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["21","24","22","13"],"answer":2,"explanation":"ceil(11000 ÷ (900 × 0.6)) + 1 = 22."},{"prompt":"Peak load is **5900 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","10","11","13"],"answer":2,"explanation":"ceil(5900 ÷ (1000 × 0.6)) + 1 = 11."}]
---
# Design Drill: How many instances? #22

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
