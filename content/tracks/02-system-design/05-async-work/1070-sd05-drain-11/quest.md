---
slug: "sd05-drain-11"
title: "Design Drill: Draining a backlog #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **158,000 jobs** waiting. Workers finish **100/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~43.9 minutes","~65.8 minutes","~26.3 minutes","It never drains"],"answer":0,"explanation":"158,000 ÷ (100 − 40) ≈ 43.9 minutes."},{"prompt":"A queue has **82,000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~22.8 minutes","~68.3 minutes","It never drains","~34.2 minutes"],"answer":1,"explanation":"82,000 ÷ (60 − 40) ≈ 68.3 minutes."},{"prompt":"A queue has **162,000 jobs** waiting. Workers finish **100/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["It never drains","~27 minutes","~67.5 minutes","~45 minutes"],"answer":2,"explanation":"162,000 ÷ (100 − 60) ≈ 67.5 minutes."},{"prompt":"A queue has **181,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~50.3 minutes","It never drains","~302 minutes","~43.1 minutes"],"answer":0,"explanation":"181,000 ÷ (70 − 10) ≈ 50.3 minutes."},{"prompt":"A queue has **128,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~53.3 minutes","~71.1 minutes","It never drains","~30.5 minutes"],"answer":0,"explanation":"128,000 ÷ (70 − 30) ≈ 53.3 minutes."}]
---
# Design Drill: Draining a backlog #11

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
