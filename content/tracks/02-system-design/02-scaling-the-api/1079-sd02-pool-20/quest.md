---
slug: "sd02-pool-20"
title: "Design Drill: Connection pool maths #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **27 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 216 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 27 connections","It fits: 216 connections"],"answer":0},{"prompt":"You run **38 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It doesn't fit: 760 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 760 connections","It fits: 38 connections"],"answer":1},{"prompt":"You run **7 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 7 connections","It fits: 25 connections","It doesn't fit: 175 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 175 connections"],"answer":3},{"prompt":"You run **38 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 950 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections","It fits: 38 connections","It fits: 950 connections"],"answer":0},{"prompt":"You run **39 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 39 connections","It doesn't fit: 780 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 780 connections"],"answer":2}]
---
# Design Drill: Connection pool maths #20

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
