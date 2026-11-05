---
slug: "sd05-drain-39"
title: "Design Drill: Draining a backlog #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **73,000 jobs** waiting. Workers finish **400/s** while new jobs arrive at **130/s**. How long until the backlog is gone?","options":["~4.51 minutes","~9.36 minutes","It never drains","~3.04 minutes"],"answer":0,"explanation":"73,000 ÷ (400 − 130) ≈ 4.51 minutes."},{"prompt":"A queue has **116,000 jobs** waiting. Workers finish **390/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["~17.6 minutes","It never drains","~6.9 minutes","~4.96 minutes"],"answer":2,"explanation":"116,000 ÷ (390 − 110) ≈ 6.9 minutes."},{"prompt":"A queue has **190,000 jobs** waiting. Workers finish **390/s** while new jobs arrive at **360/s**. How long until the backlog is gone?","options":["~8.8 minutes","~8.12 minutes","It never drains","~106 minutes"],"answer":3,"explanation":"190,000 ÷ (390 − 360) ≈ 106 minutes."},{"prompt":"A queue has **50,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["It never drains","~6.41 minutes","~11.9 minutes","~13.9 minutes"],"answer":2,"explanation":"50,000 ÷ (130 − 60) ≈ 11.9 minutes."},{"prompt":"A queue has **158,000 jobs** waiting. Workers finish **160/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~21.9 minutes","~65.8 minutes","~16.5 minutes","It never drains"],"answer":1,"explanation":"158,000 ÷ (160 − 120) ≈ 65.8 minutes."}]
---
# Design Drill: Draining a backlog #39

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
