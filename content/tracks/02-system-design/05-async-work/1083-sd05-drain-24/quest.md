---
slug: "sd05-drain-24"
title: "Design Drill: Draining a backlog #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **7000 jobs** waiting. Workers finish **330/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["~0.486 minutes","~0.354 minutes","It never drains","~1.3 minutes"],"answer":0,"explanation":"7000 ÷ (330 − 90) ≈ 0.486 minutes."},{"prompt":"A queue has **131,000 jobs** waiting. Workers finish **310/s** while new jobs arrive at **170/s**. How long until the backlog is gone?","options":["It never drains","~12.8 minutes","~7.04 minutes","~15.6 minutes"],"answer":3,"explanation":"131,000 ÷ (310 − 170) ≈ 15.6 minutes."},{"prompt":"A queue has **9000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["~1.36 minutes","~0.714 minutes","~1.5 minutes","It never drains"],"answer":2,"explanation":"9000 ÷ (210 − 110) ≈ 1.5 minutes."},{"prompt":"A queue has **16,000 jobs** waiting. Workers finish **50/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~5.33 minutes","It never drains","~13.3 minutes","~8.89 minutes"],"answer":2,"explanation":"16,000 ÷ (50 − 30) ≈ 13.3 minutes."},{"prompt":"A queue has **10,000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **200/s**. How long until the backlog is gone?","options":["~16.7 minutes","It never drains","~0.833 minutes","~0.794 minutes"],"answer":0,"explanation":"10,000 ÷ (210 − 200) ≈ 16.7 minutes."}]
---
# Design Drill: Draining a backlog #24

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
