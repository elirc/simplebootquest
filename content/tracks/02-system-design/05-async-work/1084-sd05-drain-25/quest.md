---
slug: "sd05-drain-25"
title: "Design Drill: Draining a backlog #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **132,000 jobs** waiting. Workers finish **150/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["~44 minutes","~22 minutes","~14.7 minutes","It never drains"],"answer":0,"explanation":"132,000 ÷ (150 − 100) ≈ 44 minutes."},{"prompt":"A queue has **44,000 jobs** waiting. Workers finish **300/s** while new jobs arrive at **290/s**. How long until the backlog is gone?","options":["~73.3 minutes","~2.53 minutes","It never drains","~2.44 minutes"],"answer":0,"explanation":"44,000 ÷ (300 − 290) ≈ 73.3 minutes."},{"prompt":"A queue has **39,000 jobs** waiting. Workers finish **320/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~2.5 minutes","~10.8 minutes","It never drains","~2.03 minutes"],"answer":0,"explanation":"39,000 ÷ (320 − 60) ≈ 2.5 minutes."},{"prompt":"A queue has **98,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~23.3 minutes","It never drains","~27.2 minutes","~163 minutes"],"answer":3,"explanation":"98,000 ÷ (70 − 60) ≈ 163 minutes."},{"prompt":"A queue has **11,000 jobs** waiting. Workers finish **150/s** while new jobs arrive at **140/s**. How long until the backlog is gone?","options":["~1.22 minutes","~18.3 minutes","~1.31 minutes","It never drains"],"answer":1,"explanation":"11,000 ÷ (150 − 140) ≈ 18.3 minutes."}]
---
# Design Drill: Draining a backlog #25

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
