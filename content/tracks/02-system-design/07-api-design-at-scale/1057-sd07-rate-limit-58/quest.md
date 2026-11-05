---
slug: "sd07-rate-limit-58"
title: "Design Drill: Token bucket rate limits #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["100","475","2500","575"],"answer":3,"explanation":"100 (the burst) + 19 × 25 = 575."},{"prompt":"A client starts with a full bucket of **10 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["130","300","120","10"],"answer":0,"explanation":"10 (the burst) + 4 × 30 = 130."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["175","150","625","25"],"answer":0,"explanation":"25 (the burst) + 6 × 25 = 175."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["1050","30","310","280"],"answer":2,"explanation":"30 (the burst) + 8 × 35 = 310."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["2800","535","80","455"],"answer":1,"explanation":"80 (the burst) + 13 × 35 = 535."}]
---
# Design Drill: Token bucket rate limits #58

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
