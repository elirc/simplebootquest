---
slug: "sd07-rate-limit-56"
title: "Design Drill: Token bucket rate limits #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["50","165","750","215"],"answer":3,"explanation":"50 (the burst) + 11 × 15 = 215."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["585","50","635","2250"],"answer":2,"explanation":"50 (the burst) + 13 × 45 = 635."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["105","25","1000","80"],"answer":0,"explanation":"25 (the burst) + 2 × 40 = 105."},{"prompt":"A client starts with a full bucket of **20 tokens** that refills at **9/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["495","1100","20","515"],"answer":3,"explanation":"20 (the burst) + 9 × 55 = 515."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["150","15","110","125"],"answer":3,"explanation":"15 (the burst) + 11 × 10 = 125."}]
---
# Design Drill: Token bucket rate limits #56

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
