---
slug: "sd01-downtime-3"
title: "Design Drill: Nines to downtime #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"How much downtime does a **99.95%** availability target allow in **a 30-day month**?","options":["22 minutes","216 minutes","60 minutes","2 minutes"],"answer":0,"explanation":"(1 − 0.9995) × 43,200 minutes ≈ 22 minutes."},{"prompt":"How much downtime does a **99.99%** availability target allow in **a year**?","options":["526 minutes","5 minutes","60 minutes","53 minutes"],"answer":3,"explanation":"(1 − 0.9999) × 525,600 minutes ≈ 53 minutes."},{"prompt":"How much downtime does a **99%** availability target allow in **a 30-day month**?","options":["43 minutes","432 minutes","59 minutes","4320 minutes"],"answer":1,"explanation":"(1 − 0.99) × 43,200 minutes ≈ 432 minutes."},{"prompt":"How much downtime does a **99%** availability target allow in **a year**?","options":["59 minutes","526 minutes","5260 minutes","52,560 minutes"],"answer":2,"explanation":"(1 − 0.99) × 525,600 minutes ≈ 5260 minutes."},{"prompt":"How much downtime does a **99%** availability target allow in **a week**?","options":["10 minutes","101 minutes","59 minutes","1010 minutes"],"answer":1,"explanation":"(1 − 0.99) × 10,080 minutes ≈ 101 minutes."}]
---
# Design Drill: Nines to downtime #3

Downtime budget = (1 − availability) × period. A 30-day month has 43,200 minutes, so 99.9% allows about 43 minutes.
