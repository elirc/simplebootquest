---
slug: "sd05-drain-37"
title: "Design Drill: Draining a backlog #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **131,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["It never drains","~18.2 minutes","~43.7 minutes","~31.2 minutes"],"answer":2,"explanation":"131,000 ÷ (120 − 70) ≈ 43.7 minutes."},{"prompt":"A queue has **11,000 jobs** waiting. Workers finish **380/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["It never drains","~57.9 minutes","~0.965 minutes","~0.482 minutes"],"answer":2,"explanation":"11,000 ÷ (380 − 190) ≈ 0.965 minutes."},{"prompt":"A queue has **182,000 jobs** waiting. Workers finish **190/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["It never drains","~16.9 minutes","~303 minutes","~16 minutes"],"answer":1,"explanation":"182,000 ÷ (190 − 10) ≈ 16.9 minutes."},{"prompt":"A queue has **72,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["~5.71 minutes","~4.29 minutes","~17.1 minutes","It never drains"],"answer":0,"explanation":"72,000 ÷ (280 − 70) ≈ 5.71 minutes."},{"prompt":"A queue has **125,000 jobs** waiting. Workers finish **310/s** while new jobs arrive at **220/s**. How long until the backlog is gone?","options":["~23.1 minutes","~9.47 minutes","~6.72 minutes","It never drains"],"answer":0,"explanation":"125,000 ÷ (310 − 220) ≈ 23.1 minutes."}]
---
# Design Drill: Draining a backlog #37

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
