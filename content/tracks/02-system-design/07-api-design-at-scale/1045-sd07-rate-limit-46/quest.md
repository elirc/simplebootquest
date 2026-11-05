---
slug: "sd07-rate-limit-46"
title: "Design Drill: Token bucket rate limits #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["770","840","70","3850"],"answer":1,"explanation":"70 (the burst) + 14 × 55 = 840."},{"prompt":"A client starts with a full bucket of **35 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["35","525","150","185"],"answer":3,"explanation":"35 (the burst) + 10 × 15 = 185."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["60","2700","675","735"],"answer":3,"explanation":"60 (the burst) + 15 × 45 = 735."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["5","310","305","300"],"answer":2,"explanation":"5 (the burst) + 5 × 60 = 305."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["960","2700","45","1005"],"answer":3,"explanation":"45 (the burst) + 16 × 60 = 1005."}]
---
# Design Drill: Token bucket rate limits #46

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
