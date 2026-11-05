---
slug: "sd05-drain-44"
title: "Design Drill: Draining a backlog #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **23,000 jobs** waiting. Workers finish **330/s** while new jobs arrive at **280/s**. How long until the backlog is gone?","options":["~1.37 minutes","~1.16 minutes","It never drains","~7.67 minutes"],"answer":3,"explanation":"23,000 ÷ (330 − 280) ≈ 7.67 minutes."},{"prompt":"A queue has **12,000 jobs** waiting. Workers finish **90/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["~2.22 minutes","It never drains","~10 minutes","~2.86 minutes"],"answer":3,"explanation":"12,000 ÷ (90 − 20) ≈ 2.86 minutes."},{"prompt":"A queue has **19,000 jobs** waiting. Workers finish **160/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~1.98 minutes","~5.28 minutes","It never drains","~3.17 minutes"],"answer":3,"explanation":"19,000 ÷ (160 − 60) ≈ 3.17 minutes."},{"prompt":"A queue has **64,000 jobs** waiting. Workers finish **90/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~35.6 minutes","~17.8 minutes","~11.9 minutes","It never drains"],"answer":0,"explanation":"64,000 ÷ (90 − 60) ≈ 35.6 minutes."},{"prompt":"A queue has **179,000 jobs** waiting. Workers finish **370/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["~16.6 minutes","~8.06 minutes","It never drains","~15.7 minutes"],"answer":0,"explanation":"179,000 ÷ (370 − 190) ≈ 16.6 minutes."}]
---
# Design Drill: Draining a backlog #44

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
