---
slug: "sd05-drain-6"
title: "Design Drill: Draining a backlog #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **166,000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **170/s**. How long until the backlog is gone?","options":["~69.2 minutes","It never drains","~13.2 minutes","~16.3 minutes"],"answer":0,"explanation":"166,000 ÷ (210 − 170) ≈ 69.2 minutes."},{"prompt":"A queue has **173,000 jobs** waiting. Workers finish **260/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~11.1 minutes","~24 minutes","It never drains","~20.6 minutes"],"answer":3,"explanation":"173,000 ÷ (260 − 120) ≈ 20.6 minutes."},{"prompt":"A queue has **178,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["It never drains","~22.8 minutes","~98.9 minutes","~29.7 minutes"],"answer":2,"explanation":"178,000 ÷ (130 − 100) ≈ 98.9 minutes."},{"prompt":"A queue has **27,000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["It never drains","~22.5 minutes","~7.5 minutes","~11.3 minutes"],"answer":3,"explanation":"27,000 ÷ (60 − 20) ≈ 11.3 minutes."},{"prompt":"A queue has **121,000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~9.6 minutes","~16.8 minutes","It never drains","~22.4 minutes"],"answer":3,"explanation":"121,000 ÷ (210 − 120) ≈ 22.4 minutes."}]
---
# Design Drill: Draining a backlog #6

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
