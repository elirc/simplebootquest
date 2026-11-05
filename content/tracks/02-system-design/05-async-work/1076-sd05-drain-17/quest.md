---
slug: "sd05-drain-17"
title: "Design Drill: Draining a backlog #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **103,000 jobs** waiting. Workers finish **290/s** while new jobs arrive at **260/s**. How long until the backlog is gone?","options":["It never drains","~5.92 minutes","~6.6 minutes","~57.2 minutes"],"answer":3,"explanation":"103,000 ÷ (290 − 260) ≈ 57.2 minutes."},{"prompt":"A queue has **40,000 jobs** waiting. Workers finish **300/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~11.1 minutes","~2.78 minutes","~2.22 minutes","It never drains"],"answer":1,"explanation":"40,000 ÷ (300 − 60) ≈ 2.78 minutes."},{"prompt":"A queue has **51,000 jobs** waiting. Workers finish **190/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["It never drains","~10.6 minutes","~7.73 minutes","~4.47 minutes"],"answer":1,"explanation":"51,000 ÷ (190 − 110) ≈ 10.6 minutes."},{"prompt":"A queue has **66,000 jobs** waiting. Workers finish **380/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~3.33 minutes","~2.89 minutes","~22 minutes","It never drains"],"answer":0,"explanation":"66,000 ÷ (380 − 50) ≈ 3.33 minutes."},{"prompt":"A queue has **135,000 jobs** waiting. Workers finish **200/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["~113 minutes","It never drains","~12.5 minutes","~11.3 minutes"],"answer":2,"explanation":"135,000 ÷ (200 − 20) ≈ 12.5 minutes."}]
---
# Design Drill: Draining a backlog #17

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
