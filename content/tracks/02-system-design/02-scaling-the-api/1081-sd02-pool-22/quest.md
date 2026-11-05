---
slug: "sd02-pool-22"
title: "Design Drill: Connection pool maths #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **15 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 15 connections","It doesn't fit: 150 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 150 connections","It fits: 10 connections"],"answer":1},{"prompt":"You run **15 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["Connections are shared automatically","It fits: 15 connections","It fits: 225 connections","It doesn't fit: 225 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2},{"prompt":"You run **40 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 40 connections","It fits: 1000 connections","It doesn't fit: 1000 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **22 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 10 connections","It fits: 22 connections","It fits: 220 connections","It doesn't fit: 220 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":2},{"prompt":"You run **11 instances** with a pool of **15** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 165 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 15 connections","It fits: 165 connections","It fits: 11 connections"],"answer":2}]
---
# Design Drill: Connection pool maths #22

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
