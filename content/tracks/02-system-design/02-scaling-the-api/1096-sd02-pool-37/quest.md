---
slug: "sd02-pool-37"
title: "Design Drill: Connection pool maths #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **4 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 4 connections","It fits: 80 connections","It doesn't fit: 80 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections"],"answer":1},{"prompt":"You run **25 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 125 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 125 connections","It fits: 25 connections","It fits: 5 connections"],"answer":1},{"prompt":"You run **39 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 195 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 39 connections","It fits: 195 connections","It fits: 5 connections"],"answer":2},{"prompt":"You run **6 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 6 connections","It doesn't fit: 48 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 48 connections"],"answer":3},{"prompt":"You run **17 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 255 connections","It doesn't fit: 255 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 17 connections","It fits: 15 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #37

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
