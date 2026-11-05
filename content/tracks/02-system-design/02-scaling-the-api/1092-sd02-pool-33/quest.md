---
slug: "sd02-pool-33"
title: "Design Drill: Connection pool maths #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **29 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It fits: 232 connections","It doesn't fit: 232 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 29 connections"],"answer":2},{"prompt":"You run **37 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 37 connections","It fits: 740 connections","It doesn't fit: 740 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **17 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 136 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 136 connections","It fits: 17 connections"],"answer":2},{"prompt":"You run **33 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 330 connections","It fits: 10 connections","It doesn't fit: 330 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 33 connections"],"answer":0},{"prompt":"You run **22 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 440 connections","It fits: 20 connections","It fits: 22 connections","It doesn't fit: 440 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0}]
---
# Design Drill: Connection pool maths #33

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
