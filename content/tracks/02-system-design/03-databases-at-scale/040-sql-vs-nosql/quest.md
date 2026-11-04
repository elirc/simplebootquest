---
slug: "sd-sql-vs-nosql"
title: "SQL vs NoSQL"
type: "quiz"
xp: 15
questions: [{"prompt": "What is a sensible default database for a typical CRUD app?", "options": ["A graph database", "PostgreSQL (relational)", "A key-value store"], "answer": 1}, {"prompt": "Which store fits rate-limit counters and caches?", "options": ["Redis", "Neo4j", "Elasticsearch"], "answer": 0}, {"prompt": "\"NoSQL scales, SQL doesn't\" is…", "options": ["True", "A myth: both scale, and they suit different access patterns", "True only for writes"], "answer": 1}, {"prompt": "Postgres features that cover some NoSQL needs include…", "options": ["JSONB columns and full-text search", "None", "Only views"], "answer": 0}, {"prompt": "When should you add a dedicated search engine?", "options": ["Always, from the start", "When requirements outgrow Postgres full-text search (relevance tuning, facets, scale)", "Never"], "answer": 1}]
---
# SQL vs NoSQL

"NoSQL" covers very different systems:

| Type | Examples | Great for |
|------|----------|-----------|
| Key-value | Redis, DynamoDB | Caches, sessions, counters, simple lookups by key |
| Document | MongoDB, Firestore | Self-contained documents read as a whole |
| Wide-column | Cassandra | Massive write throughput, time-series |
| Search | Elasticsearch, OpenSearch | Full-text search and faceting |
| Graph | Neo4j | Deeply connected data (social graphs) |

### A sensible default

For a CRUD app, **start with PostgreSQL**. Relational data (users, orders, line items) with constraints and transactions is exactly what it's built for, and it also has JSONB, full-text search and extensions that cover many "NoSQL" needs.

Add a specialised store when a specific need shows up: **Redis** for caching and rate limits, a **search engine** when Postgres full-text search isn't enough, **object storage** for files. That's *polyglot persistence*, one tool per job, each added for a concrete reason.

The myth to avoid: "NoSQL scales and SQL doesn't." Both scale. What differs is the **access patterns** they make easy.
