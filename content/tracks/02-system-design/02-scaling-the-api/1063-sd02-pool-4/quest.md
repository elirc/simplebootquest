---
slug: "sd02-pool-4"
title: "Design Drill: Connection pool maths #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **18 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 18 connections","It fits: 15 connections","It doesn't fit: 270 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 270 connections"],"answer":3},{"prompt":"You run **11 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 55 connections","It fits: 11 connections","It fits: 5 connections","It doesn't fit: 55 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **23 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 23 connections","It doesn't fit: 230 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections","It fits: 230 connections"],"answer":1},{"prompt":"You run **15 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 300 connections","It doesn't fit: 300 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections","It fits: 15 connections"],"answer":0},{"prompt":"You run **10 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 150 connections","It doesn't fit: 150 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 10 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #4

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
