---
slug: "sd01-downtime-2"
title: "Design Drill: Nines to downtime #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"How much downtime does a **99.95%** availability target allow in **a year**?","options":["60 minutes","2630 minutes","26 minutes","263 minutes"],"answer":3,"explanation":"(1 − 0.9995) × 525,600 minutes ≈ 263 minutes."},{"prompt":"How much downtime does a **99.99%** availability target allow in **a 30-day month**?","options":["60 minutes","0 minutes","43 minutes","4 minutes"],"answer":3,"explanation":"(1 − 0.9999) × 43,200 minutes ≈ 4 minutes."},{"prompt":"How much downtime does a **99.9%** availability target allow in **a 30-day month**?","options":["43 minutes","432 minutes","60 minutes","4 minutes"],"answer":0,"explanation":"(1 − 0.999) × 43,200 minutes ≈ 43 minutes."},{"prompt":"How much downtime does a **99.5%** availability target allow in **a 30-day month**?","options":["2160 minutes","216 minutes","60 minutes","22 minutes"],"answer":1,"explanation":"(1 − 0.995) × 43,200 minutes ≈ 216 minutes."},{"prompt":"How much downtime does a **99.5%** availability target allow in **a week**?","options":["50 minutes","504 minutes","5 minutes","60 minutes"],"answer":0,"explanation":"(1 − 0.995) × 10,080 minutes ≈ 50 minutes."}]
---
# Design Drill: Nines to downtime #2

Downtime budget = (1 − availability) × period. A 30-day month has 43,200 minutes, so 99.9% allows about 43 minutes.
