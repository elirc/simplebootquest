---
slug: "sd05-drain-58"
title: "Design Drill: Draining a backlog #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **38,000 jobs** waiting. Workers finish **390/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["It never drains","~1.86 minutes","~1.62 minutes","~12.7 minutes"],"answer":1,"explanation":"38,000 ÷ (390 − 50) ≈ 1.86 minutes."},{"prompt":"A queue has **18,000 jobs** waiting. Workers finish **170/s** while new jobs arrive at **80/s**. How long until the backlog is gone?","options":["~3.33 minutes","~3.75 minutes","~1.76 minutes","It never drains"],"answer":0,"explanation":"18,000 ÷ (170 − 80) ≈ 3.33 minutes."},{"prompt":"A queue has **155,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["It never drains","~51.7 minutes","~36.9 minutes","~129 minutes"],"answer":3,"explanation":"155,000 ÷ (70 − 50) ≈ 129 minutes."},{"prompt":"A queue has **70,000 jobs** waiting. Workers finish **330/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~5.56 minutes","~9.72 minutes","It never drains","~3.54 minutes"],"answer":0,"explanation":"70,000 ÷ (330 − 120) ≈ 5.56 minutes."},{"prompt":"A queue has **46,000 jobs** waiting. Workers finish **170/s** while new jobs arrive at **160/s**. How long until the backlog is gone?","options":["~76.7 minutes","~4.79 minutes","It never drains","~4.51 minutes"],"answer":0,"explanation":"46,000 ÷ (170 − 160) ≈ 76.7 minutes."}]
---
# Design Drill: Draining a backlog #58

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
