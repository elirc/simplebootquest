# Product search

## Requirements
- **Functional:** keyword search with typo tolerance, filters with facet counts, sorting by relevance, rating or newest, and autocomplete.
- **Non-functional:** search p95 < 150 ms, autocomplete p95 < 50 ms, index freshness < 10 s, and search being down must not break the rest of the app.
- **Scale:** 2M documents × ~2 KB ≈ 4 GB of index. 300 searches/s at peak.

## High-level design
```
writes: API → Postgres → outbox → indexer worker → search engine
reads:  client → API /search → search engine → ids → hydrate from cache/DB
```

## Data model
Search document: `{ id, title, ingredients[], tags[], cook_minutes, rating, created_at, owner_visibility }`. Searchable fields: title (boosted ×3), ingredients and tags. Filterable fields: tags, cook_minutes and rating.

## API
`GET /api/search?q=&tags=&maxMinutes=&sort=&cursor=` → `{ hits, facets: { tags: { dinner: 120, ... } }, next_cursor }`, and `GET /api/search/suggest?q=chi`.

## Deep dive: engine choice and sync
- **Postgres FTS** (`tsvector` + GIN index, plus `pg_trgm` for fuzzy matching) avoids new infrastructure and works well up to this size for basic search. But typo tolerance, relevance tuning and facet counts at 300 qps get awkward.
- **Chosen: Meilisearch/Typesense** (a simpler operational footprint than Elasticsearch), with built-in typo tolerance, facets and prefix search for autocomplete.
- **Sync:** the outbox pattern. Every write to a searchable record inserts an outbox row in the same transaction, and the indexer upserts or deletes documents in batches (idempotent, keyed by id). A nightly full reindex into a new index, then an atomic alias swap, repairs any drift.
- **Visibility:** private records are filtered with a security filter at query time, which the API applies, never the client.
- **Degradation:** if search is down, the UI shows "search unavailable" while browsing by tag still works through Postgres.

## Trade-offs & alternatives
- An extra system to run vs much better relevance and features. We'll keep Postgres FTS as a fallback.
- Eventual consistency of a few seconds between a save and it becoming searchable.
- Hydrating from the DB/cache rather than storing full documents in the index keeps a single source of truth.
