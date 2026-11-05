---
slug: "sd07-rate-limit-31"
title: "Design Drill: Token bucket rate limits #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["70","100","350","30"],"answer":1,"explanation":"70 (the burst) + 6 × 5 = 100."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["615","15","600","900"],"answer":0,"explanation":"15 (the burst) + 10 × 60 = 615."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["135","45","675","90"],"answer":3,"explanation":"45 (the burst) + 3 × 15 = 90."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["5","1005","1000","250"],"answer":1,"explanation":"5 (the burst) + 20 × 50 = 1005."},{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["580","100","480","3000"],"answer":0,"explanation":"100 (the burst) + 16 × 30 = 580."}]
---
# Design Drill: Token bucket rate limits #31

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
