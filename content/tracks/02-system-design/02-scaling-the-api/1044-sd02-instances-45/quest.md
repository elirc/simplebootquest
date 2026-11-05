---
slug: "sd02-instances-45"
title: "Design Drill: How many instances? #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Peak load is **11,700 req/s**. One instance handles **200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["85","59","87","84"],"answer":0,"explanation":"ceil(11700 ÷ (200 × 0.7)) + 1 = 85."},{"prompt":"Peak load is **11,200 req/s**. One instance handles **1900 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["13","11","10","6"],"answer":1,"explanation":"ceil(11200 ÷ (1900 × 0.6)) + 1 = 11."},{"prompt":"Peak load is **6200 req/s**. One instance handles **200 req/s** at 100% CPU. You target **70% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["48","46","45","31"],"answer":1,"explanation":"ceil(6200 ÷ (200 × 0.7)) + 1 = 46."},{"prompt":"Peak load is **11,400 req/s**. One instance handles **400 req/s** at 100% CPU. You target **50% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["60","58","57","29"],"answer":1,"explanation":"ceil(11400 ÷ (400 × 0.5)) + 1 = 58."},{"prompt":"Peak load is **3000 req/s**. One instance handles **1000 req/s** at 100% CPU. You target **60% utilisation** plus **one spare instance (N+1)**. How many instances?","options":["5","3","6","8"],"answer":2,"explanation":"ceil(3000 ÷ (1000 × 0.6)) + 1 = 6."}]
---
# Design Drill: How many instances? #45

Instances needed = peak load ÷ (capacity per instance × target utilisation). Plan to run at about 50–70% so you can absorb spikes and lose an instance (N+1).
