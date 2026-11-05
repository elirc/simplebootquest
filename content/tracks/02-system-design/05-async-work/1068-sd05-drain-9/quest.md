---
slug: "sd05-drain-9"
title: "Design Drill: Draining a backlog #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **75,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~41.7 minutes","It never drains","~8.33 minutes","~6.94 minutes"],"answer":2,"explanation":"75,000 ÷ (180 − 30) ≈ 8.33 minutes."},{"prompt":"A queue has **80,000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~33.3 minutes","It never drains","~22.2 minutes","~66.7 minutes"],"answer":3,"explanation":"80,000 ÷ (60 − 40) ≈ 66.7 minutes."},{"prompt":"A queue has **133,000 jobs** waiting. Workers finish **270/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~14.8 minutes","It never drains","~8.21 minutes","~18.5 minutes"],"answer":0,"explanation":"133,000 ÷ (270 − 120) ≈ 14.8 minutes."},{"prompt":"A queue has **72,000 jobs** waiting. Workers finish **260/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~30 minutes","~4.62 minutes","It never drains","~5.45 minutes"],"answer":3,"explanation":"72,000 ÷ (260 − 40) ≈ 5.45 minutes."},{"prompt":"A queue has **65,000 jobs** waiting. Workers finish **150/s** while new jobs arrive at **130/s**. How long until the backlog is gone?","options":["It never drains","~8.33 minutes","~7.22 minutes","~54.2 minutes"],"answer":3,"explanation":"65,000 ÷ (150 − 130) ≈ 54.2 minutes."}]
---
# Design Drill: Draining a backlog #9

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
