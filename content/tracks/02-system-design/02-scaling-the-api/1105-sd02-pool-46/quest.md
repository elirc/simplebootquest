---
slug: "sd02-pool-46"
title: "Design Drill: Connection pool maths #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **37 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 296 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 37 connections","It fits: 296 connections","It fits: 8 connections"],"answer":0},{"prompt":"You run **31 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 310 connections","It fits: 10 connections","It doesn't fit: 310 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 31 connections"],"answer":2},{"prompt":"You run **4 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It doesn't fit: 60 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 60 connections","It fits: 4 connections"],"answer":2},{"prompt":"You run **38 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 38 connections","It fits: 15 connections","It fits: 570 connections","It doesn't fit: 570 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **7 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 7 connections","It fits: 105 connections","It doesn't fit: 105 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2}]
---
# Design Drill: Connection pool maths #46

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
