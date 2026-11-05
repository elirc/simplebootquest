---
slug: "sd02-pool-26"
title: "Design Drill: Connection pool maths #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **22 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 330 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 22 connections","It fits: 330 connections"],"answer":0},{"prompt":"You run **40 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 600 connections","It doesn't fit: 600 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 40 connections","It fits: 15 connections"],"answer":1},{"prompt":"You run **6 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 120 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 6 connections","It fits: 120 connections","It fits: 20 connections"],"answer":2},{"prompt":"You run **34 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 510 connections","It doesn't fit: 510 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 34 connections","It fits: 15 connections"],"answer":1},{"prompt":"You run **20 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It fits: 160 connections","It doesn't fit: 160 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections"],"answer":2}]
---
# Design Drill: Connection pool maths #26

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
