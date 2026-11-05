---
slug: "sd02-pool-50"
title: "Design Drill: Connection pool maths #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **20 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 200 connections","It doesn't fit: 200 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections"],"answer":1},{"prompt":"You run **25 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 200 connections","It doesn't fit: 200 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections"],"answer":2},{"prompt":"You run **39 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 39 connections","It doesn't fit: 390 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections","It fits: 390 connections"],"answer":1},{"prompt":"You run **40 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It doesn't fit: 1000 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 40 connections","It fits: 1000 connections"],"answer":1},{"prompt":"You run **12 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 12 connections","It doesn't fit: 96 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 96 connections"],"answer":3}]
---
# Design Drill: Connection pool maths #50

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
