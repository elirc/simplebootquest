---
slug: "sd02-pool-48"
title: "Design Drill: Connection pool maths #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **34 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 680 connections","It doesn't fit: 680 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 34 connections"],"answer":2},{"prompt":"You run **3 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 75 connections","It doesn't fit: 75 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 3 connections"],"answer":1},{"prompt":"You run **8 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 80 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 80 connections","It fits: 10 connections"],"answer":2},{"prompt":"You run **24 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 24 connections","It fits: 5 connections","It fits: 120 connections","It doesn't fit: 120 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2},{"prompt":"You run **9 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 90 connections","It doesn't fit: 90 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 9 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #48

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
