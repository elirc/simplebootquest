---
slug: "sd02-instances-50"
title: "Design Drill: How many instances? #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **6200 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["8","5","11","9"],"answer":3,"explanation":"ceil(6200 ÷ (1300 × 0.6)) + 1 = 9."},{"prompt":"Peak load is **4200 req/s**. One instance handles **200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["30","33","31","21"],"answer":2,"explanation":"ceil(4200 ÷ (200 × 0.7)) + 1 = 31."},{"prompt":"Peak load is **9500 req/s**. One instance handles **1300 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["13","14","16","8"],"answer":1,"explanation":"ceil(9500 ÷ (1300 × 0.6)) + 1 = 14."},{"prompt":"Peak load is **9900 req/s**. One instance handles **600 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["33","34","36","17"],"answer":1,"explanation":"ceil(9900 ÷ (600 × 0.5)) + 1 = 34."},{"prompt":"Peak load is **5900 req/s**. One instance handles **2000 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["6","3","5","8"],"answer":0,"explanation":"ceil(5900 ÷ (2000 × 0.7)) + 1 = 6."}]
---
# Design Drill: How many instances? #50

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
