---
slug: "sd02-instances-51"
title: "Design Drill: How many instances? #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **4100 req/s**. One instance handles **600 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","15","13","7"],"answer":2,"explanation":"ceil(4100 ÷ (600 × 0.6)) + 1 = 13."},{"prompt":"Peak load is **5400 req/s**. One instance handles **200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["27","39","40","42"],"answer":2,"explanation":"ceil(5400 ÷ (200 × 0.7)) + 1 = 40."},{"prompt":"Peak load is **8800 req/s**. One instance handles **1100 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","15","8","13"],"answer":3,"explanation":"ceil(8800 ÷ (1100 × 0.7)) + 1 = 13."},{"prompt":"Peak load is **6700 req/s**. One instance handles **1600 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["12","10","5","9"],"answer":1,"explanation":"ceil(6700 ÷ (1600 × 0.5)) + 1 = 10."},{"prompt":"Peak load is **6100 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["11","10","5","13"],"answer":0,"explanation":"ceil(6100 ÷ (1300 × 0.5)) + 1 = 11."}]
---
# Design Drill: How many instances? #51

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
