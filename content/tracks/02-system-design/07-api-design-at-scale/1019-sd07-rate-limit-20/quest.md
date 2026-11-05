---
slug: "sd07-rate-limit-20"
title: "Design Drill: Token bucket rate limits #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["5","250","650","655"],"answer":3,"explanation":"5 (the burst) + 13 × 50 = 655."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["430","2000","350","80"],"answer":0,"explanation":"80 (the burst) + 14 × 25 = 430."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["2000","50","560","610"],"answer":3,"explanation":"50 (the burst) + 14 × 40 = 610."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["1350","195","90","285"],"answer":3,"explanation":"90 (the burst) + 13 × 15 = 285."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["245","340","3325","95"],"answer":1,"explanation":"95 (the burst) + 7 × 35 = 340."}]
---
# Design Drill: Token bucket rate limits #20

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
