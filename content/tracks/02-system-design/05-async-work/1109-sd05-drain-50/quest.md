---
slug: "sd05-drain-50"
title: "Design Drill: Draining a backlog #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **198,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["~30 minutes","~27.5 minutes","~330 minutes","It never drains"],"answer":2,"explanation":"198,000 ÷ (120 − 110) ≈ 330 minutes."},{"prompt":"A queue has **48,000 jobs** waiting. Workers finish **360/s** while new jobs arrive at **270/s**. How long until the backlog is gone?","options":["~2.96 minutes","It never drains","~8.89 minutes","~2.22 minutes"],"answer":2,"explanation":"48,000 ÷ (360 − 270) ≈ 8.89 minutes."},{"prompt":"A queue has **163,000 jobs** waiting. Workers finish **220/s** while new jobs arrive at **150/s**. How long until the backlog is gone?","options":["~38.8 minutes","~18.1 minutes","It never drains","~12.3 minutes"],"answer":0,"explanation":"163,000 ÷ (220 − 150) ≈ 38.8 minutes."},{"prompt":"A queue has **192,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~40 minutes","~107 minutes","~64 minutes","It never drains"],"answer":1,"explanation":"192,000 ÷ (80 − 50) ≈ 107 minutes."},{"prompt":"A queue has **88,000 jobs** waiting. Workers finish **220/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["It never drains","~6.67 minutes","~12.2 minutes","~14.7 minutes"],"answer":2,"explanation":"88,000 ÷ (220 − 100) ≈ 12.2 minutes."}]
---
# Design Drill: Draining a backlog #50

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
