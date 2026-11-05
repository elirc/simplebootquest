---
slug: "sd05-drain-51"
title: "Design Drill: Draining a backlog #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **150,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~20.8 minutes","It never drains","~8.93 minutes","~15.6 minutes"],"answer":3,"explanation":"150,000 ÷ (280 − 120) ≈ 15.6 minutes."},{"prompt":"A queue has **149,000 jobs** waiting. Workers finish **230/s** while new jobs arrive at **150/s**. How long until the backlog is gone?","options":["It never drains","~31 minutes","~10.8 minutes","~16.6 minutes"],"answer":1,"explanation":"149,000 ÷ (230 − 150) ≈ 31 minutes."},{"prompt":"A queue has **70,000 jobs** waiting. Workers finish **230/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["It never drains","~13 minutes","~5.07 minutes","~8.33 minutes"],"answer":3,"explanation":"70,000 ÷ (230 − 90) ≈ 8.33 minutes."},{"prompt":"A queue has **107,000 jobs** waiting. Workers finish **100/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~44.6 minutes","It never drains","~29.7 minutes","~17.8 minutes"],"answer":0,"explanation":"107,000 ÷ (100 − 60) ≈ 44.6 minutes."},{"prompt":"A queue has **130,000 jobs** waiting. Workers finish **200/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["~217 minutes","~11.4 minutes","~10.8 minutes","It never drains"],"answer":0,"explanation":"130,000 ÷ (200 − 190) ≈ 217 minutes."}]
---
# Design Drill: Draining a backlog #51

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
