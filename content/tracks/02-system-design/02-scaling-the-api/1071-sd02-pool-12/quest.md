---
slug: "sd02-pool-12"
title: "Design Drill: Connection pool maths #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **21 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 21 connections","It fits: 525 connections","It doesn't fit: 525 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections"],"answer":2},{"prompt":"You run **29 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 29 connections","It doesn't fit: 580 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 580 connections","It fits: 20 connections"],"answer":1},{"prompt":"You run **28 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 140 connections","It fits: 28 connections","It doesn't fit: 140 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections"],"answer":0},{"prompt":"You run **8 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 40 connections","It fits: 5 connections","It fits: 8 connections","It doesn't fit: 40 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **5 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 40 connections","It doesn't fit: 40 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 5 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #12

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
