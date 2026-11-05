---
slug: "sd05-drain-52"
title: "Design Drill: Draining a backlog #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **30,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["~5.56 minutes","~2.63 minutes","~1.79 minutes","It never drains"],"answer":0,"explanation":"30,000 ÷ (280 − 190) ≈ 5.56 minutes."},{"prompt":"A queue has **172,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~35.8 minutes","~22.1 minutes","~57.3 minutes","It never drains"],"answer":0,"explanation":"172,000 ÷ (130 − 50) ≈ 35.8 minutes."},{"prompt":"A queue has **54,000 jobs** waiting. Workers finish **140/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["~9 minutes","~22.5 minutes","It never drains","~6.43 minutes"],"answer":1,"explanation":"54,000 ÷ (140 − 100) ≈ 22.5 minutes."},{"prompt":"A queue has **61,000 jobs** waiting. Workers finish **240/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["~4.24 minutes","~5.98 minutes","It never drains","~14.5 minutes"],"answer":1,"explanation":"61,000 ÷ (240 − 70) ≈ 5.98 minutes."},{"prompt":"A queue has **44,000 jobs** waiting. Workers finish **250/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["~3.86 minutes","~12.2 minutes","It never drains","~2.93 minutes"],"answer":1,"explanation":"44,000 ÷ (250 − 190) ≈ 12.2 minutes."}]
---
# Design Drill: Draining a backlog #52

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
