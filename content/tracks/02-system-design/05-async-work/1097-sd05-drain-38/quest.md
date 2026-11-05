---
slug: "sd05-drain-38"
title: "Design Drill: Draining a backlog #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **155,000 jobs** waiting. Workers finish **330/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~258 minutes","It never drains","~8.07 minutes","~7.83 minutes"],"answer":2,"explanation":"155,000 ÷ (330 − 10) ≈ 8.07 minutes."},{"prompt":"A queue has **182,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["~75.8 minutes","~23.3 minutes","~33.7 minutes","It never drains"],"answer":0,"explanation":"182,000 ÷ (130 − 90) ≈ 75.8 minutes."},{"prompt":"A queue has **23,000 jobs** waiting. Workers finish **390/s** while new jobs arrive at **230/s**. How long until the backlog is gone?","options":["~1.67 minutes","~0.983 minutes","~2.4 minutes","It never drains"],"answer":2,"explanation":"23,000 ÷ (390 − 230) ≈ 2.4 minutes."},{"prompt":"A queue has **151,000 jobs** waiting. Workers finish **220/s** while new jobs arrive at **140/s**. How long until the backlog is gone?","options":["~11.4 minutes","~18 minutes","~31.5 minutes","It never drains"],"answer":2,"explanation":"151,000 ÷ (220 − 140) ≈ 31.5 minutes."},{"prompt":"A queue has **111,000 jobs** waiting. Workers finish **300/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~6.38 minutes","It never drains","~6.17 minutes","~185 minutes"],"answer":0,"explanation":"111,000 ÷ (300 − 10) ≈ 6.38 minutes."}]
---
# Design Drill: Draining a backlog #38

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
