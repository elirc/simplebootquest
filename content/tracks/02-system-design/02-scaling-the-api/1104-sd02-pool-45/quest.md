---
slug: "sd02-pool-45"
title: "Design Drill: Connection pool maths #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **17 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 136 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 136 connections","It fits: 8 connections","It fits: 17 connections"],"answer":0},{"prompt":"You run **16 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 80 connections","It fits: 5 connections","It fits: 16 connections","It doesn't fit: 80 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **2 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 30 connections","It fits: 15 connections","It fits: 2 connections","It doesn't fit: 30 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **32 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 32 connections","It fits: 160 connections","It fits: 5 connections","It doesn't fit: 160 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **20 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 400 connections","Connections are shared automatically","It doesn't fit: 400 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #45

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
