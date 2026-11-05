---
slug: "sd05-drain-60"
title: "Design Drill: Draining a backlog #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **195,000 jobs** waiting. Workers finish **400/s** while new jobs arrive at **200/s**. How long until the backlog is gone?","options":["~16.3 minutes","~975 minutes","It never drains","~8.13 minutes"],"answer":0,"explanation":"195,000 ÷ (400 − 200) ≈ 16.3 minutes."},{"prompt":"A queue has **147,000 jobs** waiting. Workers finish **310/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["It never drains","~7.9 minutes","~9.42 minutes","~49 minutes"],"answer":2,"explanation":"147,000 ÷ (310 − 50) ≈ 9.42 minutes."},{"prompt":"A queue has **174,000 jobs** waiting. Workers finish **350/s** while new jobs arrive at **170/s**. How long until the backlog is gone?","options":["~16.1 minutes","It never drains","~17.1 minutes","~8.29 minutes"],"answer":0,"explanation":"174,000 ÷ (350 − 170) ≈ 16.1 minutes."},{"prompt":"A queue has **151,000 jobs** waiting. Workers finish **380/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["It never drains","~7.4 minutes","~62.9 minutes","~6.62 minutes"],"answer":1,"explanation":"151,000 ÷ (380 − 40) ≈ 7.4 minutes."},{"prompt":"A queue has **158,000 jobs** waiting. Workers finish **290/s** while new jobs arrive at **140/s**. How long until the backlog is gone?","options":["It never drains","~18.8 minutes","~17.6 minutes","~9.08 minutes"],"answer":2,"explanation":"158,000 ÷ (290 − 140) ≈ 17.6 minutes."}]
---
# Design Drill: Draining a backlog #60

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
