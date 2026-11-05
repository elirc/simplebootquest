---
slug: "sd05-drain-27"
title: "Design Drill: Draining a backlog #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **123,000 jobs** waiting. Workers finish **300/s** while new jobs arrive at **290/s**. How long until the backlog is gone?","options":["It never drains","~205 minutes","~6.83 minutes","~7.07 minutes"],"answer":1,"explanation":"123,000 ÷ (300 − 290) ≈ 205 minutes."},{"prompt":"A queue has **65,000 jobs** waiting. Workers finish **200/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["~5.7 minutes","~5.42 minutes","It never drains","~108 minutes"],"answer":3,"explanation":"65,000 ÷ (200 − 190) ≈ 108 minutes."},{"prompt":"A queue has **50,000 jobs** waiting. Workers finish **270/s** while new jobs arrive at **160/s**. How long until the backlog is gone?","options":["It never drains","~3.09 minutes","~5.21 minutes","~7.58 minutes"],"answer":3,"explanation":"50,000 ÷ (270 − 160) ≈ 7.58 minutes."},{"prompt":"A queue has **22,000 jobs** waiting. Workers finish **340/s** while new jobs arrive at **220/s**. How long until the backlog is gone?","options":["~1.08 minutes","~1.67 minutes","~3.06 minutes","It never drains"],"answer":2,"explanation":"22,000 ÷ (340 − 220) ≈ 3.06 minutes."},{"prompt":"A queue has **13,000 jobs** waiting. Workers finish **350/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~0.619 minutes","~21.7 minutes","It never drains","~0.637 minutes"],"answer":3,"explanation":"13,000 ÷ (350 − 10) ≈ 0.637 minutes."}]
---
# Design Drill: Draining a backlog #27

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
