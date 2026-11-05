---
slug: "sd02-pool-19"
title: "Design Drill: Connection pool maths #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **6 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 90 connections","It fits: 15 connections","It doesn't fit: 90 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 6 connections"],"answer":0},{"prompt":"You run **32 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 800 connections","It doesn't fit: 800 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 32 connections"],"answer":2},{"prompt":"You run **33 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It fits: 495 connections","It fits: 33 connections","It doesn't fit: 495 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **40 instances** with a pool of **25** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 1000 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 1000 connections","It fits: 25 connections","It fits: 40 connections"],"answer":0},{"prompt":"You run **23 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 115 connections","It fits: 23 connections","It doesn't fit: 115 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #19

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
