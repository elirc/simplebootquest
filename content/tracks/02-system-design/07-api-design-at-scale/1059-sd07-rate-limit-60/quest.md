---
slug: "sd07-rate-limit-60"
title: "Design Drill: Token bucket rate limits #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["165","3250","100","65"],"answer":0,"explanation":"65 (the burst) + 2 × 50 = 165."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["1600","80","160","240"],"answer":3,"explanation":"80 (the burst) + 8 × 20 = 240."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["750","540","565","25"],"answer":2,"explanation":"25 (the burst) + 18 × 30 = 565."},{"prompt":"A client starts with a full bucket of **35 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["425","35","875","460"],"answer":3,"explanation":"35 (the burst) + 17 × 25 = 460."},{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["85","55","275","30"],"answer":0,"explanation":"55 (the burst) + 6 × 5 = 85."}]
---
# Design Drill: Token bucket rate limits #60

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
