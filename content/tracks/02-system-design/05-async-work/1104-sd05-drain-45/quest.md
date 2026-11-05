---
slug: "sd05-drain-45"
title: "Design Drill: Draining a backlog #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **143,000 jobs** waiting. Workers finish **230/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["~18.3 minutes","It never drains","~23.8 minutes","~10.4 minutes"],"answer":0,"explanation":"143,000 ÷ (230 − 100) ≈ 18.3 minutes."},{"prompt":"A queue has **162,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["It never drains","~38.6 minutes","~270 minutes","~45 minutes"],"answer":3,"explanation":"162,000 ÷ (70 − 10) ≈ 45 minutes."},{"prompt":"A queue has **52,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~4.81 minutes","~17.3 minutes","It never drains","~6.67 minutes"],"answer":3,"explanation":"52,000 ÷ (180 − 50) ≈ 6.67 minutes."},{"prompt":"A queue has **113,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~7.85 minutes","~47.1 minutes","It never drains","~6.73 minutes"],"answer":0,"explanation":"113,000 ÷ (280 − 40) ≈ 7.85 minutes."},{"prompt":"A queue has **84,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["~70 minutes","~17.5 minutes","It never drains","~23.3 minutes"],"answer":3,"explanation":"84,000 ÷ (80 − 20) ≈ 23.3 minutes."}]
---
# Design Drill: Draining a backlog #45

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
