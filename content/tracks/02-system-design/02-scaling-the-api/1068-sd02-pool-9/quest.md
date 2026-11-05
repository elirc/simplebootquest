---
slug: "sd02-pool-9"
title: "Design Drill: Connection pool maths #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **40 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 40 connections","It fits: 8 connections","It fits: 320 connections","It doesn't fit: 320 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2},{"prompt":"You run **4 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 100 connections","It fits: 4 connections","It doesn't fit: 100 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections"],"answer":0},{"prompt":"You run **22 instances** with a pool of **8** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 176 connections","It fits: 8 connections","It fits: 22 connections","It doesn't fit: 176 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **25 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 625 connections","Connections are shared automatically","It doesn't fit: 625 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **13 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 13 connections","It fits: 195 connections","It doesn't fit: 195 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #9

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
