---
slug: "sd02-pool-54"
title: "Design Drill: Connection pool maths #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **33 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 165 connections","It doesn't fit: 165 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections","It fits: 33 connections"],"answer":0},{"prompt":"You run **20 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 100 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 100 connections","It fits: 5 connections","It fits: 20 connections"],"answer":0},{"prompt":"You run **35 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 280 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 280 connections","It fits: 8 connections","It fits: 35 connections"],"answer":0},{"prompt":"You run **37 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 37 connections","It fits: 925 connections","It doesn't fit: 925 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **14 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 14 connections","It fits: 280 connections","It doesn't fit: 280 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3}]
---
# Design Drill: Connection pool maths #54

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
