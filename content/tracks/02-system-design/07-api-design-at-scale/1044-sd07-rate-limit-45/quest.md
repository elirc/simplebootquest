---
slug: "sd07-rate-limit-45"
title: "Design Drill: Token bucket rate limits #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["135","2275","65","70"],"answer":0,"explanation":"65 (the burst) + 2 × 35 = 135."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["1625","240","65","175"],"answer":1,"explanation":"65 (the burst) + 7 × 25 = 240."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["3600","80","665","585"],"answer":2,"explanation":"80 (the burst) + 13 × 45 = 665."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["95","55","150","5225"],"answer":2,"explanation":"95 (the burst) + 1 × 55 = 150."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["40","800","120","160"],"answer":3,"explanation":"40 (the burst) + 6 × 20 = 160."}]
---
# Design Drill: Token bucket rate limits #45

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
