---
slug: "sd07-rate-limit-38"
title: "Design Drill: Token bucket rate limits #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["2025","720","675","45"],"answer":1,"explanation":"45 (the burst) + 15 × 45 = 720."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["420","465","2700","45"],"answer":1,"explanation":"45 (the burst) + 7 × 60 = 465."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **9/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["65","270","335","1950"],"answer":2,"explanation":"65 (the burst) + 9 × 30 = 335."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["455","15","825","440"],"answer":0,"explanation":"15 (the burst) + 8 × 55 = 455."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["480","550","70","2100"],"answer":1,"explanation":"70 (the burst) + 16 × 30 = 550."}]
---
# Design Drill: Token bucket rate limits #38

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
