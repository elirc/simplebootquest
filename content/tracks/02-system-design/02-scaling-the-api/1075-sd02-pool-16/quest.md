---
slug: "sd02-pool-16"
title: "Design Drill: Connection pool maths #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **30 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 600 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 600 connections","It fits: 30 connections","It fits: 20 connections"],"answer":0},{"prompt":"You run **32 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 320 connections","It fits: 32 connections","It doesn't fit: 320 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **3 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 45 connections","It fits: 15 connections","It doesn't fit: 45 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 3 connections"],"answer":0},{"prompt":"You run **26 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 520 connections","It fits: 26 connections","It doesn't fit: 520 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections"],"answer":2},{"prompt":"You run **11 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 11 connections","It fits: 5 connections","It fits: 55 connections","It doesn't fit: 55 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2}]
---
# Design Drill: Connection pool maths #16

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
