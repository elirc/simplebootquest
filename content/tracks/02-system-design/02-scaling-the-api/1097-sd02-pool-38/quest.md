---
slug: "sd02-pool-38"
title: "Design Drill: Connection pool maths #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **19 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 5 connections","It fits: 19 connections","It doesn't fit: 95 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 95 connections"],"answer":2},{"prompt":"You run **19 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 19 connections","It fits: 5 connections","It doesn't fit: 95 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 95 connections"],"answer":3},{"prompt":"You run **32 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 320 connections","It fits: 10 connections","It fits: 32 connections","It doesn't fit: 320 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **27 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 27 connections","It doesn't fit: 135 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections","It fits: 135 connections"],"answer":1},{"prompt":"You run **11 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 11 connections","It fits: 165 connections","It doesn't fit: 165 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3}]
---
# Design Drill: Connection pool maths #38

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
