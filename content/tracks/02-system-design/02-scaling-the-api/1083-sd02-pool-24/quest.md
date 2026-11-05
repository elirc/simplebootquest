---
slug: "sd02-pool-24"
title: "Design Drill: Connection pool maths #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **5 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 75 connections","It doesn't fit: 75 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections"],"answer":1},{"prompt":"You run **2 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 40 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections","It fits: 40 connections","It fits: 2 connections"],"answer":2},{"prompt":"You run **3 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 24 connections","It doesn't fit: 24 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 3 connections"],"answer":0},{"prompt":"You run **20 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["Connections are shared automatically","It fits: 20 connections","It doesn't fit: 400 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 400 connections"],"answer":2},{"prompt":"You run **28 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 280 connections","It fits: 10 connections","It doesn't fit: 280 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 28 connections"],"answer":2}]
---
# Design Drill: Connection pool maths #24

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
