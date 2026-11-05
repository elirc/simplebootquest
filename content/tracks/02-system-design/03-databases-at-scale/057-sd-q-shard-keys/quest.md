---
slug: "sd-q-shard-keys"
title: "Choosing a Shard Key"
type: "quiz"
xp: 15
questions: [{"prompt": "Why is `created_at` a poor shard key for an orders table?", "options": ["Dates cannot be hashed", "All new writes go to the same \"latest\" shard, which becomes hot", "It is too long"], "answer": 1}, {"prompt": "In a multi-tenant SaaS where most queries are per tenant, a good shard key is…", "options": ["order_id", "tenant_id", "status"], "answer": 1}, {"prompt": "What becomes expensive after sharding?", "options": ["Single-tenant lookups", "Queries and joins that span shards", "Inserts"], "answer": 1}, {"prompt": "Why create many logical shards on a few physical databases?", "options": ["To use more disk", "So shards can later be moved to new machines without re-hashing all the data", "For backups"], "answer": 1}, {"prompt": "Before sharding, what should you try?", "options": ["Nothing, shard early", "Indexes, query fixes, caching, read replicas, partitioning and vertical scaling", "Switching to NoSQL"], "answer": 1}]
---
# Choosing a Shard Key

**Sharding** splits one logical table across several databases by a **shard key**. It's powerful, and it's a big operational commitment. Exhaust indexes, replicas, caching, partitioning and a bigger machine first.

If you do shard, the key decides everything:
- **Even distribution**: no single shard should get most of the data or traffic (a "hot shard"). Hashing the key spreads it out.
- **Locality**: the most common queries should touch **one** shard. In a multi-tenant SaaS, `tenant_id` is a natural key: each tenant's data lives together.
- **Cross-shard queries are expensive**: "all orders across all tenants, sorted by date" now means asking every shard and merging.
- **Re-sharding is painful.** Use many logical shards mapped onto fewer physical databases, so you can move logical shards later.

Bad keys: `created_at` (all new writes hit the latest shard), `country` (a few countries dominate), or a boolean.
