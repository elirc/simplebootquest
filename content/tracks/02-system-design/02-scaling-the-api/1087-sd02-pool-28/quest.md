---
slug: "sd02-pool-28"
title: "Design Drill: Connection pool maths #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **22 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 550 connections","It doesn't fit: 550 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 22 connections"],"answer":2},{"prompt":"You run **24 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 360 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 360 connections","It fits: 24 connections","It fits: 15 connections"],"answer":1},{"prompt":"You run **23 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It fits: 184 connections","It fits: 23 connections","It doesn't fit: 184 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **33 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 165 connections","It fits: 33 connections","It doesn't fit: 165 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections"],"answer":2},{"prompt":"You run **2 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It fits: 2 connections","It fits: 16 connections","It doesn't fit: 16 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2}]
---
# Design Drill: Connection pool maths #28

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
