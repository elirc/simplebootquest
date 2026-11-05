---
slug: "sd02-pool-41"
title: "Design Drill: Connection pool maths #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **11 instances** with a pool of **15** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 165 connections","It fits: 15 connections","It doesn't fit: 165 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 11 connections"],"answer":0},{"prompt":"You run **10 instances** with a pool of **8** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 80 connections","It fits: 10 connections","It fits: 8 connections","It doesn't fit: 80 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **36 instances** with a pool of **20** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 720 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 720 connections","It fits: 20 connections","It fits: 36 connections"],"answer":0},{"prompt":"You run **9 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 90 connections","It fits: 10 connections","It doesn't fit: 90 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 9 connections"],"answer":0},{"prompt":"You run **34 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 170 connections","It doesn't fit: 170 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections","It fits: 34 connections"],"answer":0}]
---
# Design Drill: Connection pool maths #41

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
