---
slug: "sd-q-case-booking"
title: "Case Study: No Double Bookings"
type: "quiz"
xp: 15
questions: [{"prompt": "Why does \"check if free, then insert\" fail under concurrency?", "options": ["It does not", "Two requests can both see the slot as free before either inserts", "SELECT is slow"], "answer": 1}, {"prompt": "Fixed 30-minute slots. The simplest bulletproof protection?", "options": ["A JavaScript lock", "A unique constraint on (resource_id, slot_start)", "A cron job"], "answer": 1}, {"prompt": "Bookings have arbitrary start and end times. Which Postgres feature prevents overlaps?", "options": ["A CHECK constraint", "An exclusion constraint on a time range with &&", "A foreign key"], "answer": 1}, {"prompt": "What should the API return when the constraint rejects a booking?", "options": ["500", "409 Conflict with a friendly \"just taken\" message", "200"], "answer": 1}, {"prompt": "Why use temporary holds during checkout?", "options": ["To speed up payment", "To reserve the slot while the user pays, so it does not disappear at the last step, expiring if they abandon", "For analytics"], "answer": 1}]
---
# Case Study: No Double Bookings

**Problem**: a booking app (salons, tennis courts, meeting rooms) must never give the same slot to two people, even when they click "Book" at the same millisecond.

**The naive version is racy**:
```
1. SELECT ... WHERE slot = X          → free
2. INSERT booking (slot = X)          ← two requests can both pass step 1
```

**Solutions**, from simplest:
1. **A unique constraint** on `(resource_id, slot_start)`. The second insert fails with a unique violation, which you turn into "sorry, just taken" (409). It's simple and bulletproof for fixed slots.
2. **An exclusion constraint** (Postgres `EXCLUDE USING gist (resource_id WITH =, tstzrange(start, end) WITH &&)`) for **variable-length** bookings that mustn't overlap.
3. **Holds**: when a user starts checkout, insert a `hold` row with an `expires_at` (like 10 minutes) under the same constraint. Expired holds are cleaned up by a job (or ignored by the constraint check through status).
4. **Row locks** (`SELECT ... FOR UPDATE`) on a resource row inside a transaction. That works, but it serialises everything for that resource.

**Lesson**: push correctness down to the **database constraints**. Application checks alone lose races.
