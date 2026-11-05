---
slug: "sd02-pool-30"
title: "Design Drill: Connection pool maths #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **15 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 375 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 375 connections","It fits: 25 connections"],"answer":0},{"prompt":"You run **34 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 34 connections","It doesn't fit: 850 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections","It fits: 850 connections"],"answer":1},{"prompt":"You run **8 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 160 connections","It fits: 8 connections","It doesn't fit: 160 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **26 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 390 connections","It doesn't fit: 390 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 26 connections"],"answer":2},{"prompt":"You run **4 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It fits: 32 connections","It doesn't fit: 32 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 4 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #30

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
