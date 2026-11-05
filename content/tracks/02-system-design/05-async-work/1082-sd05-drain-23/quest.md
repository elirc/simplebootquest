---
slug: "sd05-drain-23"
title: "Design Drill: Draining a backlog #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **187,000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~62.3 minutes","It never drains","~312 minutes","~51.9 minutes"],"answer":2,"explanation":"187,000 ÷ (60 − 50) ≈ 312 minutes."},{"prompt":"A queue has **109,000 jobs** waiting. Workers finish **170/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~10.7 minutes","~30.3 minutes","It never drains","~16.5 minutes"],"answer":3,"explanation":"109,000 ÷ (170 − 60) ≈ 16.5 minutes."},{"prompt":"A queue has **16,000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~1.78 minutes","It never drains","~4.44 minutes","~1.27 minutes"],"answer":0,"explanation":"16,000 ÷ (210 − 60) ≈ 1.78 minutes."},{"prompt":"A queue has **6000 jobs** waiting. Workers finish **320/s** while new jobs arrive at **220/s**. How long until the backlog is gone?","options":["~1 minutes","~0.455 minutes","~0.313 minutes","It never drains"],"answer":0,"explanation":"6000 ÷ (320 − 220) ≈ 1 minutes."},{"prompt":"A queue has **166,000 jobs** waiting. Workers finish **360/s** while new jobs arrive at **260/s**. How long until the backlog is gone?","options":["~7.69 minutes","It never drains","~27.7 minutes","~10.6 minutes"],"answer":2,"explanation":"166,000 ÷ (360 − 260) ≈ 27.7 minutes."}]
---
# Design Drill: Draining a backlog #23

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
