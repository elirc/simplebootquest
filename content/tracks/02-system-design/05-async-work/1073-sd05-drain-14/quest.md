---
slug: "sd05-drain-14"
title: "Design Drill: Draining a backlog #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **99,000 jobs** waiting. Workers finish **350/s** while new jobs arrive at **320/s**. How long until the backlog is gone?","options":["~4.71 minutes","~55 minutes","~5.16 minutes","It never drains"],"answer":1,"explanation":"99,000 ÷ (350 − 320) ≈ 55 minutes."},{"prompt":"A queue has **196,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~25.1 minutes","~327 minutes","~27.2 minutes","It never drains"],"answer":1,"explanation":"196,000 ÷ (130 − 120) ≈ 327 minutes."},{"prompt":"A queue has **90,000 jobs** waiting. Workers finish **290/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["~5.17 minutes","~15 minutes","It never drains","~7.89 minutes"],"answer":1,"explanation":"90,000 ÷ (290 − 190) ≈ 15 minutes."},{"prompt":"A queue has **77,000 jobs** waiting. Workers finish **340/s** while new jobs arrive at **200/s**. How long until the backlog is gone?","options":["~9.17 minutes","~6.42 minutes","It never drains","~3.77 minutes"],"answer":0,"explanation":"77,000 ÷ (340 − 200) ≈ 9.17 minutes."},{"prompt":"A queue has **57,000 jobs** waiting. Workers finish **150/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~10.6 minutes","~6.33 minutes","It never drains","~15.8 minutes"],"answer":0,"explanation":"57,000 ÷ (150 − 60) ≈ 10.6 minutes."}]
---
# Design Drill: Draining a backlog #14

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
