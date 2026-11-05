---
slug: "sd02-pool-27"
title: "Design Drill: Connection pool maths #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **15 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 75 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 5 connections","It fits: 75 connections"],"answer":3},{"prompt":"You run **16 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 320 connections","It doesn't fit: 320 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 16 connections","It fits: 20 connections"],"answer":1},{"prompt":"You run **39 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 390 connections","It fits: 10 connections","It doesn't fit: 390 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 39 connections"],"answer":2},{"prompt":"You run **7 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 7 connections","It fits: 15 connections","It fits: 105 connections","It doesn't fit: 105 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **40 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 400 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections","It fits: 400 connections","It fits: 40 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #27

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
