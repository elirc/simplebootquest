---
slug: "sd07-rate-limit-52"
title: "Design Drill: Token bucket rate limits #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["50","225","2250","275"],"answer":3,"explanation":"50 (the burst) + 5 × 45 = 275."},{"prompt":"A client starts with a full bucket of **35 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["35","700","55","20"],"answer":2,"explanation":"35 (the burst) + 1 × 20 = 55."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["135","75","60","1500"],"answer":0,"explanation":"60 (the burst) + 3 × 25 = 135."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["45","250","20","25"],"answer":0,"explanation":"25 (the burst) + 2 × 10 = 45."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["2250","90","150","240"],"answer":3,"explanation":"90 (the burst) + 6 × 25 = 240."}]
---
# Design Drill: Token bucket rate limits #52

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
