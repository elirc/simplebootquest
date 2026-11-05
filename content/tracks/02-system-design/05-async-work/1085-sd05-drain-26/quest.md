---
slug: "sd05-drain-26"
title: "Design Drill: Draining a backlog #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **5000 jobs** waiting. Workers finish **340/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~0.694 minutes","~0.379 minutes","~0.245 minutes","It never drains"],"answer":1,"explanation":"5000 ÷ (340 − 120) ≈ 0.379 minutes."},{"prompt":"A queue has **23,000 jobs** waiting. Workers finish **160/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~3.19 minutes","~2.4 minutes","~9.58 minutes","It never drains"],"answer":2,"explanation":"23,000 ÷ (160 − 120) ≈ 9.58 minutes."},{"prompt":"A queue has **35,000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **200/s**. How long until the backlog is gone?","options":["~58.3 minutes","~2.78 minutes","It never drains","~2.92 minutes"],"answer":0,"explanation":"35,000 ÷ (210 − 200) ≈ 58.3 minutes."},{"prompt":"A queue has **72,000 jobs** waiting. Workers finish **240/s** while new jobs arrive at **180/s**. How long until the backlog is gone?","options":["~6.67 minutes","~5 minutes","It never drains","~20 minutes"],"answer":3,"explanation":"72,000 ÷ (240 − 180) ≈ 20 minutes."},{"prompt":"A queue has **138,000 jobs** waiting. Workers finish **160/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~14.4 minutes","It never drains","~57.5 minutes","~19.2 minutes"],"answer":2,"explanation":"138,000 ÷ (160 − 120) ≈ 57.5 minutes."}]
---
# Design Drill: Draining a backlog #26

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
