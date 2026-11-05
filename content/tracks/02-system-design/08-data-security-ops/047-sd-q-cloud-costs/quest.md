---
slug: "sd-q-cloud-costs"
title: "Designing with Cost in Mind"
type: "quiz"
xp: 15
questions: [{"prompt": "Which cost often surprises teams serving lots of images from their own servers?", "options": ["CPU", "Egress bandwidth", "DNS"], "answer": 1}, {"prompt": "What is a cheap first step to control cloud spend?", "options": ["Move to another cloud", "Set budgets and alerts, and tag resources by owner", "Turn off backups"], "answer": 1}, {"prompt": "Why include a cost estimate in a design doc?", "options": ["To impress finance", "Cost is a constraint that can change the right design, especially at 10× scale", "It is legally required"], "answer": 1}, {"prompt": "Debug-level logs on every request at high traffic mainly increase…", "options": ["Security", "Log ingestion and storage costs (and noise)", "Speed"], "answer": 1}, {"prompt": "A staging environment runs 24/7 at full size but is used only during office hours. What helps?", "options": ["Nothing", "Scale it down or to zero outside working hours", "Double it"], "answer": 1}]
---
# Designing with Cost in Mind

Cost is a design constraint, just like latency. Common surprises in a small-to-medium web app:

- **Egress (outbound bandwidth)**: serving images and videos from your origin can cost more than all the compute. Use a CDN, compress, resize, and lazy-load.
- **Idle resources**: oversized databases, forgotten staging environments, unattached volumes. Turn them off, or scale to zero.
- **Logs and metrics volume**: debug logging on every request at scale is expensive. Sample, and set retention.
- **Managed service per-request pricing**: serverless and managed queues are cheap at low volume and can get expensive at sustained high volume.
- **Data transfer between zones or regions**, and NAT gateways.

Habits that help: **tag resources** by team or feature, set **budgets and alerts**, review the bill monthly, and estimate the cost in design docs ("~$40/month at the current scale, ~$400 at 10×").

Often the cheapest architecture is the simplest: one well-sized database and a few app instances, instead of ten managed services.
