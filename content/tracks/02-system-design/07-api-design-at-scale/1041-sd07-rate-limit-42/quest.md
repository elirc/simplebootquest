---
slug: "sd07-rate-limit-42"
title: "Design Drill: Token bucket rate limits #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["1225","1200","1500","25"],"answer":0,"explanation":"25 (the burst) + 20 × 60 = 1225."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["295","2250","45","250"],"answer":0,"explanation":"45 (the burst) + 5 × 50 = 295."},{"prompt":"A client starts with a full bucket of **20 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["140","120","400","20"],"answer":0,"explanation":"20 (the burst) + 6 × 20 = 140."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["1750","445","375","70"],"answer":1,"explanation":"70 (the burst) + 15 × 25 = 445."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["540","585","1350","45"],"answer":1,"explanation":"45 (the burst) + 18 × 30 = 585."}]
---
# Design Drill: Token bucket rate limits #42

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
