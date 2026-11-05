---
slug: "sd05-drain-48"
title: "Design Drill: Draining a backlog #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **2000 jobs** waiting. Workers finish **90/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["It never drains","~0.556 minutes","~1.11 minutes","~0.37 minutes"],"answer":1,"explanation":"2000 ÷ (90 − 30) ≈ 0.556 minutes."},{"prompt":"A queue has **31,000 jobs** waiting. Workers finish **400/s** while new jobs arrive at **80/s**. How long until the backlog is gone?","options":["~6.46 minutes","~1.29 minutes","~1.61 minutes","It never drains"],"answer":2,"explanation":"31,000 ÷ (400 − 80) ≈ 1.61 minutes."},{"prompt":"A queue has **25,000 jobs** waiting. Workers finish **310/s** while new jobs arrive at **200/s**. How long until the backlog is gone?","options":["~2.08 minutes","It never drains","~3.79 minutes","~1.34 minutes"],"answer":2,"explanation":"25,000 ÷ (310 − 200) ≈ 3.79 minutes."},{"prompt":"A queue has **121,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~28.8 minutes","~101 minutes","~40.3 minutes","It never drains"],"answer":1,"explanation":"121,000 ÷ (70 − 50) ≈ 101 minutes."},{"prompt":"A queue has **186,000 jobs** waiting. Workers finish **260/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~11.9 minutes","~14.8 minutes","It never drains","~62 minutes"],"answer":1,"explanation":"186,000 ÷ (260 − 50) ≈ 14.8 minutes."}]
---
# Design Drill: Draining a backlog #48

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
