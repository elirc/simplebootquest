---
slug: "sd05-drain-57"
title: "Design Drill: Draining a backlog #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **76,000 jobs** waiting. Workers finish **230/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["~5.51 minutes","~9.05 minutes","It never drains","~14.1 minutes"],"answer":1,"explanation":"76,000 ÷ (230 − 90) ≈ 9.05 minutes."},{"prompt":"A queue has **99,000 jobs** waiting. Workers finish **310/s** while new jobs arrive at **200/s**. How long until the backlog is gone?","options":["It never drains","~15 minutes","~8.25 minutes","~5.32 minutes"],"answer":1,"explanation":"99,000 ÷ (310 − 200) ≈ 15 minutes."},{"prompt":"A queue has **167,000 jobs** waiting. Workers finish **250/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["It never drains","~14.6 minutes","~11.1 minutes","~46.4 minutes"],"answer":1,"explanation":"167,000 ÷ (250 − 60) ≈ 14.6 minutes."},{"prompt":"A queue has **145,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["It never drains","~34.5 minutes","~60.4 minutes","~80.6 minutes"],"answer":2,"explanation":"145,000 ÷ (70 − 30) ≈ 60.4 minutes."},{"prompt":"A queue has **136,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **150/s**. How long until the backlog is gone?","options":["It never drains","~75.6 minutes","~12.6 minutes","~15.1 minutes"],"answer":1,"explanation":"136,000 ÷ (180 − 150) ≈ 75.6 minutes."}]
---
# Design Drill: Draining a backlog #57

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
