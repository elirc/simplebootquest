---
slug: "sd02-instances-11"
title: "Design Drill: How many instances? #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **9200 req/s**. One instance handles **500 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["30","28","27","19"],"answer":1,"explanation":"ceil(9200 ÷ (500 × 0.7)) + 1 = 28."},{"prompt":"Peak load is **5200 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","6","5","8"],"answer":1,"explanation":"ceil(5200 ÷ (1900 × 0.6)) + 1 = 6."},{"prompt":"Peak load is **2000 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","3","2","1"],"answer":1,"explanation":"ceil(2000 ÷ (1900 × 0.7)) + 1 = 3."},{"prompt":"Peak load is **1300 req/s**. One instance handles **900 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["3","6","2","4"],"answer":3,"explanation":"ceil(1300 ÷ (900 × 0.6)) + 1 = 4."},{"prompt":"Peak load is **900 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["1","3","5","2"],"answer":1,"explanation":"ceil(900 ÷ (1300 × 0.5)) + 1 = 3."}]
---
# Design Drill: How many instances? #11

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
