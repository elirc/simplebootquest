---
slug: "sd02-pool-7"
title: "Design Drill: Connection pool maths #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **18 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 5 connections","It fits: 18 connections","It doesn't fit: 90 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 90 connections"],"answer":3},{"prompt":"You run **39 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 585 connections","It doesn't fit: 585 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 39 connections"],"answer":1},{"prompt":"You run **21 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 420 connections","It fits: 21 connections","It doesn't fit: 420 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections"],"answer":2},{"prompt":"You run **6 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 48 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 48 connections","It fits: 6 connections","It fits: 8 connections"],"answer":1},{"prompt":"You run **17 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 170 connections","It fits: 10 connections","It doesn't fit: 170 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 17 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #7

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
