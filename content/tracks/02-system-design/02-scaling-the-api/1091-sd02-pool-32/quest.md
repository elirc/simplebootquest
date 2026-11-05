---
slug: "sd02-pool-32"
title: "Design Drill: Connection pool maths #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **14 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 14 connections","It fits: 20 connections","It doesn't fit: 280 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 280 connections"],"answer":2},{"prompt":"You run **13 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 195 connections","It fits: 15 connections","It fits: 13 connections","It doesn't fit: 195 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **16 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 320 connections","It doesn't fit: 320 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 16 connections","It fits: 20 connections"],"answer":0},{"prompt":"You run **17 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 17 connections","It doesn't fit: 425 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 425 connections"],"answer":2},{"prompt":"You run **38 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 304 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 38 connections","It fits: 304 connections"],"answer":3}]
---
# Design Drill: Connection pool maths #32

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
