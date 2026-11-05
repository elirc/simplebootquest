---
slug: "sd02-pool-34"
title: "Design Drill: Connection pool maths #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **21 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 210 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 210 connections","It fits: 10 connections","It fits: 21 connections"],"answer":1},{"prompt":"You run **24 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 192 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 8 connections","It fits: 24 connections","It fits: 192 connections"],"answer":0},{"prompt":"You run **31 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 465 connections","It fits: 15 connections","It doesn't fit: 465 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 31 connections"],"answer":2},{"prompt":"You run **18 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 18 connections","It fits: 450 connections","It fits: 25 connections","It doesn't fit: 450 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **26 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 26 connections","It fits: 650 connections","It doesn't fit: 650 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3}]
---
# Design Drill: Connection pool maths #34

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
