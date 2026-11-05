---
slug: "sd01-downtime-1"
title: "Design Drill: Nines to downtime #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"How much downtime does a **99.9%** availability target allow in **a year**?","options":["5260 minutes","60 minutes","53 minutes","526 minutes"],"answer":3,"explanation":"(1 − 0.999) × 525,600 minutes ≈ 526 minutes."},{"prompt":"How much downtime does a **99.9%** availability target allow in **a week**?","options":["60 minutes","101 minutes","10 minutes","1 minutes"],"answer":2,"explanation":"(1 − 0.999) × 10,080 minutes ≈ 10 minutes."},{"prompt":"How much downtime does a **99.95%** availability target allow in **a week**?","options":["60 minutes","1 minutes","5 minutes","50 minutes"],"answer":2,"explanation":"(1 − 0.9995) × 10,080 minutes ≈ 5 minutes."},{"prompt":"How much downtime does a **99.99%** availability target allow in **a week**?","options":["0 minutes","1 minutes","60 minutes","10 minutes"],"answer":1,"explanation":"(1 − 0.9999) × 10,080 minutes ≈ 1 minutes."},{"prompt":"How much downtime does a **99.5%** availability target allow in **a year**?","options":["2630 minutes","26,280 minutes","263 minutes","60 minutes"],"answer":0,"explanation":"(1 − 0.995) × 525,600 minutes ≈ 2630 minutes."}]
---
# Design Drill: Nines to downtime #1

Downtime budget = (1 − availability) × period. A 30-day month has 43,200 minutes, so 99.9% allows about 43 minutes.
