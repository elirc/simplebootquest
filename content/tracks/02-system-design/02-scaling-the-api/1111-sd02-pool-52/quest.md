---
slug: "sd02-pool-52"
title: "Design Drill: Connection pool maths #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **13 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It doesn't fit: 260 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 260 connections","It fits: 13 connections"],"answer":1},{"prompt":"You run **25 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 375 connections","It doesn't fit: 375 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections"],"answer":2},{"prompt":"You run **35 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 525 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 525 connections","It fits: 35 connections"],"answer":0},{"prompt":"You run **19 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 19 connections","It doesn't fit: 285 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 285 connections"],"answer":1},{"prompt":"You run **36 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 180 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 36 connections","It fits: 5 connections","It fits: 180 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #52

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
