---
slug: "sd02-pool-3"
title: "Design Drill: Connection pool maths #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **12 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 12 connections","It fits: 120 connections","It fits: 10 connections","It doesn't fit: 120 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **30 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 450 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 450 connections","It fits: 30 connections"],"answer":2},{"prompt":"You run **24 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 480 connections","It doesn't fit: 480 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections","It fits: 24 connections"],"answer":1},{"prompt":"You run **10 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 5 connections","It doesn't fit: 50 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 50 connections","It fits: 10 connections"],"answer":2},{"prompt":"You run **34 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 34 connections","It fits: 170 connections","It fits: 5 connections","It doesn't fit: 170 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1}]
---
# Design Drill: Connection pool maths #3

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
