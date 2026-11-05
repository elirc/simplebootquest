---
slug: "sd02-pool-23"
title: "Design Drill: Connection pool maths #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **3 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It doesn't fit: 15 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections","It fits: 3 connections"],"answer":0},{"prompt":"You run **28 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 28 connections","It fits: 224 connections","It fits: 8 connections","It doesn't fit: 224 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **11 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It fits: 88 connections","It fits: 11 connections","It doesn't fit: 88 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **21 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 168 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 21 connections","It fits: 168 connections","It fits: 8 connections"],"answer":2},{"prompt":"You run **13 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 5 connections","It fits: 13 connections","It doesn't fit: 65 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 65 connections"],"answer":3}]
---
# Design Drill: Connection pool maths #23

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
