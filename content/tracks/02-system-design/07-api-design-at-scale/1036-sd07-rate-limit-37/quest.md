---
slug: "sd07-rate-limit-37"
title: "Design Drill: Token bucket rate limits #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["55","2750","1005","950"],"answer":2,"explanation":"55 (the burst) + 19 × 50 = 1005."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["135","90","2025","45"],"answer":1,"explanation":"45 (the burst) + 1 × 45 = 90."},{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["800","855","2200","55"],"answer":1,"explanation":"55 (the burst) + 20 × 40 = 855."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["320","1125","45","275"],"answer":0,"explanation":"45 (the burst) + 11 × 25 = 320."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["1050","70","105","175"],"answer":3,"explanation":"70 (the burst) + 7 × 15 = 175."}]
---
# Design Drill: Token bucket rate limits #37

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
