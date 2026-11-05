---
slug: "sd05-drain-42"
title: "Design Drill: Draining a backlog #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **100,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["It never drains","~27.8 minutes","~20.8 minutes","~83.3 minutes"],"answer":1,"explanation":"100,000 ÷ (80 − 20) ≈ 27.8 minutes."},{"prompt":"A queue has **187,000 jobs** waiting. Workers finish **170/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~18.3 minutes","~26 minutes","It never drains","~62.3 minutes"],"answer":1,"explanation":"187,000 ÷ (170 − 50) ≈ 26 minutes."},{"prompt":"A queue has **65,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~13.5 minutes","~108 minutes","~15.5 minutes","It never drains"],"answer":2,"explanation":"65,000 ÷ (80 − 10) ≈ 15.5 minutes."},{"prompt":"A queue has **124,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["It never drains","~51.7 minutes","~29.5 minutes","~68.9 minutes"],"answer":1,"explanation":"124,000 ÷ (70 − 30) ≈ 51.7 minutes."},{"prompt":"A queue has **133,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["~31.7 minutes","~17.1 minutes","~36.9 minutes","It never drains"],"answer":2,"explanation":"133,000 ÷ (130 − 70) ≈ 36.9 minutes."}]
---
# Design Drill: Draining a backlog #42

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
