---
slug: "sd07-rate-limit-26"
title: "Design Drill: Token bucket rate limits #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["220","4675","85","305"],"answer":3,"explanation":"85 (the burst) + 4 × 55 = 305."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["880","2400","40","840"],"answer":0,"explanation":"40 (the burst) + 14 × 60 = 880."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["50","4000","130","80"],"answer":2,"explanation":"80 (the burst) + 1 × 50 = 130."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["15","210","225","525"],"answer":2,"explanation":"15 (the burst) + 6 × 35 = 225."},{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["295","825","55","240"],"answer":0,"explanation":"55 (the burst) + 16 × 15 = 295."}]
---
# Design Drill: Token bucket rate limits #26

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
