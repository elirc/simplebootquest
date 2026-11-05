---
slug: "sd05-drain-36"
title: "Design Drill: Draining a backlog #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **20,000 jobs** waiting. Workers finish **340/s** while new jobs arrive at **260/s**. How long until the backlog is gone?","options":["~1.28 minutes","~0.98 minutes","It never drains","~4.17 minutes"],"answer":3,"explanation":"20,000 ÷ (340 − 260) ≈ 4.17 minutes."},{"prompt":"A queue has **3000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~0.556 minutes","~0.417 minutes","It never drains","~1.67 minutes"],"answer":0,"explanation":"3000 ÷ (120 − 30) ≈ 0.556 minutes."},{"prompt":"A queue has **91,000 jobs** waiting. Workers finish **270/s** while new jobs arrive at **250/s**. How long until the backlog is gone?","options":["~75.8 minutes","~6.07 minutes","~5.62 minutes","It never drains"],"answer":0,"explanation":"91,000 ÷ (270 − 250) ≈ 75.8 minutes."},{"prompt":"A queue has **3000 jobs** waiting. Workers finish **310/s** while new jobs arrive at **140/s**. How long until the backlog is gone?","options":["~0.161 minutes","It never drains","~0.357 minutes","~0.294 minutes"],"answer":3,"explanation":"3000 ÷ (310 − 140) ≈ 0.294 minutes."},{"prompt":"A queue has **85,000 jobs** waiting. Workers finish **100/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~1700 minutes","~14.2 minutes","~28.3 minutes","It never drains"],"answer":2,"explanation":"85,000 ÷ (100 − 50) ≈ 28.3 minutes."}]
---
# Design Drill: Draining a backlog #36

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
