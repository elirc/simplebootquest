---
slug: "sd07-rate-limit-21"
title: "Design Drill: Token bucket rate limits #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **12/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["1925","420","475","55"],"answer":2,"explanation":"55 (the burst) + 12 × 35 = 475."},{"prompt":"A client starts with a full bucket of **10 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["600","1080","1090","10"],"answer":2,"explanation":"10 (the burst) + 18 × 60 = 1090."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["1200","120","60","180"],"answer":3,"explanation":"60 (the burst) + 6 × 20 = 180."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["90","2250","450","540"],"answer":3,"explanation":"90 (the burst) + 18 × 25 = 540."},{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["4000","100","280","380"],"answer":3,"explanation":"100 (the burst) + 7 × 40 = 380."}]
---
# Design Drill: Token bucket rate limits #21

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
