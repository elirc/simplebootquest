---
slug: "sd02-pool-35"
title: "Design Drill: Connection pool maths #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **16 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 16 connections","It fits: 8 connections","It doesn't fit: 128 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 128 connections"],"answer":2},{"prompt":"You run **19 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 475 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 19 connections","It fits: 475 connections","It fits: 25 connections"],"answer":0},{"prompt":"You run **21 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 525 connections","It doesn't fit: 525 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 21 connections","It fits: 25 connections"],"answer":1},{"prompt":"You run **8 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 64 connections","It doesn't fit: 64 connections needed. Use a pooler (PgBouncer) or shrink the pools","Connections are shared automatically","It fits: 8 connections"],"answer":0},{"prompt":"You run **20 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 300 connections","It doesn't fit: 300 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections","It fits: 15 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #35

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
