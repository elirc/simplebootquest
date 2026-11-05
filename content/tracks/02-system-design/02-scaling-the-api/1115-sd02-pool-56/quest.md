---
slug: "sd02-pool-56"
title: "Design Drill: Connection pool maths #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **8 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 8 connections","It doesn't fit: 200 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 200 connections"],"answer":2},{"prompt":"You run **9 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 45 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections","It fits: 45 connections","It fits: 9 connections"],"answer":2},{"prompt":"You run **29 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 580 connections","It doesn't fit: 580 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 29 connections"],"answer":2},{"prompt":"You run **8 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It doesn't fit: 40 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections","It fits: 40 connections"],"answer":3},{"prompt":"You run **18 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 144 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 144 connections","It fits: 18 connections","It fits: 8 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #56

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
