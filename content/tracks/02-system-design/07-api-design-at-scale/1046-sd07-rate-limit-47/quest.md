---
slug: "sd07-rate-limit-47"
title: "Design Drill: Token bucket rate limits #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["650","50","700","2500"],"answer":2,"explanation":"50 (the burst) + 13 × 50 = 700."},{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["270","2475","325","55"],"answer":2,"explanation":"55 (the burst) + 6 × 45 = 325."},{"prompt":"A client starts with a full bucket of **10 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["835","10","550","825"],"answer":0,"explanation":"10 (the burst) + 15 × 55 = 835."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["225","25","1250","200"],"answer":0,"explanation":"25 (the burst) + 4 × 50 = 225."},{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["480","425","1375","55"],"answer":0,"explanation":"55 (the burst) + 17 × 25 = 480."}]
---
# Design Drill: Token bucket rate limits #47

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
