---
slug: "sd02-pool-59"
title: "Design Drill: Connection pool maths #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **29 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 232 connections","It fits: 29 connections","It doesn't fit: 232 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections"],"answer":0},{"prompt":"You run **3 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 5 connections","It fits: 15 connections","It fits: 3 connections","It doesn't fit: 15 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **19 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 285 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 285 connections","It fits: 19 connections"],"answer":2},{"prompt":"You run **36 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 180 connections","It fits: 36 connections","It fits: 5 connections","It doesn't fit: 180 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **37 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 555 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 37 connections","It fits: 555 connections","It fits: 15 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #59

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
