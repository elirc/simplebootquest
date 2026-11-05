---
slug: "sd05-drain-56"
title: "Design Drill: Draining a backlog #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **99,000 jobs** waiting. Workers finish **380/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["~4.34 minutes","~18.3 minutes","~5.69 minutes","It never drains"],"answer":2,"explanation":"99,000 ÷ (380 − 90) ≈ 5.69 minutes."},{"prompt":"A queue has **81,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~22.5 minutes","~11.3 minutes","It never drains","~7.5 minutes"],"answer":1,"explanation":"81,000 ÷ (180 − 60) ≈ 11.3 minutes."},{"prompt":"A queue has **144,000 jobs** waiting. Workers finish **360/s** while new jobs arrive at **150/s**. How long until the backlog is gone?","options":["~16 minutes","~11.4 minutes","It never drains","~6.67 minutes"],"answer":1,"explanation":"144,000 ÷ (360 − 150) ≈ 11.4 minutes."},{"prompt":"A queue has **39,000 jobs** waiting. Workers finish **100/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~7.22 minutes","~6.5 minutes","It never drains","~65 minutes"],"answer":0,"explanation":"39,000 ÷ (100 − 10) ≈ 7.22 minutes."},{"prompt":"A queue has **47,000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["It never drains","~3.73 minutes","~3.92 minutes","~78.3 minutes"],"answer":2,"explanation":"47,000 ÷ (210 − 10) ≈ 3.92 minutes."}]
---
# Design Drill: Draining a backlog #56

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
