---
slug: "sd02-pool-57"
title: "Design Drill: Connection pool maths #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **13 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 13 connections","It doesn't fit: 130 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections","It fits: 130 connections"],"answer":1},{"prompt":"You run **13 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 13 connections","It fits: 65 connections","It doesn't fit: 65 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections"],"answer":1},{"prompt":"You run **28 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 700 connections","It doesn't fit: 700 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections","It fits: 28 connections"],"answer":1},{"prompt":"You run **40 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 400 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 40 connections","It fits: 400 connections","It fits: 10 connections"],"answer":0},{"prompt":"You run **3 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 45 connections","It fits: 15 connections","It fits: 3 connections","It doesn't fit: 45 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0}]
---
# Design Drill: Connection pool maths #57

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
