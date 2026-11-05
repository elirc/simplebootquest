---
slug: "sd02-pool-1"
title: "Design Drill: Connection pool maths #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **14 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 14 connections","It fits: 10 connections","It fits: 140 connections","It doesn't fit: 140 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2},{"prompt":"You run **30 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 300 connections","It fits: 10 connections","It fits: 30 connections","It doesn't fit: 300 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **14 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 70 connections","It doesn't fit: 70 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 14 connections","It fits: 5 connections"],"answer":0},{"prompt":"You run **18 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 270 connections","It fits: 15 connections","It fits: 18 connections","It doesn't fit: 270 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **23 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 23 connections","It fits: 460 connections","It fits: 20 connections","It doesn't fit: 460 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3}]
---
# Design Drill: Connection pool maths #1

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
