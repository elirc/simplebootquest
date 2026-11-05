---
slug: "sd05-drain-59"
title: "Design Drill: Draining a backlog #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **149,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~3730 minutes","~31 minutes","It never drains","~62.1 minutes"],"answer":3,"explanation":"149,000 ÷ (80 − 40) ≈ 62.1 minutes."},{"prompt":"A queue has **45,000 jobs** waiting. Workers finish **320/s** while new jobs arrive at **210/s**. How long until the backlog is gone?","options":["~6.82 minutes","It never drains","~2.34 minutes","~3.57 minutes"],"answer":0,"explanation":"45,000 ÷ (320 − 210) ≈ 6.82 minutes."},{"prompt":"A queue has **93,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["~15.5 minutes","It never drains","~12.9 minutes","~77.5 minutes"],"answer":0,"explanation":"93,000 ÷ (120 − 20) ≈ 15.5 minutes."},{"prompt":"A queue has **185,000 jobs** waiting. Workers finish **390/s** while new jobs arrive at **350/s**. How long until the backlog is gone?","options":["~8.81 minutes","~7.91 minutes","~77.1 minutes","It never drains"],"answer":2,"explanation":"185,000 ÷ (390 − 350) ≈ 77.1 minutes."},{"prompt":"A queue has **91,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~50.6 minutes","It never drains","~15.2 minutes","~11.7 minutes"],"answer":2,"explanation":"91,000 ÷ (130 − 30) ≈ 15.2 minutes."}]
---
# Design Drill: Draining a backlog #59

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
