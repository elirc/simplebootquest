---
slug: "sd05-drain-22"
title: "Design Drill: Draining a backlog #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **14,000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["It never drains","~3.89 minutes","~5.83 minutes","~11.7 minutes"],"answer":3,"explanation":"14,000 ÷ (60 − 40) ≈ 11.7 minutes."},{"prompt":"A queue has **13,000 jobs** waiting. Workers finish **230/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["It never drains","~1.08 minutes","~0.942 minutes","~7.22 minutes"],"answer":1,"explanation":"13,000 ÷ (230 − 30) ≈ 1.08 minutes."},{"prompt":"A queue has **111,000 jobs** waiting. Workers finish **400/s** while new jobs arrive at **140/s**. How long until the backlog is gone?","options":["~7.12 minutes","It never drains","~4.63 minutes","~13.2 minutes"],"answer":0,"explanation":"111,000 ÷ (400 − 140) ≈ 7.12 minutes."},{"prompt":"A queue has **33,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["It never drains","~367 minutes","~3.06 minutes","~6.11 minutes"],"answer":3,"explanation":"33,000 ÷ (180 − 90) ≈ 6.11 minutes."},{"prompt":"A queue has **163,000 jobs** waiting. Workers finish **340/s** while new jobs arrive at **330/s**. How long until the backlog is gone?","options":["~8.23 minutes","~272 minutes","~7.99 minutes","It never drains"],"answer":1,"explanation":"163,000 ÷ (340 − 330) ≈ 272 minutes."}]
---
# Design Drill: Draining a backlog #22

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
