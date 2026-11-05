---
slug: "sd07-rate-limit-2"
title: "Design Drill: Token bucket rate limits #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["75","165","1125","240"],"answer":3,"explanation":"75 (the burst) + 11 × 15 = 240."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["530","440","4950","90"],"answer":0,"explanation":"90 (the burst) + 8 × 55 = 530."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **9/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["180","260","1600","80"],"answer":1,"explanation":"80 (the burst) + 9 × 20 = 260."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["855","50","2250","905"],"answer":3,"explanation":"50 (the burst) + 19 × 45 = 905."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["600","85","45","40"],"answer":1,"explanation":"40 (the burst) + 3 × 15 = 85."}]
---
# Design Drill: Token bucket rate limits #2

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
