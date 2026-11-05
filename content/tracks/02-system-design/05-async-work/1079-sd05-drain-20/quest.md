---
slug: "sd05-drain-20"
title: "Design Drill: Draining a backlog #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **74,000 jobs** waiting. Workers finish **90/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["~13.7 minutes","~61.7 minutes","~17.6 minutes","It never drains"],"answer":1,"explanation":"74,000 ÷ (90 − 70) ≈ 61.7 minutes."},{"prompt":"A queue has **6000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~1.67 minutes","~200 minutes","~3.33 minutes","It never drains"],"answer":2,"explanation":"6000 ÷ (60 − 30) ≈ 3.33 minutes."},{"prompt":"A queue has **177,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["~42.1 minutes","It never drains","~295 minutes","~36.9 minutes"],"answer":2,"explanation":"177,000 ÷ (80 − 70) ≈ 295 minutes."},{"prompt":"A queue has **64,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["It never drains","~4.1 minutes","~53.3 minutes","~3.81 minutes"],"answer":1,"explanation":"64,000 ÷ (280 − 20) ≈ 4.1 minutes."},{"prompt":"A queue has **70,000 jobs** waiting. Workers finish **150/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["It never drains","~7.78 minutes","~23.3 minutes","~11.7 minutes"],"answer":3,"explanation":"70,000 ÷ (150 − 50) ≈ 11.7 minutes."}]
---
# Design Drill: Draining a backlog #20

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
