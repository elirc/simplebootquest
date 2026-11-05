---
slug: "sd07-rate-limit-18"
title: "Design Drill: Token bucket rate limits #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["45","5","40","200"],"answer":0,"explanation":"5 (the burst) + 1 × 40 = 45."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["630","30","600","900"],"answer":0,"explanation":"30 (the burst) + 20 × 30 = 630."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["85","55","30","1650"],"answer":0,"explanation":"30 (the burst) + 1 × 55 = 85."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["2750","50","875","825"],"answer":2,"explanation":"50 (the burst) + 15 × 55 = 875."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["220","280","1200","60"],"answer":1,"explanation":"60 (the burst) + 11 × 20 = 280."}]
---
# Design Drill: Token bucket rate limits #18

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
