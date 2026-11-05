---
slug: "sd02-pool-5"
title: "Design Drill: Connection pool maths #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **24 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It doesn't fit: 240 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 24 connections","It fits: 240 connections"],"answer":1},{"prompt":"You run **38 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 5 connections","It fits: 190 connections","It doesn't fit: 190 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 38 connections"],"answer":1},{"prompt":"You run **33 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 660 connections","It fits: 33 connections","It doesn't fit: 660 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections"],"answer":2},{"prompt":"You run **18 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 90 connections","It fits: 5 connections","It doesn't fit: 90 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 18 connections"],"answer":0},{"prompt":"You run **30 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 150 connections","It fits: 5 connections","It doesn't fit: 150 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 30 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #5

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
