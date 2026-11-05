---
slug: "sd07-rate-limit-36"
title: "Design Drill: Token bucket rate limits #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["90","150","5400","60"],"answer":1,"explanation":"90 (the burst) + 1 × 60 = 150."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["75","5","240","245"],"answer":3,"explanation":"5 (the burst) + 16 × 15 = 245."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["270","25","1125","295"],"answer":3,"explanation":"25 (the burst) + 6 × 45 = 295."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["160","120","40","600"],"answer":0,"explanation":"40 (the burst) + 8 × 15 = 160."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["25","35","30","5"],"answer":1,"explanation":"5 (the burst) + 6 × 5 = 35."}]
---
# Design Drill: Token bucket rate limits #36

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
