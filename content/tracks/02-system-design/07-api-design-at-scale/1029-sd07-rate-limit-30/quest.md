---
slug: "sd07-rate-limit-30"
title: "Design Drill: Token bucket rate limits #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["90","140","230","3150"],"answer":2,"explanation":"90 (the burst) + 4 × 35 = 230."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["105","650","40","65"],"answer":0,"explanation":"65 (the burst) + 4 × 10 = 105."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["560","875","585","25"],"answer":2,"explanation":"25 (the burst) + 16 × 35 = 585."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["3600","90","640","730"],"answer":3,"explanation":"90 (the burst) + 16 × 40 = 730."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["40","400","110","70"],"answer":2,"explanation":"40 (the burst) + 7 × 10 = 110."}]
---
# Design Drill: Token bucket rate limits #30

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
