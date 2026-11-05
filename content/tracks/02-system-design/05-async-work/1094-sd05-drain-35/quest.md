---
slug: "sd05-drain-35"
title: "Design Drill: Draining a backlog #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **170,000 jobs** waiting. Workers finish **390/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["~7.26 minutes","It never drains","~28.3 minutes","~9.77 minutes"],"answer":3,"explanation":"170,000 ÷ (390 − 100) ≈ 9.77 minutes."},{"prompt":"A queue has **49,000 jobs** waiting. Workers finish **320/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~20.4 minutes","~2.55 minutes","~2.92 minutes","It never drains"],"answer":2,"explanation":"49,000 ÷ (320 − 40) ≈ 2.92 minutes."},{"prompt":"A queue has **29,000 jobs** waiting. Workers finish **400/s** while new jobs arrive at **300/s**. How long until the backlog is gone?","options":["It never drains","~1.61 minutes","~4.83 minutes","~1.21 minutes"],"answer":2,"explanation":"29,000 ÷ (400 − 300) ≈ 4.83 minutes."},{"prompt":"A queue has **167,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["~139 minutes","~27.8 minutes","~23.2 minutes","It never drains"],"answer":1,"explanation":"167,000 ÷ (120 − 20) ≈ 27.8 minutes."},{"prompt":"A queue has **103,000 jobs** waiting. Workers finish **400/s** while new jobs arrive at **340/s**. How long until the backlog is gone?","options":["It never drains","~28.6 minutes","~5.05 minutes","~4.29 minutes"],"answer":1,"explanation":"103,000 ÷ (400 − 340) ≈ 28.6 minutes."}]
---
# Design Drill: Draining a backlog #35

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
