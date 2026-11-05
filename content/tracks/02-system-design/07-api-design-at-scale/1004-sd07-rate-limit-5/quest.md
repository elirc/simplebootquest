---
slug: "sd07-rate-limit-5"
title: "Design Drill: Token bucket rate limits #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["375","75","140","65"],"answer":2,"explanation":"75 (the burst) + 13 × 5 = 140."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["245","3900","180","65"],"answer":0,"explanation":"65 (the burst) + 3 × 60 = 245."},{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["450","2500","100","550"],"answer":3,"explanation":"100 (the burst) + 18 × 25 = 550."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["450","145","55","90"],"answer":1,"explanation":"90 (the burst) + 11 × 5 = 145."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["40","100","1000","140"],"answer":3,"explanation":"40 (the burst) + 4 × 25 = 140."}]
---
# Design Drill: Token bucket rate limits #5

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
