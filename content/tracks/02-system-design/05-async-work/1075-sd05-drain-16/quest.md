---
slug: "sd05-drain-16"
title: "Design Drill: Draining a backlog #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **36,000 jobs** waiting. Workers finish **240/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["~2.5 minutes","~4.29 minutes","It never drains","~6 minutes"],"answer":1,"explanation":"36,000 ÷ (240 − 100) ≈ 4.29 minutes."},{"prompt":"A queue has **58,000 jobs** waiting. Workers finish **390/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~19.3 minutes","~2.84 minutes","~2.48 minutes","It never drains"],"answer":1,"explanation":"58,000 ÷ (390 − 50) ≈ 2.84 minutes."},{"prompt":"A queue has **113,000 jobs** waiting. Workers finish **260/s** while new jobs arrive at **150/s**. How long until the backlog is gone?","options":["It never drains","~7.24 minutes","~17.1 minutes","~12.6 minutes"],"answer":2,"explanation":"113,000 ÷ (260 − 150) ≈ 17.1 minutes."},{"prompt":"A queue has **160,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~53.3 minutes","~38.1 minutes","~133 minutes","It never drains"],"answer":2,"explanation":"160,000 ÷ (70 − 50) ≈ 133 minutes."},{"prompt":"A queue has **66,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~22 minutes","It never drains","~4.78 minutes","~3.93 minutes"],"answer":2,"explanation":"66,000 ÷ (280 − 50) ≈ 4.78 minutes."}]
---
# Design Drill: Draining a backlog #16

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
