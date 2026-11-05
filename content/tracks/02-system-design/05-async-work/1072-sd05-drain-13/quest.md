---
slug: "sd05-drain-13"
title: "Design Drill: Draining a backlog #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **110,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["~14.1 minutes","~91.7 minutes","~16.7 minutes","It never drains"],"answer":1,"explanation":"110,000 ÷ (130 − 110) ≈ 91.7 minutes."},{"prompt":"A queue has **49,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["~7.42 minutes","~6.28 minutes","It never drains","~40.8 minutes"],"answer":0,"explanation":"49,000 ÷ (130 − 20) ≈ 7.42 minutes."},{"prompt":"A queue has **84,000 jobs** waiting. Workers finish **370/s** while new jobs arrive at **200/s**. How long until the backlog is gone?","options":["It never drains","~3.78 minutes","~7 minutes","~8.24 minutes"],"answer":3,"explanation":"84,000 ÷ (370 − 200) ≈ 8.24 minutes."},{"prompt":"A queue has **27,000 jobs** waiting. Workers finish **110/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["It never drains","~4.09 minutes","~22.5 minutes","~5 minutes"],"answer":2,"explanation":"27,000 ÷ (110 − 90) ≈ 22.5 minutes."},{"prompt":"A queue has **88,000 jobs** waiting. Workers finish **260/s** while new jobs arrive at **140/s**. How long until the backlog is gone?","options":["It never drains","~10.5 minutes","~5.64 minutes","~12.2 minutes"],"answer":3,"explanation":"88,000 ÷ (260 − 140) ≈ 12.2 minutes."}]
---
# Design Drill: Draining a backlog #13

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
