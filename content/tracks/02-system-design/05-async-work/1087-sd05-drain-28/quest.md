---
slug: "sd05-drain-28"
title: "Design Drill: Draining a backlog #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **101,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~24 minutes","~168 minutes","It never drains","~28.1 minutes"],"answer":1,"explanation":"101,000 ÷ (70 − 60) ≈ 168 minutes."},{"prompt":"A queue has **112,000 jobs** waiting. Workers finish **70/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~46.7 minutes","~26.7 minutes","It never drains","~62.2 minutes"],"answer":3,"explanation":"112,000 ÷ (70 − 40) ≈ 62.2 minutes."},{"prompt":"A queue has **124,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["It never drains","~23 minutes","~7.38 minutes","~10.9 minutes"],"answer":1,"explanation":"124,000 ÷ (280 − 190) ≈ 23 minutes."},{"prompt":"A queue has **45,000 jobs** waiting. Workers finish **150/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["It never drains","~5.77 minutes","~37.5 minutes","~5 minutes"],"answer":1,"explanation":"45,000 ÷ (150 − 20) ≈ 5.77 minutes."},{"prompt":"A queue has **199,000 jobs** waiting. Workers finish **310/s** while new jobs arrive at **260/s**. How long until the backlog is gone?","options":["~66.3 minutes","~10.7 minutes","It never drains","~12.8 minutes"],"answer":0,"explanation":"199,000 ÷ (310 − 260) ≈ 66.3 minutes."}]
---
# Design Drill: Draining a backlog #28

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
