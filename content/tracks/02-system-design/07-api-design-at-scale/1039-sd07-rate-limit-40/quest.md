---
slug: "sd07-rate-limit-40"
title: "Design Drill: Token bucket rate limits #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["1300","265","65","200"],"answer":1,"explanation":"65 (the burst) + 10 × 20 = 265."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["1130","30","1100","1650"],"answer":0,"explanation":"30 (the burst) + 20 × 55 = 1130."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["240","50","3000","290"],"answer":3,"explanation":"50 (the burst) + 4 × 60 = 290."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["105","65","975","170"],"answer":3,"explanation":"65 (the burst) + 7 × 15 = 170."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["90","60","30","450"],"answer":0,"explanation":"30 (the burst) + 4 × 15 = 90."}]
---
# Design Drill: Token bucket rate limits #40

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
