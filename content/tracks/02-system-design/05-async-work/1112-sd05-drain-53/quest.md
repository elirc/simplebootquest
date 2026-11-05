---
slug: "sd05-drain-53"
title: "Design Drill: Draining a backlog #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **148,000 jobs** waiting. Workers finish **170/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~14.5 minutes","It never drains","~49.3 minutes","~20.6 minutes"],"answer":3,"explanation":"148,000 ÷ (170 − 50) ≈ 20.6 minutes."},{"prompt":"A queue has **115,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~47.9 minutes","It never drains","~63.9 minutes","~27.4 minutes"],"answer":0,"explanation":"115,000 ÷ (70 − 30) ≈ 47.9 minutes."},{"prompt":"A queue has **105,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~6.25 minutes","It never drains","~10.9 minutes","~14.6 minutes"],"answer":2,"explanation":"105,000 ÷ (280 − 120) ≈ 10.9 minutes."},{"prompt":"A queue has **108,000 jobs** waiting. Workers finish **390/s** while new jobs arrive at **230/s**. How long until the backlog is gone?","options":["It never drains","~7.83 minutes","~4.62 minutes","~11.3 minutes"],"answer":3,"explanation":"108,000 ÷ (390 − 230) ≈ 11.3 minutes."},{"prompt":"A queue has **138,000 jobs** waiting. Workers finish **270/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["It never drains","~46 minutes","~8.52 minutes","~10.5 minutes"],"answer":3,"explanation":"138,000 ÷ (270 − 50) ≈ 10.5 minutes."}]
---
# Design Drill: Draining a backlog #53

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
