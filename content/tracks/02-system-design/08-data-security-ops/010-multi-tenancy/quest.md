---
slug: "sd-multi-tenancy"
title: "Multi-Tenancy Patterns"
type: "quiz"
xp: 15
resources: [{"title": "PostgreSQL: Row security policies", "url": "https://www.postgresql.org/docs/current/ddl-rowsecurity.html"}]
questions: [{"prompt": "What is the biggest risk of shared tables with tenant_id?", "options": ["Cost", "One query missing the tenant filter can leak another customer's data", "Slow inserts"], "answer": 1}, {"prompt": "Which Postgres feature enforces tenant isolation at the database level?", "options": ["Views", "Row-Level Security (RLS)", "Sequences"], "answer": 1}, {"prompt": "Why make a unique constraint `(tenant_id, email)` rather than just `email`?", "options": ["It is faster", "The same email may legitimately exist in different tenants", "Emails must be unique globally"], "answer": 1}, {"prompt": "Which pattern makes per-tenant data residency (EU vs US) easiest?", "options": ["Shared tables", "Database per tenant", "Schema per tenant in one database"], "answer": 1}, {"prompt": "What is a \"noisy neighbour\"?", "options": ["A loud office", "One tenant's heavy usage degrading performance for others on shared infrastructure", "A duplicate tenant"], "answer": 1}]
---
# Multi-Tenancy Patterns

A SaaS product serves many customers (**tenants**) from one system. Three common designs:

| Pattern | How | Pros | Cons |
|---------|-----|------|------|
| **Shared tables** | Every row has a `tenant_id` | Cheap, simple ops, easy cross-tenant analytics | One missing `WHERE tenant_id = ?` leaks data. Noisy neighbours |
| **Schema per tenant** | A Postgres schema per tenant | Better isolation, per-tenant backup | Migrations × N schemas, connection overhead |
| **Database per tenant** | A separate database per tenant | Strongest isolation, per-tenant region and scaling | Expensive. Fleet management is hard |

Most startups begin with **shared tables**, and protect them hard:

- Scope every query through one repository layer that **requires** a tenant id.
- Use Postgres **Row-Level Security** (RLS) as a safety net: the database itself refuses rows from other tenants.
- Test cross-tenant access explicitly (like this app's "keeps progress private" test).
- Make the tenant id part of composite unique keys and indexes: `(tenant_id, email)`.

Large enterprise customers sometimes demand dedicated infrastructure. A hybrid ("shared by default, dedicated for enterprise") is common.
