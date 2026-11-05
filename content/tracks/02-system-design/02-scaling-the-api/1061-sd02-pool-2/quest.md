---
slug: "sd02-pool-2"
title: "Design Drill: Connection pool maths #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **27 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 27 connections","It fits: 405 connections","It doesn't fit: 405 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **29 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 5 connections","It fits: 145 connections","It fits: 29 connections","It doesn't fit: 145 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **5 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 5 connections","It fits: 75 connections","It doesn't fit: 75 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2},{"prompt":"You run **40 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 800 connections","It fits: 20 connections","It doesn't fit: 800 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 40 connections"],"answer":2},{"prompt":"You run **20 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 160 connections","It fits: 20 connections","It doesn't fit: 160 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #2

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
