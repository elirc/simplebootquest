---
slug: "sd-scale-the-api"
title: "Design Doc: From 100 to 100,000 Users"
type: "design"
xp: 40
hints: ["Work backwards from the blockers: what breaks if a second instance appears?", "Every stage should have a trigger: a metric that says \"now\"."]
rubric: ["Describes the starting architecture and its limits", "Lists the code changes needed for statelessness (sessions, uploads, cron, rate limits)", "Introduces a load balancer with health checks", "Addresses database connection limits (pool sizing or a pooler)", "Moves static assets and uploads to a CDN / object storage", "Names the metrics or signals that trigger each stage", "States what is deliberately NOT being done yet, and why"]
minWords: 200
---
# Design Doc: From 100 to 100,000 Users

Your capstone API (Express + Postgres, one server) is suddenly popular: usage will grow **1,000×** over six months, from 100 to 100,000 daily active users. Peak traffic is expected to be ~500 requests/second, 90% of them reads.

Write a design doc describing **how the architecture evolves**, in stages. For each stage, say what you change, why, and what signal tells you it's time (don't add complexity before it's needed).

### Things to consider

- What must change in the code *before* you can run two instances?
- Database connections as instances multiply.
- Where static assets and uploads are served from.
- What you'd monitor to know when to move to the next stage.
- What you're deliberately **not** doing yet (sharding? microservices?), and why.
