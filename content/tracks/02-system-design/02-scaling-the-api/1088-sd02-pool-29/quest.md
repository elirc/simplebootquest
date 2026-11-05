---
slug: "sd02-pool-29"
title: "Design Drill: Connection pool maths #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **10 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 200 connections","It fits: 10 connections","It fits: 20 connections","It doesn't fit: 200 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **14 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 210 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 14 connections","It fits: 15 connections","It fits: 210 connections"],"answer":3},{"prompt":"You run **10 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 250 connections","It doesn't fit: 250 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections"],"answer":1},{"prompt":"You run **5 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 125 connections","It fits: 5 connections","It doesn't fit: 125 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections"],"answer":2},{"prompt":"You run **34 instances** with a pool of **5** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 170 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections","It fits: 170 connections","It fits: 34 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #29

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
