---
slug: "sd02-pool-40"
title: "Design Drill: Connection pool maths #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **9 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 9 connections","It doesn't fit: 180 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 180 connections"],"answer":3},{"prompt":"You run **26 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 130 connections","It fits: 26 connections","It doesn't fit: 130 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections"],"answer":0},{"prompt":"You run **3 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 30 connections","It doesn't fit: 30 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections","It fits: 3 connections"],"answer":0},{"prompt":"You run **22 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 550 connections","It doesn't fit: 550 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 22 connections"],"answer":2},{"prompt":"You run **14 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It fits: 112 connections","It doesn't fit: 112 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 14 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #40

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
