---
slug: "sd02-pool-8"
title: "Design Drill: Connection pool maths #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **36 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 540 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 36 connections","It fits: 540 connections","It fits: 15 connections"],"answer":0},{"prompt":"You run **10 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It doesn't fit: 250 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections","It fits: 250 connections"],"answer":1},{"prompt":"You run **5 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 50 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 50 connections","It fits: 10 connections","It fits: 5 connections"],"answer":1},{"prompt":"You run **34 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 510 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 34 connections","It fits: 510 connections"],"answer":0},{"prompt":"You run **40 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 40 connections","It doesn't fit: 600 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 600 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #8

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
