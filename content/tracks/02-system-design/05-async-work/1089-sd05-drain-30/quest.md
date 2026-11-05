---
slug: "sd05-drain-30"
title: "Design Drill: Draining a backlog #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **17,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["It never drains","~14.2 minutes","~4.05 minutes","~5.67 minutes"],"answer":1,"explanation":"17,000 ÷ (70 − 50) ≈ 14.2 minutes."},{"prompt":"A queue has **161,000 jobs** waiting. Workers finish **310/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["~26.8 minutes","It never drains","~8.66 minutes","~12.8 minutes"],"answer":3,"explanation":"161,000 ÷ (310 − 100) ≈ 12.8 minutes."},{"prompt":"A queue has **47,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["It never drains","~19.6 minutes","~6.53 minutes","~9.79 minutes"],"answer":3,"explanation":"47,000 ÷ (120 − 40) ≈ 9.79 minutes."},{"prompt":"A queue has **104,000 jobs** waiting. Workers finish **380/s** while new jobs arrive at **210/s**. How long until the backlog is gone?","options":["~4.56 minutes","It never drains","~10.2 minutes","~8.25 minutes"],"answer":2,"explanation":"104,000 ÷ (380 − 210) ≈ 10.2 minutes."},{"prompt":"A queue has **132,000 jobs** waiting. Workers finish **330/s** while new jobs arrive at **250/s**. How long until the backlog is gone?","options":["~27.5 minutes","It never drains","~8.8 minutes","~6.67 minutes"],"answer":0,"explanation":"132,000 ÷ (330 − 250) ≈ 27.5 minutes."}]
---
# Design Drill: Draining a backlog #30

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
