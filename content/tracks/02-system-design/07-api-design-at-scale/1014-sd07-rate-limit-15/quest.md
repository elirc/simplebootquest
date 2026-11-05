---
slug: "sd07-rate-limit-15"
title: "Design Drill: Token bucket rate limits #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["220","5","225","275"],"answer":2,"explanation":"5 (the burst) + 4 × 55 = 225."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["190","60","600","130"],"answer":0,"explanation":"60 (the burst) + 13 × 10 = 190."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["90","440","530","3600"],"answer":2,"explanation":"90 (the burst) + 11 × 40 = 530."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["75","135","60","300"],"answer":1,"explanation":"60 (the burst) + 15 × 5 = 135."},{"prompt":"A client starts with a full bucket of **35 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["35","275","240","1400"],"answer":1,"explanation":"35 (the burst) + 6 × 40 = 275."}]
---
# Design Drill: Token bucket rate limits #15

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
