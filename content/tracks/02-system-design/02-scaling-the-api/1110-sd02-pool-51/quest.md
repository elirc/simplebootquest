---
slug: "sd02-pool-51"
title: "Design Drill: Connection pool maths #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **33 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It doesn't fit: 660 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 33 connections","It fits: 660 connections"],"answer":1},{"prompt":"You run **17 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 5 connections","It fits: 85 connections","It doesn't fit: 85 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 17 connections"],"answer":1},{"prompt":"You run **11 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 110 connections","It fits: 11 connections","It fits: 10 connections","It doesn't fit: 110 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **37 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 37 connections","It fits: 555 connections","It doesn't fit: 555 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **35 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 350 connections","It fits: 10 connections","It fits: 35 connections","It doesn't fit: 350 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3}]
---
# Design Drill: Connection pool maths #51

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
