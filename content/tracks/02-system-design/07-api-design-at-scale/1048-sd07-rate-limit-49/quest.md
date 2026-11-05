---
slug: "sd07-rate-limit-49"
title: "Design Drill: Token bucket rate limits #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["225","85","2975","140"],"answer":0,"explanation":"85 (the burst) + 4 × 35 = 225."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["440","40","480","1600"],"answer":2,"explanation":"40 (the burst) + 11 × 40 = 480."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["70","15","525","85"],"answer":3,"explanation":"15 (the burst) + 2 × 35 = 85."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["60","150","300","90"],"answer":1,"explanation":"60 (the burst) + 18 × 5 = 150."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["800","40","840","2000"],"answer":2,"explanation":"40 (the burst) + 16 × 50 = 840."}]
---
# Design Drill: Token bucket rate limits #49

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
