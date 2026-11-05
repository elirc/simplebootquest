---
slug: "sd02-pool-14"
title: "Design Drill: Connection pool maths #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **32 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It doesn't fit: 256 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 256 connections","It fits: 32 connections"],"answer":1},{"prompt":"You run **33 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 33 connections","It doesn't fit: 825 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections","It fits: 825 connections"],"answer":1},{"prompt":"You run **19 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 285 connections","It fits: 19 connections","It fits: 15 connections","It doesn't fit: 285 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **24 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 240 connections","It doesn't fit: 240 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 24 connections","It fits: 10 connections"],"answer":1},{"prompt":"You run **33 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 264 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 33 connections","It fits: 264 connections","It fits: 8 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #14

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
