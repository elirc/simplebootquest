---
slug: "sd02-pool-18"
title: "Design Drill: Connection pool maths #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **19 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 190 connections","It fits: 10 connections","It doesn't fit: 190 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 19 connections"],"answer":0},{"prompt":"You run **38 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 380 connections","It doesn't fit: 380 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 38 connections"],"answer":1},{"prompt":"You run **2 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It doesn't fit: 50 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 50 connections","It fits: 2 connections"],"answer":2},{"prompt":"You run **28 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 140 connections","It fits: 28 connections","It doesn't fit: 140 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections"],"answer":2},{"prompt":"You run **19 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 19 connections","It doesn't fit: 380 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 380 connections","It fits: 20 connections"],"answer":2}]
---
# Design Drill: Connection pool maths #18

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
