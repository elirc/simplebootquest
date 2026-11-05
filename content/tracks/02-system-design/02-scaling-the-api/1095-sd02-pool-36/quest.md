---
slug: "sd02-pool-36"
title: "Design Drill: Connection pool maths #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **2 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 2 connections","It fits: 40 connections","It fits: 20 connections","It doesn't fit: 40 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **14 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 14 connections","It fits: 280 connections","It fits: 20 connections","It doesn't fit: 280 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **36 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 900 connections","It doesn't fit: 900 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 36 connections"],"answer":2},{"prompt":"You run **22 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It doesn't fit: 176 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 176 connections","It fits: 22 connections"],"answer":2},{"prompt":"You run **14 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 350 connections","It fits: 14 connections","It doesn't fit: 350 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections"],"answer":2}]
---
# Design Drill: Connection pool maths #36

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
