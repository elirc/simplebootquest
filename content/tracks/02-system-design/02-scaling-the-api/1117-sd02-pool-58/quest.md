---
slug: "sd02-pool-58"
title: "Design Drill: Connection pool maths #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **15 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 120 connections","It doesn't fit: 120 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections"],"answer":1},{"prompt":"You run **10 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 20 connections","It fits: 200 connections","It doesn't fit: 200 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **4 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 4 connections","It doesn't fit: 40 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 40 connections","It fits: 10 connections"],"answer":2},{"prompt":"You run **24 instances** with a pool of **15** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 360 connections","It fits: 15 connections","It doesn't fit: 360 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 24 connections"],"answer":2},{"prompt":"You run **12 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 12 connections","It doesn't fit: 180 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 180 connections"],"answer":3}]
---
# Design Drill: Connection pool maths #58

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
