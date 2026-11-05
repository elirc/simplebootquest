---
slug: "sd05-drain-34"
title: "Design Drill: Draining a backlog #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **65,000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **180/s**. How long until the backlog is gone?","options":["~6.02 minutes","~5.16 minutes","It never drains","~36.1 minutes"],"answer":3,"explanation":"65,000 ÷ (210 − 180) ≈ 36.1 minutes."},{"prompt":"A queue has **59,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~5.46 minutes","It never drains","~24.6 minutes","~7.02 minutes"],"answer":3,"explanation":"59,000 ÷ (180 − 40) ≈ 7.02 minutes."},{"prompt":"A queue has **3000 jobs** waiting. Workers finish **190/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~0.313 minutes","~1.67 minutes","It never drains","~0.263 minutes"],"answer":0,"explanation":"3000 ÷ (190 − 30) ≈ 0.313 minutes."},{"prompt":"A queue has **200,000 jobs** waiting. Workers finish **200/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["It never drains","~16.7 minutes","~333 minutes","~17.5 minutes"],"answer":2,"explanation":"200,000 ÷ (200 − 190) ≈ 333 minutes."},{"prompt":"A queue has **168,000 jobs** waiting. Workers finish **370/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~8.48 minutes","~7.57 minutes","~70 minutes","It never drains"],"answer":0,"explanation":"168,000 ÷ (370 − 40) ≈ 8.48 minutes."}]
---
# Design Drill: Draining a backlog #34

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
