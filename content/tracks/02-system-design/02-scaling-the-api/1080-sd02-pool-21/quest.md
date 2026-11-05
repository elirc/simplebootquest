---
slug: "sd02-pool-21"
title: "Design Drill: Connection pool maths #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **27 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 135 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections","It fits: 135 connections","It fits: 27 connections"],"answer":2},{"prompt":"You run **13 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 13 connections","It fits: 25 connections","It fits: 325 connections","It doesn't fit: 325 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **7 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 105 connections","It fits: 7 connections","It doesn't fit: 105 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections"],"answer":0},{"prompt":"You run **25 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 200 connections","It fits: 8 connections","It doesn't fit: 200 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **23 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 460 connections","It fits: 20 connections","It fits: 23 connections","It doesn't fit: 460 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3}]
---
# Design Drill: Connection pool maths #21

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
