---
slug: "sd02-pool-60"
title: "Design Drill: Connection pool maths #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **13 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 13 connections","It fits: 25 connections","It doesn't fit: 325 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 325 connections"],"answer":3},{"prompt":"You run **40 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 40 connections","It fits: 20 connections","It doesn't fit: 800 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 800 connections"],"answer":2},{"prompt":"You run **31 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 775 connections","It fits: 31 connections","It fits: 25 connections","It doesn't fit: 775 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **32 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 32 connections","It doesn't fit: 256 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 256 connections"],"answer":1},{"prompt":"You run **30 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 600 connections","It doesn't fit: 600 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections","It fits: 30 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #60

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
