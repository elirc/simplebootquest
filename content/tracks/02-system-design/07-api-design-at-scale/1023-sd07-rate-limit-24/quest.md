---
slug: "sd07-rate-limit-24"
title: "Design Drill: Token bucket rate limits #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["30","150","100","130"],"answer":3,"explanation":"30 (the burst) + 20 × 5 = 130."},{"prompt":"A client starts with a full bucket of **10 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["100","10","60","50"],"answer":2,"explanation":"10 (the burst) + 5 × 10 = 60."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["75","4125","515","440"],"answer":2,"explanation":"75 (the burst) + 8 × 55 = 515."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["895","850","45","2250"],"answer":0,"explanation":"45 (the burst) + 17 × 50 = 895."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["525","5","175","530"],"answer":3,"explanation":"5 (the burst) + 15 × 35 = 530."}]
---
# Design Drill: Token bucket rate limits #24

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
