---
slug: "sd02-pool-42"
title: "Design Drill: Connection pool maths #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **29 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 29 connections","It fits: 725 connections","It fits: 25 connections","It doesn't fit: 725 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **14 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 14 connections","It fits: 70 connections","It doesn't fit: 70 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections"],"answer":1},{"prompt":"You run **7 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 70 connections","It doesn't fit: 70 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 7 connections"],"answer":1},{"prompt":"You run **10 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["Connections are shared automatically","It doesn't fit: 100 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections","It fits: 100 connections"],"answer":1},{"prompt":"You run **6 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 30 connections","It fits: 6 connections","It doesn't fit: 30 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #42

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
