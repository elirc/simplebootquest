---
slug: "sd05-drain-10"
title: "Design Drill: Draining a backlog #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **110,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **80/s**. How long until the backlog is gone?","options":["~18.3 minutes","It never drains","~22.9 minutes","~10.2 minutes"],"answer":0,"explanation":"110,000 ÷ (180 − 80) ≈ 18.3 minutes."},{"prompt":"A queue has **46,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~6.39 minutes","~12.8 minutes","It never drains","~767 minutes"],"answer":1,"explanation":"46,000 ÷ (120 − 60) ≈ 12.8 minutes."},{"prompt":"A queue has **96,000 jobs** waiting. Workers finish **360/s** while new jobs arrive at **210/s**. How long until the backlog is gone?","options":["~7.62 minutes","~10.7 minutes","It never drains","~4.44 minutes"],"answer":1,"explanation":"96,000 ÷ (360 − 210) ≈ 10.7 minutes."},{"prompt":"A queue has **142,000 jobs** waiting. Workers finish **90/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~26.3 minutes","~29.6 minutes","~237 minutes","It never drains"],"answer":1,"explanation":"142,000 ÷ (90 − 10) ≈ 29.6 minutes."},{"prompt":"A queue has **108,000 jobs** waiting. Workers finish **250/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~8.18 minutes","It never drains","~7.2 minutes","~60 minutes"],"answer":0,"explanation":"108,000 ÷ (250 − 30) ≈ 8.18 minutes."}]
---
# Design Drill: Draining a backlog #10

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
