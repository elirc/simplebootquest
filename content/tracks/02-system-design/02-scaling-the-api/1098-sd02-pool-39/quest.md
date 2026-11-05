---
slug: "sd02-pool-39"
title: "Design Drill: Connection pool maths #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **20 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 25 connections","It doesn't fit: 500 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 500 connections"],"answer":2},{"prompt":"You run **12 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 60 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 60 connections","It fits: 5 connections","It fits: 12 connections"],"answer":1},{"prompt":"You run **26 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 26 connections","It fits: 20 connections","It doesn't fit: 520 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 520 connections"],"answer":2},{"prompt":"You run **2 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 10 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections","It fits: 2 connections","It fits: 5 connections"],"answer":1},{"prompt":"You run **38 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 380 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 38 connections","It fits: 380 connections","It fits: 10 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #39

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
