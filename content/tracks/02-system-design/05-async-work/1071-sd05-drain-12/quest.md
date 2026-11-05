---
slug: "sd05-drain-12"
title: "Design Drill: Draining a backlog #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **138,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["~32.9 minutes","~19.2 minutes","It never drains","~46 minutes"],"answer":3,"explanation":"138,000 ÷ (120 − 70) ≈ 46 minutes."},{"prompt":"A queue has **65,000 jobs** waiting. Workers finish **290/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~3.74 minutes","~4.71 minutes","~18.1 minutes","It never drains"],"answer":1,"explanation":"65,000 ÷ (290 − 60) ≈ 4.71 minutes."},{"prompt":"A queue has **175,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **160/s**. How long until the backlog is gone?","options":["~16.2 minutes","~146 minutes","~18.2 minutes","It never drains"],"answer":1,"explanation":"175,000 ÷ (180 − 160) ≈ 146 minutes."},{"prompt":"A queue has **143,000 jobs** waiting. Workers finish **370/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~6.44 minutes","~238 minutes","~6.62 minutes","It never drains"],"answer":2,"explanation":"143,000 ÷ (370 − 10) ≈ 6.62 minutes."},{"prompt":"A queue has **74,000 jobs** waiting. Workers finish **270/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~4.57 minutes","~30.8 minutes","~5.36 minutes","It never drains"],"answer":2,"explanation":"74,000 ÷ (270 − 40) ≈ 5.36 minutes."}]
---
# Design Drill: Draining a backlog #12

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
