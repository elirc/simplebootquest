---
slug: "sd02-pool-49"
title: "Design Drill: Connection pool maths #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **23 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 23 connections","It fits: 5 connections","It doesn't fit: 115 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 115 connections"],"answer":3},{"prompt":"You run **16 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 128 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 16 connections","It fits: 128 connections","It fits: 8 connections"],"answer":2},{"prompt":"You run **10 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 150 connections","It fits: 10 connections","It doesn't fit: 150 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections"],"answer":0},{"prompt":"You run **31 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 31 connections","It fits: 620 connections","It fits: 20 connections","It doesn't fit: 620 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **32 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 480 connections","It doesn't fit: 480 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 32 connections","It fits: 15 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #49

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
