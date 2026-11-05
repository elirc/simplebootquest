---
slug: "sd07-rate-limit-22"
title: "Design Drill: Token bucket rate limits #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["450","2375","545","95"],"answer":2,"explanation":"95 (the burst) + 18 × 25 = 545."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["3150","70","925","855"],"answer":2,"explanation":"70 (the burst) + 19 × 45 = 925."},{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["300","55","355","1650"],"answer":2,"explanation":"55 (the burst) + 10 × 30 = 355."},{"prompt":"A client starts with a full bucket of **20 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["220","1000","200","20"],"answer":0,"explanation":"20 (the burst) + 4 × 50 = 220."},{"prompt":"A client starts with a full bucket of **20 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["85","20","100","105"],"answer":3,"explanation":"20 (the burst) + 17 × 5 = 105."}]
---
# Design Drill: Token bucket rate limits #22

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
