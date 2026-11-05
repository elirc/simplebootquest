---
slug: "sd07-rate-limit-3"
title: "Design Drill: Token bucket rate limits #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["130","75","55","1375"],"answer":0,"explanation":"55 (the burst) + 3 × 25 = 130."},{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["3025","605","55","660"],"answer":3,"explanation":"55 (the burst) + 11 × 55 = 660."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["150","80","70","800"],"answer":0,"explanation":"80 (the burst) + 7 × 10 = 150."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["360","450","90","5400"],"answer":1,"explanation":"90 (the burst) + 6 × 60 = 450."},{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["100","6000","1180","1080"],"answer":2,"explanation":"100 (the burst) + 18 × 60 = 1180."}]
---
# Design Drill: Token bucket rate limits #3

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
