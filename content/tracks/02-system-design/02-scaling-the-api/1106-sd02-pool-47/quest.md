---
slug: "sd02-pool-47"
title: "Design Drill: Connection pool maths #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **2 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 50 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections","It fits: 2 connections","It fits: 50 connections"],"answer":3},{"prompt":"You run **28 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 224 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 224 connections","It fits: 28 connections"],"answer":0},{"prompt":"You run **21 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 315 connections","It doesn't fit: 315 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 21 connections"],"answer":1},{"prompt":"You run **4 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 4 connections","It doesn't fit: 60 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 60 connections"],"answer":3},{"prompt":"You run **27 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 27 connections","It fits: 15 connections","It fits: 405 connections","It doesn't fit: 405 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2}]
---
# Design Drill: Connection pool maths #47

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
