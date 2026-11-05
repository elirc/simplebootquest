---
slug: "sd05-drain-1"
title: "Design Drill: Draining a backlog #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **198,000 jobs** waiting. Workers finish **240/s** while new jobs arrive at **220/s**. How long until the backlog is gone?","options":["~15 minutes","~165 minutes","~13.8 minutes","It never drains"],"answer":1,"explanation":"198,000 ÷ (240 − 220) ≈ 165 minutes."},{"prompt":"A queue has **117,000 jobs** waiting. Workers finish **390/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~5.13 minutes","It never drains","~5 minutes","~195 minutes"],"answer":0,"explanation":"117,000 ÷ (390 − 10) ≈ 5.13 minutes."},{"prompt":"A queue has **38,000 jobs** waiting. Workers finish **370/s** while new jobs arrive at **260/s**. How long until the backlog is gone?","options":["~1.71 minutes","~5.76 minutes","It never drains","~2.44 minutes"],"answer":1,"explanation":"38,000 ÷ (370 − 260) ≈ 5.76 minutes."},{"prompt":"A queue has **170,000 jobs** waiting. Workers finish **190/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~14.9 minutes","It never drains","~70.8 minutes","~18.9 minutes"],"answer":3,"explanation":"170,000 ÷ (190 − 40) ≈ 18.9 minutes."},{"prompt":"A queue has **164,000 jobs** waiting. Workers finish **100/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["It never drains","~54.7 minutes","~27.3 minutes","~3280 minutes"],"answer":1,"explanation":"164,000 ÷ (100 − 50) ≈ 54.7 minutes."}]
---
# Design Drill: Draining a backlog #1

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
