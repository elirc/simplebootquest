---
slug: "sd02-pool-53"
title: "Design Drill: Connection pool maths #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **7 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 7 connections","It fits: 56 connections","It fits: 8 connections","It doesn't fit: 56 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **29 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It fits: 29 connections","It doesn't fit: 232 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 232 connections"],"answer":2},{"prompt":"You run **9 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 9 connections","It fits: 72 connections","It fits: 8 connections","It doesn't fit: 72 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **13 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It fits: 104 connections","It doesn't fit: 104 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 13 connections"],"answer":1},{"prompt":"You run **34 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 680 connections","It doesn't fit: 680 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections","It fits: 34 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #53

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
