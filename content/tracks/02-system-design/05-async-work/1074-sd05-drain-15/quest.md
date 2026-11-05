---
slug: "sd05-drain-15"
title: "Design Drill: Draining a backlog #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **74,000 jobs** waiting. Workers finish **310/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["~10.3 minutes","~6.49 minutes","~3.98 minutes","It never drains"],"answer":0,"explanation":"74,000 ÷ (310 − 190) ≈ 10.3 minutes."},{"prompt":"A queue has **149,000 jobs** waiting. Workers finish **230/s** while new jobs arrive at **180/s**. How long until the backlog is gone?","options":["~10.8 minutes","It never drains","~49.7 minutes","~13.8 minutes"],"answer":2,"explanation":"149,000 ÷ (230 − 180) ≈ 49.7 minutes."},{"prompt":"A queue has **60,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **260/s**. How long until the backlog is gone?","options":["~3.85 minutes","~3.57 minutes","It never drains","~50 minutes"],"answer":3,"explanation":"60,000 ÷ (280 − 260) ≈ 50 minutes."},{"prompt":"A queue has **62,000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["It never drains","~51.7 minutes","~17.2 minutes","~25.8 minutes"],"answer":3,"explanation":"62,000 ÷ (60 − 20) ≈ 25.8 minutes."},{"prompt":"A queue has **48,000 jobs** waiting. Workers finish **50/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~40 minutes","~16 minutes","It never drains","~26.7 minutes"],"answer":0,"explanation":"48,000 ÷ (50 − 30) ≈ 40 minutes."}]
---
# Design Drill: Draining a backlog #15

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
