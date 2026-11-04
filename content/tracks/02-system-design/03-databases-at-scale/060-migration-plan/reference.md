# Migration plan: todo priority enum + due_date

## Current state
`todos.priority TEXT` contains free text across 20M rows. There's no due date. 4 API instances deploy one at a time, so during a deploy, old and new code run side by side.

## Steps
1. **Migration A (expand):** add `priority_level` (enum `low|medium|high`, nullable) and `due_date DATE` (nullable). Both are metadata-only changes, so they're instant.
2. **Deploy 1:** code writes **both** `priority` and `priority_level` (mapping input through the rules below), and still reads `priority`. New todos get `due_date` when provided.
3. **Backfill job:** fill `priority_level` for old rows, and `due_date` = `created_at + 14 days` (the product-approved default), in batches.
4. **Deploy 2:** read `priority_level`, still write both (so rolling back to Deploy 1 stays safe).
5. **Migration B:** after verifying zero nulls: `ALTER COLUMN priority_level SET NOT NULL`, `due_date SET NOT NULL`. Add a `CHECK` with `NOT VALID`, then `VALIDATE CONSTRAINT`, to avoid a long lock.
6. **Deploy 3:** stop writing `priority`.
7. **Migration C (contract), a week later:** drop `priority`.

## Data cleanup rules
Lowercase and trim, then map: `high|urgent|asap|p1` → high, `low|someday|p3` → low, and everything else (including `"urgent!!"` after stripping punctuation → urgent → high) → medium. Unmapped originals are logged to an audit table, so product can review them.

## Backfill strategy
Process 10k rows per batch by primary key range (`WHERE id > $last ORDER BY id LIMIT 10000`), each batch in its own short transaction, with a 100 ms pause. Pause automatically if replica lag exceeds 5 s or DB CPU exceeds 70%. The job is idempotent: it only touches rows `WHERE priority_level IS NULL`.

## Rollback plan
Steps 1–4 are reversible by redeploying the previous version (both columns stay populated). Migration B can be undone by dropping the constraints. Only step 7 is irreversible, so take a backup first and wait a week after Deploy 3.

## Verification
- After the backfill: `SELECT count(*) FROM todos WHERE priority_level IS NULL OR due_date IS NULL` = 0.
- Distribution check: compare the counts per mapped level with a sample of originals.
- Dashboards: error rate and p95 latency stay flat during each deploy, lock waits stay < 1 s.
