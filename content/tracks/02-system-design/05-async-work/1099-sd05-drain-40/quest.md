---
slug: "sd05-drain-40"
title: "Design Drill: Draining a backlog #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **94,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["It never drains","~6.27 minutes","~52.2 minutes","~5.6 minutes"],"answer":1,"explanation":"94,000 ÷ (280 − 30) ≈ 6.27 minutes."},{"prompt":"A queue has **125,000 jobs** waiting. Workers finish **290/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["~7.18 minutes","It never drains","~20.8 minutes","~11 minutes"],"answer":2,"explanation":"125,000 ÷ (290 − 190) ≈ 20.8 minutes."},{"prompt":"A queue has **162,000 jobs** waiting. Workers finish **170/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["It never drains","~19.3 minutes","~15.9 minutes","~90 minutes"],"answer":1,"explanation":"162,000 ÷ (170 − 30) ≈ 19.3 minutes."},{"prompt":"A queue has **198,000 jobs** waiting. Workers finish **300/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["~14.3 minutes","It never drains","~11 minutes","~47.1 minutes"],"answer":0,"explanation":"198,000 ÷ (300 − 70) ≈ 14.3 minutes."},{"prompt":"A queue has **131,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **80/s**. How long until the backlog is gone?","options":["~27.3 minutes","It never drains","~43.7 minutes","~16.8 minutes"],"answer":2,"explanation":"131,000 ÷ (130 − 80) ≈ 43.7 minutes."}]
---
# Design Drill: Draining a backlog #40

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
