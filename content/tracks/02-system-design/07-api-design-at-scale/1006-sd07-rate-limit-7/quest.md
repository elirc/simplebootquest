---
slug: "sd07-rate-limit-7"
title: "Design Drill: Token bucket rate limits #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **12/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["60","105","45","225"],"answer":1,"explanation":"45 (the burst) + 12 × 5 = 105."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["815","45","770","2475"],"answer":0,"explanation":"45 (the burst) + 14 × 55 = 815."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["45","75","1350","30"],"answer":1,"explanation":"30 (the burst) + 1 × 45 = 75."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["875","25","525","550"],"answer":3,"explanation":"25 (the burst) + 15 × 35 = 550."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["360","45","315","2025"],"answer":0,"explanation":"45 (the burst) + 7 × 45 = 360."}]
---
# Design Drill: Token bucket rate limits #7

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
