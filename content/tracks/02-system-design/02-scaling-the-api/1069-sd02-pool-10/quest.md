---
slug: "sd02-pool-10"
title: "Design Drill: Connection pool maths #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **16 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 160 connections","It fits: 16 connections","It doesn't fit: 160 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **15 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 150 connections","It fits: 15 connections","It doesn't fit: 150 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **20 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 500 connections","It doesn't fit: 500 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections","It fits: 20 connections"],"answer":1},{"prompt":"You run **6 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 120 connections","It doesn't fit: 120 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 6 connections"],"answer":1},{"prompt":"You run **26 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 5 connections","It fits: 130 connections","It fits: 26 connections","It doesn't fit: 130 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1}]
---
# Design Drill: Connection pool maths #10

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
