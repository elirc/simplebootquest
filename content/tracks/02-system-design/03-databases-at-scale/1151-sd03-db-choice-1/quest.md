---
slug: "sd03-db-choice-1"
title: "Design Drill: Database decisions #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Best default choice for **a few flexible attributes per product on top of a relational model**?","options":["Redis","PostgreSQL with a JSONB column","Object storage (S3-compatible) + CDN","PostgreSQL"],"answer":1},{"prompt":"Best default choice for **full-text product search with typo tolerance at large scale**?","options":["Object storage (S3-compatible) + CDN","A search engine (OpenSearch / Meilisearch) fed from Postgres","Redis","PostgreSQL"],"answer":1},{"prompt":"Best default choice for **an append-only log of analytics events queried in aggregate**?","options":["PostgreSQL","A columnar warehouse (BigQuery / ClickHouse)","Redis","Object storage (S3-compatible) + CDN"],"answer":1},{"prompt":"Best default choice for **session data and rate-limit counters with TTLs**?","options":["Redis","PostgreSQL","A search engine (OpenSearch / Meilisearch) fed from Postgres","Object storage (S3-compatible) + CDN"],"answer":0},{"prompt":"Best default choice for **user-uploaded images and PDFs**?","options":["Object storage (S3-compatible) + CDN","A search engine (OpenSearch / Meilisearch) fed from Postgres","PostgreSQL","Redis"],"answer":0}]
---
# Design Drill: Database decisions #1

Default to Postgres for CRUD apps: it gives you transactions, constraints, joins, JSONB and full-text search. Reach for specialised stores when a concrete need outgrows it.
