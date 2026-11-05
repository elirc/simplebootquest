---
slug: "sd05-drain-49"
title: "Design Drill: Draining a backlog #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **80,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **170/s**. How long until the backlog is gone?","options":["~7.41 minutes","~133 minutes","It never drains","~7.84 minutes"],"answer":1,"explanation":"80,000 ÷ (180 − 170) ≈ 133 minutes."},{"prompt":"A queue has **12,000 jobs** waiting. Workers finish **320/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["~0.625 minutes","~0.667 minutes","~10 minutes","It never drains"],"answer":1,"explanation":"12,000 ÷ (320 − 20) ≈ 0.667 minutes."},{"prompt":"A queue has **95,000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["It never drains","~39.6 minutes","~26.4 minutes","~79.2 minutes"],"answer":1,"explanation":"95,000 ÷ (60 − 20) ≈ 39.6 minutes."},{"prompt":"A queue has **188,000 jobs** waiting. Workers finish **140/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~22.4 minutes","~52.2 minutes","It never drains","~39.2 minutes"],"answer":3,"explanation":"188,000 ÷ (140 − 60) ≈ 39.2 minutes."},{"prompt":"A queue has **113,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["~94.2 minutes","~15.7 minutes","~18.8 minutes","It never drains"],"answer":0,"explanation":"113,000 ÷ (120 − 100) ≈ 94.2 minutes."}]
---
# Design Drill: Draining a backlog #49

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
