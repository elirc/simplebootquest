---
slug: "sd02-pool-11"
title: "Design Drill: Connection pool maths #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **9 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 72 connections","It fits: 9 connections","It fits: 8 connections","It doesn't fit: 72 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **33 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 825 connections","It fits: 33 connections","It doesn't fit: 825 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections"],"answer":2},{"prompt":"You run **8 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 80 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections","It fits: 8 connections","It fits: 80 connections"],"answer":3},{"prompt":"You run **17 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 136 connections","It doesn't fit: 136 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 17 connections"],"answer":0},{"prompt":"You run **28 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 700 connections","It fits: 28 connections","It doesn't fit: 700 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections"],"answer":2}]
---
# Design Drill: Connection pool maths #11

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
