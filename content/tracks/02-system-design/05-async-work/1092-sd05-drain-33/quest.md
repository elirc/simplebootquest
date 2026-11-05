---
slug: "sd05-drain-33"
title: "Design Drill: Draining a backlog #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **75,000 jobs** waiting. Workers finish **340/s** while new jobs arrive at **300/s**. How long until the backlog is gone?","options":["~4.17 minutes","It never drains","~3.68 minutes","~31.3 minutes"],"answer":3,"explanation":"75,000 ÷ (340 − 300) ≈ 31.3 minutes."},{"prompt":"A queue has **23,000 jobs** waiting. Workers finish **200/s** while new jobs arrive at **130/s**. How long until the backlog is gone?","options":["~1.92 minutes","~5.48 minutes","~2.95 minutes","It never drains"],"answer":1,"explanation":"23,000 ÷ (200 − 130) ≈ 5.48 minutes."},{"prompt":"A queue has **193,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~4830 minutes","It never drains","~40.2 minutes","~80.4 minutes"],"answer":3,"explanation":"193,000 ÷ (80 − 40) ≈ 80.4 minutes."},{"prompt":"A queue has **173,000 jobs** waiting. Workers finish **240/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["It never drains","~12 minutes","~41.2 minutes","~17 minutes"],"answer":3,"explanation":"173,000 ÷ (240 − 70) ≈ 17 minutes."},{"prompt":"A queue has **85,000 jobs** waiting. Workers finish **150/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~9.44 minutes","~35.4 minutes","It never drains","~12.9 minutes"],"answer":3,"explanation":"85,000 ÷ (150 − 40) ≈ 12.9 minutes."}]
---
# Design Drill: Draining a backlog #33

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
