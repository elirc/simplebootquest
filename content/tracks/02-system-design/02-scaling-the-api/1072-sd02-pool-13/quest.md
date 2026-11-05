---
slug: "sd02-pool-13"
title: "Design Drill: Connection pool maths #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **3 instances** with a pool of **20** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 20 connections","It fits: 60 connections","It fits: 3 connections","It doesn't fit: 60 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":1},{"prompt":"You run **31 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 31 connections","It fits: 155 connections","It doesn't fit: 155 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 5 connections"],"answer":1},{"prompt":"You run **20 instances** with a pool of **10** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 200 connections","It fits: 20 connections","It fits: 10 connections","It doesn't fit: 200 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **26 instances** with a pool of **25** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 25 connections","It fits: 650 connections","It doesn't fit: 650 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 26 connections"],"answer":2},{"prompt":"You run **25 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 500 connections","It doesn't fit: 500 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 25 connections","It fits: 20 connections"],"answer":1}]
---
# Design Drill: Connection pool maths #13

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
