---
slug: "sd02-pool-44"
title: "Design Drill: Connection pool maths #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **19 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 190 connections","It fits: 10 connections","It doesn't fit: 190 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 19 connections"],"answer":2},{"prompt":"You run **11 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 220 connections","It fits: 11 connections","It doesn't fit: 220 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **12 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It doesn't fit: 120 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 120 connections","It fits: 12 connections"],"answer":1},{"prompt":"You run **8 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 160 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 160 connections","It fits: 20 connections"],"answer":0},{"prompt":"You run **12 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 12 connections","It doesn't fit: 180 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 180 connections"],"answer":3}]
---
# Design Drill: Connection pool maths #44

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
