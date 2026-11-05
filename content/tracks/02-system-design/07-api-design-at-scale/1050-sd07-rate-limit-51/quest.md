---
slug: "sd07-rate-limit-51"
title: "Design Drill: Token bucket rate limits #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["1045","1110","65","3575"],"answer":1,"explanation":"65 (the burst) + 19 × 55 = 1110."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **12/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["360","40","1200","400"],"answer":3,"explanation":"40 (the burst) + 12 × 30 = 400."},{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["85","90","2550","175"],"answer":3,"explanation":"85 (the burst) + 3 × 30 = 175."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["150","30","120","1200"],"answer":0,"explanation":"30 (the burst) + 3 × 40 = 150."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **12/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["665","5","660","275"],"answer":0,"explanation":"5 (the burst) + 12 × 55 = 665."}]
---
# Design Drill: Token bucket rate limits #51

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
