---
slug: "sd07-rate-limit-34"
title: "Design Drill: Token bucket rate limits #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["1050","325","70","255"],"answer":1,"explanation":"70 (the burst) + 17 × 15 = 325."},{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["100","2000","320","220"],"answer":2,"explanation":"100 (the burst) + 11 × 20 = 320."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["280","90","3150","370"],"answer":3,"explanation":"90 (the burst) + 8 × 35 = 370."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["30","600","60","90"],"answer":3,"explanation":"30 (the burst) + 3 × 20 = 90."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["1085","65","3900","1020"],"answer":0,"explanation":"65 (the burst) + 17 × 60 = 1085."}]
---
# Design Drill: Token bucket rate limits #34

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
