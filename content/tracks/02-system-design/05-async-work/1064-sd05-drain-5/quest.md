---
slug: "sd05-drain-5"
title: "Design Drill: Draining a backlog #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **193,000 jobs** waiting. Workers finish **250/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~26.8 minutes","~12.9 minutes","It never drains","~24.7 minutes"],"answer":3,"explanation":"193,000 ÷ (250 − 120) ≈ 24.7 minutes."},{"prompt":"A queue has **186,000 jobs** waiting. Workers finish **100/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~31 minutes","It never drains","~310 minutes","~34.4 minutes"],"answer":3,"explanation":"186,000 ÷ (100 − 10) ≈ 34.4 minutes."},{"prompt":"A queue has **1000 jobs** waiting. Workers finish **240/s** while new jobs arrive at **200/s**. How long until the backlog is gone?","options":["It never drains","~0.0833 minutes","~0.417 minutes","~0.0694 minutes"],"answer":2,"explanation":"1000 ÷ (240 − 200) ≈ 0.417 minutes."},{"prompt":"A queue has **51,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~21.3 minutes","~28.3 minutes","It never drains","~12.1 minutes"],"answer":0,"explanation":"51,000 ÷ (70 − 30) ≈ 21.3 minutes."},{"prompt":"A queue has **7000 jobs** waiting. Workers finish **230/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~2.92 minutes","It never drains","~0.507 minutes","~0.614 minutes"],"answer":3,"explanation":"7000 ÷ (230 − 40) ≈ 0.614 minutes."}]
---
# Design Drill: Draining a backlog #5

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
