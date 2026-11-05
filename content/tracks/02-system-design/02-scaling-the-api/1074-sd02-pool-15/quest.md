---
slug: "sd02-pool-15"
title: "Design Drill: Connection pool maths #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **29 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 29 connections","It fits: 290 connections","It doesn't fit: 290 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **30 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 30 connections","It fits: 25 connections","It doesn't fit: 750 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 750 connections"],"answer":2},{"prompt":"You run **37 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 925 connections","It fits: 25 connections","It doesn't fit: 925 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 37 connections"],"answer":2},{"prompt":"You run **36 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It doesn't fit: 540 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 540 connections","It fits: 36 connections"],"answer":1},{"prompt":"You run **35 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 350 connections","It fits: 10 connections","It doesn't fit: 350 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 35 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #15

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
