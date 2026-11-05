---
slug: "sd02-pool-6"
title: "Design Drill: Connection pool maths #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **5 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 125 connections","It fits: 5 connections","It fits: 25 connections","It doesn't fit: 125 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **26 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 26 connections","It fits: 15 connections","It fits: 390 connections","It doesn't fit: 390 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2},{"prompt":"You run **16 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 240 connections","It fits: 15 connections","It doesn't fit: 240 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 16 connections"],"answer":2},{"prompt":"You run **3 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 24 connections","It doesn't fit: 24 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 3 connections","It fits: 8 connections"],"answer":0},{"prompt":"You run **8 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It fits: 15 connections","It doesn't fit: 120 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 120 connections"],"answer":2}]
---
# Design Drill: Connection pool maths #6

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
