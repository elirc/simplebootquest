---
slug: "sd05-drain-32"
title: "Design Drill: Draining a backlog #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **91,000 jobs** waiting. Workers finish **50/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["~30.3 minutes","It never drains","~50.6 minutes","~75.8 minutes"],"answer":2,"explanation":"91,000 ÷ (50 − 20) ≈ 50.6 minutes."},{"prompt":"A queue has **90,000 jobs** waiting. Workers finish **100/s** while new jobs arrive at **80/s**. How long until the backlog is gone?","options":["~18.8 minutes","~75 minutes","~15 minutes","It never drains"],"answer":1,"explanation":"90,000 ÷ (100 − 80) ≈ 75 minutes."},{"prompt":"A queue has **110,000 jobs** waiting. Workers finish **360/s** while new jobs arrive at **180/s**. How long until the backlog is gone?","options":["~611 minutes","It never drains","~10.2 minutes","~5.09 minutes"],"answer":2,"explanation":"110,000 ÷ (360 − 180) ≈ 10.2 minutes."},{"prompt":"A queue has **99,000 jobs** waiting. Workers finish **160/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~27.5 minutes","~16.5 minutes","It never drains","~10.3 minutes"],"answer":1,"explanation":"99,000 ÷ (160 − 60) ≈ 16.5 minutes."},{"prompt":"A queue has **78,000 jobs** waiting. Workers finish **290/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["~6.5 minutes","It never drains","~4.48 minutes","~14.4 minutes"],"answer":0,"explanation":"78,000 ÷ (290 − 90) ≈ 6.5 minutes."}]
---
# Design Drill: Draining a backlog #32

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
