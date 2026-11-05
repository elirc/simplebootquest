---
slug: "sd02-pool-31"
title: "Design Drill: Connection pool maths #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **15 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 5 connections","It doesn't fit: 75 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 75 connections"],"answer":3},{"prompt":"You run **23 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 575 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections","It fits: 575 connections","It fits: 23 connections"],"answer":0},{"prompt":"You run **9 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 90 connections","It fits: 9 connections","It doesn't fit: 90 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **20 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","Connections are shared automatically","It fits: 400 connections","It doesn't fit: 400 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **32 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 32 connections","It fits: 20 connections","It doesn't fit: 640 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 640 connections"],"answer":2}]
---
# Design Drill: Connection pool maths #31

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
