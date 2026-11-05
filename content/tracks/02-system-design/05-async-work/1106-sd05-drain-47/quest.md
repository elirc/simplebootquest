---
slug: "sd05-drain-47"
title: "Design Drill: Draining a backlog #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **134,000 jobs** waiting. Workers finish **370/s** while new jobs arrive at **310/s**. How long until the backlog is gone?","options":["~37.2 minutes","It never drains","~7.2 minutes","~6.04 minutes"],"answer":0,"explanation":"134,000 ÷ (370 − 310) ≈ 37.2 minutes."},{"prompt":"A queue has **103,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["It never drains","~13.2 minutes","~85.8 minutes","~15.6 minutes"],"answer":2,"explanation":"103,000 ÷ (130 − 110) ≈ 85.8 minutes."},{"prompt":"A queue has **21,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~1.25 minutes","~1.59 minutes","~5.83 minutes","It never drains"],"answer":1,"explanation":"21,000 ÷ (280 − 60) ≈ 1.59 minutes."},{"prompt":"A queue has **66,000 jobs** waiting. Workers finish **320/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~22 minutes","It never drains","~4.07 minutes","~3.44 minutes"],"answer":2,"explanation":"66,000 ÷ (320 − 50) ≈ 4.07 minutes."},{"prompt":"A queue has **40,000 jobs** waiting. Workers finish **170/s** while new jobs arrive at **160/s**. How long until the backlog is gone?","options":["~4.17 minutes","It never drains","~66.7 minutes","~3.92 minutes"],"answer":2,"explanation":"40,000 ÷ (170 − 160) ≈ 66.7 minutes."}]
---
# Design Drill: Draining a backlog #47

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
