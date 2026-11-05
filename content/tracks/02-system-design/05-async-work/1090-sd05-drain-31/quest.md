---
slug: "sd05-drain-31"
title: "Design Drill: Draining a backlog #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **171,000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~47.5 minutes","~71.3 minutes","It never drains","~143 minutes"],"answer":3,"explanation":"171,000 ÷ (60 − 40) ≈ 143 minutes."},{"prompt":"A queue has **38,000 jobs** waiting. Workers finish **100/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~63.3 minutes","~6.33 minutes","It never drains","~7.04 minutes"],"answer":3,"explanation":"38,000 ÷ (100 − 10) ≈ 7.04 minutes."},{"prompt":"A queue has **41,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["It never drains","~68.3 minutes","~8.54 minutes","~9.76 minutes"],"answer":3,"explanation":"41,000 ÷ (80 − 10) ≈ 9.76 minutes."},{"prompt":"A queue has **68,000 jobs** waiting. Workers finish **400/s** while new jobs arrive at **150/s**. How long until the backlog is gone?","options":["~4.53 minutes","~2.83 minutes","It never drains","~7.56 minutes"],"answer":0,"explanation":"68,000 ÷ (400 − 150) ≈ 4.53 minutes."},{"prompt":"A queue has **96,000 jobs** waiting. Workers finish **380/s** while new jobs arrive at **240/s**. How long until the backlog is gone?","options":["~11.4 minutes","~4.21 minutes","It never drains","~6.67 minutes"],"answer":0,"explanation":"96,000 ÷ (380 − 240) ≈ 11.4 minutes."}]
---
# Design Drill: Draining a backlog #31

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
