---
slug: "sd07-rate-limit-41"
title: "Design Drill: Token bucket rate limits #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **9/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["1125","25","405","430"],"answer":3,"explanation":"25 (the burst) + 9 × 45 = 430."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["500","100","150","50"],"answer":1,"explanation":"50 (the burst) + 5 × 10 = 100."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["35","5","30","50"],"answer":0,"explanation":"5 (the burst) + 3 × 10 = 35."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["410","80","330","2400"],"answer":0,"explanation":"80 (the burst) + 11 × 30 = 410."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["30","25","125","5"],"answer":0,"explanation":"5 (the burst) + 1 × 25 = 30."}]
---
# Design Drill: Token bucket rate limits #41

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
