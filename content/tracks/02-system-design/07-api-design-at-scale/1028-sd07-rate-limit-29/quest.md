---
slug: "sd07-rate-limit-29"
title: "Design Drill: Token bucket rate limits #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["400","40","200","160"],"answer":2,"explanation":"40 (the burst) + 16 × 10 = 200."},{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["190","90","100","1500"],"answer":0,"explanation":"100 (the burst) + 6 × 15 = 190."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["200","60","260","2400"],"answer":2,"explanation":"60 (the burst) + 5 × 40 = 260."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["65","1950","185","120"],"answer":2,"explanation":"65 (the burst) + 4 × 30 = 185."},{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["2125","85","500","585"],"answer":3,"explanation":"85 (the burst) + 20 × 25 = 585."}]
---
# Design Drill: Token bucket rate limits #29

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
