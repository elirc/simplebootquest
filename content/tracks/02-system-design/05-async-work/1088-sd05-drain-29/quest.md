---
slug: "sd05-drain-29"
title: "Design Drill: Draining a backlog #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **45,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["It never drains","~2.68 minutes","~4.17 minutes","~7.5 minutes"],"answer":2,"explanation":"45,000 ÷ (280 − 100) ≈ 4.17 minutes."},{"prompt":"A queue has **184,000 jobs** waiting. Workers finish **300/s** while new jobs arrive at **170/s**. How long until the backlog is gone?","options":["~23.6 minutes","~10.2 minutes","~18 minutes","It never drains"],"answer":0,"explanation":"184,000 ÷ (300 − 170) ≈ 23.6 minutes."},{"prompt":"A queue has **115,000 jobs** waiting. Workers finish **170/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~16 minutes","~11.3 minutes","~38.3 minutes","It never drains"],"answer":0,"explanation":"115,000 ÷ (170 − 50) ≈ 16 minutes."},{"prompt":"A queue has **164,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["It never drains","~91.1 minutes","~39 minutes","~68.3 minutes"],"answer":3,"explanation":"164,000 ÷ (70 − 30) ≈ 68.3 minutes."},{"prompt":"A queue has **58,000 jobs** waiting. Workers finish **110/s** while new jobs arrive at **80/s**. How long until the backlog is gone?","options":["~12.1 minutes","It never drains","~32.2 minutes","~8.79 minutes"],"answer":2,"explanation":"58,000 ÷ (110 − 80) ≈ 32.2 minutes."}]
---
# Design Drill: Draining a backlog #29

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
