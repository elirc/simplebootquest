---
slug: "sd02-instances-26"
title: "Design Drill: How many instances? #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **3400 req/s**. One instance handles **1500 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","6","3","8"],"answer":1,"explanation":"ceil(3400 ÷ (1500 × 0.5)) + 1 = 6."},{"prompt":"Peak load is **5900 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["9","11","8","5"],"answer":0,"explanation":"ceil(5900 ÷ (1300 × 0.6)) + 1 = 9."},{"prompt":"Peak load is **11,900 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["11","20","22","19"],"answer":1,"explanation":"ceil(11900 ÷ (1100 × 0.6)) + 1 = 20."},{"prompt":"Peak load is **9300 req/s**. One instance handles **500 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["41","38","19","39"],"answer":3,"explanation":"ceil(9300 ÷ (500 × 0.5)) + 1 = 39."},{"prompt":"Peak load is **2700 req/s**. One instance handles **500 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","11","6","12"],"answer":3,"explanation":"ceil(2700 ÷ (500 × 0.5)) + 1 = 12."}]
---
# Design Drill: How many instances? #26

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
