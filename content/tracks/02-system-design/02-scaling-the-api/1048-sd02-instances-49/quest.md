---
slug: "sd02-instances-49"
title: "Design Drill: How many instances? #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **2900 req/s**. One instance handles **1700 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","2","4","5"],"answer":3,"explanation":"ceil(2900 ÷ (1700 × 0.5)) + 1 = 5."},{"prompt":"Peak load is **5500 req/s**. One instance handles **400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["29","31","28","14"],"answer":0,"explanation":"ceil(5500 ÷ (400 × 0.5)) + 1 = 29."},{"prompt":"Peak load is **4900 req/s**. One instance handles **400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["13","25","26","28"],"answer":2,"explanation":"ceil(4900 ÷ (400 × 0.5)) + 1 = 26."},{"prompt":"Peak load is **10,300 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["14","11","12","6"],"answer":2,"explanation":"ceil(10300 ÷ (1900 × 0.5)) + 1 = 12."},{"prompt":"Peak load is **7600 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["7","10","11","13"],"answer":2,"explanation":"ceil(7600 ÷ (1100 × 0.7)) + 1 = 11."}]
---
# Design Drill: How many instances? #49

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
