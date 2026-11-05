---
slug: "sd02-pool-17"
title: "Design Drill: Connection pool maths #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **36 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 5 connections","It fits: 36 connections","It doesn't fit: 180 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 180 connections"],"answer":3},{"prompt":"You run **20 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 500 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections","It fits: 500 connections","It fits: 20 connections"],"answer":0},{"prompt":"You run **25 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 250 connections","It fits: 25 connections","It doesn't fit: 250 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **27 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 27 connections","It fits: 270 connections","It doesn't fit: 270 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections"],"answer":2},{"prompt":"You run **32 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 320 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections","It fits: 320 connections","It fits: 32 connections"],"answer":2}]
---
# Design Drill: Connection pool maths #17

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
